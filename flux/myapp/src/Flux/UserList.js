import React from "react";
import UserStore from "./UserStore";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: UserStore.getUsers()
    }
  }

  componentDidMount() {
    UserStore.on("storeUpdated", this.updateUserList);
  }

  componentWillUnmount() {
    UserStore.removeListener("storeUpdated", this.updateUserList);
  }

  updateUserList = () => {
    this.setState({ users: UserStore.getUsers() })
  };

  render() {
    return (
      <ul>{
        this.state.users && this.state.users.length > 0 &&
        this.state.users.map((items) => <li>{items.name}</li>)
      }
      </ul>
    );
  }
}