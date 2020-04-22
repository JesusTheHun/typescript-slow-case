import {getManageableAction} from "./actions/utils";


console.log(getManageableAction('task', 'fetchList', {
    limit: 10,
}));
