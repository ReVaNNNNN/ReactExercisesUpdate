// React Contex - ćwiczenia
import React, { PureComponent } from "react";
import { AppContext, defaultObject } from "./AppContext";
import UserInfo from "./UserInfo";
import "./style.css";

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
  };

  handleToggleStateIsLogged = () => {
    this.state((prevState) => {
      isUserLogged: !prevState.isUserLogged;
    });
  };

  render() {
    return (
      <div>
        <h1>Hello !</h1>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          <UserInfo />
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
