import Header from "../Header/Header"
import Sale from "../Sale/Sale"

import './HomeTop.css'

function HomeTop(){

    return (
        <>        
            <div className="home-top">
                <Header />
                <p className="backgruond-text">Goods4you</p>
                <Sale />
            </div>           
        </>
    )
}

export default HomeTop