import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './NotFound..css'

const NotFound = () => {
   return (
    <>
    <Header />
    <div className="not-fount-container">
        <div className="not-found-box">
            <h2 className="not-found-title">404 - Страница не найдена</h2>
            <p>Извините, но запрашиваемая страница не существует.</p>
        </div>
       
     </div>

     <Footer />
    </>
   
    );
    };
    
export default NotFound;