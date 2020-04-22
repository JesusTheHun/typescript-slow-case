import { Manageable } from './manageable.model';

export interface Requirement extends Manageable {
  manageableType: 'requirement';
}
