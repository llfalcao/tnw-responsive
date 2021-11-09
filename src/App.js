import logo from './logo.svg';
import showcase from './content/showcase';
import trending from './content/trending';
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
            <span className="material-icons" alt="Newsletters">
              email
            </span>
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
              <img src="/images/tnw-conf-ad.jpg" alt="" />
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
      </main>
    </div>
  );
};

export default App;
