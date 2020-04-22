import { Manageable } from './manageable.model';

export interface Budget extends Manageable {
  manageableType: 'budget';
  amount?: number;
}
