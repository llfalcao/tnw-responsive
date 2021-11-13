import '../styles/sections/channels.css';
import plugged from '../static/channels/plugged.svg';
import neural from '../static/channels/neural.svg';
import shift from '../static/channels/shift.svg';
import hardfork from '../static/channels/hardfork.svg';
import growthQuarters from '../static/channels/growthQuarters.svg';

const Channels = () => {
  return (
    <section className="channels">
      <h2 className="section-heading channels__heading">
        Explore our channels
      </h2>
      <div className="channels__container">
        <a className="channels__item" data-label="plugged" href="##">
          <img className="channels__logo" src={plugged} alt="Plugged" />
          <h4>Your sardonic source for consumer tech stories</h4>
        </a>
        <a className="channels__item" data-label="neural" href="##">
          <img className="channels__logo" src={neural} alt="Neural" />
          <h4>Human-centric AI news and analysis </h4>
        </a>
        <a className="channels__item" data-label="shift" href="##">
          <img className="channels__logo" src={shift} alt="Shift" />
          <h4>Driving the future of sustainable mobility</h4>
        </a>
        <a className="channels__item" data-label="growth-quarters" href="##">
          <img
            className="channels__logo"
            src={growthQuarters}
            alt="Growth Quarters"
          />
          <h4>No-nonsense perspectives on startup growth</h4>
        </a>
        <a className="channels__item" data-label="hardfork" href="##">
          <img className="channels__logo" src={hardfork} alt="Hard Fork" />
          <h4>Inside money, markets, and Big Tech</h4>
        </a>
      </div>
    </section>
  );
};

export default Channels;
