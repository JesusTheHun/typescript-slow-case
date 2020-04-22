import { ActionCreator, PayloadActionCreator, TypeConstant } from 'typesafe-actions';

import {ManageableActions} from "./actions";
import {Manageable} from "./models/manageable.model";

export type ActionKind<M extends Manageable> = keyof ManageableActions<M>;
export type ActionRequestCreatorType<M extends Manageable, K extends ActionKind<M>> = ManageableActions<M>[K]['request'];
export type ActionRequestType<M extends Manageable, K extends ActionKind<M>> = ReturnType<ActionRequestCreatorType<M, K>>;
export type ActionRequestPayloadType<M extends Manageable, K extends ActionKind<M>> = Parameters<ActionRequestCreatorType<M, K>>[0];

export type FetchPayload<T> = string;
export type DeletePayload = string;

type PaginationLimit = {
    offset?: number;
    limit: number;
}

type PaginationSort<T> = {
    sort: { [prop in keyof T]?: 'asc' | 'desc' };
}

export type FetchListFilterPayload<T> = {
    filter: { [P in keyof T]?: T[P]};
};

export type FetchListPaginationPayload<T> = PaginationLimit | PaginationSort<T> | undefined;

export type FetchListPayload<T> = FetchListPaginationPayload<T> | FetchListFilterPayload<T> | undefined;

export type FetchActionType<T> = {
    request: PayloadActionCreator<TypeConstant, FetchPayload<T>>;
    success: PayloadActionCreator<TypeConstant, T>;
    failure: PayloadActionCreator<TypeConstant, string>;
};

export type FetchListActionType<T> = {
    request: PayloadActionCreator<TypeConstant, FetchListPayload<T>>;
    success: PayloadActionCreator<TypeConstant, T[]>;
    failure: PayloadActionCreator<TypeConstant, string>;
};

export type CreateActionType<T> = {
    request: PayloadActionCreator<TypeConstant, T>;
    success: PayloadActionCreator<TypeConstant, T>;
    failure: PayloadActionCreator<TypeConstant, string>;
};

export type UpdateActionType<T> = {
    request: PayloadActionCreator<TypeConstant, T>;
    success: PayloadActionCreator<TypeConstant, T>;
    failure: PayloadActionCreator<TypeConstant, string>;
};

export type DeleteActionType<T> = {
    request: PayloadActionCreator<TypeConstant, DeletePayload>;
    success: ActionCreator;
    failure: PayloadActionCreator<TypeConstant, string>;
};

export type CrudActionsType<T> = {
    fetch: FetchActionType<T>;
    fetchList: FetchListActionType<T>;
    fetchListWithLinks: FetchListActionType<T>;
    create: CreateActionType<T>;
    update: UpdateActionType<T>;
    delete: DeleteActionType<T>;
};
