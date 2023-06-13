import {Route, BrowserRouter} from "react-router-dom"
import Home from "./views/home/home.jsx"
import Detail from "./views/detail/detail.jsx"
import LandingPage from "./views/landingPage/landingPage.jsx"
import Form from "./views/form/form.jsx"



function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path="home" element={<Home />}/>
      <Detail />
      <LandingPage />
      <Form />
    </div>
    </BrowserRouter>
  );
}

export default App;
