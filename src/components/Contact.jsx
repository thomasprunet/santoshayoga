import React from 'react';
import logo2 from '../media/logo2.png';
import facebook from '../media/facebook.png';
import { useForm, ValidationError } from '@formspree/react';
import mandala from '../media/mandala.png';
import BackToTopButton from './BackToTopButton';
import { Link } from 'react-router-dom';

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqeabrw");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Votre email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label>Votre message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Votre message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='envoyer'>
        Envoyer
      </button>
    </form>
  );
}

const Contact = () => {

  return (

<>

<div className='ecranPage'>

  <h2>NOUS CONTACTER</h2>

  <div className='ecranContact'>

  <img src={mandala} className='mandala' />
  <ContactForm />
  <div className='separation'></div>
  <p className='tel'><a href='tel:0636105816'>(📞) 06 36 10 58 16</a></p>

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

export default Contact;