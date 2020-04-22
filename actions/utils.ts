import { GetManageableType, Manageable, ManageableType } from '../models/manageable.model';
import manageableActions, { ManageableActions } from './index';

export type ActionKind<M extends Manageable> = keyof ManageableActions<M>;
export type ActionRequestCreatorType<M extends Manageable, K extends ActionKind<M>> = ManageableActions<M>[K]['request'];
export type ActionRequestType<M extends Manageable, K extends ActionKind<M>> = ReturnType<ActionRequestCreatorType<M, K>>;
export type ActionRequestPayloadType<M extends Manageable, K extends ActionKind<M>> = Parameters<ActionRequestCreatorType<M, K>>[0];

export function getManageableAction<
  T extends ManageableType,
  M extends GetManageableType<T>,
  K extends ActionKind<M>,
  P extends ActionRequestPayloadType<M, K>
>
(manageableType: T, kind: K, payload: P): ActionRequestType<M, K> {
  const actions = manageableActions[manageableType];
  const action = actions[kind];
  const actionRequest = action['request'];
  return actionRequest(payload);
}
