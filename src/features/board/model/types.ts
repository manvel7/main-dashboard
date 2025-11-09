export interface Task {
  id: string;
  title: string;
  description?: string;
  columnId: string;
}

export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export interface BoardState {
  columns: Column[];
  tasks: Task[];
}




