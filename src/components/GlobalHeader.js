import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const mapStateToProps = (state) => {
  return {
    url: state.router.location.pathname,
  };
};

const GlobalHeader = ({ url }) => {
  return (
    <>
      <Menu pointing secondary>
        <Link to="/">
          <Menu.Item name="home" active={url === '/'} />
        </Link>
        <Link to="/about">
          <Menu.Item name="about" active={url === '/about'} />
        </Link>
        <Link to="/art-project">
          <Menu.Item name="art project" active={url === '/art-project'} />
        </Link>
        <Menu.Menu position="right">
          <Link to="/projects">
            <Menu.Item name="projects" active={url === '/projects'} />
          </Link>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default connect(mapStateToProps)(GlobalHeader);
