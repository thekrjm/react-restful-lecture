import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import ReactQueryPage from './component/ReactQueryPage';
import Homepage from './component/Homepage';
import NomalFetch from './component/NomalFetch';
//json-server --watch db.json --port 3004

function App() {
  return (
    <div className="App">
      <nav style={{ backgroundColor: "beige", padding: "20px" }} >
        <Link to={"/"} style={{ marginRight: "20px" }} >
          Hompage
        </Link>
        <Link to={"/react-query"} style={{ marginRight: "20px" }}>
          React-query
        </Link>
        <Link to={"/nomal-fetch"} style={{ marginRight: "20px" }}>
          NomalFetch
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/react-query' element={<ReactQueryPage />} />
        <Route path="/nomal-fetch" element={<NomalFetch />} />
      </Routes>
    </div>
  );
}

export default App;
