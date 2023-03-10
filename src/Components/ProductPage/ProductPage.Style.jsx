import styled from "styled-components";

export const ProductCont = styled.div`
  background: black;
  .productViewCont {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .productViewCont > .Phead {
    margin: 2em 2em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;
    cursor: pointer;
    align-self: flex-start;
  }
  .productViewCont > .reviewCont {
    width: 85%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2em;
    padding-top: 4em;
  }
  .productViewCont > .reviewCont .head {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  .productViewCont > .reviewCont > .reviews {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2em;
  }
  .productViewCont > .reviewCont > .reviews > .moreR {
    padding: 1em;
    border: 1px solid gray;
    border-radius: 1em;
    cursor: pointer;
  }
  .productViewCont > .reviewCont > .reviews > .review {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2em;
    background: #444544;
    border-radius: 1.5rem;
    gap: 3em;
    flex-wrap: wrap;
  }
  .productViewCont > .reviewCont > .reviews > .review > .message {
    width: 50em;
  }
  .productViewCont > .reviewCont > .reviews > .review > .right {
    width: 10em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: bolder;
    gap: 1.5em;
  }
  .productViewCont > .reviewCont > .reviews > .review > .right > .stars {
    display: flex;
  }
  .productViewCont > .productView {
    color: white;
    padding-top: 2em;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2em;
    flex-wrap: wrap;
  }
  .productView > .leftSection {
    flex: 1 1 32em;
    height: 30em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;
    flex-wrap: wrap;
    overflow-y: hidden;
  }
  .productView > .leftSection > .prd {
    flex: 0 1 10em;
    height: 10em;
  }
  .productView > .leftSection > .prd img {
    width: 100%;
    height: 100%;
    border-radius: 1.5em;
  }
  @media screen and (max-width: 640px) {
    .productView > .leftSection {
      flex: 1 1 32em;
      height: 20em;
    }
    .productView > .leftSection > .prd {
      flex: 0 1 6em;
      height: 6em;
    }
    .productView > .leftSection > .prd img {
      width: 100%;
      height: 100%;
      border-radius: 1.5em;
    }
  }
  .productView > .rightSection {
    flex: 1 1 32em;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5em;
  }
  .productView > .rightSection > .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5em;
  }
  .productView > .rightSection > .section > .bold {
    font-weight: bolder;
  }
  .rightSection > .section > .colorCnt {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
  }
  .rightSection > .section > .colorCnt > .colorType {
    flex: 0 1 6em;
    height: 5em;
    cursor: pointer;
    border-radius: 1em;
  }
  .rightSection > .section > .colorCnt > .colorType img {
    width: 100%;
    height: 100%;
    border-radius: 1em;
  }
  .rightSection > .section > .colorCnt > .colorType2 {
    flex: 0 1 6em;
    height: 5em;
    cursor: pointer;
    border-radius: 1em;
  }
  .rightSection > .section > .colorCnt > .colorType2 img {
    width: 100%;
    height: 100%;
    border-radius: 1em;
    border: 2px solid #3dc018;
  }
  .rightSection > .section > .sizeHead {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-weight: bold;
  }
  .rightSection > .section > .sizes {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .rightSection > .section > .sizes > .sizesCont {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
  }
  .rightSection > .section > .sizes > .sizesCont > .size {
    width: 4.5em;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 0.5em;
    cursor: pointer;
  }
  .rightSection > .section > .sizes > .sizesCont > .size:hover {
    border: 1px solid #3dc018;
  }
  .rightSection > .section > .sizes > .sizesCont > .size2 {
    width: 4.5em;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #3dc018;
    border-radius: 0.5em;
    cursor: pointer;
    background: #3dc018;
    font-weight: bolder;
    transition: 0.5s;
  }
  .rightSection > .section > .addToCart {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: bolder;
    background: #3dc018;
    padding: 1em;
    border-radius: 1.5em;
    cursor: pointer;
    margin: 2.5em 0em;
  }
  .rightSection > .section > .desc {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .rightSection > .section > .desc p:hover {
    cursor: pointer;
    font-weight: bolder;
  }
  .productViewCont > .bodyHead {
    width: 85%;
    text-align: left;
    color: white;
    padding-top: 5em;
    font-size: 1.2rem;
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
