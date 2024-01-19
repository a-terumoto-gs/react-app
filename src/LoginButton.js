import React from "react";
import { useAuth } from "./AuthOperation";
import "./LoginButton.css";

export default function LoginButton() {
  const { LoggedIn, login, logout } = useAuth();

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
