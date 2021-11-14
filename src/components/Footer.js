import ContactLinks from './ContactLinks';

const Footer = ({ logo }) => {
  return (
    <footer className="footer">
      <div className="footer__companyInfo">
        <div className="footer__logoContact">
          {logo}
          <p>The heart of tech</p>
        </div>

        <div className="footer__contact">
          <ContactLinks />
        </div>
      </div>

      <div className="footer__companyLinks">
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
      </div>
    </footer>
  );
};

export default Footer;
