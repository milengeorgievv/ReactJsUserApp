import * as React from "react";

export const AuthContext = React.createContext({
  authState: { token: null },
  dispatch: () => {}
});
