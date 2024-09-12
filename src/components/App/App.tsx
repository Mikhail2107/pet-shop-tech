// import { useState } from 'react'
import Catalog from '../Catalog/Catalog';
import SearchInput from '../SearchInput/SearchInput';
import HomeTop from '../widget/HomeTop';
import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer';

import './App.css'

function App() {
  
  return (
    <>
      <HomeTop />    
      <SearchInput />
      <Catalog />  
      <FAQ />
      <Footer />
    </>
  )
}

export default App
