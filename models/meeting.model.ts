import { Manageable } from './manageable.model';

export interface Meeting extends Manageable {
  manageableType: 'meeting';
  datetime?: number;
  duration?: string;
}
