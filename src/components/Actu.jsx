import React from 'react';
import logo2 from '../media/logo2.png';
import facebook from '../media/facebook.png';

const Actu = () => {

  return (

<>

<div className='ecranPage'>

  <h2>ÉDITION DES ACTUALITÉS</h2>

<div className='ecranShop'>

<iframe
    className="actus"
    title="Edition des actualités"
    src="http://localhost:1337/admin/content-manager/collectionType/api::category.category?page=1&pageSize=10&sort=title:ASC"
  ></iframe>
       
</div>

</div>

<div className='footer'>
  <div className='footerGauche'><img src={logo2} className='logoFooter' /><p><a href='https://www.thomasprunet.com' target='_blank'>Site réalisé par Thomas Prunet</a></p><p><a href='/conditions'>Conditions générales et mentions légales</a></p><a href='https://www.facebook.com/profile.php?id=100057172850828' target='blank_'><img src={facebook} className='fb' /></a></div>
  <div className='footerCentre'><h3>Nos partenaires</h3><ul><li><a href='https://ananda-yoga.com/' target='_blank'>Ananda Yoga Marseille</a></li><li>Hatha Yoga Marseille</li><li>Kurmasan Yoga Marseille</li><li>Manasarovar Yoga</li></ul></div>
  <div className='footerDroit'><h3>Plan du site</h3><ul><li><a href='/'>Accueil</a></li><li><a href='/presentation'>Présentation</a></li><li><a href='/localisation'>Le lieu</a></li><li><a href='/horaires'>Les horaires</a></li><li><a href='/tarifs'>Les tarifs</a></li><li><a href='/shop'>Boutique</a></li><li><a href='/contact'>Nous contacter</a></li></ul></div>
</div>
<div className='end'>© 2019-2024 SANTOSHA YOGA - TOUS DROITS RESERVÉS</div>

</>

  );
}

export default Actu;