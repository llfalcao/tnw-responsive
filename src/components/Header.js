import { useState } from 'react';
import headerNews from '../static/header';

const Header = ({ logo }) => {
  const columns = [];
  headerNews.forEach((group) => columns.push(group.items));

  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    if (window.innerWidth < 1024) {
      setDrawer(() => {
        if (!drawer) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflowY = 'auto';
        }
        return !drawer;
      });
    }
  };

  return (
    <header className={`sticky-header ${drawer ? 'nav--visible' : ''}`}>
      <nav className="nav">
        <button
          className="nav__drawer"
          type="button"
          aria-label={drawer ? 'Close Menu' : 'Open Menu'}
          onClick={toggleDrawer}
        >
          <span className="material-icons" aria-hidden="true">
            {drawer ? 'close' : 'apps'}
          </span>
        </button>
        <a className="logo" href="##" alt="Home">
          {logo}
        </a>
        <ul className="nav__menu">
          <li className="nav__menuItem menuCurrent">
            <a href="##">Home</a>
          </li>
          <li className="nav__menuItem">
            <a href="##">News</a>

            {headerNews.map((group, i) => (
              <div className="nav__grid hidden" key={i}>
                <h5 className="nav__groupHeading">{group.name}</h5>
                {group.items.map((item, i) => (
                  <div className="nav__groupRow" key={i}>
                    <img className="nav__itemImage" src={item.image} alt="" />
                    <div className="nav__itemText">
                      <h5 className="nav__itemHeading">{item.heading}</h5>
                      <p className="nav__itemDesc">{item.description}</p>
                    </div>
                  </div>
                ))}
                <div className="nav__gridItem"></div>
              </div>
            ))}
          </li>
          <li className="nav__menuItem">
            <a href="##">Events</a>
            <a className="nav__submenu hidden" href="##">
              <span className="nav__submenuLinkTitle">TNW Conference</span>
              <span className="nav__submenuLinkNote">June 16 & 17, 2022</span>
            </a>
          </li>
          <li className="nav__menuItem">
            <a href="##">Programs</a>
          </li>
          <li className="nav__menuItem">
            <a href="##">Spaces</a>
          </li>
          <li className="nav__menuItem">
            <a href="##">Partner with us</a>
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
      </nav>
      <a className="nav__yellow-bar" href="##">
        <p>
          Our 2-for-1 tickets to TNW Conference 2022 ends on November 15! Order
          now before you miss out {'>>'}
        </p>
      </a>
    </header>
  );
};

export default Header;
