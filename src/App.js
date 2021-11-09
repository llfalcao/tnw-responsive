import logo from './static/logo.svg';
import plugged from './static/plugged.svg';
import neural from './static/neural.svg';
import shift from './static/shift.svg';
import hardfork from './static/hardfork.svg';
import growthQuarters from './static/growthQuarters.svg';
import showcase from './content/showcase';
import trending from './content/trending';
import stories from './content/stories';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <a href="/" alt="Home">
          <img className="logo" src={logo} alt="TNW - The Next Web" />
        </a>
        <ul className="nav__menu">
          <li className="nav__menuItem">
            <a href="/">Home</a>
          </li>
          <li className="nav__menuItem">
            <a href="/">News</a>
          </li>
          <li className="nav__menuItem">
            <a href="/">Events</a>
          </li>
          <li className="nav__menuItem">
            <a href="/">Programs</a>
          </li>
          <li className="nav__menuItem">
            <a href="/">Spaces</a>
          </li>
          <li className="nav__menuItem">
            <a href="/">Partner with us</a>
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
            <span class="material-icons" aria-hidden="true">
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
      </main>
    </div>
  );
};

export default App;
