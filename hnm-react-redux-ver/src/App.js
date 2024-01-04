import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './page/Login';
import { ProductAll } from './page/ProductAll';
import { Navbar } from './components/Navbar';
import { useEffect, useState } from 'react';
import { PrivateRoute } from './route/PrivateRoute';

// 1. 전체 상품페이지, 로그인페이지, 상세페이지
// 2. 전체 상품페이지에 상품 나열
// 3-1. 로그인 버튼을 누르면 로그인페이지가 나온다.
// 3-2. 로그인이 안 되어있을 경우 상세페이지 클릭 시 로그인페이지가 나온다.
// 4-1. 로그인 되었을 떄 상세페이지 조회가 가능
// 5-1 로그아웃 버튼을 누르면 로그아웃 된다.
// 6. 로그인을 하면 로그아웃이 보이고 로그인을 하면 로그아웃이 보인다.
// 7. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log('로그인됨', authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route
          path='/login'
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path='/products/:id'
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
