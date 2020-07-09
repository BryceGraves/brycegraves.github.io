import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setNavUrl } from '../actions';

import { Menu } from 'semantic-ui-react';

const mapStateToProps = (state) => {
  return {
    url: state.nav.url,
  };
};

const GlobalHeader = ({ url }) => {
  const dispatch = useDispatch();

  const handleItemClick = useCallback(
    (newLocation) => {
      dispatch(setNavUrl(newLocation));
    },
    [dispatch]
  );

  return (
    <>
      <Menu pointing secondary>
        <Menu.Item name="home" active={url === '/'} onClick={() => handleItemClick('/')} />
        <Menu.Item
          name="messages"
          active={url === '/test'}
          onClick={() => handleItemClick('/test')}
        />
        <Menu.Item
          name="friends"
          active={url === '/not-test'}
          onClick={() => handleItemClick('/not-test')}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={url === '/maybe-test'}
            onClick={() => handleItemClick('/maybe-test')}
          />
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default connect(mapStateToProps)(GlobalHeader);
