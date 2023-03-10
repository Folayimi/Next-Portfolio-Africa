import styled from "styled-components";
import backImg from "../Assets/Images/backImg.png"

export const ProductCont = styled.div`
  background: black;
  .headSection {
    background-image: url(${backImg.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 0em 0em 1.5em 1.5em;

    .fadeSection {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
    }
    .fadeSection > .navBar {
    padding: 2em;
  }
  }  
  .Section {
    padding-top: 2em;
    padding-bottom: 2em;
    width: 85%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .heroSection {
    flex: 0 1 25em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: "Satoshi";
    gap: 1em;
    color: white;
  }
  .heroSection h1 {
    font-family: "Nippo";
    font-size: 2.5rem;
    font-weight: bolder;
  }
  .heroSection p {
    font-size: 1.2rem;
  }
  .heroSection > .button {
    background: linear-gradient(
      94.61deg,
      #3dc018 0%,
      rgba(35, 148, 3, 0.64) 100%
    );
    padding: 0.5em 1em;
    border-radius: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    cursor: pointer;
  }
  .button > .oval {
    background: black;
    height: 1em;
    width: 2em;
    border-radius: 0.7em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.2em;
  }
  .oval > .circle {
    width: 0.5em;
    height: 0.5em;
    background: #3dc018;
    border-radius: 0.5em;
  }
  .fadeSection > .baseCont {
    width: 85%;
    padding: 4em 0em 2em 0em;
  }
  .fadeSection > .baseCont > .base {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em;
    background: #252624;
    border-radius: 1.5em;
    flex-wrap: wrap;
    gap: 2em;
  }
  .fadeSection > .baseCont > .base > .baseleft {
    display: flex;
    align-items: center;
    gap: 1em;
    flex-wrap: wrap;
  }
  .fadeSection > .baseCont > .base > .baseleft > .properties {
    color: white;
    padding: 0.7em 1em;
    border-radius: 1.5em;
    background: black;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    font-size: 0.8rem;
  }
  .fadeSection > .baseCont > .base > .baseText {
    color: white;
  }

  .bodyCont {
    width: 100%;
    padding: 30px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bodyCont > .body {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    flex-wrap: wrap;
  }
`;
