import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HistoryPageContainer from './components/historypage/HistoryPageContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './components/homepage/HomePage';
import {SignUpPage} from './components/signup/Signup';


const App = () => {
  return (
    <BrowserRouter>
    <div className='bodyContainer'>
    <div className='headerComponent'>
      <Header />
      </div>

      <div className='mainContent'>
      <Routes>
      <Route path='' element={<HomePage />}  /> 
      <Route path='/homepage' element={<HomePage />}  /> 
      <Route path='/historypage' element={<HistoryPageContainer />} /> 
      <Route path='/signup' element={<SignUpPage />} /> 
       </Routes> 
    </div>
    
    <div className='footerComponent'>
    <Footer />
    </div >

    </div>

    </BrowserRouter>
   
  );
  }

export default App;
