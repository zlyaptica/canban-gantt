import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserProfile} from "./Components/UserProfile/UserProfile";
import {GanttCharts} from "./Components/Project/GanttCharts/GanttCharts";
import {Header} from "./Components/Header/Header";
import {SignIn} from "./Components/Login/SignIn/Signin";
import {SignUp} from "./Components/Login/SignUp/SignUp";
import {MainMenu} from "./Components/MainMenu/MainMenu";
import {UserProjects} from "./Components/UserProjects/UserProjects";
import {Project} from "./Components/Project/Project";
import {CreateProject} from "./Components/Project/CreateProject/CreateProject";


function App() {
    const isAuthenticatedUser = true
    return (
        <BrowserRouter>
            <Header isAuthenticatedUser={isAuthenticatedUser}/>
            <Routes>
                {isAuthenticatedUser ? <Route path={'/'} element={<UserProjects/>}/> : <Route path={'/'} element={<MainMenu/>}/>}
                <Route path={'/project'} element={<Project/>}/>
                <Route path={'/profile'} element={<UserProfile/>}/>
                <Route path={'/signin'} element={<SignIn/>}/>
                <Route path={'/signup'} element={<SignUp/>}/>
                <Route path={'create_project'} element={<CreateProject/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
