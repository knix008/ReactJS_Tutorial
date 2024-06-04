import dispatcher from "./Dispatcher";
import { EventEmitter } from "events";
import * as UserActions from "./UserActions";

class UserStore extends EventEmitter {
  constructor() {
    super();
    this.users = [];
  }

  handleActions(action) {
    switch (action.type) {
      case UserActions.USER_ACTIONS.ADD: {
        this.users.push(action.value);
        this.emit("storeUpdated");
        break;
      }
      default: {
      }
    }
  }

  getUsers() {
    return this.users;
  }
}

const userStore = new UserStore();
dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;