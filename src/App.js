import './styles/main.css';
import { useEffect } from 'react';
import Channels from './components/Channels';
import Newsletter from './components/Newsletter';
import Showcase from './components/Showcase';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Header from './components/Header';
import Stories from './components/Stories';
import Trending from './components/Trending';

const DEFAULT_TITLE = 'TNW | The heart of tech';
const logo = (
  <svg
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 66 16"
    aria-hidden="true"
  >
    <path d="M32.23993 5A6.00284 6.00284 0 0 1 34 9.24261V16h-6v-5.929a2.00249 2.00249 0 0 0-.58856-1.41424l-2.07239-2.07101A2.00315 2.00315 0 0 0 23.92346 6H22v10h-6V0h8.75189a6 6 0 0 1 4.24268 1.75739zM60 0v5.929a2.00245 2.00245 0 0 1-.58856 1.41418l-2.07385 2.071A1.99969 1.99969 0 0 1 55.9234 10h-2.88214A5.99166 5.99166 0 0 0 54 6.75732V0h-6v5.929a2.00245 2.00245 0 0 1-.58856 1.41418l-2.07385 2.071A1.99969 1.99969 0 0 1 43.9234 10H42V0h-6v16h8.75189a6.003 6.003 0 0 0 4.244-1.75739L51 12.23938V16h5.75189a6.003 6.003 0 0 0 4.244-1.75739l3.244-3.24267A6.00264 6.00264 0 0 0 66 6.75732V0zM0 6h4v10h6V6h4V0H0z"></path>
  </svg>
);

const App = () => {
  useEffect(() => {
    window.addEventListener('blur', () => (document.title = 'TNW | <3'));
    window.addEventListener('focus', () => (document.title = DEFAULT_TITLE));
  }, []);

  function handleTab(e) {
    if (e.key.toLowerCase() === 'tab') {
      const element = document.querySelector(':focus');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="App" onKeyDown={handleTab}>
      <Header logo={logo} />

      <main className="main">
        <section className="main__headlines">
          <div className="main__header">
            <a href="##" alt="The Next Web">
              {logo}
            </a>
            <h1>The heart of tech</h1>
          </div>

          <Showcase />
        </section>

        <Trending />
        <Stories />
        <Channels />
        <Newsletter />

        <section className="videos">
          <div className="videos__main"></div>
          <div className="videos__list">
            {/* TODO: fetch latest videos from the TNW youtube channel */}
          </div>
        </section>

        <Partners />
        <Footer logo={logo} />
      </main>
    </div>
  );
};

export default App;
