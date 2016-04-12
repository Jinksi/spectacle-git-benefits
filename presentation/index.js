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
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle
            </Heading>
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <CodeSlide
            lang="jsx"
            transition={["zoom"]}
            code={require("raw!../assets/code.example")}
            ranges={[
              { loc: [0, 1], title: "Import dependencies" },
              { loc: [2, 9], title: "Stateless Component" }
            ]}
            />

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
