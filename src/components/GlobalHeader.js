import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';

const mapStateToProps = (state) => {
  return {
    url: state.router.location.pathname,
  };
};

const GlobalHeader = ({ url }) => {
  return (
    <>
      <Menu>
        <Link to="/">
          <Menu.Item name="home" active={url === '/'} />
        </Link>
        <Dropdown item text="Projects">
          <Dropdown.Menu>
            <Link to="/personal-projects">
              <Menu.Item name="personal projects" active={url === '/personal-projects'} />
            </Link>
            <Link to="/art-project">
              <Menu.Item name="art project" active={url === '/art-project'} />
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </>
  );
};

export default connect(mapStateToProps)(GlobalHeader);
