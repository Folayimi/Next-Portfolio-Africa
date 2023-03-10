import styled from "styled-components";

export const Mbackground = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  .messageBox {
    flex: 0 1 25em;
    padding: 4em;
    margin: 2em;
    border-radius: 1.5em;
    background: white;
    border: 2px solid #3dc018;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
