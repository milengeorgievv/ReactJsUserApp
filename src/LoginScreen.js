import { useForm } from "react-hook-form";
import { AuthContext } from "./AuthContext";
import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export function LoginScreen() {
  const { register, handleSubmit } = useForm();
  const { dispatch } = useContext(AuthContext);
  const onSubmit = data => {
    console.log(data);
    setTimeout(() => {
      dispatch({ type: "loggedIn", token: "d53t56fedtu67uyf6dt5t" });
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Log in!</h2>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        inputRef={register}
      />
      <TextField
        name="password"
        label="Password"
        variant="outlined"
        inputRef={register}
      />

      <div>
        <Button type="submit" variant="contained">
          LogIn
        </Button>
      </div>
    </form>
  );
}
