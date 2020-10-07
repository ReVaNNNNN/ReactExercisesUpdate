import React, { PureComponent } from "react";

import { AppContext } from "./AppContext";

class UserInfo extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        <div>
          <p>Użytkownik jest</p>
        </div>
      </AppContext.Consumer>
    );
  }
}

export default UserInfo;
