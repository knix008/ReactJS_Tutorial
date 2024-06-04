import dispatcher from "./Dispatcher";

export const USER_ACTIONS = {
  ADD: 'addUser'
};

export function addUser(userName) {
  dispatcher.dispatch({
    type: USER_ACTIONS.ADD,
    value: {
      name: userName
    }
  })
}