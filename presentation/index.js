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
  git: require("../assets/git.png"),
  coolStory: require("../assets/cool-story.gif"),
  bb: require("../assets/bb.png"),
  gh: require("../assets/gh.png"),
  sourcetreeApp: require("../assets/sourcetree-app.png"),
  githubApp: require("../assets/github-app.png"),
  githubAppUsage: require("../assets/githubAppUsage.gif"),
  githubAppUsage2: require("../assets/githubAppUsage2.gif")

};

preloader(images);

const theme = createTheme({
  primary: "rgba(255,81,81, 1)",
  black: "#151515"
}, {
  primary: "'Josefin Sans', sans-serif "
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="bar" transition={["slide"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.git.replace("/", "")} margin="0px auto 40px" width="300px"/>
            <Heading size={1} caps lineHeight={1} textColor="black">
              Git Benefits
            </Heading>
            <Text caps>
              Why should I use git?
            </Text>
            <br/>
            <Link href="https://github.com/Jinksi/spectacle-git-benefits">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>

          <Slide bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps fit textColor="primary" textFont="primary" margin="0 0 25px">
              What is git?
            </Heading>
            <BlockQuote textColor="white" size={1}>
              <Quote textSize="3rem" textColor="white">
                Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
              </Quote>
              <Cite><Link textColor="primary" href="https://git-scm.com">git-scm.com</Link></Cite>
            </BlockQuote>
          </Slide>

          <Slide bgImage={images.coolStory}>
            <Heading>COOL</Heading>
          </Slide>

          <Slide bgColor="black">
            <Heading size={1} caps fit textColor="primary" textFont="primary" margin="0 0 25px">
              How does Git benefit me?
            </Heading>
          </Slide>

          <Slide id="benefit-1">
            <Heading size={1} caps>Benefit #1</Heading>
            <Text textColor="white" margin="5vh auto" bgColor="black" padding="3rem">
              Git keeps “snapshots” of your project
            </Text>
            <List>
              <Appear>
                <ListItem>
                  Every time you “commit” a change, you describe it.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  You can go back through each commit in your project's history to view or undo you changes.
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="black" transition={["fade"]}>
            <BlockQuote textColor="white" size={1}>
              <Quote textSize="3rem" textColor="white">
                It's like photoshop history for coders
              </Quote>
              <Cite>Bjorn</Cite>
            </BlockQuote>
          </Slide>

          <Slide id="benefit-2">
            <Heading size={1} caps>Benefit #2</Heading>
            <Text textColor="white" margin="5vh auto" bgColor="black" padding="3rem">
              You can store your git repo securely “in the cloud”
            </Text>
            <Text>
              <Image display="inline-block" height="40px" src={images.gh} />
              <Image display="inline-block" height="40px" src={images.bb} />
            </Text>
            <List>
              <Appear>
                <ListItem>
                  Your work is safe if your computer explodes or office burns down.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Easy to share & “clone” project. You can push/pull changes to multiple computers.
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide id="benefit-3">
            <Heading size={1} caps>Benefit #3</Heading>
            <Text textColor="white" margin="5vh auto" bgColor="black" padding="3rem">
              Multiple people can work on the same project simultaneously
            </Text>
            <List>
              <Appear>
                <ListItem>
                  the changes can “merged” with ease.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  no risk of overwriting each other's code.
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="black">
            <Heading textColor="primary" fit caps>How do I use Git?</Heading>
            <Appear>
              <Heading caps textColor="white">1. Use a GUI</Heading>
            </Appear>
          </Slide>

          <Slide bgColor="black">
            <Link bold caps href="https://desktop.github.com/" textColor="white">Github App
              <Image margin="25px 0" src={images.githubApp} width="100%"/>
            </Link>
          </Slide>

          <Slide bgColor="black">
            <Image src={images.githubAppUsage2} width="100%"/>
          </Slide>

          <Slide bgColor="black">
            <Link bold caps href="https://www.sourcetreeapp.com/" textColor="white">Sourcetree
              <Image margin="25px 0" src={images.sourcetreeApp} width="100%"/>
            </Link>
          </Slide>

          <Slide bgColor="black">
            <Heading textColor="primary" fit caps>How do I use Git?</Heading>
            <Heading fit caps textColor="white">2. Use the command line</Heading>
          </Slide>

          <CodeSlide
            lang="js"
            transition={["slide"]}
            code={require("raw!../assets/code.example")}
            ranges={[
              { title: "Git Commands ( Rough Guide )" },
              { title: "Git Commands ( Rough Guide )", loc: [0, 1], note: "install Git" },
              { title: "Git Commands ( Rough Guide )", loc: [2, 3], note: "initialise Git Repo" },
              { title: "Git Commands ( Rough Guide )", loc: [4, 5], note: "prepare index.html for commit" },
              { title: "Git Commands ( Rough Guide )", loc: [6, 7], note: "commit with a descriptive message" },
              { title: "Git Commands ( Rough Guide )", loc: [8, 9], note: "check the current working tree status" },
              { title: "Git Commands ( Rough Guide )", loc: [10, 11], note: "push to remote repo" },
              { title: "Git Commands ( Rough Guide )", loc: [12, 13], note: "clone an existing remote repo into the 'my-folder' directory" },
              { title: "Git Commands ( Rough Guide )", loc: [14, 15], note: "how do I do this again?" }
            ]}
            />

          <Slide bgColor="black">
            <Heading caps>DOCS</Heading>
            <Link href="https://git-scm.com/book/en/v1/Getting-Started-Installing-Git"><Image width="50%" src={images.git}/></Link>
          </Slide>

          <Slide bgColor="black">
            <Heading size={1} caps fit textColor="primary" textFont="primary" margin="0 0 25px">
              Git & Wordpress
            </Heading>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
