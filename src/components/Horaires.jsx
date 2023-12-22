import React from 'react';
import logo2 from '../media/logo2.png';
import facebook from '../media/facebook.png';
import BackToTopButton from './BackToTopButton';
import { Link } from 'react-router-dom';

const Horaires = () => {

  return (

    <>

      <div className='ecranPage'>

        <h1>LES HORAIRES</h1>
        <p>Réservation obligatoire par téléphone ou par mail car nombre limité de tapis.</p>
        <p>Le nombre de places étant limité, tout cours réservé et non annulé 24h avant sera dû et décompté de l’abonnement.</p>

  <table>
    <thead>
      <tr>
        <th>Lundi</th>
        <th>Mardi</th>
        <th>Mercredi</th>
        <th>Jeudi</th>
        <th>Vendredi</th>
        <th>Samedi</th>
        <th>Dimanche</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>10h</td>
        <td>17h</td>
        <td>10h</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td>18h30</td>
        <td>18h30</td>
        <td>18h30</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
      
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

export default Horaires;