import React from 'react';
import './Components.css';
function Main() {
    return (
        <div className='main'>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6">
                        <div className='background-image'></div>
                    </div>
                    <div className="col-md-6">
                        <div className='main-quote'><p><i>"Tehnologija svakim danom sve više napreduje, a nitko ne brine o ljudima koji nisu pratili taj razvoj!"</i></p></div>
                    </div>
                </div>
                <div className='main-content'>
                    <div><p><h2><b>Pružamo usluge OBUKE korištenja moderne tehnologije (mobitela i laptopa) !</b></h2><br></br>
                        Naš cilj je klijente na jednostavan i lak način obučiti kako bi se mogli samostalno koristiti željenim uređajima.<br></br>
                        Ukoliko imate problema s korištenjem moderne tehnologije, tu smo kako bi Vam pomogli!</p></div>
                    <h2>Dolazak na kućnu adresu!</h2>
                </div>
            </div>
        </div>
    )
}
export default Main;