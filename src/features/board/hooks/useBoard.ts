import { useCallback, useState } from 'react';
import { useSensor, useSensors, KeyboardSensor, PointerSensor } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { DragStartEvent, DragEndEvent, DragOverEvent } from '@dnd-kit/core';
import { useColumns } from './useColumns';
import { useTasks } from './useTasks';
import { DRAG_TYPES } from '../constants';
import { Task as TaskType, Column as ColumnType } from '../model/types';

export const useBoard = () => {
  const columnsHook = useColumns();
  const tasksHook = useTasks();

  const { columns, handleReorderColumns } = columnsHook;
  const { tasks, handleReorderTasksInColumn, handleMoveTask, getTasksByColumn } = tasksHook;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [activeTask, setActiveTask] = useState<TaskType | null>(null);
  const [activeColumn, setActiveColumn] = useState<ColumnType | null>(null);

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const { active } = event;
    const task = tasks.find((t) => t.id === active.id);
    const column = columns.find((c) => c.id === active.id);
    if (task) {
      setActiveTask(task);
    }
    if (column) {
      setActiveColumn(column);
    }
  }, [tasks, columns]);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);
    setActiveColumn(null);

    if (!over) return;

    // Handle column reordering
    if (active.data.current?.type === DRAG_TYPES.COLUMN && over.data.current?.type === DRAG_TYPES.COLUMN) {
      const oldIndex = columns.findIndex((col) => col.id === active.id);
      const newIndex = columns.findIndex((col) => col.id === over.id);
      if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
        handleReorderColumns(oldIndex, newIndex);
      }
      return;
    }

    // Handle task movement
    if (active.data.current?.type === DRAG_TYPES.TASK) {
      const taskId = active.id as string;
      const task = tasks.find((t) => t.id === taskId);
      if (!task) return;

      const activeColumnId = task.columnId;

      // Determine destination column
      let overColumnId: string | undefined;
      if (over.data.current?.type === DRAG_TYPES.COLUMN) {
        overColumnId = over.id as string;
      } else if (over.data.current?.type === DRAG_TYPES.TASK) {
        const overTask = tasks.find((t) => t.id === over.id);
        overColumnId = overTask?.columnId;
      } else {
        // If dropping on empty space in a column
        overColumnId = columns.find((c) => c.id === over.id)?.id;
      }

      if (!overColumnId) return;

      const sourceColumn = columns.find((col) => col.id === activeColumnId);
      const destColumn = columns.find((col) => col.id === overColumnId);

      if (!sourceColumn || !destColumn) return;

      const sourceIndex = sourceColumn.taskIds.findIndex((id) => id === taskId);

      // Moving within the same column
      if (activeColumnId === overColumnId) {
        const overTask = tasks.find((t) => t.id === over.id);
        if (overTask) {
          const destinationIndex = sourceColumn.taskIds.findIndex((id) => id === over.id);
          if (sourceIndex !== -1 && destinationIndex !== -1 && sourceIndex !== destinationIndex) {
            handleReorderTasksInColumn(activeColumnId, sourceIndex, destinationIndex);
          }
        }
      } else {
        // Moving between columns
        const destTaskIds = destColumn.taskIds;
        const overTask = tasks.find((t) => t.id === over.id);
        let destinationIndex = destTaskIds.length;

        if (overTask) {
          destinationIndex = destTaskIds.findIndex((id) => id === over.id);
        }

        if (sourceIndex !== -1) {
          handleMoveTask(
            taskId,
            activeColumnId,
            overColumnId,
            sourceIndex,
            destinationIndex
          );
        }
      }
    }
  }, [columns, tasks, handleReorderColumns, handleReorderTasksInColumn, handleMoveTask]);

  const handleDragOver = useCallback((event: DragOverEvent) => {
    // Handle drag over logic if needed
  }, []);

  return {
    columns: columnsHook,
    tasks: tasksHook,
    sensors,
    activeTask,
    activeColumn,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
  };
};

