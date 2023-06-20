import {Route, Routes} from "react-router-dom"

import Create from "./views/create/create.jsx"
import Detail from "./views/detail/detail.jsx"
import Home from "./views/home/home.jsx"
import LandingPage from "./views/landingPage/landingPage.jsx"
import About from "./views/about/about.jsx"

function App() {

  return (
    
    <div>
      <Routes>

      <Route path="/" element={<LandingPage/>}/>

      <Route path="/home" element={<Home />}/>

      <Route path="/detail/:id" element={<Detail />}/>

      <Route path="/create" element={<Create />}/>

      <Route path="/about" element={<About/>}/>

      

      </Routes>
    </div>
    
  );
}

export default App;