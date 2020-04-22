import budget from './budget';
import control from './control';
import deliverable from './deliverable';
import document from './document';
import issue from './issue';
import meeting from './meeting';
import task from './task';
import question from './question';
import requirement from './requirement';
import { GetManageableType, Manageable, ManageableType } from '../models/manageable.model';
import {CrudActionsType, FetchListActionType} from '../types';

export type ManageableActions<M extends Manageable> = CrudActionsType<M> & {
  fetchListWithLinks: FetchListActionType<M>;
};

const manageableActions: { [key in ManageableType]: ManageableActions<GetManageableType<key>> } = {
  budget,
  deliverable,
  document,
  issue,
  meeting,
  question,
  requirement,
  control,
  task
};

export default manageableActions;

