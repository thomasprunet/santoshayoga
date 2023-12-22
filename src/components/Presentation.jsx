import React from 'react';
import nous from '../media/nous.png';
import shiva from '../media/shiva.jpg';
import logo2 from '../media/logo2.png';
import facebook from '../media/facebook.png';
import BackToTopButton from './BackToTopButton';
import { Link } from 'react-router-dom';

const Presentation = () => {
  return (

    <>

    <div className='ecranPage'>

      <div className='sommaire'>
      <p>Qui sommes-nous ?</p>
      <p>｜</p>
      <p><a href='#notreYoga'>Notre yoga</a></p>
      </div>

      <div className='partie1' id='quiSommesNous'>
      <h1>QUI SOMMES-NOUS ?</h1>
      
      <img src={nous} className='nous' />
      <p>Solange et Eric sont tous deux diplômés de la Fédération Française des Ecoles de Yoga. Ils sont mariés depuis très longtemps.</p>
      <p>Solange pratique le yoga depuis une quinzaine d’années. Eric a pratiqué la course à pied pendant de très nombreuses années puis il est venu également au yoga.</p>
      <p>Ensemble, ils ont décidé de suivre la formation de professeur de yoga dispensée par <b>Michèle Féraud</b> au sein de l’école Ananda elle-même formée depuis de nombreuses années par <b>Christian Tikhomiroff</b>, auteur du Banquet de Shiva (édition Dervy).</p>
      <p>Solange et Eric ont vu leur vie transformée par cette pratique et souhaitent aujourd’hui transmettre ce précieux enseignement. Ils ont donc aménagé une salle au sein même de leur maison et seront heureux de vous y recevoir.</p>
      </div>

      <div className='partie2' id='notreYoga'>
      <h2>NOTRE YOGA</h2>

      <img src={shiva} className='shiva' />
      <p>Notre yoga est le <b>Natha Yoga</b>. C’est une pratique très ancienne qui remonterait à 3000 ans avant J.C. suivant certains textes. Ce yoga est accessible à tous quel que soit l’âge, la souplesse, la condition physique, le parcours personnel.</p>
      <p>Cet enseignement est un partage joyeux qui s’adapte à l’énergie toujours nouvelle qui nous fait et compose le monde. Ici, les postures (Asana) sont associées au souffle, à la concentration et aux visualisations. Santé, énergie, puissance, amour et compréhension sont les fruits de ces techniques affûtées depuis des siècles.</p>
      <p>Pour comprendre ce qu’est le Natha-Yoga, voici la définition apportée par la Fédération Française de Yoga:</p>
      <p>Le <b>Natha Yoga</b> est une pratique qui vient du nord de l’Inde. Il y a peu de différences entre le Natha-Yoga et le Hatha-Yoga, traditionnellement le Hatha-Yoga est le yoga des ascètes et le Natha-Yoga celui des gens vivants normalement, établis en ville, ayant un travail et une famille. Cette philosophie et cette méthode orginales ont pour finalité d’éveiller les plus belles qualités humaines au niveau spirituel, énergétique, mental et physique. C’est une vision du monde indépendante, libre de dogmes, de croyances, de religions et de soumissions aux influences ambiantes, soient-elles sociales, morales, économiques ou politiques. Extrêmement technique, en dehors des sentiers battus, elle s’inscrit dans une dynamique solitaire de connaissance de soi et de recherche d’efficacité personnelle ».</p>
      <p>Au niveau de l’enseignement, cours et formations, le Natha-Yoga propose les éléments suivants:</p>
      <ul>
        <li>Les postures du corps, Asana, pour une santé, une jeunesse et une longétivité.</li>
        <li>La relaxation, Yoga-Nidra, pour investir son inconscient et comprendre qui on est.</li>
        <li>La respiration: le Pranayama, pour maîtriser mental, émotions et corps.</li>
        <li>Les gestes et contractions, Mudra et Bandha, pour potentialiser l’énergie, stimuler l’endurance et la puissance personnelles.</li>
        <li>Les visualisations, Drishti, pour la stabilité mentale et psychologique.</li>
        <li>La concentration sur les figures géométriques, Yantra, Chakra, pour investir la structure énergétique et comprendre les relations interactives entre le corps, l’énergie et la pensée.</li>
        <li>Le yoga du son, Nada-Yoga et Mantra, pour accéder à des états de concentrations lumineux et délicieux.</li>
        <li>La concentration, Dharana et la méditation Dhyana, pour passer sur un autre registre des fonctionnements de l’expérience humaine.</li>
        <li>Les applications thérapeutiques, pour se soigner ou prévenir, et aider les autres.</li>
      </ul>
      <p>Lors d’une séance, l’ensemble de ces techniques peut être abordé conjointement car il s’agit d’une méthode complète: les postures sont combinées à des respirations et des visualisations. </p>
      <p>Le Natha Yoga prend l’individu dans sa globalité, le corps n’est pas vu comme une machine, mais plutôt comme un écosystème où interagissent le corps physique, le corps énergétique et le corps mental. Le travail sur la respiration y occupe une place centrale en favorisant le développement, la circulation et la canalisation de l’énergie.</p>
      <p>C’est donc une vraie démarche personnelle avec tout ce que cela comporte d’exigences et de bonheur !</p>
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

export default Presentation;