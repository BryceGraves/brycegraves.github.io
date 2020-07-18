import React from 'react';

import { Container, Divider, Grid, Header, Icon, Image, List, Segment } from 'semantic-ui-react';

import BirdBox from '../components/BirdBox';

const ArtProject = () => {
  return (
    <Container className="h-100">
      <Header as="h2" icon textAlign="center">
        <Icon name="paint brush" circular />
        <Header.Content>Charley Harper</Header.Content>
      </Header>
      <Segment className="mx-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Segment>
      <Divider />
      <BirdBox />
    </Container>
  );
};

export default ArtProject;
