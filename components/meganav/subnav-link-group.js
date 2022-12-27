import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from '@reach/router';

const SubNavLinkGroup = ({ groupKey = '', headerText = '', items = [] }) => {
  const [currentPathname, setCurrentPathname] = useState(null);

  useEffect(() => {
    setCurrentPathname(document.location.pathname);
  }, []);
  return (
    <div className={`megamenu-submenu-group megamenu-submenu-group-${groupKey}`}>
      <h3 className="megamenu-submenu-header">{headerText}</h3>
      <ul>
        {items.map((item, index) => (
          <li className="megamenu-submenu-link" key={index}>
            <a
              className={`nav-link nav-link-${index}`}
              data-testid={`link-${groupKey}-${index}`}
              href={item.url}
              aria-current={currentPathname === item.url ? 'page' : null}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

SubNavLinkGroup.propTypes = {
  groupKey: PropTypes.string,
  headerText: PropTypes.string,
  items: PropTypes.array,
};

SubNavLinkGroup.defaultProps = {
  groupKey: '',
  headerText: '',
  items: [],
};

export default SubNavLinkGroup;
