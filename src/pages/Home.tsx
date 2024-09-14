import Catalog from '../components/Catalog/Catalog';
import HomeTop from '../components/widget/HomeTop/HomeTop';
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer';

function Home() {
  
  return (
    <>
      <HomeTop />    
      <Catalog />  
      <FAQ />
      <Footer />
    </>
  )
}

export default Home