import { createAsyncAction} from 'typesafe-actions';
import { ManageableActions } from './index';
import { Question } from '../models/question.model';
import { DeletePayload, FetchListPayload, FetchPayload } from '../../app/actions/types';

export const fetchQuestionAsync = createAsyncAction(
  'FETCH_QUESTION_REQUEST',
  'FETCH_QUESTION_SUCCESS',
  'FETCH_QUESTION_FAILURE'
)<FetchPayload<Question>, Question, string>();

export const fetchQuestionListAsync = createAsyncAction(
  'FETCH_QUESTION_LIST_REQUEST',
  'FETCH_QUESTION_LIST_SUCCESS',
  'FETCH_QUESTION_LIST_FAILURE'
)<FetchListPayload<Question>, Question[], string>();

export const fetchQuestionListWithLinksAsync = createAsyncAction(
  'FETCH_QUESTION_LIST_WITH_LINKS_REQUEST',
  'FETCH_QUESTION_LIST_WITH_LINKS_SUCCESS',
  'FETCH_QUESTION_LIST_WITH_LINKS_FAILURE'
)<FetchListPayload<Question>, Question[], string>();

export const createQuestionAsync = createAsyncAction(
  'CREATE_QUESTION_REQUEST',
  'CREATE_QUESTION_SUCCESS',
  'CREATE_QUESTION_FAILURE'
)<Question, Question, string>();

export const updateQuestionAsync = createAsyncAction(
  'UPDATE_QUESTION_REQUEST',
  'UPDATE_QUESTION_SUCCESS',
  'UPDATE_QUESTION_FAILURE'
)<Question, Question, string>();

export const deleteQuestionAsync = createAsyncAction(
  'DELETE_QUESTION_REQUEST',
  'DELETE_QUESTION_SUCCESS',
  'DELETE_QUESTION_FAILURE'
)<DeletePayload, undefined, string, string>();

const actions: ManageableActions<Question> = {
  fetch: fetchQuestionAsync,
  fetchList: fetchQuestionListAsync,
  fetchListWithLinks: fetchQuestionListWithLinksAsync,
  create: createQuestionAsync,
  update: updateQuestionAsync,
  delete: deleteQuestionAsync,
};

export default actions;
