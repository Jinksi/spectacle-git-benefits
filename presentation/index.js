// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  kat: require("../assets/kat.png"),
  git: require("../assets/git.png")
};

preloader(images);

const theme = createTheme({
  primary: "rgba(255,81,81, 1)",
  black: "#212121"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Image src={images.git.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={1} caps lineHeight={1} textColor="black">
              Git Benefits
            </Heading>
            <Heading size={1} caps>
              Why should I use git?
            </Heading>
            <Link href="https://github.com/Jinksi/spectacle-git-benefits">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              What is git?
            </Heading>
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Appear>
              <Text>
                Git keeps “snapshots” of your project, one line at a time.
              </Text>
            </Appear>
            <Appear>
              <Text>
                These changed are kept in a “repository”
              </Text>
            </Appear>
            <Appear>
              <Text>
                Can view your previous changes / revert.
              </Text>
            </Appear>
            <Appear>
              <Text>
                Multiple users can work on the project simultaneously and the changes can “merged” cleanly.
              </Text>
            </Appear>
          </Slide>

          <CodeSlide
            lang="bash"
            transition={["slide"]}
            code={require("raw!../assets/code.example")}
            ranges={[
              { loc: [0, 1], title: "Import dependencies" }
            ]}
            />

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
