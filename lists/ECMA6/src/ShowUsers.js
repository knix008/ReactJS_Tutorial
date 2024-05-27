function ShowUsers(props) {
  return (
    <div>
      <ul>
        {props.users && props.users.length > 0 &&
          props.users.map((item) =>
          (
            <li>{item}</li>
          )
          )}
      </ul>
    </div>
  );
}

export default ShowUsers;
