import { Manageable } from './manageable.model';

export interface Deliverable extends Manageable {
  manageableType: 'deliverable';
  deliveryDate?: number;
}
