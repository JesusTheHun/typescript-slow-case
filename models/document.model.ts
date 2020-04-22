import { Manageable } from './manageable.model';

export interface Document extends Manageable {
  manageableType: 'document';
  filename?: string;
  filesize?: string;
  mediaType?: string;
}
