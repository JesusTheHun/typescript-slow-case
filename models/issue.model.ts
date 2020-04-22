import { Manageable } from './manageable.model';

export interface Issue extends Manageable {
  manageableType: 'issue';
}
