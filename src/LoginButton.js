import React from "react";
import { useLogin } from "./LoginOperation";
import "./LoginButton.css";

export default function LoginButton() {
  const { LoggedIn, login, logout } = useLogin();

  function handleAuth() {
    if (LoggedIn) {
      logout();
    } else {
      login();
    }
  }

  return (
    <button className="login_button" onClick={handleAuth}>
      {LoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
}
