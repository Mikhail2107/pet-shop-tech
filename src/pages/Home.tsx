import Catalog from '../components/Catalog/Catalog';
import SearchInput from '../components/SearchInput/SearchInput';
import HomeTop from '../components/widget/HomeTop/HomeTop';
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer';

function Home() {
  
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

export default Home