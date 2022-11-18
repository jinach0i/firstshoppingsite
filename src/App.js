import './App.css';
import {Cards, Item} from './routes/Details';
import Products from './routes/Products';
import Entrance from './routes/Entrance';
import Cart from './routes/Cart';
// libs cdn:
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      {/* 이하 Link는 a tag가 생겨서 구림:<Link to="/">홈</Link>
      <Link to="/products">목록</Link>
      <Link to="/about">FIRST</Link>
      <Link to="/cart">장바구니</Link>
      고로 이하 Routes로 대체: */}
      <Routes>
        <Route path='/' element={<Entrance />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productsp' element={<Item />} />
        <Route path='/about' element={<div>FIRST는...</div>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <div id='container'>(항상 보여줄 내용)</div>
    </div>
  );
}



export default App;
