import NavBar from './components/Nav/NavBar';
import Body from './components/Body/Body';
import './App.css';
import { IconName } from "react-icons/fa";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Tienda from './components/Tienda/Tienda';
import Sale from './components/Sale/Sale';
import Container from './components/Container/Container';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/tienda" element={<Tienda />}></Route>
        <Route path="/sale" element={<Sale/>}></Route>
      </Routes>
      <Body />
      <Container/>
    </div>
  );
}
 export default App;
