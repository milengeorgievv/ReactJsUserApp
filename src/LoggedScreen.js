import { AuthContext } from "./AuthContext";
import React, { useContext } from "react";
import Button from "@material-ui/core/Button";

export function LoggedScreen() {
  const { dispatch } = useContext(AuthContext);
  function logout() {
    dispatch({ type: "loggedOut" });
  }
  return (
    <div>
      <h1>Hello User</h1>
      <div>Welcome to the Site</div>
      <div>
        <Button type="submit" variant="contained" onClick={logout}>
          LogOut
        </Button>
      </div>
    </div>
  );
}
