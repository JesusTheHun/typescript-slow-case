import { Manageable } from './manageable.model';

export interface Question extends Manageable {
  manageableType: 'question';
  answer?: string;
}
