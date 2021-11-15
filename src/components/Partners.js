const Partners = () => {
  return (
    <section className="partners">
      <article className="partners__about">
        <header className="partners__header">
          <h6 className="partners__subHeading">REACH YOUR GOALS</h6>
          <h2 className="section-heading partners_heading">Work with us</h2>
          <p className="partners__intro">
            TNW takes center stage in the tech industry, offering creative media
            campaigns, sizzling tech events, bespoke innovation programs, and
            prime office locations in Amsterdam. Want to engage your audience
            more effectively, innovate your business, and position your brand in
            front of a digital-savvy audience?
          </p>
          <button className="partners__cta" type="button">
            GET IN TOUCH
          </button>
        </header>

        <div className="partners__grid">
          <div className="partners__gridItem">
            <img
              src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/visuals/pillar-media.svg"
              alt=""
              aria-hidden="true"
            />
            <h4>Media</h4>
          </div>
          <div className="partners__gridItem">
            <img
              src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/companies/pillar-events.svg"
              alt=""
              aria-hidden="true"
            />
            <h4>Events</h4>
          </div>
          <div className="partners__gridItem">
            <img
              src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/visuals/pillar-spaces.svg"
              alt=""
              aria-hidden="true"
            />
            <h4>Spaces</h4>
          </div>
          <div className="partners__gridItem">
            <img
              src="https://s3.amazonaws.com/events.tnw/hardfork-2018/uploads/companies/pillar-programs.svg"
              alt=""
              aria-hidden="true"
            />
            <h4>Programs</h4>
          </div>
        </div>
      </article>

      <div className="partners__list">
        <a className="partners__listItem" href="##">
          <img
            className="partners__listImage"
            src="https://next.tnwcdn.com/assets/next/img/partners/google.svg"
            alt="Google"
          />
        </a>
        <a className="partners__listItem" href="##">
          <img
            src="https://next.tnwcdn.com/assets/next/img/partners/etoro.svg"
            alt="Etoro"
          />
        </a>
        <a className="partners__listItem" href="##">
          <img
            src="https://next.tnwcdn.com/assets/next/img/partners/ibm.svg"
            alt="IBM"
          />
        </a>
        <a className="partners__listItem" href="##">
          <img
            src="https://next.tnwcdn.com/assets/next/img/partners/microsoft.svg"
            alt="Microsoft"
          />
        </a>
        <a className="partners__listItem" href="##">
          <img
            src="https://next.tnwcdn.com/assets/next/img/partners/paypal.svg"
            alt="PayPal"
          />
        </a>
        <a className="partners__listItem" href="##">
          <img
            src="https://next.tnwcdn.com/assets/next/img/partners/vodafone.svg"
            alt="Vodafone"
          />
        </a>
        <a className="partners__listItem" href="##">
          <img
            src="https://next.tnwcdn.com/assets/next/img/partners/accenture.svg"
            alt="Accenture"
          />
        </a>
        <a className="partners__listItem" href="##">
          <img
            src="https://next.tnwcdn.com/assets/next/img/partners/mckinsey-company.svg"
            alt="McKinsey & Company"
          />
        </a>
      </div>
    </section>
  );
};

export default Partners;
