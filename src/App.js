
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartingPage from './Pages/StartingPage';
import AddPlayerPage from './Pages/AddPlayerPage';
import Layout from './components/Layout';
import AllPlayersPage from './Pages/AllPlayersPage';
import EditPlayerPage from './Pages/EditPlayerPage';

function App() {
  return (

    //The updated way to use routes
    
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' exact element={<StartingPage/>}/>
      <Route path='/home' exact element={<StartingPage/>}/>
      <Route path='/addPlayer' element={<AddPlayerPage/>}/>
      <Route path='/playersList' element={<AllPlayersPage/>}/>
      <Route path='/editPlayerPage' element={<EditPlayerPage/>}/>
    </Routes>
    </Layout>
    </BrowserRouter>

  );
}

export default App;
