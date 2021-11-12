import plugged from './static/channels/plugged.svg';
import neural from './static/channels/neural.svg';
import shift from './static/channels/shift.svg';
import hardfork from './static/channels/hardfork.svg';
import growthQuarters from './static/channels/growthQuarters.svg';
import showcase from './content/showcase';
import trending from './content/trending';
import stories from './content/stories';
import headerNews from './static/header';
import ContactLinks from './components/ContactLinks.js';
import './App.css';

const App = () => {
  const logo = (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 66 16"
      aria-hidden="true"
    >
      <path d="M32.23993 5A6.00284 6.00284 0 0 1 34 9.24261V16h-6v-5.929a2.00249 2.00249 0 0 0-.58856-1.41424l-2.07239-2.07101A2.00315 2.00315 0 0 0 23.92346 6H22v10h-6V0h8.75189a6 6 0 0 1 4.24268 1.75739zM60 0v5.929a2.00245 2.00245 0 0 1-.58856 1.41418l-2.07385 2.071A1.99969 1.99969 0 0 1 55.9234 10h-2.88214A5.99166 5.99166 0 0 0 54 6.75732V0h-6v5.929a2.00245 2.00245 0 0 1-.58856 1.41418l-2.07385 2.071A1.99969 1.99969 0 0 1 43.9234 10H42V0h-6v16h8.75189a6.003 6.003 0 0 0 4.244-1.75739L51 12.23938V16h5.75189a6.003 6.003 0 0 0 4.244-1.75739l3.244-3.24267A6.00264 6.00264 0 0 0 66 6.75732V0zM0 6h4v10h6V6h4V0H0z"></path>
    </svg>
  );
  const columns = [];
  headerNews.forEach((group) => columns.push(group.items));

  return (
    <div className="App">
      <header className="sticky-header">
        <nav className="nav">
          <a className="logo" href="##" alt="Home">
            {logo}
          </a>
          <ul className="nav__menu">
            <li className="nav__menuItem menuCurrent">
              <a href="##">Home</a>
            </li>
            <li className="nav__menuItem">
              <a href="##">News</a>

              {headerNews.map((group, i) => (
                <div className="nav__grid hidden" key={i}>
                  <h5 className="nav__groupHeading">{group.name}</h5>
                  {group.items.map((item, i) => (
                    <div className="nav__groupRow" key={i}>
                      <img className="nav__itemImage" src={item.image} alt="" />
                      <div className="nav__itemText">
                        <h5 className="nav__itemHeading">{item.heading}</h5>
                        <p className="nav__itemDesc">{item.description}</p>
                      </div>
                    </div>
                  ))}
                  <div className="nav__gridItem"></div>
                </div>
              ))}
            </li>
            <li className="nav__menuItem">
              <a href="##">Events</a>
              <a className="nav__submenu hidden" href="##">
                <span className="nav__submenuLinkTitle">TNW Conference</span>
                <span className="nav__submenuLinkNote">June 16 & 17, 2022</span>
              </a>
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
        </nav>
        <a className="nav__yellow-bar" href="##">
          <p>
            Our 2-for-1 tickets to TNW Conference 2022 ends on November 15!
            Order now before you miss out {'>>'}
          </p>
        </a>
      </header>

      <main className="main">
        <section className="main__headlines">
          <div className="main__header">
            <a href="##">{logo}</a>
            <h1>The heart of tech</h1>
          </div>

          <div className="showcase">
            {showcase.map((article, i) => (
              <article className="showcase__article" key={i}>
                <div className="overlay"></div>
                <a href="##">
                  <img
                    className="showcase__articleImage"
                    src={article.image}
                    alt=""
                  />

                  {article.special ? (
                    <div className="showcase__articleHeader showcase__articleHeader--special">
                      <h2>{article.heading}</h2>
                      <button type="button">GET TICKETS</button>
                    </div>
                  ) : (
                    <div className="showcase__articleHeader">
                      <h6 className="showcase__articleHeaderLabel">
                        {article.label}
                      </h6>
                      <h3>{article.heading}</h3>
                    </div>
                  )}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="trending">
          <h3>Popular Articles Today</h3>
          <ul className="trending__articles">
            {trending.map((article, i) => (
              <li className="trending__article" key={i}>
                <span className="trending__index">{i + 1}</span>
                <p className="trending__title">{article}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="stories">
          {stories.map((story, i) => (
            <div className="stories__item" key={i}>
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
              <img src={hardfork} alt="Hard Fork" />
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
              {logo}
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
