import { ActionCreator, PayloadActionCreator, TypeConstant } from 'typesafe-actions';
import { Optional } from 'utility-types';
import {ManageableActions} from "./actions";

export type ActionKind<M extends Manageable> = keyof ManageableActions<M>;
export type ActionRequestCreatorType<M extends Manageable, K extends ActionKind<M>> = ManageableActions<M>[K]['request'];
export type ActionRequestType<M extends Manageable, K extends ActionKind<M>> = ReturnType<ActionRequestCreatorType<M, K>>;
export type ActionRequestPayloadType<M extends Manageable, K extends ActionKind<M>> = Parameters<ActionRequestCreatorType<M, K>>[0];

import { Control } from './models/control.model';
import { Task } from './models/task.model';
import { Budget } from './models/budget.model';
import { Deliverable } from './models/deliverable.model';
import { Document } from './models/document.model';
import { Issue } from './models/issue.model';
import { Meeting } from './models/meeting.model';
import { Question } from './models/question.model';
import { Requirement } from './models/requirement.model';

export type ManageableType =
    'task' |
    'budget' |
    'control' |
    'deliverable' |
    'issue' |
    'meeting' |
    'question' |
    'requirement' |
    'document'
    ;

export interface Manageable {
    manageableType: ManageableType;
    manageableStatusId: string;
    description?: string;
    projectId: string;
}

export type PartialManageable<M extends Manageable> = Partial<M> & {
    manageableType: ManageableType;
}

export type GetManageableType<T extends ManageableType> =
    T  extends 'budget' ? Budget :
    T  extends 'control' ? Control :
    T  extends 'deliverable' ? Deliverable :
    T  extends 'document' ? Document :
    T  extends 'issue' ? Issue :
    T  extends 'meeting' ? Meeting :
    T  extends 'question' ? Question :
    T  extends 'requirement' ? Requirement :
    T  extends 'task' ? Task :
never;

export type FetchPayload<T> = string;
export type DeletePayload = string;

type PaginationLimit = {
    offset?: number;
    limit: number;
}

type PaginationSort<T> = {
    sort: { [prop in keyof T]?: 'asc' | 'desc' };
}

export type Filter<T> =
    T extends string ? T :
        T extends number ? Optional<{
                eq: number;
                gte: number;
                gt: number;
                lt: number;
                lte: number;
            }> :
            T extends Moment ? Optional<{
                    day: Moment;
                    month: Moment;
                    year: Moment;
                    before: Moment;
                    after: Moment;
                }> :
                T
    ;

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

export type CrudActionsType<T extends BaseModel> = {
    fetch: FetchActionType<T>;
    fetchList: FetchListActionType<T>;
    fetchListWithLinks: FetchListActionType<T>;
    create: CreateActionType<T>;
    update: UpdateActionType<T>;
    delete: DeleteActionType<T>;
};
