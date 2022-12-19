
import './App.css';
import Ecsnft from './components/first_slider/Ecsnft';
import Frist_open from './components/Frist_open/Frist_open';
import Navtr from './components/Navbar/Navtr';
import Simple_two_cards from './components/Simple_two_cards/Simple_two_cards';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Drops from './components/Drops/Drops';
import View_tab from './components/View_tab/View_tab';
import Mainhome from './components/Mainhome/Mainhome';
import Footer from './components/Footer/Footer';
import Nextdg from "./components/Next_dg/Nextdg"
import Nextdrop from './components/Next_dg/Nextdrop';
import FAQ from './components/Next_dg/FAQ';
import Minnt from './components/Next_dg/Minnt';


function App() {
  return (
    <div className="App">
      {/* <Nextdg/>
      <Minnt/> */}
      {/* <Nextdrop/> */}
      {/* <Navtr/> */}
      {/* <Drops/> */}
      {/* <Frist_open/> */}
      {/* <Ecsnft/> */}
      {/* <Simple_two_cards/> */}
      <BrowserRouter>
      <Navtr/>
        <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="/Drop" element={< Drops/>} />
        <Route path="/View_tab" element={< View_tab/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
