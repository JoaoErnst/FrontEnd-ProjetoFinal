import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Routes from './routes';
import {BrowserRouter, Link} from 'react-router-dom';

import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
         
           <nav id="main-nav">
             <ul>
               <li><Link className="menu" to={`/`}>Home</Link></li>
               <li><Link className="menu" to={`/about`}>Sobre</Link></li>
               <li><Link className="menu" to={`/register-fighter`}>Cadastro</Link></li>
               <li><Link className="menu" to={`/list-fighter`}>Consulta</Link></li>
             </ul>
           </nav>
           <Routes/>
           <Footer />
          </BrowserRouter>
      
    </div>
  );
}

export default App;
