import styled from "styled-components";
//todo: fix button issue when short names are entered
const StyledPopUp = styled.div`
  margin: 0 auto;
  width: 400px;
  height: 200px;
  background: #23d5ab;
  position: fixed;
  z-index: 100;
  border-radius: 16px;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -30px;
  transform: translate(-50%, -50%);
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
  display: ${({ showPopUp }) => (showPopUp ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  align-content: center;

  h3 {
    padding: 1px;
    text-align: center;
  }

  .no {
    margin: 20px;
    width: 70px;
    position: absolute;
    border-radius: 16px;
    bottom: 0px;
    right: 0px;
  }
  .yes {
    margin: 20px;
    width: 70px;
    border-radius: 16px;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  button {
    width: 35px;
    height: 40px;
    background-color: purple;
    font-weight: bolder;
    width: 30px;
    text-transform: uppercase;
    color: white;
    border: none;
    cursor: pointer;
    margin: 3px;
    position: fixed;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
  }
`;
export default StyledPopUp;
