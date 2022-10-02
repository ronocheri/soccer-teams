
import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartingPage from './Pages/StartingPage';

function App() {
  return (

    <Main/>
    // <BrowserRouter>
    // <Routes>
    //     <Route path="/" element={<Main/>}>
    //     <Route path="/createTeams" element={<StartingPage/>} />
    //   </Route>
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
