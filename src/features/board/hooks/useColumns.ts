import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import {
  reorderColumns,
  addColumn,
  updateColumn,
  removeColumn,
  Column,
} from '../model';
import { BoardState } from '../model/types';

export const useColumns = () => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector(
    (state: { board: BoardState }) => state.board.columns
  );

  const handleReorderColumns = useCallback(
    (sourceIndex: number, destinationIndex: number) => {
      dispatch(reorderColumns({ sourceIndex, destinationIndex }));
    },
    []
  );

  const handleAddColumn = useCallback(
    (column: Column) => {
      dispatch(addColumn(column));
    },
    []
  );

  const handleUpdateColumn = useCallback(
    (id: string, updates: Partial<Column>) => {
      dispatch(updateColumn({ id, updates }));
    },
    []
  );

  const handleRemoveColumn = useCallback(
    (id: string) => {
      dispatch(removeColumn(id));
    },
    []
  );

  const getColumnById = useCallback(
    (id: string) => {
      return columns.find((col) => col.id === id);
    },
    [columns]
  );

  return {
    columns,
    handleReorderColumns,
    handleAddColumn,
    handleUpdateColumn,
    handleRemoveColumn,
    getColumnById,
  };
};

