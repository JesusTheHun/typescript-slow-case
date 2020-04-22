import { Control } from './control.model';
import { Task } from './task.model';
import { Budget } from './budget.model';
import { Deliverable } from './deliverable.model';
import { Document } from './document.model';
import { Issue } from './issue.model';
import { Meeting } from './meeting.model';
import { Question } from './question.model';
import { Requirement } from './requirement.model';

export type ManageableType =
  'task' |
  'budget' |
  'control' |
  'deliverable' |
  'issue' |
  'meeting' |
  'question' |
  'requirement' |
  'document'
;

export interface Manageable {
  manageableType: ManageableType;
  manageableStatusId: string;
  description?: string;
  projectId: string;
}

export type PartialManageable<M extends Manageable> = Partial<M> & {
  manageableType: ManageableType;
}

export type GetManageableType<T extends ManageableType> =
  T  extends 'budget' ? Budget :
  T  extends 'control' ? Control :
  T  extends 'deliverable' ? Deliverable :
  T  extends 'document' ? Document :
  T  extends 'issue' ? Issue :
  T  extends 'meeting' ? Meeting :
  T  extends 'question' ? Question :
  T  extends 'requirement' ? Requirement :
  T  extends 'task' ? Task :
never;
