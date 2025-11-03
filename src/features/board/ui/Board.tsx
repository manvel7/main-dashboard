import React from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
} from '@dnd-kit/core';
import { horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableContext } from '@dnd-kit/sortable';
import { Box, IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useBoard } from '../hooks';
import { Column } from './Column';
import { Task } from './Task';

export const Board: React.FC = () => {
  const {
    columns: columnsHook,
    tasks: tasksHook,
    sensors,
    activeTask,
    activeColumn,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
  } = useBoard();

  const { columns } = columnsHook;
  const { getTasksByColumn } = tasksHook;

  const columnIds = columns.map((col) => col.id);

  const handleAddColumn = () => {
    // UI only - no functionality yet as per requirements
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          p: 2,
          overflowX: 'auto',
          minHeight: 'calc(100vh - 200px)',
        }}
      >
        <SortableContext
          items={columnIds}
          strategy={horizontalListSortingStrategy}
        >
          {columns.map((column) => {
            const columnTasks = getTasksByColumn(column.id);
            return (
              <Column
                key={column.id}
                column={column}
                tasks={columnTasks}
              />
            );
          })}
        </SortableContext>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 300,
          }}
        >
          <IconButton
            onClick={handleAddColumn}
            sx={{
              width: 60,
              height: 60,
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <DragOverlay>
        {activeTask && <Task task={activeTask} />}
        {activeColumn && (
          <Box sx={{ width: 300 }}>
            <Column
              column={activeColumn}
              tasks={getTasksByColumn(activeColumn.id)}
            />
          </Box>
        )}
      </DragOverlay>
    </DndContext>
  );
};

