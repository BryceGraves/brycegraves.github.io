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
        As I went and looked for details about the Charley Harper and his work I was really
        surprised with how soulless the sale of his work felt. Because of this ludicrous drive to
        sell his art after he has passed I really struggled finding details about his art outside
        how much I could pay to get one of his works on a mug and that I should really add it to my
        cart. So I ended up going through and snagging pieces that had quotes from Charley Harper
        that I could include with the photo to give it more context and meaning outside of it just
        being a geometric representation of an animal in nature. Some background on Charley Harper:
        Charley Harper was an American Modernist Wildlife artist who was born in the town of
        Frenchton, West Virginia on the 4th of August 1922. His rural upbringing shaped the focus of
        his artwork throughout this professional career. He touted his style as minimal realism. He
        worked to capture the "essence" of what he was trying to convey with the fewest visible
        elements as possible. This style took the complexity of living organism such as birds and
        broke them down into their simplest forms, shapes.{' '}
        <strong>
          Sorry this is short. But I assure you there are far more than 500 words of code.
        </strong>
      </Segment>
      <Divider />
      <Header as="h2" icon textAlign="center">
        <Icon name="image" circular />
        <Header.Content>Gallary</Header.Content>
      </Header>
      <Grid columns={4} divided stackable>
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
                  Image Source
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
                  Image Source
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
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
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
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
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
                  Image Source
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
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/a/n/anhinga.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Anhinga</Card.Header>
                <Card.Description>
                  "This bird has been spear-gunning his grub for eighty million years, so - don't
                  worry - he knows what to do next with his fish kebab. Silent and alert, he patrols
                  southern swamp waters with hull submerged and periscope up. Time to eat: he
                  decreases buoyancy and takes 'er down. Bluegill to starb'd - fire ONE! While his
                  dinner settles, he'll hang his dripping wings out to dry. Indians of the Amazon
                  named him nhinga. Why? Why not?"
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/a/n/anhinga.jpg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/d/a/dam-diligent.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Dam Diligent</Card.Header>
                <Card.Description>
                  "The beaver's work ethic is a part of our national heritage. He's that character
                  we all have a gnawing feeling we ought to keep as busy as. And indeed some of us
                  have kept so busy that we've taken away his job of impeding and impounding the
                  free-flowing waters of America. But when it comes to cost-benefit ratios and
                  environmental impact statements, he's better than the Corps of Engineers by a
                  damsite. So how can you best preserve a pristine stream? Leave it to beavers."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/d/a/dam-diligent.jpg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/i/birdwatcher.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Birdwatcher</Card.Header>
                <Card.Description>
                  "There are cat people and there are bird people. Then there are the cat-bird
                  people, who know that their favorite feline is the ultimate birdwatcher. Who needs
                  binoculars? This bird lover gets close enough to count the feathers without
                  snapping a dry twig, and she knows the best place to fatter her life list—under
                  the bird feeder! Her eye is on the sparrow, which is, for her, just as fulfilling
                  as having it on the condor. But the sparrow will be saved by the bell—this cat is
                  a cat-bird people's cat."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/i/birdwatcher.jpg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/e/beetle_battle.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Beetle Battle</Card.Header>
                <Card.Description>
                  "It's two falls out of three for the guy in the mahogany trunks. Stag beetles have
                  the rich finish of fine, old woodwork and the nightmarish mandibles of man-eating
                  monsters. They also have all the athletic grace of bulldozers, which is why they
                  spend a lot of time flat on their backs, treading air, totally helpless. Is this
                  wrestling match a fake? Not on your scissors hold! It's for the loving cup. And
                  where is she? Bet she got tired of waiting around and went stag."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/e/beetle_battle.jpg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/e/better_mousetrap.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Better Mousetrap</Card.Header>
                <Card.Description>
                  "The barn owl wears a valentine for a face, but he never sends it - he brings it.
                  And like all small creatures of the night, the harvest mouse knows well its
                  message: BE MINE. The owl-mouse affair has been going on for so long that it is a
                  classic example of the enforcement of nature's unrepealable law that some must die
                  in order that others may live. Is there a villain in the piece? Sure. The barn owl
                  is a killer, say we who constantly strive to build a better mousetrap."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/e/better_mousetrap.jpg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/a/baffling_belly_3.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Baffling Belly</Card.Header>
                <Card.Description>
                  "Ever see the red-bellied woodpecker perch on a birch, potato beetle in beak?
                  Neither did the artist, so he painted this picture to find out how it would look.
                  This is the bird with the belly that baffles beginning birders, so its zebra back
                  is turned toward you to avoid a credibility crisis: could you ever again trust the
                  names of the golden-cheeked warbler, the rufous-sided towhee, the rose-breasted
                  grosbeak—even the blue-footed booby—after seeing the red-belly's belly? It's
                  almost all white!"
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/a/baffling_belly_3.jpg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/c/l/claws_1.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Claws</Card.Header>
                <Card.Description>
                  "Suddenly, from out of the shadowy depths of prehistory, terror strikes the beach
                  and it's claws vs. paws and jaws. In the struggle to survive, all armaments are
                  employed, so what is the ultimate weapon? Size? Maybe, but it's mini, not maxi,
                  that matters. Who has bugged you more lately: mastodons or mosquitoes? Ask the
                  vanishing whale if bigger is better. In a predatory world, it's survival of the
                  fittest, not the fattest. And in a pinch, claws give pause to jaws."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/c/l/claws_1.jpg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/c/o/cornprone.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Cornprone</Card.Header>
                <Card.Description>
                  "A raccoon can eat his weight in roastin' ears and the more he eats the more he
                  weighs, and the more he weighs…well you see what I mean. Watch for him on those
                  warm summer nights when the kernel swells the husk and the gardener dreams of
                  feasts forthcoming from his backyard cornucopia—the masked marauder munching by
                  moon-light, raccoon on the cob. Come morning, hear the gardener mutter, Nothin'
                  left but th' fodder. But, aw shucks, ain't he a cute little fritter?"
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/c/o/cornprone.jpg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/i/big_rac_attack.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Big Rac Attack</Card.Header>
                <Card.Description>
                  "Better be on the lookout when you cook out. Let that burger aroma roam around the
                  neighborhood and you're inviting a Big Rac Attack. And can you blame them?
                  Raccoons eat out all the time and—well, wouldn't you welcome a nice home-cooked
                  meal now and then? But did you buy enough burger to feed this raccpack? What
                  happens when you're down to the last patty? Serve the dog food. The cat food.
                  Table scraps. Then let nature take its course—survival of the fattest."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/i/big_rac_attack.jpg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/i/bittern_suite_1.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Bittern Suite</Card.Header>
                <Card.Description>
                  "It's not the Waldorf, but it's home and even with six quibbling siblings in the
                  bed (and five in the middle) there's love along with the lumps. Life for an itty
                  bitty bittern is sweeter than bitter, but mealtimes are messy: breakfast in
                  bed…and lunch…and dinner too. And no maid service. Is that why they hold their
                  noses in the air? Or are they hoity-toity? neither. They're melting into the
                  marshscape by mimicking the tall grass swaying in the breeze. Nobody can hide
                  better'n a bittern."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/i/bittern_suite_1.jpg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/l/blue_jay_bathing.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Blue Jay Bathing</Card.Header>
                <Card.Description>
                  "Here's your friendly neighborhood loudmouth, big on law and order, publishing
                  WANTED posters in stereo. The blue jay is always where the action is because he
                  starts it. A roving tomcat snaps a twig, a drowsy owl shifts his weight, a black
                  snake changes his calligraphy and off goes the bluetailed burglar alarm, rounding
                  up a posse for the big chase. But sometimes silence is golden, like when you're
                  bathing in the brook, naked as a jaybird."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/l/blue_jay_bathing.jpg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/r/brief_bio.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Brief Bio (Luna Moth)</Card.Header>
                <Card.Description>
                  "The life of a luna moth is one of nature's short stories. Even barring mishap,
                  its span is so brief that it doesn't even have time to eat. And its biography may
                  be shortened even further by a bat, an owl, or a boy making an insect collection.
                  This male, hastening to reply to an invitation—sent by scent—from a female,
                  encounters a largemouth bass. But the fish has problems, too. The river it calls
                  home is badly polluted and the boy, tiring of trapping insects, is going fishing."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/r/brief_bio.png"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/r/brrrrthday.jpeg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Brrrthday</Card.Header>
                <Card.Description>
                  "Is penguin parenthood planned? Let's scan their plan. It's 60 below in the
                  rookery 60 miles inland where a pair of passionate penguins yield to the impulse
                  to populate Antarctica. He incubates while she peregrinates, waddling back to the
                  ocean (they are flightless) to feast on seafood (their only fare). Two months
                  later she's back to feed their newborn by regurgitation, but no doggy bag for
                  daddy. He waddles weakly away from fast to feast, 60 miles to go at 60 below. Cool
                  plan - for sub-zero population growth."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/b/r/brrrrthday.jpeg"
                >
                  Image Source
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="d-flex flex-column justify-content-start align-items-center pt-3">
            <Card>
              <Image
                src="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/c/l/clair_de_loon.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Clair de Loon</Card.Header>
                <Card.Description>
                  "All aboard for the moonlight cruise and concert under the stars, where this pair
                  of piggybacking loonlings, only hours old, will bond to the ancestral songs of
                  their kind. Hoots and wails, tremolos and yodels—it's hard to get a Handel on
                  their Water Music, but it will make your spine tingle with its evocation of the
                  awesome mystery of the universe. It's lyrical and hysterical: Mozart and madness,
                  Beethoven and bebop. It's the Rite of Spring—with a dab of Debussy."
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  href="https://www.charleyharperartstudio.com/media/catalog/product/cache/6465499cf1ed769c06f2196045327753/c/l/clair_de_loon.png"
                >
                  Image Source
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
        <a href="https://www.charleyharperartstudio.com/">The Charley Harper Art Studio</a> |
        <a href="https://web.archive.org/web/20090324132719/http://www.peoplelandandwater.gov/people/nps_06-12-07_wildlife-artist-dead.cfm">
          Wildlife Artist Charley Harper Dead at 84
        </a>
      </Segment>
    </Container>
  );
};

export default ArtProject;
