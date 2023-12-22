import React from 'react';
import logo2 from '../media/logo2.png';
import facebook from '../media/facebook.png';
import pic1 from '../media/pic1.jpg';
import pic2 from '../media/pic2.png';
import pic3 from '../media/pic3.jpeg';
import pic4 from '../media/pic4.jpeg';
import pic5 from '../media/pic5.jpeg';
import pic6 from '../media/pic6.jpeg';
import pic7 from '../media/pic7.jpeg';
import pic9 from '../media/pic9.jpeg';
import pic10 from '../media/pic10.jpeg';
import BackToTopButton from './BackToTopButton';
import { Link } from 'react-router-dom';

const Localisation = () => {

  return (

    <>

      <div className='ecranPage'>
        
        
      <div className='sommaire'>
      <p>L'adresse de la salle</p>
      <p>｜</p>
      <p><a href='#notreSalle'>Notre salle</a></p>
      </div>

      <div className='partie1' id='adresse'>
      <h1>L'ADRESSE DE LA SALLE</h1>
      <p>La salle est située au 110 chemin de Morgiou (places de parking gratuites).</p>
      <iframe
            title="Localisation de la salle"
            className="googleMap"
            src={`https://maps.google.com/maps?hl=en&q=110%20chemin%20de%20morgiou%2013009%20marseille+(Santosha%20yoga)&t=m&z=16&iwloc=near&output=embed`}>
      </iframe>
      </div>

      <div className='partie2' id='notreSalle'>
      <h1>NOTRE SALLE</h1>
      <p>Nous vous accueillons dans une salle lumineuse qui peut recevoir jusqu'à 8 personnes.</p>
      <p>Possibilités également de réserver des cours individuels.</p>

      <div className='galerie'>
        <img src={pic1} className='pic' />
        <img src={pic2} className='pic' />
        <img src={pic3} className='pic' />
        <img src={pic4} className='pic' />
        <img src={pic5} className='pic' />
        <img src={pic6} className='pic' />
        <img src={pic7} className='pic' />
        <img src={pic9} className='pic' />
        <img src={pic10} className='pic' />
      </div>
      
      </div>
      
      </div>

      <BackToTopButton />

      <div className='footer'>
        <div className='footerGauche'><img src={logo2} className='logoFooter' /><p><a href='https://www.thomasprunet.com' target='_blank'>Site réalisé par Thomas Prunet</a></p><p><Link to="/conditions">Conditions générales et mentions légales</Link></p><a href='https://www.facebook.com/profile.php?id=100057172850828' target='blank_'><img src={facebook} className='fb' /></a></div>
        <div className='footerCentre'><h3>Nos partenaires</h3><ul><li><a href='https://ananda-yoga.com/' target='_blank'>Ananda Yoga Marseille</a></li><li>Hatha Yoga Marseille</li><li>Kurmasan Yoga Marseille</li><li>Manasarovar Yoga</li></ul></div>
        <div className='footerDroit'><h3>Plan du site</h3><ul><li><Link to='/'>Accueil</Link></li><li><Link to='/presentation'>Présentation</Link></li><li><Link to='/localisation'>Le lieu</Link></li><li><Link to='/horaires'>Les horaires</Link></li><li><Link to='/tarifs'>Les tarifs</Link></li><li><Link to='/shop'>Boutique</Link></li><li><Link to='/contact'>Nous contacter</Link></li></ul></div>
      </div>
      <div className='end'>© 2019-2024 SANTOSHA YOGA - TOUS DROITS RESERVÉS</div>

    </>

  );
}

export default Localisation;