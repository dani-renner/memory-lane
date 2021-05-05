import * as c from './../actions/ActionTypes';
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const deleteMemory = (id) => ({
  type: c.DELETE_MEMORY
});