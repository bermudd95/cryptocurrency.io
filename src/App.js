import React from 'react'
import Header from './Pages/Header'
import Account from './Pages/Account'
import CreateAccount from './Pages/CreateAccount'
import Data from './Pages/Data'
import FAQ from './Pages/FAQ'
import About from './Pages/About'
import Footer from './Pages/Footer'
import { Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin';


function App() {
  return (
    <div className='bg-gray-400'>
      <Header />
      <Routes>
        <Route path='/' element={<Data />} />
        <Route path='Account' element={<Account />} />
        <Route path='CreateAccount' element={<CreateAccount />} />  
        <Route path='FAQ' element={<FAQ />} />
        <Route path='About' element={<About />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
