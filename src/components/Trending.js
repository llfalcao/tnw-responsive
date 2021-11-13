import '../styles/sections/trending.css';
import trending from '../content/trending';

const Trending = () => {
  return (
    <section className="trending">
      <h3 className="section-heading trending__heading">
        Popular Articles Today
      </h3>
      <ul className="trending__articles">
        {trending.map((article, i) => (
          <li className="trending__article" key={i}>
            <a href="##">
              <span className="trending__index">{i + 1}</span>
              <p className="trending__title">{article}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Trending;
