import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0em 2em;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 5;
  
  .closeCart {
    position: relative;
    flex: 1 1 10em;
    height: 100%;
    background: transparent;
    top: 0;
    left: 0;
  }
  @media (max-width: 640px) {
    .closeCart {
      flex: 0 1 0em;
    }
  }
  .cartCont {
    position: relative;
    flex: 0 1 30em;
    height: 95%;
    padding: 1em;
    background: #f5f5f3;
    border-radius: 1.5em;
    z-index: 10;
  }
  .cartCont > .section {
    margin: 1em;
    padding: 1em;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1em;
  }
  .cartCont > .checkOut {
    position: absolute;
    bottom: 1em;
    left: 1em;
    font-weight: bolder;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    border-radius: 1.5em;
    background: #3dc018;
    cursor: pointer;
  }
  .cartCont > .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cartCont > .head p {
    cursor: pointer;
  }
  .cartCont > .cartItems {
    padding-top: 1em;
    overflow-y: scroll;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
  }
  .cartItems > .cartItem {
    width: 100%;
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    transition: 0.7s;    
  }
  .cartItems > .cartItem > .leftSection {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;
  }
  .cartItems > .cartItem > .leftSection > .imageCont {
    flex: 0 1 6em;
    height: 6em;
    border-radius: 0.5em;
  }
  .cartItems > .cartItem > .leftSection > .imageCont img {
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
  }
  .cartItems > .cartItem > .leftSection > .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1em;
  }
  .cartItems > .cartItem > .leftSection > .description > .count {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    font-weight: bolder;
  }
  .description > .count h2 {
    cursor: pointer;
  }
  .cartItems > .cartItem > .rightSection {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1em;
  }
  .cartItems > .cartItem > .rightSection > .close {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1em;
    height: 1em;
    border-radius: 1em;
    background: white;
    cursor: pointer;
  }
`;
