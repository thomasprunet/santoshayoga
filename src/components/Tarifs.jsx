import React from 'react';
import logo2 from '../media/logo2.png';
import facebook from '../media/facebook.png';
import yoga6 from '../media/yoga6.png';
import BackToTopButton from './BackToTopButton';
import { Link } from 'react-router-dom';

const Tarifs = () => {

  return (

    <>

      <div className='ecranPage'>

      <div className='sommaire'>
      <p>Les tarifs généraux</p>
      <p>｜</p>
      <p><a href='#adhesion2'>L'adhésion</a></p>
      </div>

      <div className='partie1' id='tarifsGeneraux'>
        <h2>LES TARIFS GÉNÉRAUX</h2>
        <p>Séance d’essai : 10 € remboursable si prise d’abonnement ( 10 ou 20 cours)</p>
        <p>Bien vouloir se présenter 15 minutes avant le début du cours.</p>
        <p>Il est possible de commencer à n’importe quel moment de l’année.</p>
  <table>
    <thead>
      <tr>
        <th>Le cours</th>
        <th>10 cours</th>
        <th>20 cours</th>
        <th>Cours individuel</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>12€</td>
        <td>110€</td>
        <td>200€</td>
        <td>40€</td>
      </tr>
    </tbody>
  </table>
  </div>

  <div className='partie2' id='adhesion2'>
  <h2>L'ADHÉSION</h2>
  <img src={yoga6} className='imageAdhesion' />
  <p>L’adhésion est de 20€ par année scolaire.</p>
  <p>L’abonnement (de 110 ou 200€) est valable une année à compter de la date de sa souscription.</p>
  <p className='finTarif'><b>Tarif social</b> (RSA et étudiants): 80€ les 10 cours, soit 8€ le cours.</p>
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

export default Tarifs;