import { createAsyncAction} from 'typesafe-actions';
import { ManageableActions } from './index';
import { Control } from '../models/control.model';
import { DeletePayload, FetchListPayload, FetchPayload } from '../types';

export const fetchControlAsync = createAsyncAction(
  'FETCH_CONTROL_REQUEST',
  'FETCH_CONTROL_SUCCESS',
  'FETCH_CONTROL_FAILURE'
)<FetchPayload<Control>, Control, string>();

export const fetchControlListAsync = createAsyncAction(
  'FETCH_CONTROL_LIST_REQUEST',
  'FETCH_CONTROL_LIST_SUCCESS',
  'FETCH_CONTROL_LIST_FAILURE'
)<FetchListPayload<Control>, Control[], string>();

export const fetchControlListWithLinksAsync = createAsyncAction(
  'FETCH_CONTROL_LIST_WITH_LINKS_REQUEST',
  'FETCH_CONTROL_LIST_WITH_LINKS_SUCCESS',
  'FETCH_CONTROL_LIST_WITH_LINKS_FAILURE'
)<FetchListPayload<Control>, Control[], string>();

export const createControlAsync = createAsyncAction(
  'CREATE_CONTROL_REQUEST',
  'CREATE_CONTROL_SUCCESS',
  'CREATE_CONTROL_FAILURE'
)<Control, Control, string>();

export const updateControlAsync = createAsyncAction(
  'UPDATE_CONTROL_REQUEST',
  'UPDATE_CONTROL_SUCCESS',
  'UPDATE_CONTROL_FAILURE'
)<Control, Control, string>();

export const deleteControlAsync = createAsyncAction(
  'DELETE_CONTROL_REQUEST',
  'DELETE_CONTROL_SUCCESS',
  'DELETE_CONTROL_FAILURE'
)<DeletePayload, undefined, string, string>();

const actions: ManageableActions<Control> = {
  fetch: fetchControlAsync,
  fetchList: fetchControlListAsync,
  fetchListWithLinks: fetchControlListWithLinksAsync,
  create: createControlAsync,
  update: updateControlAsync,
  delete: deleteControlAsync,
};

export default actions;
