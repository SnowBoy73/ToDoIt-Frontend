import {AssigneeModel} from './assignee.model';

export interface TaskModel {
  id: number;
  description: string;
  assignee: AssigneeModel;
  dueDate: string;
  isCompleted: boolean;
}
