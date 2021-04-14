export interface TaskDto {
  id: number;
  description: string;
  assigneeId: number;
  dueDate: string;
  isCompleted: boolean;
}
