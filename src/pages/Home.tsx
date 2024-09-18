import Catalog from '../widget/Catalog/Catalog';
import Header from '../widget/Header/Header';
import FAQ from '../widget/FAQ/FAQ';
import Footer from '../widget/Footer/Footer';
import Sale from '../widget/Sale/Sale';
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