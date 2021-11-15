import { useState } from 'react';
import headerNews from '../static/header';

const columns = [];
headerNews.forEach((group) => columns.push(group.items));

const Header = ({ logo }) => {
  const [drawer, setDrawer] = useState(false);
  const [submenu, setSubmenu] = useState({ news: 0, events: 0 });

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

  const getOffset = (e, id) => {
    const menuItem = e.target.closest('.nav__menuItem');
    const offset = menuItem.getBoundingClientRect().left;

    setSubmenu((prevState) => {
      let nextState = { ...prevState };
      nextState[id] = offset;
      return nextState;
    });
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

        <a className="logo" href="##" aria-label="Home">
          {logo}
        </a>

        <ul className="nav__menu" aria-hidden={drawer ? 'false' : 'true'}>
          <li className="nav__menuItem menuCurrent">
            <a href="##">Home</a>
          </li>
          <li
            className="nav__menuItem"
            onMouseOver={(e) => getOffset(e, 'news')}
          >
            <a href="##">
              News
              <span className="material-icons" aria-hidden="true">
                keyboard_arrow_down
              </span>
            </a>

            <div
              className="nav__submenu hidden"
              style={{ left: `-${submenu.news}px` }}
            >
              {headerNews.map((group, i) => (
                <div className="nav__submenuGroup" key={i}>
                  <h5 className="nav__groupHeading">{group.name}</h5>
                  <div className="container">
                    {group.items.map((item, i) => (
                      <a className="nav__groupCol" href="##" key={i}>
                        <img
                          className="nav__itemImage"
                          src={item.image}
                          alt=""
                        />
                        <div className="nav__itemText">
                          <h5 className="nav__itemHeading">{item.heading}</h5>
                          <p className="nav__itemDesc">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </li>
          <li
            className="nav__menuItem"
            onMouseOver={(e) => getOffset(e, 'events')}
          >
            <a href="##">
              Events
              <span className="material-icons" aria-hidden="true">
                keyboard_arrow_down
              </span>
            </a>
            <a
              className="nav__submenu hidden"
              href="##"
              style={{
                width: 'max-content',
                left: '-60px',
              }}
            >
              <div className="tnw-conf">
                <span className="nav__submenuLinkTitle">TNW Conference</span>
                <span className="nav__submenuLinkNote">June 16 & 17, 2022</span>
              </div>
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
