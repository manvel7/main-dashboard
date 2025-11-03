import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Paper, Typography, Box } from '@mui/material';
import { Task as TaskType } from '../model/types';
import { DRAG_TYPES } from '../constants';

interface TaskProps {
  task: TaskType;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: DRAG_TYPES.TASK,
      task,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
  };

  return (
    <Paper
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      elevation={2}
      sx={{
        p: 2,
        mb: 1,
        '&:hover': {
          boxShadow: 4,
        },
      }}
    >
      <Typography variant="subtitle1" fontWeight="medium">
        {task.title}
      </Typography>
      {task.description && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {task.description}
        </Typography>
      )}
    </Paper>
  );
};

