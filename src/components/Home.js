import React, { Component } from "react";
import {
  FirstLinePresentation,
  SecondLinePresentation,
  ViweWorkButton,
  ContainerForLinesAndButton,
  AboutMe,
  MyJourney,
  ContainerForMyJourneyAndAboutMe,
  MyWork,
  ProfileImage,
  GlobalStyle,
  PhotographerWeb,
  Avagram,
  ContainerForMyWork,
  ViewWebButton,
  Label,
  ContainerLabelViewSiteButton
} from "./Home.jsx";
import profile from "../static/profile.png";
import avagram from "../static/Avagram.JPG";
import photographer from "../static/Photographer.JPG";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.ContainerForMyJourneyAndAboutMe = React.createRef();
  }

  handleOnClick = event => {
    if (this.ContainerForMyJourneyAndAboutMe.current) {
      this.ContainerForMyJourneyAndAboutMe.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };
  render() {
    return (
      <div>
        <ContainerForLinesAndButton>
          <GlobalStyle />
          <FirstLinePresentation>Hi, I'm Xenia Gaina.</FirstLinePresentation>
          <SecondLinePresentation>I'm a web developer.</SecondLinePresentation>
          <ViweWorkButton onClick={this.handleOnClick}>
            View my work
          </ViweWorkButton>
        </ContainerForLinesAndButton>
        <div ref={this.ContainerForMyJourneyAndAboutMe}>
          <ContainerForMyJourneyAndAboutMe>
            <ProfileImage src={profile} />
            <AboutMe>About Me</AboutMe>
            <MyJourney>
              My journey started nearly 1 year ago. I'm completely self-taught
              and I have a passion for what I'm doing. I'm constantly looking to
              polish my skills and bring value to users with my creations !
            </MyJourney>
          </ContainerForMyJourneyAndAboutMe>
          <ContainerForMyWork>
            <MyWork>What I've recenly worked on</MyWork>
            <Avagram src={avagram} />
            <ContainerLabelViewSiteButton>
              <Label>Avagram</Label>
              <ViewWebButton
                href="https://avagram.herokuapp.com/"
                target="_blank"
              >
                View Site
              </ViewWebButton>
            </ContainerLabelViewSiteButton>
            <PhotographerWeb src={photographer} />
            <ContainerLabelViewSiteButton>
              <Label>Photographer</Label>
              <ViewWebButton
                href="https://photographer-web-portfolio.herokuapp.com/"
                target="_blank"
              >
                View Site
              </ViewWebButton>
            </ContainerLabelViewSiteButton>
          </ContainerForMyWork>
        </div>
      </div>
    );
  }
}
