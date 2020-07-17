import React from 'react';

import { Container, Divider, Grid, Header, Icon, Image, List, Segment } from 'semantic-ui-react';

const ArtProject = () => {
  return (
    <Container>
      <Header as="h2" icon textAlign="center">
        <Icon name="paint brush" circular />
        <Header.Content>Charley Harper</Header.Content>
      </Header>
      <Segment className="mx-1">
        <List bulleted>
          <List.Item>Birthday</List.Item>
          <List.Item>Where was he born?</List.Item>
          <List.Item>
            Benefits
            <List.List>
              <List.Item href="#">Link to somewhere</List.Item>
              <List.Item>Rebates</List.Item>
              <List.Item>Discounts</List.Item>
            </List.List>
          </List.Item>
          <List.Item>Warranty</List.Item>
        </List>
      </Segment>
      <Divider />
    </Container>
  );
};

export default ArtProject;
