import styled from "styled-components";

export const Pbackground = styled.div`
  background: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .PCont {
    padding-top: 3em;
    width: 85%;

    .Phead {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5em;
      cursor: pointer;
    }
    .midSection {
      padding: 3em 0em 3em 0em;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3em;
      flex-wrap: wrap;
    }
    .midSection > .form {
      flex: 0 1 30em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1.5em;
    }
    .midSection > .form > .title {
      font-size: 1.2rem;
    }
    .midSection > .form > .section {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.5em;
    }
    .midSection > .form > .section input {
      padding: 1em;
      width: 100%;
      border-radius: 0.5em;
      border: 1px solid #bdbebb;
      background: rgba(0, 0, 0, 0);
      outline: none;
      padding-left: 1em;
      color: white;
    }
    .midSection > .form > .splitSection {
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5em;
      color: white;
    }
    .midSection > .form > .splitSection > .split {
      flex: 1 1 14em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.5em;
    }
    .midSection > .form > .splitSection > .split input {
      padding: 1em;
      width: 100%;
      border-radius: 0.5em;
      border: 1px solid #bdbebb;
      background: rgba(0, 0, 0, 0);
      outline: none;
      padding-left: 1em;
      color: white;
    }
    .midSection > .form > .splitSection > .split > .date {
      cursor: pointer;
    }
    .midSection > .form > .payNow {
      width: 100%;
      padding: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #3dc018;
      margin: 2em 0em;
      border-radius: 1.5em;
      cursor: pointer;
    }
    .midSection > .form > .summary {
      margin: 6em 0em 4em 0em;
      background: #1e1e1e;
      padding: 2em;
      border-radius: 1.5em;
      padding-bottom: 8em;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1em;
    }
    .midSection > .form > .summary > .summarySection {
      background: #3f403e;
      padding: 1em;
      border-radius: 1em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1em;
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
  }
  .form > .summary > .summarySection > .head {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5em;
    cursor: pointer;
  }
  .form > .summary > .summarySection > .Sbody {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
    flex-wrap: wrap;
  }
  .midSection > .cartCont {
    flex: 0 1 32em;
    background: #1e1e1e;
    padding: 1em;
    border-radius: 1.5em;
  }
  .midSection > .cartCont > .cartItems > .cartItem {
    border-bottom: 1px solid gray;
  }
  .midSection > .cartCont > .section {
    display:flex;
    align-items: center;
    background: rgba(100, 100, 100);
    border-radius: 1.5rem;
    padding: 0em;
    padding-left: 1em;
    justify-content: flex-end;
  }
  .midSection > .cartCont > .cartItems > .cartItem > .leftSection > .imageCont {
    position: relative;
  }
  .midSection
    > .cartCont
    > .cartItems
    > .cartItem
    > .leftSection
    > .imageCont
    > .number {
    position: absolute;
    top: 0px;
    background: #3dc018;
    right: 0px;
    padding: 0.3em 0.7em;
    font-size: 0.8em;
    border-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .midSection > .cartCont #top {
    gap:1em;
    width:100%;
    background: rgba(0, 0, 0, 0);
    padding: 1em;
  }
  .midSection > .cartCont > .section > .apply {    
    background: #3dc018;
    padding: 0.7em 2.5em;
    border-radius: 1.5rem;
  }
`;
