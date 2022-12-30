
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
import Resrources_nft from './components/Resrources_nft/Resrources_nft';
import R_nft_card from './components/R_nft_card/R_nft_card';
import R_bottom_links from './components/R_bottom_links/R_bottom_links';
import R_links_help from './components/R_links_help/R_links_help';
import Hh_hlep_card from './components/Hh_help_card/Hh_hlep_card';
// import hh_help_card_full from './components/Hh_help_card_full/Hh_help_card_full';
import Hh_help_card_full from './components/Hh_help_card_full/Hh_help_card_full';
import Help_permote from './components/Help_permote/Help_permote';
import Resources_header from "./components/Resources_header/Resources_header"
import Meet_opensea from "./components/Meet_opensea/Meet_opensea"
import R_web3 from './components/R_web3/R_web3';
import R_blockchain from './components/R_blockchain/R_blockchain';
import R_watch from './components/R_watch/R_watch';
import R_insities from './components/R_insites/R_insities';
// import Resource_full_page from './components/Resource_full_page/Resource_full_page';
import Resource_full_page from "./components/Resource_full_page/Resource_full_page"
import R_bottom_links_full_page from './components/R_bottom_links_full_page/R_bottom_links_full_page';
import R_full_tex_page from './components/R_full_tex_page/R_full_tex_page';
import Wallet_offcanvas from './components/Wallet_offcanvas/Wallet_offcanvas';
import R_partner_full from './components/R_partner_full/R_partner_full';
import Explore_main from './components/Exploar_main/Explore_main';
import Art_hover from './components/Art_hover/Art_hover';
import Explore_all_nft from './components/Explore_all_nft/Explore_all_nft';
import Colloctibles_hover from './components/colloctibles_hover/Colloctibles_hover';
import Domine_hover from './components/Domine_hover/Domine_hover';

import Music_hover from './components/Music_hover/Music_hover';
import Photography_hover from './components/Photography_hover/Photography_hover';
import Sport_hover from './components/Sport_hover/Sport_hover';
import Trading_hover from './components/Trading_hover/Trading_hover';
import Utilityhover from './components/Utility_hover/Utilityhover';
import Virtual_hover from './components/Virtual_hover/Virtual_hover';



function App() {
  return (
    <div className="App">
      {/* <Drops/> */}
      {/* <Drop_slider/> */}
      {/* <Minnt/> */}
      {/* <Nextdrop/> */}
      {/* <Navtr/> */}
      {/* <Frist_open/> */}
      {/* <Ecsnft/> */}
      {/* <Simple_two_cards/> */}
      <BrowserRouter>
        <Navtr/>
        <Routes>
        <Route path="/" element={<Mainhome />} />
        <Route path="/Drop" element={< Drops/>} />
        <Route path="/View_tab" element={< View_tab/>} />
        <Route path="/resources_main_page" element={<Resource_full_page/>} />
        <Route path="/resource_main_help" element={<R_bottom_links_full_page/>} />
        <Route path="/R_full_tax_page" element={<R_full_tex_page/>} />
        <Route path="/R_full_partner" element={<R_partner_full/>} />
        <Route path="/Explore_main" element={<Explore_main/>} />
        <Route path="/Art_hover" element={<Art_hover/>} />
        <Route path="/Explore_all_nft" element={<Explore_all_nft/>} />
        <Route path="/Colloctibles_hover" element={<Colloctibles_hover/>} />
        <Route path="/Domine_hover" element={<Domine_hover/>} />
        <Route path="/Music_hover" element={<Music_hover/>} />
        <Route path="/Photography_hover" element={<Photography_hover/>} />
        <Route path="/Sport_hover" element={<Sport_hover/>} />
        <Route path="/Trading_hover" element={<Trading_hover/>} />
        <Route path="/Utilityhover" element={<Utilityhover/>} />
        <Route path="/Virtual_hover" element={<Virtual_hover/>} />
        

        </Routes>
        <Footer/>
      </BrowserRouter>
    
      {/* <Wallet_offcanvas/> */}
      <>
       {/* <Resrources_nft/> */}
   
      
      
      {/* 
      
      //
      */}
      </>
      {/* <Resrources_nft/> */}
      {/* <Resources_header/>
      <Meet_opensea/>
      <R_nft_card/> 
      <R_web3/>
      <R_blockchain/>
      <R_watch/>
      <R_insities/>
      <R_bottom_links/>  */}  
    </div>
  );
}

export default App;
