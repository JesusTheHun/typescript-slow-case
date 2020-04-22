import { createAsyncAction} from 'typesafe-actions';
import { ManageableActions } from './index';
import { Budget } from '../models/budget.model';
import { DeletePayload, FetchListPayload, FetchPayload } from '../types';

export const fetchBudgetAsync = createAsyncAction(
  'FETCH_BUDGET_REQUEST',
  'FETCH_BUDGET_SUCCESS',
  'FETCH_BUDGET_FAILURE'
)<FetchPayload<Budget>, Budget, string>();

export const fetchBudgetListAsync = createAsyncAction(
  'FETCH_BUDGET_LIST_REQUEST',
  'FETCH_BUDGET_LIST_SUCCESS',
  'FETCH_BUDGET_LIST_FAILURE'
)<FetchListPayload<Budget>, Budget[], string>();

export const fetchBudgetListWithLinksAsync = createAsyncAction(
  'FETCH_BUDGET_LIST_WITH_LINKS_REQUEST',
  'FETCH_BUDGET_LIST_WITH_LINKS_SUCCESS',
  'FETCH_BUDGET_LIST_WITH_LINKS_FAILURE'
)<FetchListPayload<Budget>, Budget[], string>();

export const createBudgetAsync = createAsyncAction(
  'CREATE_BUDGET_REQUEST',
  'CREATE_BUDGET_SUCCESS',
  'CREATE_BUDGET_FAILURE'
)<Budget, Budget, string>();

export const updateBudgetAsync = createAsyncAction(
  'UPDATE_BUDGET_REQUEST',
  'UPDATE_BUDGET_SUCCESS',
  'UPDATE_BUDGET_FAILURE'
)<Budget, Budget, string>();

export const deleteBudgetAsync = createAsyncAction(
  'DELETE_BUDGET_REQUEST',
  'DELETE_BUDGET_SUCCESS',
  'DELETE_BUDGET_FAILURE'
)<DeletePayload, undefined, string, string>();

const actions: ManageableActions<Budget> = {
  fetch: fetchBudgetAsync,
  fetchList: fetchBudgetListAsync,
  fetchListWithLinks: fetchBudgetListWithLinksAsync,
  create: createBudgetAsync,
  update: updateBudgetAsync,
  delete: deleteBudgetAsync,
};

export default actions;
