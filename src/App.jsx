import './App.css'
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Contact from './pages/contact';
import ShoppingBox from './pages/shoppingBox';
import HeaderNav from './components/nav';


function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoppingbox" element={<ShoppingBox />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
