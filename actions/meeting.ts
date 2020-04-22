import { createAsyncAction} from 'typesafe-actions';
import { ManageableActions } from './index';
import { Meeting } from '../models/meeting.model';
import { DeletePayload, FetchListPayload, FetchPayload } from '../types';

export const fetchMeetingAsync = createAsyncAction(
  'FETCH_MEETING_REQUEST',
  'FETCH_MEETING_SUCCESS',
  'FETCH_MEETING_FAILURE'
)<FetchPayload<Meeting>, Meeting, string>();

export const fetchMeetingListAsync = createAsyncAction(
  'FETCH_MEETING_LIST_REQUEST',
  'FETCH_MEETING_LIST_SUCCESS',
  'FETCH_MEETING_LIST_FAILURE'
)<FetchListPayload<Meeting>, Meeting[], string>();

export const fetchMeetingListWithLinksAsync = createAsyncAction(
  'FETCH_MEETING_LIST_WITH_LINKS_REQUEST',
  'FETCH_MEETING_LIST_WITH_LINKS_SUCCESS',
  'FETCH_MEETING_LIST_WITH_LINKS_FAILURE'
)<FetchListPayload<Meeting>, Meeting[], string>();

export const createMeetingAsync = createAsyncAction(
  'CREATE_MEETING_REQUEST',
  'CREATE_MEETING_SUCCESS',
  'CREATE_MEETING_FAILURE'
)<Meeting, Meeting, string>();

export const updateMeetingAsync = createAsyncAction(
  'UPDATE_MEETING_REQUEST',
  'UPDATE_MEETING_SUCCESS',
  'UPDATE_MEETING_FAILURE'
)<Meeting, Meeting, string>();

export const deleteMeetingAsync = createAsyncAction(
  'DELETE_MEETING_REQUEST',
  'DELETE_MEETING_SUCCESS',
  'DELETE_MEETING_FAILURE'
)<DeletePayload, undefined, string, string>();

const actions: ManageableActions<Meeting> = {
  fetch: fetchMeetingAsync,
  fetchList: fetchMeetingListAsync,
  fetchListWithLinks: fetchMeetingListWithLinksAsync,
  create: createMeetingAsync,
  update: updateMeetingAsync,
  delete: deleteMeetingAsync,
};

export default actions;
