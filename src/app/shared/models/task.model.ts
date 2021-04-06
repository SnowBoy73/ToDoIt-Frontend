export interface TaskModel {
  id: number;
  description: string;
  assigneeId: number;
  dueDate: string;  // Date??
  isCompleted: boolean;
}
