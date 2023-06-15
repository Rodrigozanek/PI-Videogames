import {Route, Routes, useLocation} from "react-router-dom"

import Create from "./views/create/create.jsx"
import Detail from "./views/detail/detail.jsx"
import Home from "./views/home/home.jsx"
import NavBar from "./components/navBar/navBar.jsx"
import LandingPage from "./views/landingPage/landingPage.jsx"

function App() {
  const location = useLocation();
  return (
    
    <div>
      {location.pathname !== '/' && <NavBar/>}
      <Routes>

      <Route path="/" element={<LandingPage/>}/>

      <Route path="/home" element={<Home />}/>

      <Route path="/detail/:id" element={<Detail />}/>

      <Route path="/create" element={<Create />}/>

      {/* <Route path='*' element={<Error/>}/> */}

      </Routes>
    </div>
    
  );
}

export default App;
