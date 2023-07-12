import React from 'react'
 import './home.css'
 import {Link} from "react-router-dom";
// import './script.js'
import k from "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
import r from "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
import i1 from "./assets/images/srlogo.jpg"
import i2 from "./assets/images/about-img.png"
import i3 from  "./assets/images/character-1.png"
import i4 from   "./assets/images/character-2.png"
import i5 from "./assets/images/character-3.png"
import i6 from "./assets/images/prize-img.png"
import i7 from  "./assets/images/winner-img-1.png"
import i8 from  "./assets/images/winner-img-2.png"
import i9 from   "./assets/images/gallery-img-1.jpg"
import i10 from "./assets/images/gallery-img-2.jpg"
import i11 from "./assets/images/gallery-img-3.jpg"
import i12 from "./assets/images/gallery-img-4.jpg"
import i13 from "./assets/images/team-member-1.png"
import i14 from "./assets/images/team-member-2.png"
import i15 from "./assets/images/team-member-3.png"
import i16 from "./assets/images/team-member-4.png"
import i17 from "./assets/images/team-member-6.png"
import i18 from "./assets/images/team-member-7.png"
import i19 from "./assets/images/team-member-8.png"
import i20 from "./assets/images/team-member-9.png"
import i21 from "./assets/images/team-member-10.png"
import i22 from "./assets/images/team-member-11.png"
import i23 from "./assets/images/team-member-12.png"
import i24 from "./assets/images/gears-img-1.png"
import i25 from "./assets/images/gears-img-2.png"
import i26 from "./assets/images/gears-img-3.png"
import i27 from "./assets/images/newsletter-img.png"
import i28 from "./assets/images/footer-bottom-img.png"
// import "https://fonts.googleapis.com"
// import  "https://fonts.gstatic.com"
// import "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Poppins:wght@400;500;700&display=swap"


const Home= ()=>{
    return(
       <div className='home'> 
        <div id='top'>
            <header className="header">


<div className="overlay" data-overlay></div>

<div className="container">

  <a href="#" className="logo">
    <img src={i1} alt="SR logo" height='100px'/>
  </a>

  <button className="nav-open-btn" data-nav-open-btn>
    <ion-icon name="menu-outline"></ion-icon>
  </button>

  <nav className="navbar" data-nav>

    <div className="navbar-top">

      <a href="#" className="logo">
        <img src={i1} alt="SR logo" height='100px'/>
      </a>

      <button className="nav-close-btn" data-nav-close-btn>
        <ion-icon name="close-outline"></ion-icon>
      </button>

    </div>

    <ul className="navbar-list">

      <li>
        <a href="#hero" className="navbar-link">Home</a>
      </li>

      <li>
        <a href="#about" className="navbar-link">About</a>
      </li>

      <li>
        <a href="#tournament" className="navbar-link">Tournament</a>
      </li>

      <li>
        <a href="#team" className="navbar-link">Team</a>
      </li>

      <li>
        <a href="#gears" className="navbar-link">Gears</a>
      </li>

      <li>
        <a href="#contact" className="navbar-link">Contact</a>
      </li>

    </ul>

    <ul className="nav-social-list">

      <li>
        <a href="#" className="social-link">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
      </li>

    </ul>

  </nav>

  <div className="header-actions">

    <button className="search">
      <ion-icon name="search-outline"></ion-icon>
    </button>

    <button className="btn-sign_in">

      <div className="icon-box">
        <ion-icon name="log-in-outline"></ion-icon>
      </div>

      <span><a href="#">
                            <Link to="/login">
                                Log-In
                            </Link></a></span>

    </button>

  </div>

</div>

</header>





<main>
<article>

 

  <section className="hero" id="hero">
    <div className="container">

      <p className="hero-subtitle">The Season 8</p>

      <h1 className="h1 hero-title">Steam</h1>

      <div className="btn-group">

        <button className="btn btn-primary">
          <span>Watch live</span>

          <ion-icon name="play-circle"></ion-icon>
        </button>

        <button className="btn btn-link">Dream making</button>

      </div>

    </div>
  </section>





  <div className="section-wrapper">

   

    <section className="about" id="about">
      <div className="container">

        <figure className="about-banner">

          <img src={i2} alt="M shape" className="about-img"/>

          <img src={i3} alt="Game character" className="character character-1"/>

          <img src={i4} alt="Game character" className="character character-2"/>

          <img src={i5} alt="Game character" className="character character-3"/>

        </figure>

        <div className="about-content">

          <p className="about-subtitle">Find team member</p>

          <h2 className="about-title">Experience just for gamers <strong>offer</strong> </h2>

          <p className="about-text">
            Nullam quis ante. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum
            viverra felis nunc
            et lorem. In auctor lobortis lacus. Phasellus gravida semper nisi. Aliquam lobortis.
          </p>

          <p className="about-bottom-text">
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>

            <span>Will sharpen your brain and focus</span>
          </p>

        </div>

      </div>
    </section>





    

    <section className="tournament" id="tournament">
      <div className="container">

        <div className="tournament-content">

          <p className="tournament-subtitle">Check out our next</p>

          <h2 className="h3 tournament-title">Gaming tournaments !</h2>

          <p className="tournament-text">
            Lpsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua.
          </p>

          <button className="btn btn-primary">Join with us</button>

        </div>

        <div className="tournament-prize">

          <h2 className="h3 tournament-prize-title">Prize pool</h2>

          <data value="80000">$80000</data>

          <figure>
            <img src={i6} alt="Prize image"/>
          </figure>

        </div>

        <div className="tournament-winners">

          <h2 className="h3 tournament-winners-title">Last winners</h2>

          <ul className="tournament-winners-list">

            <li>
              <div className="winner-card">

                <figure className="card-banner">
                  <img src={i7} alt="Winner image"/>
                </figure>

                <h3 className="h5 card-title">1st place</h3>

              </div>
            </li>

            <li>
              <div className="winner-card">

                <figure className="card-banner">
                  <img src={i8} alt="Winner image"/>
                </figure>

                <h3 className="h5 card-title">2nd place</h3>

              </div>
            </li>

          </ul>

        </div>

      </div>
    </section>





   

    <section className="gallery">
      <div className="container">

        <ul className="gallery-list has-scrollbar">

          <li>
            <figure className="gallery-item">
              <img src={i9} alt="Gallery image"/>
            </figure>
          </li>

          <li>
            <figure className="gallery-item">
              <img src={i10} alt="Gallery image"/>
            </figure>
          </li>

          <li>
            <figure className="gallery-item">
              <img src={i11} alt="Gallery image"/>
            </figure>
          </li>

          <li>
            <figure className="gallery-item">
              <img src={i12} alt="Gallery image"/>
            </figure>
          </li>

        </ul>

      </div>
    </section>





    

    <section className="team" id="team">
      <div className="container">

        <h2 className="h2 section-title">Active Team Members</h2>

        <ul className="team-list">

          <li>
            <a href="#" className="team-member">
              <figure>
                <img src={i13} alt="Team member image"/>
              </figure>

              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="team-member">
              <figure>
                <img src={i14} alt="Team member image"/>
              </figure>

              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="team-member">
              <figure>
                <img src={i15} alt="Team member image"/>
              </figure>

              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="team-member">
              <figure>
                <img src={i16} alt="Team member image"/>
              </figure>

              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="team-member">
              <figure>
                <img src={i17} alt="Team member image"/>
              </figure>

              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="team-member">
              <figure>
                <img src={i18} alt="Team member image"/>
              </figure>

              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="team-member">
              <figure>
                <img src={i19} alt="Team member image"/>
              </figure>

              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="team-member">
              <figure>
                <img src={i20} alt="Team member image"/>
              </figure>

              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="team-member">
              <figure>
                <img src={i21} alt="Team member image"/>
              </figure>

              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="team-member">
              <figure>
                <img src={i22} alt="Team member image"/>
              </figure>

              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="team-member">
              <figure>
                <img src={i23} alt="Team member image"/>
              </figure>

              <ion-icon name="link-outline"></ion-icon>
            </a>
          </li>

        </ul>

        <button className="btn btn-primary">view all members</button>

      </div>
    </section>





    
    <section className="gears" id="gears">
      <div className="container">

        <h2 className="h2 section-title">check our gears</h2>

        <ul className="gears-list">

          <li>
            <div className="gears-card">

              <div className="card-banner">

                <a href="#">
                  <img src={i24} alt="Headphone"/>
                </a>

                <button className="share">
                  <ion-icon name="share-social"></ion-icon>
                </button>

                <div className="card-time-wrapper">
                  <ion-icon name="time-outline"></ion-icon>

                  <span>In 4 days</span>
                </div>

              </div>

              <div className="card-content">

                <div className="card-title-wrapper">

                  <h3 className="h3 card-title">Headphone</h3>

                  <p className="card-subtitle">e-sports</p>

                </div>

                <div className="card-prize">$18</div>

              </div>

              <div className="card-actions">

                <button className="btn btn-primary">
                  <ion-icon name="add-outline"></ion-icon>

                  <span>Add to cart</span>
                </button>

                <button className="btn card-btn">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

              </div>

            </div>
          </li>

          <li>
            <div className="gears-card">

              <div className="card-banner">

                <a href="#">
                  <img src={i25} alt="Controller"/>
                </a>

                <button className="share">
                  <ion-icon name="share-social"></ion-icon>
                </button>

                <div className="card-time-wrapper">
                  <ion-icon name="time-outline"></ion-icon>

                  <span>In 4 days</span>
                </div>

              </div>

              <div className="card-content">

                <div className="card-title-wrapper">

                  <h3 className="h3 card-title">Controller</h3>

                  <p className="card-subtitle">e-sports</p>

                </div>

                <div className="card-prize">$29</div>

              </div>

              <div className="card-actions">

                <button className="btn btn-primary">
                  <ion-icon name="add-outline"></ion-icon>

                  <span>Add to cart</span>
                </button>

                <button className="btn card-btn">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

              </div>

            </div>
          </li>

          <li>
            <div className="gears-card">

              <div className="card-banner">

                <a href="#">
                  <img src={i26} alt="Gaming mask"/>
                </a>

                <button className="share">
                  <ion-icon name="share-social"></ion-icon>
                </button>

                <div className="card-time-wrapper">
                  <ion-icon name="time-outline"></ion-icon>

                  <span>In 4 days</span>
                </div>

              </div>

              <div className="card-content">

                <div className="card-title-wrapper">

                  <h3 className="h3 card-title">Gaming mask</h3>

                  <p className="card-subtitle">e-sports</p>

                </div>

                <div className="card-prize">$45</div>

              </div>

              <div className="card-actions">

                <button className="btn btn-primary">
                  <ion-icon name="add-outline"></ion-icon>

                  <span>Add to cart</span>
                </button>

                <button className="btn card-btn">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

              </div>

            </div>
          </li>

        </ul>

      </div>
    </section>





    

    <section className="newsletter">
      <div className="container">

        <div className="newsletter-card">

          <div className="newsletter-content">
            <figure className="newsletter-img">
              <img src={i27} alt="Newsletter image"/>
            </figure>

            <h2 className="h2 newsletter-title">Subscribe to our newsletter</h2>
          </div>

          <form action="" className="newsletter-form">
            <input type="email" name="email" required placeholder="Your Email Address" className="input-field"/>

            <button type="submit" className="btn btn-secondary">Subscribe</button>
          </form>

        </div>

      </div>
    </section>

  </div>

</article>
</main>







<footer>

<div className="footer-top">
  <div className="container">

    <div className="footer-brand-wrapper">

      <a href="#" className="logo">
        <img src={i1} alt="SR logo" height='100px'/>
      </a>

      <div className="footer-menu-wrapper">

        <ul className="footer-menu-list">

          <li>
            <a href="#hero" className="footer-menu-link">Home</a>
          </li>

          <li>
            <a href="#about" className="footer-menu-link">About</a>
          </li>

          <li>
            <a href="#tournament" className="footer-menu-link">Tournament</a>
          </li>

          <li>
            <a href="#team" className="footer-menu-link">Team</a>
          </li>

          <li>
            <a href="#gears" className="footer-menu-link">Gears</a>
          </li>

          <li>
            <a href="#" className="footer-menu-link">Contact</a>
          </li>

        </ul>

        <div className="footer-input-wrapper">
          <input type="text" name="message" required placeholder="Find Here Now" className="footer-input"/>

          <button className="btn btn-primary">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>

      </div>

    </div>

    <div className="footer-quicklinks">

      <ul className="quicklink-list">

        <li>
          <a href="#" className="quicklink-item">Faq</a>
        </li>

        <li>
          <a href="#" className="quicklink-item">Help center</a>
        </li>

        <li>
          <a href="#" className="quicklink-item">Terms of use</a>
        </li>

        <li>
          <a href="#" className="quicklink-item">Privacy</a>
        </li>

      </ul>

      <ul className="footer-social-list">

        <li>
          <a href="#" className="footer-social-link">
            <ion-icon name="logo-discord"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="footer-social-link">
            <ion-icon name="logo-twitch"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="footer-social-link">
            <ion-icon name="logo-xbox"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" className="footer-social-link">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>

      </ul>

    </div>

  </div>
</div>

<div className="footer-bottom">
  <div className="container">
    <p className="copyright">
      Copyright &copy; 2022 <a href="#">codewithsadee</a>. all rights reserved
    </p>

    <figure className="footer-bottom-img">
      <img src={i28} alt="Online payment companies logo"/>
    </figure>
  </div>
</div>

</footer>







<a href="#top" className="btn btn-primary go-top" data-go-top>
<ion-icon name="chevron-up-outline"></ion-icon>
</a>






<script type="module" src={k}></script>
<script nomodule src={r}></script>

        </div>
        </div>
    )
}


export default  Home