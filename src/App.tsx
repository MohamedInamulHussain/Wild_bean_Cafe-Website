import React, { useState,useEffect } from "react";
import Slider from 'react-slick';
import { Star, MapPin, Phone, Mail, Coffee, Clock, Magnet, User, DoorClosed } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ground from './assets/ground.jpg';
import board from './assets/board.jpg';
import board2 from './assets/board2.png';
import g1 from './assets/galary/g1.jpg';
import g2 from './assets/galary/g2.jpeg';
import g3 from './assets/galary/g3.jpg';
import g5 from './assets/galary/g5.jpeg';
import g6 from './assets/galary/g6.jpg';
import g7 from './assets/galary/g7.webp';
import g9 from './assets/galary/g9.jpg';
import g10 from './assets/galary/g10.jpg';
import g11 from './assets/galary/g11.jpeg';
import g12 from './assets/galary/g12.jpeg';
import g13 from './assets/galary/g13.jpeg';

import HeroLogo from './assets/HeroLogo.png';
import HeroLogoText from './assets/HeroLogoText.png';
import owner2 from './assets/owner2.jpg';
import cofeesplash from './assets/cofeesplash.png';

//product section images
import cofeePouch from './assets/cofee-pouch.png';

import overline from './assets/overline.png';
import underline from './assets/underline.png';

import celebration from './assets/celebration.png';
import corporate from './assets/corporate.png';
import privateParty from './assets/privateParty.jpg';
//review images
import person11 from './assets/person11.webp';
import person2 from './assets/person2.webp';
import person3 from './assets/person3.jpg';
// Welcome to Wild Beans Café 
// Where Every Cup Tells a Story
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
 
  const heroSlides = [
    {
      image: ground,
      title: "Wild Beans Café",
      subtitle: "Where Every Cup Tells a Story"
    },
    {
      image: board,
      title: "",
      subtitle: ""
    },
    {
      image: board2,
      title: "",
      subtitle: ""
    }
  ];

  const galleryImages = [g1, g2, g3, g5, g6, g7, g9, g10, g11, g12, g13];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };

  const gallerySettings = {
    ...sliderSettings,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <>
    
      <nav className="navbar">
     
        <div className="container nav-container">
          <div className="nav-logo"></div>
          {/* Mobile Sidebar */}
          <div className={`mobile-nav-links ${isOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => setIsOpen(!isOpen)}>About</a>
            <a href="#gallery" onClick={() => setIsOpen(!isOpen)}>Gallery</a>
            <a href="#events" onClick={() => setIsOpen(!isOpen)}>Events</a>
            <a href="#reviews" onClick={() => setIsOpen(!isOpen)}>Reviews</a>
            <a href="#contact" onClick={() => setIsOpen(!isOpen)}>Contact</a>
          </div>
          {/* Desktop Nav */}
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#events">Events</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        </div>
      </nav>

      <section className="hero">
        <Slider {...sliderSettings} className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div key={index} className="hero-slide">
              <img src={slide.image} alt={slide.title} />
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="LogoRotate">
          <img src={HeroLogo} className="HeroLogo"></img>
          <img src={HeroLogoText} className="HeroLogoText"></img>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div data-aos="fade-right">
              <h2 style={{fontSize:"50px"}}>Our Story</h2>
              <p>Founded in 2010, Wild Beans has been serving premium Chocolate, coffee and creating memorable experiences for our community. Our passion for quality beans, expert brewing, and warm hospitality has made us a beloved destination for Chocolate enthusiasts and casual visitors alike.</p>
            </div>
            {/* <img 
              src="src/assets/cofee.png" 
              alt="Barista preparing coffee"
            /> */}
          </div>
        </div>
      </section>

      <section className="owner">
        <div className="container">
          <div className="owner-content">
            <div className="owner-image" data-aos="flip-right">
              <img 
                src={owner2}
                alt="Café Owner"
              />
            </div>
            <div className='ownerTextArea'>
              <h2 >Meet Our Owner</h2>
              <h1>Parthiban</h1>
              
              <p>With over 20 years of experience in the coffee industry, Parthiban has traveled the world sourcing the finest coffee beans and perfecting his craft. His passion for coffee and community has shaped Wild beans Café Aroma into the welcoming space it is today.</p>
              <p>Parthiban's dedication to quality and sustainable practices ensures that every cup of coffee served at Café Aroma meets the highest standards while supporting ethical farming practices.</p>
              
            </div>
          </div>
        </div>
      </section>
      <section id="cofeeAnim" className='cofeeAnim'>
        <div className='Imgcontainer'>

              <img src={cofeesplash}></img>
              <div className="Marquecontainer">
  <div className="scroll">
    {/* Right to Left Scrolling Content */}
    <div className="RightToLeft" style={{fontFamily:"Bangers"}}>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>

      {/* Duplicate for seamless loop */}
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
    </div>

    {/* Left to Right Scrolling Content */}
    <div className="LeftToRight" >
    <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>

      {/* Duplicate for seamless loop */}
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
    </div>

    {/* Right to Left Scrolling Content */}
    <div className="RightToLeftBottom" style={{fontFamily:"Bangers"}}>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>

      {/* Duplicate for seamless loop */}
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
      <p>#Chocolate Coffee #Hot #Bloody Sweet #tasty #yummy</p>
    </div>
  </div>
</div>


        </div>

      </section>
      <section className='products'>
        <h1 style={{fontSize:"45px",fontWeight: "900"}}>Explore Recent Products</h1>
        <p>Showcases the lates additions and updates to our collections</p>
        <div className='Product-container'>
          <div className='productDetail'>       
            <img src={cofeePouch}></img>
            <h2 style={{fontSize:"17px",fontWeight:"800"}}>Gayo Tangkengon</h2>
            <h2 style={{fontSize:"17px",fontWeight:"800"}}>$43</h2>
          </div>
          <div className='productDetail'>       
            <img src={cofeePouch}></img>
            <h2 style={{fontSize:"17px",fontWeight:"800"}}>Bali Kintamani</h2>
            <h2 style={{fontSize:"17px",fontWeight:"800"}}>$52</h2>
          </div>
          <div className='productDetail'>       
            <img src={cofeePouch}></img>
            <h2 style={{fontSize:"17px",fontWeight:"800"}}>Flores Manggarai</h2>
            <h2 style={{fontSize:"17px",fontWeight:"800"}}>$48</h2>
          </div>
          <div className='productDetail'>       
            <img src={cofeePouch}></img>
            <h2 style={{fontSize:"17px",fontWeight:"800"}}>Gunung Tanggamu</h2>
            <h2 style={{fontSize:"17px",fontWeight:"800"}}>$49</h2>
          </div>
          <div className='productDetail'>       
            <img src={cofeePouch}></img>
            <h2 style={{fontSize:"17px",fontWeight:"800"}}>Regular Special</h2>
            <h2 style={{fontSize:"17px",fontWeight:"800"}}>$40</h2>
          </div>
        </div>
        <div className='premiumQuality-section'>
          <div className='premiumImgContainer' data-aos="fade-right"></div>
          <div className='textContainer' data-aos="fade-left">
            <h1>We Deliver Premium Quality Beans And Ambience</h1>
            <p id='a'>We provide top-tier coffee beans for an exceptional brew, complemented by a warm, inviting atnosphere.Enjoy a premiun experience that delights both your taste buds and your senses.</p>
              <button>Explore Our Product</button>
            <p id='b'>Our premium beans are carefully selected from the finest farms, ensuring top quality and rich flavor profiles. We taste-test each batch to perfection, preserving the beans' unique characteristics.</p>
          </div>
        </div>
      </section>
      <section className='blackContent'>
      <img src={overline}></img>
        <h2>SIGNATURE DELIGHT</h2>
        <h1>Our Special Items</h1>
        <div className='Item-card-container' data-aos="fade-up">
          <div className='item-card' id="card1" style={{ backgroundPosition: "-80px 0px"}}>           
              <div className='card-blur'>
                <h1>Premium Dark Chocolate</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio facilis adipisci totam.</p>
                <a href="#contact">
                   <button>CONTACT US</button>
                </a>
              </div>
          </div>
          <div className='item-card' id="card2"> 
          <div className='card-blur'>
                <h1>To'ak Chocolate</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio facilis adipisci totam.</p>
                <a href="#contact"><button>CONTACT US</button></a>
              </div>          
          </div>
          <div className='item-card' id="card3">   
          <div className='card-blur'>
                <h1>chocolate soufflé cake</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio facilis adipisci totam.</p>
                <a href="#contact"><button>CONTACT US</button></a>
              </div>        
          </div>
          <div className='item-card' id="card4"> 
          <div className='card-blur'>
                <h1>CAPPUCCINO</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio facilis adipisci totam.</p>
                <a href="#contact"><button>CONTACT US</button></a>
              </div>          
          </div>
          <div className='item-card' id="card5">  
          <div className='card-blur'>
                <h1>Classic French Profiteroles</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio facilis adipisci totam.</p>
                <a href="#contact"><button>CONTACT US</button></a>
              </div>         
          </div>
          <div className='item-card' id="card6"> 
          <div className='card-blur'>
                <h1>Dutch 
Choco Truffle</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio facilis adipisci totam.</p>
                <a href="#contact"><button>CONTACT US</button></a>
              </div>          
          </div>
          <div className='item-card' id="card7">  
          <div className='card-blur'>
                <h1>Choco Lava Cake</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio facilis adipisci totam.</p>
                <a href="#contact"><button>CONTACT US</button></a>
              </div>         
          </div>
        </div>
      </section>
      <section className='franchise'>
      <h2>FRANCHISE AVAILABLE WORLDWIDE</h2>
      <h1>Our Franchise Partners</h1>
      <div className='partnerContainer'>
      
        <div className='partner1' data-aos="fade-right">
            <div className='map1' data-aos="fade-left"></div>
        </div>
        
        <div className='partner2' data-aos="fade-left">
        <div className='map2' data-aos="fade-right">
          <h2>UTTAR PRADESH</h2>
        </div>
        </div> 
        <div className='partner3' data-aos="fade-right">
        <div className='map3' data-aos="fade-left">
          <h2>JAMMU KASHMIR</h2>
        </div>
        </div> 

      </div>
      <img src={underline} className='underlineImg'></img>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Photo Gallery</h2>
          <Slider {...gallerySettings} className="gallery-slider">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-slide">
                <div className="gallery-item">
                  <img src={image} alt={`Gallery image ${index + 1}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section id="events" className="events">
        <img src={overline}></img>
        <div className="container">
          <h2>Celebrations & Events</h2>
          <div className="events-grid">
            <div className="event-card" data-aos="zoom-in">
              <img src={celebration} alt="anniversary celebration" />
              <div className="event-content">
                <h3>Outdoor Celebrations</h3>
                <p>Make your special day even more memorable with our celebration packages.</p>
              </div>
            </div>
            <div className="event-card" data-aos="zoom-in">
              <img src={corporate} alt="Corporate meeting" />
              <div className="event-content">
                <h3>Corporate meetings</h3>
                <p>Perfect space for team meetings and corporate gatherings.</p>
              </div>
            </div>
            <div className="event-card" data-aos="zoom-in">
              <img src={privateParty} alt="Wedding reception" />
              <div className="event-content">
                <h3>Private Parties</h3>
                <p>Host your private events in our charming atmosphere.</p>
              </div>
            </div>
          </div>
        </div>
        <img src={underline} style={{filter:"brightness(0%)"}}></img>
      </section>

      <section id="reviews" className="reviews">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="reviews-grid">
            <div className="review-card" data-aos="zoom-in-right">
              <div className="review-image">
                <img src={person11} alt="Sandy" />
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="gold" stroke="gold" />
                ))}
              </div>
              <p>"The best Chocolate coffee I've ever had! But Don't go after the shop is closed."</p>
              <p><strong>- Sandy</strong></p>
            </div>
            <div className="review-card" data-aos="zoom-in">
              <div className="review-image">
                <img src={person2} />
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="gold" stroke="gold" />
                ))}
              </div>
              <p>"Amazing service and delicious pastries. This is my go-to spot for morning coffee!"</p>
              <p><strong>- Myskin</strong></p>
            </div>
            <div className="review-card"  data-aos="zoom-in-left">
              <div className="review-image">
                <img src={person3} alt="Sanjay Dutt" />
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="gold" stroke="gold" />
                ))}
              </div>
              <p>"Perfect venue for our team meetings. Great coffee and wonderful staff!"</p>
              <p><strong>- Sanjay Dutt</strong></p>
            </div>
          </div>
        </div>
      </section>
     <section className='delivery'>

     </section>
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>For Franchise</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <User size={20} />
                  <p>Mr.Vikram, San Francisco, USA</p>
                </div>
                <div className="contact-item">
                  <User size={20} />
                  <p>Mr.Dilli, Uttar Pradesh, India</p>
                </div>
                <div className="contact-item">
                  <User size={20} />
                  <p>Mr.Joseph Kuruvilla, Jammu Kashmir, India</p>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <h3>Opening Hours</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <Clock size={20} />
                  <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                </div>
                <div className="contact-item">
                  <Coffee size={20} />
                  <p>Saturday: 8:00 AM - 9:00 PM</p>
                </div>
                <div className="contact-item">
                  <DoorClosed size={20} />
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <h3>Location</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={20} />
                  <p>67, Food Street, Himachal Pradesh, India</p>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <p>(+91) 99225-23367</p>
                </div>
                <div className="contact-item">
                  <Mail size={20} />
                  <p>hello@wildbeans.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className='copyright'>@2025 All Rights Copyright Wild Beans Cafe. Design & Developed By Mohamed Inamul Hussain</p>
      </footer>
    </>
  );
}

export default App;