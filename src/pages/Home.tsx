import Catalog from '../components/Catalog/Catalog';
import Header from '../components/Header/Header';
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer';
import Sale from '../components/Sale/Sale';
import { Helmet } from 'react-helmet';

function Home() {
  
  return (
    <>
      <Helmet>
        <title>Catalog | Goods4you</title>
      </Helmet>
        <Header />
        <Sale />    
        <Catalog />  
        <FAQ />
        <Footer />  
    </>
  )
}

export default Home