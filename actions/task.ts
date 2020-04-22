import { createAsyncAction } from 'typesafe-actions';
import { ManageableActions } from './index';
import { DeletePayload, FetchListPayload, FetchPayload } from '../types';
import { Task } from '../models/task.model';

export const fetchTaskAsync = createAsyncAction(
  'FETCH_TASK_REQUEST',
  'FETCH_TASK_SUCCESS',
  'FETCH_TASK_FAILURE'
)<FetchPayload<Task>, Task, string>();

export const fetchTaskListAsync = createAsyncAction(
  'FETCH_TASK_LIST_REQUEST',
  'FETCH_TASK_LIST_SUCCESS',
  'FETCH_TASK_LIST_FAILURE'
)<FetchListPayload<Task>, Task[], string>();

export const fetchTaskListWithLinksAsync = createAsyncAction(
  'FETCH_TASK_LIST_WITH_LINKS_REQUEST',
  'FETCH_TASK_LIST_WITH_LINKS_SUCCESS',
  'FETCH_TASK_LIST_WITH_LINKS_FAILURE'
)<FetchListPayload<Task>, Task[], string>();

export const createTaskAsync = createAsyncAction(
  'CREATE_TASK_REQUEST',
  'CREATE_TASK_SUCCESS',
  'CREATE_TASK_FAILURE'
)<Task, Task, string>();

export const updateTaskAsync = createAsyncAction(
  'UPDATE_TASK_REQUEST',
  'UPDATE_TASK_SUCCESS',
  'UPDATE_TASK_FAILURE'
)<Task, Task, string>();

export const deleteTaskAsync = createAsyncAction(
  'DELETE_TASK_REQUEST',
  'DELETE_TASK_SUCCESS',
  'DELETE_TASK_FAILURE'
)<DeletePayload, undefined, string>();

const actions: ManageableActions<Task> = {
  fetch: fetchTaskAsync,
  fetchList: fetchTaskListAsync,
  fetchListWithLinks: fetchTaskListWithLinksAsync,
  create: createTaskAsync,
  update: updateTaskAsync,
  delete: deleteTaskAsync,
};

export default actions;
