
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartingPage from './Pages/StartingPage';
import AddPlayerPage from './Pages/AddPlayerPage';
import Layout from './components/Layout';
import AllPlayersPage from './Pages/AllPlayersPage';

function App() {
  return (

    //The updated way to use routes
    
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' exact element={<StartingPage/>}/>
      <Route path='/addPlayer' element={<AddPlayerPage/>}/>
      <Route path='/playersList' element={<AllPlayersPage/>}/>
    </Routes>
    </Layout>
    </BrowserRouter>

  );
}

export default App;
