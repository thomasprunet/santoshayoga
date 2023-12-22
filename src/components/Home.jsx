import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../media/yoga1.jpg';
import image2 from '../media/yoga2.jpg';
import image3 from '../media/yoga3.jpg';
import image4 from '../media/yoga5.jpg';
import image5 from '../media/yoga7.jpg';
import image6 from '../media/yoga8.jpg';
import facebook from '../media/facebook.png';
import actu1 from '../media/actu1.png';
import actu2 from '../media/actu2.png';
import actu3 from '../media/actu3.png';
import logo2 from '../media/logo2.png';
import basMobile from '../media/india.png';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';
import { orderBy } from 'lodash-es';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: 'ju73dfp1lzzt',
      accessToken: 'KCG5Gp9X6oBmDqrnJxq0nq7lGEZ2bq9C6DkI6oHIDcI',
    });

    client
      .getEntries({ content_type: 'santoshaNews', order: '-fields.date' })
      .then((response) => {
        console.log('News from Contentful:', response.items);
        const sortedNews = orderBy(response.items, ['fields.date'], ['desc']);
        setNews(response.items);
      })
      .catch((error) => {
        console.error('Error fetching news from Contentful:', error);
      });
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  
  return (
    <div>
      <div className='ecranHome'>
        <div className='configCarousel'>
          <div className='actualites'>
            <p className='introActu'><img src={actu1} className='introImg' />Nos actualités</p>
            <p className='introActuMobile'><img src={actu3} className='introImg2' />Nos actualités</p>

            {news.slice(0, 3).map((article) => (
                  <div className='filActu' key={article.sys.id}>
                      <div key={article.sys.id}>
                        <div className='dispoActu'>
                          <p className='titreActu'><img src={actu2} className='introImg' />{article.fields.title}</p>
                          <p className='dateActu'>{article.fields.date}</p>
                        </div>
                        <p className='contenuActu'>{article.fields.content}</p>
                     </div>
                  </div>
            ))}

            <div className='facebook'><p>Plus d'infos sur notre page Facebook :</p><a href='https://www.facebook.com/profile.php?id=100057172850828' target='blank_'><img src={facebook} className='fb' /></a></div>
          </div>
          <div className='carousel'>
          <Slider {...settings}>
            <div><img src={image1} alt="Image 1" style={getImageStyle()} /></div>
            <div><img src={image2} alt="Image 2" style={getImageStyle()} /></div>
            <div><img src={image4} alt="Image 4" style={getImageStyle()} /></div>
            <div><img src={image5} alt="Image 5" style={getImageStyle()} /></div>
            <div><img src={image6} alt="Image 6" style={getImageStyle()} /></div>
            <div><img src={image3} alt="Image 3" style={getImageStyle()} /></div>
          </Slider>
          </div>
        </div>
        <div className="frise"></div>
        <div className="basMobile"><img src={basMobile} className='india' /></div>
      </div>

      <div className='footerMobile'>
      <div className='footer'>
        <div className='footerGauche'><img src={logo2} className='logoFooter' /><p><a href='https://www.thomasprunet.com' target='_blank'>Site réalisé par Thomas Prunet</a></p><p><Link to="/conditions">Conditions générales et mentions légales</Link></p><a href='https://www.facebook.com/profile.php?id=100057172850828' target='blank_'><img src={facebook} className='fb' /></a></div>
        <div className='footerCentre'><h3>Nos partenaires</h3><ul><li><a href='https://ananda-yoga.com/' target='_blank'>Ananda Yoga Marseille</a></li><li>Hatha Yoga Marseille</li><li>Kurmasan Yoga Marseille</li><li>Manasarovar Yoga</li></ul></div>
        <div className='footerDroit'><h3>Plan du site</h3><ul><li><Link to='/'>Accueil</Link></li><li><Link to='/presentation'>Présentation</Link></li><li><Link to='/localisation'>Le lieu</Link></li><li><Link to='/horaires'>Les horaires</Link></li><li><Link to='/tarifs'>Les tarifs</Link></li><li><Link to='/shop'>Boutique</Link></li><li><Link to='/contact'>Nous contacter</Link></li></ul></div>
      </div>
      <div className='end'>© 2019-2024 SANTOSHA YOGA - TOUS DROITS RESERVÉS</div>
      </div>

    </div>
  );
};

export default Home;

const getImageStyle = () => {
  return {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    opacity: '0.9',
  };
};