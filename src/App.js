import NavBar from './components/Nav/NavBar';
import Body from './components/Body/Body';
import './App.css';
import { IconName } from "react-icons/fa";
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Tienda from './components/Tienda/Tienda';
import Sale from './components/Sale/Sale';
import Container from './components/Container/Container';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/Body/Body';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Body/>}></Route>
        <Route path="/tienda" element={<Tienda />}></Route>
        <Route path="/sale" element={<Sale/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:categoria/:id" element={<ItemDetail/>}></Route>
      </Routes>
      
    </div>
  );
}
 export default App;