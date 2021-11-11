import logo from './static/logo.svg';
import plugged from './static/channels/plugged.svg';
import neural from './static/channels/neural.svg';
import shift from './static/channels/shift.svg';
import hardfork from './static/channels/hardfork.svg';
import growthQuarters from './static/channels/growthQuarters.svg';
import showcase from './content/showcase';
import trending from './content/trending';
import stories from './content/stories';
import './App.css';

const ContactLinks = () => {
  return (
    <>
      <li className="contact-item">
        <a href="##" alt="Facebook">
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M16,1V15a1.007,1.007,0,0,1-1,1H11V9.78125h2l.33594-2.30469H11V5.66406a.9118.9118,0,0,1,1-1.03125h1.5V2.55469a11.284,11.284,0,0,0-1.64062-.10938c-2.19532,0-3.30469,1.21875-3.30469,3.03907V7.47656h-2V9.78125h2V16H1a1.007,1.007,0,0,1-1-1V1A1.007,1.007,0,0,1,1,0H15A1.007,1.007,0,0,1,16,1Z"></path>
          </svg>
        </a>
      </li>
      <li className="contact-item">
        <a href="##" alt="Instagram">
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M8,1.44144c2.1361,0,2.38911.00815,3.23268.04664a4.42649,4.42649,0,0,1,1.48549.27546A2.47861,2.47861,0,0,1,13.638,2.362a2.47851,2.47851,0,0,1,.59844.91986,4.42673,4.42673,0,0,1,.27546,1.48548c.03849.84358.04664,1.0966.04664,3.23269s-.00815,2.38911-.04664,3.23268a4.42675,4.42675,0,0,1-.27546,1.48549,2.6493,2.6493,0,0,1-1.51829,1.51829,4.42675,4.42675,0,0,1-1.48549.27546c-.84345.03849-1.09644.04664-3.23268.04664s-2.38923-.00815-3.23268-.04664a4.42675,4.42675,0,0,1-1.48549-.27546A2.47849,2.47849,0,0,1,2.362,13.638a2.47863,2.47863,0,0,1-.59844-.91986,4.42647,4.42647,0,0,1-.27546-1.48548C1.44959,10.38911,1.44144,10.1361,1.44144,8s.00815-2.38911.04664-3.23268a4.42649,4.42649,0,0,1,.27546-1.48549A2.47861,2.47861,0,0,1,2.362,2.362a2.47863,2.47863,0,0,1,.91986-.59844,4.42647,4.42647,0,0,1,1.48548-.27546C5.61089,1.44959,5.86391,1.44144,8,1.44144M8,0C5.82733,0,5.55489.0092,4.70161.04813A5.8719,5.8719,0,0,0,2.75969.42a3.92134,3.92134,0,0,0-1.417.92273A3.92134,3.92134,0,0,0,.42,2.75969,5.8719,5.8719,0,0,0,.04813,4.70161C.0092,5.55489,0,5.82732,0,8s.0092,2.4451.04813,3.29839A5.8719,5.8719,0,0,0,.42,13.24031a3.92142,3.92142,0,0,0,.92273,1.417,3.92134,3.92134,0,0,0,1.417.92273,5.8719,5.8719,0,0,0,1.94192.37186C5.55489,15.9908,5.82733,16,8,16s2.4451-.0092,3.29839-.04813A5.8719,5.8719,0,0,0,13.24031,15.58a4.09069,4.09069,0,0,0,2.3397-2.3397,5.8719,5.8719,0,0,0,.37186-1.94192C15.9908,10.4451,16,10.17267,16,8s-.0092-2.44511-.04813-3.29839A5.8719,5.8719,0,0,0,15.58,2.75969a3.92134,3.92134,0,0,0-.92273-1.417A3.92134,3.92134,0,0,0,13.24031.42,5.8719,5.8719,0,0,0,11.29839.04813C10.4451.0092,10.17267,0,8,0Z"></path>
            <path d="M8,3.89189A4.10811,4.10811,0,1,0,12.10811,8,4.10811,4.10811,0,0,0,8,3.89189Zm0,6.77477A2.66667,2.66667,0,1,1,10.66667,8,2.66666,2.66666,0,0,1,8,10.66666Z"></path>
            <circle cx="12.27042" cy="3.72958" r="0.96"></circle>
          </svg>
        </a>
      </li>
      <li className="contact-item">
        <a href="##" alt="Twitter">
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M14.36719,4.73438v.42968A9.26817,9.26817,0,0,1,5.03906,14.5,9.21783,9.21783,0,0,1,0,13.16406a5.18177,5.18177,0,0,0,.78125.05469,6.62381,6.62381,0,0,0,4.07031-1.55469A3.27084,3.27084,0,0,1,1.79688,9.38281a3.22534,3.22534,0,0,0,.60937.0625,3.2821,3.2821,0,0,0,.875-.11719A3.27938,3.27938,0,0,1,.64844,6.10938V6.07031a3.29,3.29,0,0,0,1.48437.40625A3.266,3.266,0,0,1,.66406,3.75781a3.12781,3.12781,0,0,1,.44532-1.59375A9.32841,9.32841,0,0,0,7.86719,5.53125a3.4194,3.4194,0,0,1-.07031-.75781A3.26752,3.26752,0,0,1,11.07031,1.5a3.39565,3.39565,0,0,1,2.41407,1.03125,6.58929,6.58929,0,0,0,2.07031-.79687,3.25439,3.25439,0,0,1-1.44531,1.82031A6.402,6.402,0,0,0,16,3.03125,6.64835,6.64835,0,0,1,14.36719,4.73438Z"></path>
          </svg>
        </a>
      </li>
      <li className="contact-item">
        <a href="##" alt="YouTube">
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M16,8c0,5.66406,0,5.66406-8,5.66406S0,13.66406,0,8,0,2.33594,8,2.33594,16,2.33594,16,8ZM11,8,6,5v6Z"></path>
          </svg>
        </a>
      </li>
      <li className="contact-item">
        <a href="##" alt="Flipboard">
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M0,0V16H16V0ZM12.8,6.4H9.6V9.6H6.4v3.2H3.2V3.2h9.6Z"></path>
          </svg>
        </a>
      </li>
      <li className="contact-item">
        <a href="##" alt="Mail">
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M1.11621 4.2666a2.0026 2.0026 0 0 1-.583-.8833v-.7666A.47788.47788 0 0 1 .667 2.2749a.56688.56688 0 0 1 .3164-.1748 49.3662 49.3662 0 0 1 14.0166 0 .57417.57417 0 0 1 .333.1748.482.482 0 0 1 .13379.3418v.7666a2.0026 2.0026 0 0 1-.583.8833L9.2002 8.56689A1.88658 1.88658 0 0 1 8 8.93311a1.88658 1.88658 0 0 1-1.2002-.36622zM10.18359 10l5.28321-4.0498v7.4331a.48117.48117 0 0 1-.13379.3418.57141.57141 0 0 1-.333.1748 48.721 48.721 0 0 1-7 .5 49.29676 49.29676 0 0 1-7.0166-.5.564.564 0 0 1-.31641-.1748.47707.47707 0 0 1-.13379-.3418V5.9502L5.81641 10A3.5224 3.5224 0 0 0 8 10.6665 3.5224 3.5224 0 0 0 10.18359 10z"></path>
          </svg>
        </a>
      </li>
      <li className="contact-item">
        <a href="##" alt="LinkedIn">
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M14.81635,0H1.18015A1.16757,1.16757,0,0,0,0,1.15365V14.84546A1.16833,1.16833,0,0,0,1.18015,16h13.6362A1.17052,1.17052,0,0,0,16,14.84546V1.15365A1.16977,1.16977,0,0,0,14.81635,0ZM4.74622,13.63368H2.37072V5.99826h2.3755ZM3.55912,4.95505A1.37618,1.37618,0,1,1,4.93457,3.57878,1.37558,1.37558,0,0,1,3.55912,4.95505Zm10.07539,8.67863H11.26159V9.92057c0-.88541-.01519-2.02452-1.23311-2.02452-1.23481,0-1.42321.96506-1.42321,1.96115v3.77648H6.235V5.99826h2.2748V7.04207h.03255a2.49287,2.49287,0,0,1,2.24529-1.23329c2.40281,0,2.84689,1.581,2.84689,3.6374Z"></path>
          </svg>
        </a>
      </li>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <a href="##" alt="Home">
          <img className="logo" src={logo} alt="TNW - The Next Web" />
        </a>
        <ul className="nav__menu">
          <li className="nav__menuItem">
            <a href="##">Home</a>
          </li>
          <li className="nav__menuItem">
            <a href="##">News</a>
          </li>
          <li className="nav__menuItem">
            <a href="##">Events</a>
          </li>
          <li className="nav__menuItem">
            <a href="##">Programs</a>
          </li>
          <li className="nav__menuItem">
            <a href="##">Spaces</a>
          </li>
          <li className="nav__menuItem">
            <a href="##">Partner with us</a>
          </li>
          <li className="nav__newsletter">
            <button type="button" aria-label="Newsletter">
              <span
                className="material-icons"
                alt="Newsletters"
                aria-hidden="true"
              >
                email
              </span>
            </button>
          </li>
        </ul>

        <div className="nav__yellow-bar">
          <p>
            TNW Conference 2022 will be bigger, bolder, and (dare we say)
            better! Get your tickets now {'>>'}
          </p>
        </div>
      </nav>

      <main className="main">
        <section>
          <div>
            <img src={logo} alt="" />
            <h1>The heart of tech</h1>
          </div>

          <div className="showcase">
            {showcase.map((article) => (
              <article className="card">
                <img src={article.image} alt="" />
                <div className="overlay"></div>
                <div className="card__header">
                  <h6>{article.label}</h6>
                  <h3>{article.heading}</h3>
                </div>
              </article>
            ))}

            <article className="card">
              <img src="/images/showcase/tnw-conf-ad.jpg" alt="" />
              <div className="overlay"></div>
              <div className="card__header">
                <h2>
                  Mark your calendar for June 16 & 17! Join us at TNW Conference
                  2022
                </h2>
                <button type="button">GET TICKETS</button>
              </div>
            </article>
          </div>
        </section>

        <section className="trending">
          <h3>Popular Articles Today</h3>
          <ul className="trending__articles">
            {trending.map((article, i) => (
              <li className="trending__article">
                <span className="trending__index">{i + 1}</span>
                <p className="trending__title">{article}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="stories">
          {stories.map((story) => (
            <div className="stories__item">
              <img className="stories__image" src={story.image} alt="" />
              <h4 className="stories__heading">{story.heading}</h4>
              <p className="stories__timePosted">{story.since}</p>
            </div>
          ))}
          <button type="button">
            ALL NEWS{' '}
            <span className="material-icons" aria-hidden="true">
              chevron_right
            </span>
          </button>
        </section>

        <section className="channels">
          <h2>Explore our channels</h2>
          <div className="channels__container">
            <div className="channels__item" data-label="plugged">
              <img src={plugged} alt="Plugged" />
              <h4>Your sardonic source for consumer tech stories</h4>
            </div>
            <div className="channels__item" data-label="neural">
              <img src={neural} alt="Neural" />
              <h4>Human-centric AI news and analysis </h4>
            </div>
            <div className="channels__item" data-label="shift">
              <img src={shift} alt="Shift" />
              <h4>Driving the future of sustainable mobility</h4>
            </div>
            <div className="channels__item" data-label="growth-quarters">
              <img src={growthQuarters} alt="Growth Quarters" />
              <h4>No-nonsense perspectives on startup growth</h4>
            </div>
            <div className="channels__item" data-label="hardfork">
              <img src={hardfork} alt="Hardfork" />
              <h4>Inside money, markets, and Big Tech</h4>
            </div>
          </div>
        </section>

        <section className="newsletter">
          <h2>Get the snarkiest newsletter in tech</h2>
          <p>
            Subscribe to our twice-weekly{' '}
            <a className="newsletter__link" href="##">
              Big Spam
            </a>{' '}
            or check out our{' '}
            <a className="newsletter__link" href="##">
              other newsletters.
            </a>
          </p>
          <div className="newsletter__submission">
            <span className="material-icons" alt="" aria-hidden="true">
              email
            </span>
            <input type="email" placeholder="Email" />
            <button type="button">SUBSCRIBE</button>
          </div>

          <ul className="newsletter__contact">
            <ContactLinks />
          </ul>
        </section>

        <section className="videos">
          <div className="videos__main"></div>
          <div className="videos__list">
            {/* TODO: fetch latest videos from the TNW youtube channel */}
          </div>
        </section>

        <section className="partners">
          <div className="top">
            <header className="partners__header">
              <h6 className="partners__subHeading">REACH YOUR GOALS</h6>
              <h2 className="partners_heading">Work with us</h2>
              <p className="partners__intro">
                TNW takes center stage in the tech industry, offering creative
                media campaigns, sizzling tech events, bespoke innovation
                programs, and prime office locations in Amsterdam. Want to
                engage your audience more effectively, innovate your business,
                and position your brand in front of a digital-savvy audience?
              </p>
              <button className="partners_cta" type="button">
                GET IN TOUCH
              </button>
            </header>

            <div className="partners__grid">
              <div className="partners__gridItem">
                <img
                  src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/visuals/pillar-media.svg"
                  alt=""
                />
                <h4>Media</h4>
              </div>
              <div className="partners__gridItem">
                <img
                  src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/companies/pillar-events.svg"
                  alt=""
                />
                <h4>Events</h4>
              </div>
              <div className="partners__gridItem">
                <img
                  src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/visuals/pillar-spaces.svg"
                  alt=""
                />
                <h4>Spaces</h4>
              </div>
              <div className="partners__gridItem">
                <img
                  src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/companies/pillar-programs.svg"
                  alt=""
                />
                <h4>Programs</h4>
              </div>
            </div>
          </div>

          <div className="partners__list">
            <a href="##">
              <img
                src="https://next.tnwcdn.com/assets/next/img/partners/google.svg"
                alt="Google"
              />
            </a>
            <a href="##">
              <img
                src="https://next.tnwcdn.com/assets/next/img/partners/etoro.svg"
                alt="Etoro"
              />
            </a>
            <a href="##">
              <img
                src="https://next.tnwcdn.com/assets/next/img/partners/ibm.svg"
                alt="IBM"
              />
            </a>
            <a href="##">
              <img
                src="https://next.tnwcdn.com/assets/next/img/partners/microsoft.svg"
                alt="Microsoft"
              />
            </a>
            <a href="##">
              <img
                src="https://next.tnwcdn.com/assets/next/img/partners/paypal.svg"
                alt="PayPal"
              />
            </a>
            <a href="##">
              <img
                src="https://next.tnwcdn.com/assets/next/img/partners/vodafone.svg"
                alt="Vodafone"
              />
            </a>
            <a href="##">
              <img
                src="https://next.tnwcdn.com/assets/next/img/partners/accenture.svg"
                alt="Accenture"
              />
            </a>
            <a href="##">
              <img
                src="https://next.tnwcdn.com/assets/next/img/partners/mckinsey-company.svg"
                alt="McKinsey & Company"
              />
            </a>
          </div>
        </section>

        <footer className="footer">
          <div>
            <div className="footer__logoContact">
              <img src={logo} alt="TNW - The Next Web" />
              <p>The heart of tech</p>
            </div>

            <div className="footer__contact">
              <ContactLinks />
            </div>
          </div>

          <div className="footer__more">
            <h3 className="footer__heading">MORE TNW</h3>
            <ul className="footer__menu">
              <li className="footer__menuLink">
                <a href="##">Media</a>
                <a href="##">Events</a>
                <a href="##">Programs</a>
                <a href="##">Spaces</a>
                <a href="##">Newsletters</a>
                <a href="##">Deals</a>
              </li>
            </ul>
          </div>
          <div className="footer__about">
            <h3 className="footer__heading">ABOUT TNW</h3>
            <ul className="footer__menu">
              <li className="footer__menuLink">
                <a href="##">Partner with us</a>
                <a href="##">Jobs</a>
                <a href="##">Terms & Conditions</a>
                <a href="##">Cookie Statement</a>
                <a href="##">Privacy Statement</a>
                <a href="##">Editorial Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
