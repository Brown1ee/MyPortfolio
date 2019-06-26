import styled, { createGlobalStyle } from "styled-components";

export const FirstLinePresentation = styled.h1`
  color: pink;
  font-family: "Nanum Gothic", sans-serif;
  padding: 5px;
`;

export const SecondLinePresentation = styled.h1`
  color: silver;
  font-family: "Nanum Gothic", sans-serif;
  padding: 5px;
`;
export const AboutMe = styled.h1`
  color: silver;
  font-family: "Nanum Gothic", sans-serif;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 28px;
  }
`;

export const ViweWorkButton = styled.button`
  color: white;
  background-color: black;
  border: none;
  border-radius: 9px;
  height: 80px;
  width: 190px;
  font-size: 20px;
  font-family: "Nanum Gothic", sans-serif;
  margin: 10px;
  cursor: pointer;
`;
export const ContainerForLinesAndButton = styled.div`
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyJourney = styled.p`
  font-family: "Nanum Gothic", sans-serif;
  color: silver;
  width: 530px;
  text-align: center;
  position: relative;
  padding: 30px;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const ContainerForMyJourneyAndAboutMe = styled.div`
  margin-top: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 30px;
  font-size: 20px;
  background-color: black;
`;
export const MyWork = styled.h1`
  font-family: "Nanum Gothic", sans-serif;
  color: silver;
  text-align: center;
  margin: 50px 0;
`;

export const ProfileImage = styled.img`
  @media (max-width: 700px) {
    width: 70%;
  }
`;

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
}
@media (max-width: 700px) {
    *{
    margin: 0;
}
  }
`;
export const PhotographerWeb = styled.img`
  width: 500px;
  height: 250px;
  margin: 30px 0;
  border-radius: 3px;
  border: 1px solid black;
  opacity: 0.3;
  @media (max-width: 700px) {
    width: 90%;
    height: 250px;
  }
`;

export const Avagram = styled.img`
  width: 500px;
  height: 250px;
  margin: 30px 0;
  border-radius: 3px;
  border: 1px solid black;
  opacity: 0.3;
  @media (max-width: 700px) {
    width: 90%;
    height: 250px;
  }
`;
export const ContainerForMyWork = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ViewWebButton = styled.a`
  color: white;
  background-color: black;
  padding: 14px 25px;
  border: none;
  border-radius: 3px;
  font-family: "Nanum Gothic", sans-serif;
  font-size: 19px;
  text-decoration: none;
`;
export const Label = styled.h3`
  font-family: "Nanum Gothic", sans-serif;
  color: black;
  padding: 15px;
  text-align: center;
  font-size: 20px;
`;
export const ContainerLabelViewSiteButton = styled.p`
  position: relative;
  bottom: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
