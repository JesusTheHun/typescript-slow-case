import { createAsyncAction} from 'typesafe-actions';
import { ManageableActions } from './index';
import { Requirement } from '../models/requirement.model';
import { DeletePayload, FetchListPayload, FetchPayload } from '../types';

export const fetchRequirementAsync = createAsyncAction(
  'FETCH_REQUIREMENT_REQUEST',
  'FETCH_REQUIREMENT_SUCCESS',
  'FETCH_REQUIREMENT_FAILURE'
)<FetchPayload<Requirement>, Requirement, string>();

export const fetchRequirementListAsync = createAsyncAction(
  'FETCH_REQUIREMENT_LIST_REQUEST',
  'FETCH_REQUIREMENT_LIST_SUCCESS',
  'FETCH_REQUIREMENT_LIST_FAILURE'
)<FetchListPayload<Requirement>, Requirement[], string>();

export const fetchRequirementListWithLinksAsync = createAsyncAction(
  'FETCH_REQUIREMENT_LIST_WITH_LINKS_REQUEST',
  'FETCH_REQUIREMENT_LIST_WITH_LINKS_SUCCESS',
  'FETCH_REQUIREMENT_LIST_WITH_LINKS_FAILURE'
)<FetchListPayload<Requirement>, Requirement[], string>();

export const createRequirementAsync = createAsyncAction(
  'CREATE_REQUIREMENT_REQUEST',
  'CREATE_REQUIREMENT_SUCCESS',
  'CREATE_REQUIREMENT_FAILURE'
)<Requirement, Requirement, string>();

export const updateRequirementAsync = createAsyncAction(
  'UPDATE_REQUIREMENT_REQUEST',
  'UPDATE_REQUIREMENT_SUCCESS',
  'UPDATE_REQUIREMENT_FAILURE'
)<Requirement, Requirement, string>();

export const deleteRequirementAsync = createAsyncAction(
  'DELETE_REQUIREMENT_REQUEST',
  'DELETE_REQUIREMENT_SUCCESS',
  'DELETE_REQUIREMENT_FAILURE'
)<DeletePayload, undefined, string, string>();

const actions: ManageableActions<Requirement> = {
  fetch: fetchRequirementAsync,
  fetchList: fetchRequirementListAsync,
  fetchListWithLinks: fetchRequirementListWithLinksAsync,
  create: createRequirementAsync,
  update: updateRequirementAsync,
  delete: deleteRequirementAsync,
};

export default actions;
