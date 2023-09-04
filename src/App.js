import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserProfile} from "./Components/UserProfile/UserProfile";
import {GanttCharts} from "./Components/GanttCharts/GanttCharts";
import {Header} from "./Components/Header/Header";
import {SignIn} from "./login/SignIn/Signin";
import {SignUp} from "./login/SignUp/SignUp";


function App() {

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path={'/profile'} element={<UserProfile/>}/>
            <Route path={'/'} element={<GanttCharts/>}/>
            <Route path={'/signin'} element={<SignIn/>}/>
            <Route path={'/signup'} element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
