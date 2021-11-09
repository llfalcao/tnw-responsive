import logo from './logo.svg';
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

          <div>{/* grid */}</div>
        </section>
      </main>
    </div>
  );
};

export default App;
