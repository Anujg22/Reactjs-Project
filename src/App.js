import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';
import Terms from './Terms';
import Privacy from './Privacy';
import { Switch, Route } from 'react-router-dom';
// import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';


function App() {
  return (
    <>
    <Navbar/>
    
    {/* <Home/> */}

    <Switch>
    <Route exact path = "/" component = {Home} />
    <Route  path = "/About" component = {About} />
    <Route  path = "/Services" component = {Services} />
    <Route  path = "/Products" component = {Products} />
    <Route  path = "/Contact" component = {Contact} />
    <Route  path = "/Terms" component = {Terms} />
    <Route  path = "/Privacy" component = {Privacy} />
    </Switch>

    <Footer/>
    </>
  );
}

// const app = ()=>{
//   return (

//     <Routes>
//       <Route exact path = "/">
//         <Home/>
//       </Route>

//       <Route path = "/About">
//         <About/>
//       </Route>

//       <Route path = "/Products">
//         <Products/>
//       </Route>

//       <Route path = "/Services">
//         <Services/>
//       </Route>

//       <Route path = "/Contact">
//         <Contact/>
//       </Route>
//     </Routes>
//   )
// }

export default App;
