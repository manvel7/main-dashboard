import React from 'react';
import {
  useSortable,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Typography, Paper } from '@mui/material';
import { Column as ColumnType, Task as TaskType } from '../model/types';
import { Task } from './Task';
import { DRAG_TYPES } from '../constants';

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
}

export const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: DRAG_TYPES.COLUMN,
      column,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  // Sort tasks according to column.taskIds order
  const sortedTasks = React.useMemo(() => {
    return column.taskIds
      .map((taskId) => tasks.find((task) => task.id === taskId))
      .filter((task): task is TaskType => task !== undefined);
  }, [column.taskIds, tasks]);

  const taskIds = sortedTasks.map((task) => task.id);

  return (
    <Paper
      ref={setNodeRef}
      style={style}
      elevation={3}
      sx={{
        width: 300,
        minHeight: 400,
        p: 2,
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        {...attributes}
        {...listeners}
        sx={{
          mb: 2,
          p: 1,
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          borderRadius: 1,
          cursor: 'grab',
          '&:active': {
            cursor: 'grabbing',
          },
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {column.title}
        </Typography>
        <Typography variant="caption">
          {tasks.length} task{tasks.length !== 1 ? 's' : ''}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        <SortableContext
          items={taskIds}
          strategy={verticalListSortingStrategy}
        >
          {sortedTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </SortableContext>
      </Box>
    </Paper>
  );
};

