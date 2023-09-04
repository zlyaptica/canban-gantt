import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserProfile} from "./Components/UserProfile/UserProfile";
import {GanttCharts} from "./Components/GanttCharts/GanttCharts";
import {Header} from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path={'/profile'} element={<UserProfile/>}/>
            <Route path={'/'} element={<GanttCharts/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
