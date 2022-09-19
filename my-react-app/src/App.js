import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "./components/HomePage/homePage";
import { LoginPage } from "./components/LoginPage/loginPage";
import './App.css';
import { useState } from "react";

// 1. Koncept rutiranje primenjen, dve razlicite stranice:
//   - login page
//   - home page
// 4. useState hook
// 5. Funkcionalnosti su sledece:
//    - user moze da se saljta sa stranice na stranicu
//    - da submituje formu za Login
//    - prikaz username-a u Home stranici
// 6. Koriscenje CSS-a
// 7. Dokumentacija u vidu komentara i citljivih imena varijabli, funkcija, fajlova, foldera


const App = () => {
  const [username, setUsername] = useState('');
  const setName = (name) => {
    setUsername(name);
  };

  return (
    <div>
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />
      <Route path="/login" element={<LoginPage setName={setName}/>} />
      <Route path="/home" element={<HomePage username={username}/>} />
    </Routes>
  </div>
  );
}

export default App;
