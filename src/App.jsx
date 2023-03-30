import { Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import TodayPage from "./pages/TodayPage";
import HomePage from "./pages/HomePage";
import CalendarPage from "./pages/Calendar";
import './App.css';

function App(){
  return(
    <Routes>
      <Route exect path="/" element={<HomePage />}/>
      <Route path="/todo" element={<TodoPage />}/>
      <Route path="/today" element={<TodayPage />}/>
      <Route path="/calendar" element={<CalendarPage />}/>
    </Routes>
  )
}
export default App;
