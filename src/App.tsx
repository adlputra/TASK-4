import './App.css'; // Import a CSS file for styling

// Navbar Component
const Navbar = () => (
  <div className="navbar">
    <div className="page-padding">
      <div className="container _100">
        <div className="nav-wrapper">
          <a href="/" aria-current="page" className="nav-logo-wrapper w-inline-block w--current">
            <div>@Ayush Barnwal</div>
          </a>
          <div className="nav-link-wrapper">
            <a href="/#about" className="nav-link">About</a>
            <a href="/#work" className="nav-link">Work</a>
            <a href="/contact" className="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Hero Section Component
const HeroSection = () => (
  <div className="main-wrapper">
    <div className="section-home-hero wf-section">
      <div className="hero-hero-layer"></div>
      <div className="marquee-wrapper"></div>
      <a href="#" className="hero-cta w-inline-block">
        <div className="hi-icon">
          <img src="https://uploads-ssl.webflow.com/62b1938e4a11c675eaa9acff/62b1938f4a11c63c95a9ad18_%F0%9F%91%8B.png" loading="lazy" width="56.5" alt="" />
        </div>
        <h1 className="heading-medium is-hero-cta">Hi I’m Ayush</h1>
      </a>
      <div className="page-padding">
        <div className="vertical-spacing hero">
          <div className="container">
            <div className="hero-section-wrapper">
              <div className="margin-bottom-24">
                <h1 className="heading-large text-color-black">Webflow Expert making your design into reality</h1>
              </div>
              <div className="margin-bottom-32">
                <p className="paragraph-large">I help tech startups and agencies to convert their designs into a pixel-perfect website that scales</p>
              </div>
              <a href="#" className="hero-button w-inline-block">
                <div className="button-image">
                  <img src="https://uploads-ssl.webflow.com/62b1938e4a11c675eaa9acff/62c4719fe9b4cb9633d25966_Rectangle%2027.png" loading="lazy" width="40" alt="" />
                </div>
                <div>Checkout my works</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// About Section Component
const AboutSection = () => (
  <div id="about" className="section-home-about wf-section">
    <div className="page-padding">
      <div className="vertical-spacing">
        <div className="container">
          <div className="about-wrapper">
            <div className="section-heading-wrapper">
              <h2 className="heading-medium">About</h2>
            </div>
            <div className="about-content-wrapper">
              <p className="paragraph-large">
                I am a Webflow Expert Based in India working with B2B Start ups and Agencies.<br /><br />
                Built 60+ webflow websites from all over the world and has been featured on platforms like Awwwards and Lapa Ninja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Work Showcase Component
const WorkShowcase = () => (
  <div id="work" className="section-work wf-section">
    <div className="page-padding">
      <div className="vertical-spacing">
        <div className="container">
          <div className="work-wrapper">
            <div className="section-heading-wrapper">
              <h2 className="heading-medium">Recent Work</h2>
            </div>
            <div className="work-list">
              <a href="https://www.decodable.co/" target="_blank" className="work-item-component w-inline-block">
                <div className="work-item-content">
                  <div className="margin-bottom-16">
                    <h3 className="work-item-title">Decodable.co</h3>
                  </div>
                  <div className="work-item-tags-wrapper">
                    <div className="work-item-tag">Web Design</div>
                    <div className="work-item-tags-separator"></div>
                    <div className="work-item-tag">Webflow Development</div>
                  </div>
                </div>
                <div className="work-item-icon-wrapper">
                  <div className="work-item-color w-embed">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.085 15.085V17.7437L25.6161 17.7531L14.1421 29.2271L16.0278 31.1127L27.5017 19.6387L27.5112 30.1699H30.1699V15.085H15.085Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </a>
              {/* Repeat similar structure for other work items */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Testimonials Component
const Testimonials = () => (
  <div className="section-testimonial wf-section">
    <div className="page-padding">
      <div className="vertical-spacing is--bottom-large">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="section-heading-wrapper">
              <h2 className="heading-medium">Testimonials</h2>
            </div>
            <div className="testimonial-list">
              <div className="testimonial-item">
                <div className="bottom-margin-28">
                  <p className="paragraph-large">
                    “Ayush is a masterful Webflow developer. He converts designs with pixel perfect precision - bringing your website to life with elegant interactive states and motion design. You can feel confident that each website will be coded and setup properly. A true 10x developer.”
                  </p>
                </div>
                <div className="testimonial-giver">
                  <div className="testimonial-avatar-wrapper">
                    <img src="https://uploads-ssl.webflow.com/62b1938e4a11c675eaa9acff/62c474fee691231938bdf922_1567496277503%201.png" loading="lazy" alt="" className="testimonial-avatar-image" />
                  </div>
                  <div className="testimonial-giver-content">
                    <div className="test-weight-medium">Charles Haggas</div>
                    <div className="para-small">Creative Director &amp; Co-founder @ Brightscout</div>
                  </div>
                </div>
              </div>
              {/* Repeat similar structure for other testimonials */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Footer Component
const Footer = () => (
  <div className="section-footer wf-section">
    <div className="global-embed">
      <div className="w-embed">
        {/* CSS snippets can be moved to a CSS file */}
      </div>
    </div>
    <div className="page-padding">
      <div className="vertical-spacing is--bottom-small">
        <div className="container">
          <div className="footer-cta-wrapper">
            <div className="footer-cta-heading-wrapper">
              <div className="footer-cta-heading-line">
                <h3 className="heading-large is-mobile-small">Have something in mind?</h3>
              </div>
              <div className="footer-cta-heading-line">
                <div className="footer-cta-image-wrapper">
                  <img src="https://uploads-ssl.webflow.com/62b1938e4a11c675eaa9acff/62c47aad62bdd0864055b0c1_ayush_photo-removebg-preview%202.png" loading="lazy" srcSet="https://uploads-ssl.webflow.com/62b1938e4a11c675eaa9acff/62c47aad62bdd0864055b0c1_ayush_photo-removebg-preview%202-p-500.png 500w, https://uploads-ssl.webflow.com/62b1938e4a11c675eaa9acff/62c47aad62bdd0864055b0c1_ayush_photo-removebg-preview%202-p-800.png 800w, https://uploads-ssl.webflow.com/62b1938e4a11c675eaa9acff/62c47aad62bdd0864055b0c1_ayush_photo-removebg-preview%202.png 862w" sizes="100vw" alt="" />
                </div>
                <h3 className="heading-large is-mobile-small">let’s build it together.</h3>
              </div>
            </div>
            <a href="/contact" className="cta-button w-button">Get in touch</a>
          </div>
          <div className="footer-wrapper">
            <div>Build with 💖 b <a href="https://www.linkedin.com/feed/" target="_blank" className="build-by-link">Ayush</a></div>
            <div className="footer-links-wrapper">
              <a href="https://www.linkedin.com/in/ayush-raj-25796a1b3/" target="_blank" className="footer-link">Linkedin</a>
              <a href="tel:+916201318516" className="footer-link">Call</a>
              <a href="https://twitter.com/ayushrajhere" target="_blank" className="footer-link">Twitter</a>
              <a href="https://www.instagram.com/ayushrajishere/" target="_blank" className="footer-link">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
const App = () => (
  <div id="luxy" className="page-wrapper">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <WorkShowcase />
    <Testimonials />
    <Footer />
  </div>
);

export default App;
