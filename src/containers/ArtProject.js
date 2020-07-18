import React from 'react';

import { CodeBlock, atomOneDark } from 'react-code-blocks';
import { Container, Divider, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';

import BirdBox from '../components/BirdBox';
import codeBlocks from '../codeblocks/d3Blocks';

import original from '../images/cardinal.png';

const ArtProject = () => {
  return (
    <Container className="mb-4">
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
      <Header as="h2" icon textAlign="center">
        <Icon name="paint brush" circular />
        <Header.Content>My Work of Art</Header.Content>
      </Header>
      <Segment className="mx-1">
        Below is a recreation of Charley Harper's cardinal (the original is on the left while my
        recreation is on the right). I originally planned on creating a selection of birds to
        randomly populate the D3 canvas with every time the page loaded. Turns out I bit off more
        than I could chew and this took waaaaaaaaay longer than I thought it would. But it was fun
        getting my toes wet working with something that I want to get better using.
        <Divider />
        To demystify what you are seeing below each part of the bird is an individual shape being
        drawn onto the canvas in order. Meaning that to make the legs look all nice they were
        created before the body of the bird so it can overlap and create the nice edge that you see.
        D3 drawing works almost like a printing press creating elements on top of another until you
        have the chart or image that you want.
      </Segment>
      <Divider />
      <Grid columns={2} divided stackable>
        <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
          <Header>Original</Header>
          <Image src={original} wrapped ui={false} />
        </Grid.Column>
        <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
          <Header>My Work</Header>
          <BirdBox />
        </Grid.Column>
      </Grid>
      <Divider horizontal className="pt-4">
        <Header as="h3" content="Oh no it's the code!" icon="code" />
      </Divider>
      <Header as="h2" content="Helper functions" />
      <CodeBlock
        language="jsx"
        text={codeBlocks['helpers']}
        theme={atomOneDark}
        showLineNumbers={false}
      />
      <Header as="h2" content="D3 drawing code" />
      <CodeBlock
        language="jsx"
        text={codeBlocks['drawing']}
        theme={atomOneDark}
        showLineNumbers={false}
      />
      <Divider />
      <Header as="h2" icon textAlign="center">
        <Icon name="pencil" circular />
        <Header.Content>Sources</Header.Content>
      </Header>
      <Segment className="mx-1">
        <a href="https://www.charleyharperartstudio.com/">The Charley Harper Art Studio</a>
      </Segment>
      <Divider />
      <Header as="h2" icon textAlign="center">
        <Icon name="image" circular />
        <Header.Content>Image sources</Header.Content>
      </Header>
      <Segment className="mx-1">
        <a href="https://www.charleyharperartstudio.com/media/wysiwyg/cardinal_footer_8x.webp">
          Original Cardinal
        </a>
      </Segment>
    </Container>
  );
};

export default ArtProject;
