import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import {
  addTask,
  updateTask,
  removeTask,
  reorderTasksInColumn,
  moveTask,
  Task,
} from '../model';
import { BoardState } from '../model/types';

export const useTasks = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state: { board: BoardState }) => state.board.tasks);

  const handleAddTask = useCallback(
    (task: Task) => {
      dispatch(addTask(task));
    },
    []
  );

  const handleUpdateTask = useCallback(
    (id: string, updates: Partial<Task>) => {
      dispatch(updateTask({ id, updates }));
    },
    []
  );

  const handleRemoveTask = useCallback(
    (id: string) => {
      dispatch(removeTask(id));
    },
    []
  );

  const handleReorderTasksInColumn = useCallback(
    (
      columnId: string,
      sourceIndex: number,
      destinationIndex: number
    ) => {
      dispatch(reorderTasksInColumn({ columnId, sourceIndex, destinationIndex }));
    },
    []
  );

  const handleMoveTask = useCallback(
    (
      taskId: string,
      sourceColumnId: string,
      destinationColumnId: string,
      sourceIndex: number,
      destinationIndex: number
    ) => {
      dispatch(
        moveTask({
          taskId,
          sourceColumnId,
          destinationColumnId,
          sourceIndex,
          destinationIndex,
        })
      );
    },
    []
  );

  const getTasksByColumn = useCallback(
    (columnId: string) => {
      return tasks.filter((task) => task.columnId === columnId);
    },
    [tasks]
  );

  return {
    tasks,
    handleAddTask,
    handleUpdateTask,
    handleRemoveTask,
    handleReorderTasksInColumn,
    handleMoveTask,
    getTasksByColumn,
  };
};

