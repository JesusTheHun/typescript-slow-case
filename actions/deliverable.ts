import { createAsyncAction} from 'typesafe-actions';
import { ManageableActions } from './index';
import { Deliverable } from '../models/deliverable.model';
import { DeletePayload, FetchListPayload, FetchPayload } from '../types';

export const fetchDeliverableAsync = createAsyncAction(
  'FETCH_DELIVERABLE_REQUEST',
  'FETCH_DELIVERABLE_SUCCESS',
  'FETCH_DELIVERABLE_FAILURE'
)<FetchPayload<Deliverable>, Deliverable, string>();

export const fetchDeliverableListAsync = createAsyncAction(
  'FETCH_DELIVERABLE_LIST_REQUEST',
  'FETCH_DELIVERABLE_LIST_SUCCESS',
  'FETCH_DELIVERABLE_LIST_FAILURE'
)<FetchListPayload<Deliverable>, Deliverable[], string>();

export const fetchDeliverableListWithLinksAsync = createAsyncAction(
  'FETCH_DELIVERABLE_LIST_WITH_LINKS_REQUEST',
  'FETCH_DELIVERABLE_LIST_WITH_LINKS_SUCCESS',
  'FETCH_DELIVERABLE_LIST_WITH_LINKS_FAILURE'
)<FetchListPayload<Deliverable>, Deliverable[], string>();

export const createDeliverableAsync = createAsyncAction(
  'CREATE_DELIVERABLE_REQUEST',
  'CREATE_DELIVERABLE_SUCCESS',
  'CREATE_DELIVERABLE_FAILURE'
)<Deliverable, Deliverable, string>();

export const updateDeliverableAsync = createAsyncAction(
  'UPDATE_DELIVERABLE_REQUEST',
  'UPDATE_DELIVERABLE_SUCCESS',
  'UPDATE_DELIVERABLE_FAILURE'
)<Deliverable, Deliverable, string>();

export const deleteDeliverableAsync = createAsyncAction(
  'DELETE_DELIVERABLE_REQUEST',
  'DELETE_DELIVERABLE_SUCCESS',
  'DELETE_DELIVERABLE_FAILURE'
)<DeletePayload, undefined, string, string>();

const actions: ManageableActions<Deliverable> = {
  fetch: fetchDeliverableAsync,
  fetchList: fetchDeliverableListAsync,
  fetchListWithLinks: fetchDeliverableListWithLinksAsync,
  create: createDeliverableAsync,
  update: updateDeliverableAsync,
  delete: deleteDeliverableAsync,
};

export default actions;
