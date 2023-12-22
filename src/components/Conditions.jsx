import React from 'react';
import logo2 from '../media/logo2.png';
import facebook from '../media/facebook.png';
import mention from '../media/mention.jpg';
import BackToTopButton from './BackToTopButton';
import { Link } from 'react-router-dom';

const Conditions = () => {
    return (

    <>

      <div className='ecranPage'>
        <h1>MENTIONS LÉGALES</h1>
        <img src={mention} className='imageMention' />
        <p><b>Raison sociale :</b> Association Loi 1901</p>
        <p><b>Adresse du siège social :</b> 110 chemin de Morgiou 13009 Marseille</p>
        <p><b>Directeur de publication :</b> Mme Prunet Solange</p>
        <p><b>Site web :</b> Mr Prunet Thomas</p>
        <p><b>Hébergeur web :</b> Planet Hoster – Siège social: 4416 Louis-B.-Mayer Laval, Québec Canada H7P 0G1</p>
      
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

export default Conditions;