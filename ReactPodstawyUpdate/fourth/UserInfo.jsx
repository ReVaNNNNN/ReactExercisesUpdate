import React, { PureComponent } from "react";

import { AppContext } from "./AppContext";

class UserInfo extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {(props) => (
          <div>
            <p>Użytkownik jest {props.isUserLogged}</p>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default UserInfo;
