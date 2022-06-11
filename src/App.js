import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalCss";

// @import Auth Pages
import { Login, Register, ForgetPassword, NewPassword, OnboardBank } from "./pages/Auth";

// @import Dashboard Pages
import Homepage from "./pages/Dashboard/Homepage";
import MyBanks from "./pages/Dashboard/MyBanks";
import MyBankInfo from "./pages/Dashboard/MyBankInfo";

import { NoMatch} from "./pages";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
      <Route exact path='*' element={<NoMatch />} />
        <Route exact path='/' element={<Login />} />
        <Route exact path='/auth/register' element={<Register />} />
        <Route exact path='/auth/forget-password' element={<ForgetPassword />} />
        <Route exact path='/auth/new-password' element={<NewPassword />} />
        <Route exact path='/auth/banks/onboarding' element={<OnboardBank />} />

        <Route exact path='/dashboard' element={<Homepage />} />
        <Route exact path='/dashboard/banks' element={<MyBanks />} />
        <Route exact path='/dashboard/banks/oceanic-bank' element={<MyBankInfo />} />
 
      </Routes>
    </Router>
  );
}

export default App;
