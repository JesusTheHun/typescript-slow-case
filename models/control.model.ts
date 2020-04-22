import { Manageable } from './manageable.model';

export interface Control extends Manageable {
    manageableType: 'control';
}
