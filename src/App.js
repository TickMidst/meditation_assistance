import './App.css';
import {Route, Routes, HashRouter} from 'react-router-dom';
import HistoryPageContainer from './components/historypage/HistoryPageContainer';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './components/homepage/HomePage';
import {SignUpPage} from './components/signup/Signup';
import {SignInPage} from './components/signin/SignIn';


const App = () => {
  return (
    <HashRouter >
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
      <Route path='/signin' element={<SignInPage />} /> 
       </Routes> 
    </div>
    
    <div className='footerComponent'>
    <Footer />
    </div >

    </div>

    </HashRouter>
   
  );
  }

export default App;
