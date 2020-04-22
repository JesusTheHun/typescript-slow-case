import { createAsyncAction} from 'typesafe-actions';
import { ManageableActions } from './index';
import { Issue } from '../models/issue.model';
import { DeletePayload, FetchListPayload, FetchPayload } from '../../app/actions/types';

export const fetchIssueAsync = createAsyncAction(
  'FETCH_ISSUE_REQUEST',
  'FETCH_ISSUE_SUCCESS',
  'FETCH_ISSUE_FAILURE'
)<FetchPayload<Issue>, Issue, string>();

export const fetchIssueListAsync = createAsyncAction(
  'FETCH_ISSUE_LIST_REQUEST',
  'FETCH_ISSUE_LIST_SUCCESS',
  'FETCH_ISSUE_LIST_FAILURE'
)<FetchListPayload<Issue>, Issue[], string>();

export const fetchIssueListWithLinksAsync = createAsyncAction(
  'FETCH_ISSUE_LIST_WITH_LINKS_REQUEST',
  'FETCH_ISSUE_LIST_WITH_LINKS_SUCCESS',
  'FETCH_ISSUE_LIST_WITH_LINKS_FAILURE'
)<FetchListPayload<Issue>, Issue[], string>();

export const createIssueAsync = createAsyncAction(
  'CREATE_ISSUE_REQUEST',
  'CREATE_ISSUE_SUCCESS',
  'CREATE_ISSUE_FAILURE'
)<Issue, Issue, string>();

export const updateIssueAsync = createAsyncAction(
  'UPDATE_ISSUE_REQUEST',
  'UPDATE_ISSUE_SUCCESS',
  'UPDATE_ISSUE_FAILURE'
)<Issue, Issue, string>();

export const deleteIssueAsync = createAsyncAction(
  'DELETE_ISSUE_REQUEST',
  'DELETE_ISSUE_SUCCESS',
  'DELETE_ISSUE_FAILURE'
)<DeletePayload, undefined, string, string>();

const actions: ManageableActions<Issue> = {
  fetch: fetchIssueAsync,
  fetchList: fetchIssueListAsync,
  fetchListWithLinks: fetchIssueListWithLinksAsync,
  create: createIssueAsync,
  update: updateIssueAsync,
  delete: deleteIssueAsync,
};

export default actions;
