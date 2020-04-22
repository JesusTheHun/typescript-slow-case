import { createAsyncAction} from 'typesafe-actions';
import { ManageableActions } from './index';
import { Document } from '../models/document.model';
import { DeletePayload, FetchListPayload, FetchPayload } from '../types';

export const fetchDocumentAsync = createAsyncAction(
  'FETCH_DOCUMENT_REQUEST',
  'FETCH_DOCUMENT_SUCCESS',
  'FETCH_DOCUMENT_FAILURE'
)<FetchPayload<Document>, Document, string>();

export const fetchDocumentListAsync = createAsyncAction(
  'FETCH_DOCUMENT_LIST_REQUEST',
  'FETCH_DOCUMENT_LIST_SUCCESS',
  'FETCH_DOCUMENT_LIST_FAILURE'
)<FetchListPayload<Document>, Document[], string>();

export const fetchDocumentListWithLinksAsync = createAsyncAction(
  'FETCH_DOCUMENT_LIST_WITH_LINKS_REQUEST',
  'FETCH_DOCUMENT_LIST_WITH_LINKS_SUCCESS',
  'FETCH_DOCUMENT_LIST_WITH_LINKS_FAILURE'
)<FetchListPayload<Document>, Document[], string>();

export const createDocumentAsync = createAsyncAction(
  'CREATE_DOCUMENT_REQUEST',
  'CREATE_DOCUMENT_SUCCESS',
  'CREATE_DOCUMENT_FAILURE'
)<Document, Document, string>();

export const updateDocumentAsync = createAsyncAction(
  'UPDATE_DOCUMENT_REQUEST',
  'UPDATE_DOCUMENT_SUCCESS',
  'UPDATE_DOCUMENT_FAILURE'
)<Document, Document, string>();

export const deleteDocumentAsync = createAsyncAction(
  'DELETE_DOCUMENT_REQUEST',
  'DELETE_DOCUMENT_SUCCESS',
  'DELETE_DOCUMENT_FAILURE'
)<DeletePayload, undefined, string, string>();

const actions: ManageableActions<Document> = {
  fetch: fetchDocumentAsync,
  fetchList: fetchDocumentListAsync,
  fetchListWithLinks: fetchDocumentListWithLinksAsync,
  create: createDocumentAsync,
  update: updateDocumentAsync,
  delete: deleteDocumentAsync,
};

export default actions;
