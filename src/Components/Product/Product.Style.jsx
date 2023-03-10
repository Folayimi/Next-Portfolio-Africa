import styled from "styled-components";

export const ProductSt = styled.div`
  position: relative;
  flex: 0 1 20em;
  height: 23em;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wishCont {
    position: absolute;
    top: 0px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding: 2em;
  }
  .wishCont > .wish {
    background: rgba(255, 255, 255, 0.5);
    width: 2em;
    height: 2em;
    border-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .imageCont {
    width: 100%;
    height: 100%;
  }
  .imageCont img {
    width: 100%;
    height: 100%;
    border-radius: 1.5em;
  }
  .productBase {
    position: absolute;
    width: 100%;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #30322f;
    margin-top: -5em;
    padding: 1em;
    border-radius: 0em 0em 1.5em 1.5em;
    z-index: 10;
  }
  .productBase > .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5em;
  }
  .productBase .addtoCart {
    background: #3dc018;
    padding: 0.5em 1em;
    border-radius: 1em;
    cursor: pointer;
  }
`;
