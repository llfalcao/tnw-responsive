import logo from './static/logo.svg';
import plugged from './static/channels/plugged.svg';
import neural from './static/channels/neural.svg';
import shift from './static/channels/shift.svg';
import hardfork from './static/channels/hardfork.svg';
import growthQuarters from './static/channels/growthQuarters.svg';
import showcase from './content/showcase';
import trending from './content/trending';
import stories from './content/stories';
import ContactLinks from './components/ContactLinks.js';
import './App.css';

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
