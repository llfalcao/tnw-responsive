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
          <input type="email" placeholder="Email" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
      <ContactLinks />
    </section>
  );
};

export default Newsletter;
