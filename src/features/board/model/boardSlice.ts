import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardState, Column, Task } from './types';
import {
  COLUMN_NAMES,
  DEFAULT_COLUMN_IDS,
} from '../constants';

const createInitialColumns = (): Column[] => {
  return [
    {
      id: DEFAULT_COLUMN_IDS.TODO,
      title: COLUMN_NAMES.TODO,
      taskIds: ['task-1', 'task-2'],
    },
    {
      id: DEFAULT_COLUMN_IDS.IN_PROGRESS,
      title: COLUMN_NAMES.IN_PROGRESS,
      taskIds: [],
    },
    {
      id: DEFAULT_COLUMN_IDS.DONE,
      title: COLUMN_NAMES.DONE,
      taskIds: [],
    },
  ];
};

const createInitialTasks = (): Task[] => {
  return [
    {
      id: 'task-1',
      title: 'Sample Task 1',
      description: 'This is the first sample task',
      columnId: DEFAULT_COLUMN_IDS.TODO,
    },
    {
      id: 'task-2',
      title: 'Sample Task 2',
      description: 'This is the second sample task',
      columnId: DEFAULT_COLUMN_IDS.TODO,
    },
  ];
};

const initialState: BoardState = {
  columns: createInitialColumns(),
  tasks: createInitialTasks(),
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    reorderColumns: (
      state,
      action: PayloadAction<{ sourceIndex: number; destinationIndex: number }>
    ) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const [removed] = state.columns.splice(sourceIndex, 1);
      state.columns.splice(destinationIndex, 0, removed);
    },
    addColumn: (state, action: PayloadAction<Column>) => {
      state.columns.push(action.payload);
    },
    updateColumn: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Column> }>
    ) => {
      const column = state.columns.find((col) => col.id === action.payload.id);
      if (column) {
        Object.assign(column, action.payload.updates);
      }
    },
    removeColumn: (state, action: PayloadAction<string>) => {
      const columnId = action.payload;
      const column = state.columns.find((col) => col.id === columnId);
      if (column) {
        // Remove all tasks in this column
        state.tasks = state.tasks.filter(
          (task) => task.columnId !== columnId
        );
        // Remove column
        state.columns = state.columns.filter((col) => col.id !== columnId);
      }
    },
    reorderTasksInColumn: (
      state,
      action: PayloadAction<{
        columnId: string;
        sourceIndex: number;
        destinationIndex: number;
      }>
    ) => {
      const { columnId, sourceIndex, destinationIndex } = action.payload;
      const column = state.columns.find((col) => col.id === columnId);
      if (column) {
        const [removed] = column.taskIds.splice(sourceIndex, 1);
        column.taskIds.splice(destinationIndex, 0, removed);
      }
    },
    moveTask: (
      state,
      action: PayloadAction<{
        taskId: string;
        sourceColumnId: string;
        destinationColumnId: string;
        sourceIndex: number;
        destinationIndex: number;
      }>
    ) => {
      const {
        taskId,
        sourceColumnId,
        destinationColumnId,
        sourceIndex,
        destinationIndex,
      } = action.payload;

      // Update task columnId
      const task = state.tasks.find((t) => t.id === taskId);
      if (task) {
        task.columnId = destinationColumnId;
      }

      // Remove from source column
      const sourceColumn = state.columns.find((col) => col.id === sourceColumnId);
      if (sourceColumn) {
        sourceColumn.taskIds.splice(sourceIndex, 1);
      }

      // Add to destination column
      const destColumn = state.columns.find(
        (col) => col.id === destinationColumnId
      );
      if (destColumn) {
        destColumn.taskIds.splice(destinationIndex, 0, taskId);
      }
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      const column = state.columns.find(
        (col) => col.id === action.payload.columnId
      );
      if (column) {
        column.taskIds.push(action.payload.id);
      }
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Task> }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        Object.assign(task, action.payload.updates);
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const task = state.tasks.find((t) => t.id === taskId);
      if (task) {
        const column = state.columns.find((col) => col.id === task.columnId);
        if (column) {
          column.taskIds = column.taskIds.filter((id) => id !== taskId);
        }
        state.tasks = state.tasks.filter((t) => t.id !== taskId);
      }
    },
  },
});

export const {
  reorderColumns,
  addColumn,
  updateColumn,
  removeColumn,
  reorderTasksInColumn,
  moveTask,
  addTask,
  updateTask,
  removeTask,
} = boardSlice.actions;

export default boardSlice.reducer;

