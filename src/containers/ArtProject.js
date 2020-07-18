import React from 'react';

import { CodeBlock, atomOneDark } from 'react-code-blocks';
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';

import BirdBox from '../components/BirdBox';
import codeBlocks from '../codeblocks/d3Blocks';

import original from '../images/cardinal.png';

const ArtProject = () => {
  return (
    <Container className="mb-4">
      <Header as="h2" icon textAlign="center">
        <Icon name="user" circular />
        <Header.Content>Charley Harper</Header.Content>
      </Header>
      <Segment className="mx-1">
        Wildlife artist Charley Harper was born in the town of Frenchton, West Virginia on the 4th
        of August 1922.
      </Segment>
      <Divider />
      <Header as="h2" icon textAlign="center">
        <Icon name="image" circular />
        <Header.Content>Gallary</Header.Content>
      </Header>
      <Grid columns={3} divided stackable>
        <Grid.Row>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://ohiomagazine.imgix.net/sitefinity/images/default-source/articles/2016/august-2016/c-harper-pg32_name_is_puffin.jpg?sfvrsn=bb90d238_2&w=960&auto=compress%2cformat"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>The name is puffin</Card.Header>
                <Card.Description>
                  "If you're like me, you never forget a face but can't recall the name, so you
                  invent elaborate reminders. Take this funny looking bird with the false nose, the
                  pasted-on eyebrows and the bright cheek smears—Emmett Kelly with feathers. I have
                  to say to myself: proceeding precipitously, approaching the populous puffinry with
                  ponderous proboscis packed with piscatorial pabulum for the plumping, precocious
                  pufflings, he rhymes with muffin. I'll never forget what's-his-name."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://ohiomagazine.imgix.net/sitefinity/images/default-source/articles/2016/august-2016/c-harper-pg32_name_is_puffin.jpg?sfvrsn=bb90d238_2&w=960&auto=compress%2cformat"
                >
                  Original
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://ohiomagazine.azureedge.net/sitefinity/images/default-source/articles/2016/august-2016/c-harper-pg35_watermelon_moon.jpg?sfvrsn=ab90d238_2"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Watermelon Moon</Card.Header>
                <Card.Description>
                  "You'd be moonlighting, too, if you had three hungry kids with a delinquent
                  father. So how about a handout? Raccoons will eat just about anything you put out
                  for them, and a lot of things you don't! Keep a tight lid on when they
                  raccoonoiter your premises unless you want your garbage recycled. And be
                  careful—these backyard burglars will steal your heart. Why do raccoons like to
                  wash their food? Wouldn't you, if you had to eat in the dark?"
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://ohiomagazine.azureedge.net/sitefinity/images/default-source/articles/2016/august-2016/c-harper-pg35_watermelon_moon.jpg?sfvrsn=ab90d238_2"
                >
                  Original
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://ohiomagazine.azureedge.net/sitefinity/images/default-source/articles/2016/august-2016/c-harper-pg99_vowlentine.jpg?sfvrsn=b990d238_2"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Vowlentine</Card.Header>
                <Card.Description>
                  "Put a fancy lace border around these barn owls and you could send them to your
                  sweetie on February 14. Be mine! you could say, I love you with all my hearts! Or
                  when you're ready to pop the question: Let's owlope. And on your anniversary:
                  You're still as owlluring as ever. For Flag Day: I pledge owllegiance. Then
                  there's Cowlumbus Day and Owlection Day. And Christmas! Owlleluia. Oops, almost
                  forgot Howlloween. Maybe we'd better start listing them—owlphabetically."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://ohiomagazine.azureedge.net/sitefinity/images/default-source/articles/2016/august-2016/c-harper-pg99_vowlentine.jpg?sfvrsn=b990d238_2"
                >
                  Original
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>{' '}
        <Grid.Row>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/c/a/cardinal_closeup.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Cardinal Close-Up</Card.Header>
                <Card.Description>
                  "A Cardinal adds his blazing exclamation point at the end of a fresh snowfall. The
                  Christmas Count reveals that this scene is becoming increasingly common because
                  the Cardinal is expanding his range northward, apparently to relieve Redbird
                  population pressure in the South. Sunflower seed will keep him coming to your
                  feeding station. Excuse the napkin under the chin—no lap."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/c/a/cardinal_closeup.jpg"
                >
                  Original
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/a/baltimore-oriole_1.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Baltimore Oriole</Card.Header>
                <Card.Description>
                  "Of all bird architects, the Baltimore Oriole seems most aware that form follows
                  function and that bird nests are for birds. Her classic pendulous nest is formed
                  with sensitive engineering and flawless weaving. It's the Nest of the Year, year
                  after year. On a warp of flexible bark fibers attached to the tips of high
                  branches, she looms a bag of grass, horsehair, and string. And when the wind
                  blows, the cradle does rock."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/a/baltimore-oriole_1.jpg"
                >
                  Original
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/a/barn-swallow.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Barn Swallow</Card.Header>
                <Card.Description>
                  "No barn is complete without Barn Swallows. Commuting jet-like from hayloft
                  subirdia to work in the meadow, they distribute good cheer in the barnyard and bad
                  news to flying insects. Expert masons, they mix mud and straw for their pendant,
                  cup-shaped nests stuck to upright timbers and lined with feathers from local
                  leghorns. Long ago they deserted the caves; now no Barn Swallow is complete
                  without a barn."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/a/barn-swallow.jpg"
                >
                  Original
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
      <Segment className="mx-1 text-break">
        The name is puffin:
        https://ohiomagazine.imgix.net/sitefinity/images/default-source/articles/2016/august-2016/c-harper-pg32_name_is_puffin.jpg?sfvrsn=bb90d238_2&w=960&auto=compress%2cformat
        <br />
        <br />
        Watermelon Moon:
        https://ohiomagazine.azureedge.net/sitefinity/images/default-source/articles/2016/august-2016/c-harper-pg35_watermelon_moon.jpg?sfvrsn=ab90d238_2
        <br />
        <br />
        Vowlentine
        https://ohiomagazine.azureedge.net/sitefinity/images/default-source/articles/2016/august-2016/c-harper-pg99_vowlentine.jpg?sfvrsn=b990d238_2
        <br />
        <br />
        Cardinal Close-Up:
        https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/c/a/cardinal_closeup.jpg
        <br />
        <br />
        Baltimore Oriole:
        https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/a/baltimore-oriole_1.jpg
        <br />
        <br />
        Barn Swallow:
        https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/a/barn-swallow.jpg
        <br />
        <br />
        Original Cardinal:
        https://www.charleyharperartstudio.com/media/wysiwyg/cardinal_footer_8x.webp
        <br />
        <br />
      </Segment>
    </Container>
  );
};

export default ArtProject;
