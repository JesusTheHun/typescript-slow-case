import { GetManageableType, Manageable, ManageableType } from '../models/manageable.model';
import manageableActions, { ManageableActions } from './index';

export type ActionKind<M extends Manageable> = keyof ManageableActions<M>;
export type RequestActionCreator<M extends Manageable, K extends ActionKind<M>> = ManageableActions<M>[K]['request'];
export type RequestActionCreatorPayload<M extends Manageable, K extends ActionKind<M>> = Parameters<RequestActionCreator<M, K>>[0];
export type RequestAction<M extends Manageable, K extends ActionKind<M>> = ReturnType<RequestActionCreator<M, K>>;

export function getManageableAction<
  T extends ManageableType,
  M extends GetManageableType<T>,
  K extends ActionKind<M>,
  P extends RequestActionCreatorPayload<M, K>
>
(manageableType: T, kind: K, payload: P): RequestAction<M, K> {
  const actions = manageableActions[manageableType];
  const actionWorkflow = actions[kind];
  const requestActionCreator = actionWorkflow['request'];
  const action =  requestActionCreator(payload);

  return action;
}
