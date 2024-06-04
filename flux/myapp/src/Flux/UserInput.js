import React from "react";
import * as UserActions from "./UserActions";

export default class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  onButtonClick = () => {
    UserActions.addUser(this.state.username)
  };

  render() {
    return (
      <div>
        <input name="username" onChange={(e) => this.setState({ username: e.target.value })} />
        <button onClick={() => this.onButtonClick()}>Add user</button>
      </div>
    );
  }
}