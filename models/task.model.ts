import { Manageable } from './manageable.model';

export interface Task extends Manageable {
  manageableType: 'task';
  scheduledStart?: number;
  scheduledEnd?: number;
}
