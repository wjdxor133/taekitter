import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); // 유저의 로그인 여부
  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
