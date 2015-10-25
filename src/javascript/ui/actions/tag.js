import * as types from '../constants/action-types';

export function detailsTag(id) {
  return {
    type: types.ADD_TODO,
    id: id
  };
}
