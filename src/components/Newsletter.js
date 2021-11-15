import ContactLinks from './ContactLinks';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <h2 className="newsletter__heading">
          Get the snarkiest newsletter in tech
        </h2>
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
        <form
          className="newsletter__submission"
          onSubmit={(e) => e.preventDefault()}
        >
          <span className="material-icons" alt="" aria-hidden="true">
            email
          </span>
          <div className="container">
            <input id="email" type="email" placeholder="" />
            <label htmlFor="email">Email</label>
          </div>
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
      <ContactLinks />
    </section>
  );
};

export default Newsletter;
