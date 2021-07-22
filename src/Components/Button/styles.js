import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  padding: 10px 15px;
  border: unset;
  border-radius: 16px;
  font-weight: bolder;
  min-width: 75px;
  max-width: 35%;
  background-color: purple;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 1.75s ease;
  -webkit-box-shadow: 1px 1px 2px 3px #ccc;

  &:hover {
    background-color: #e73c7e;
  }
`;

export default StyledButton;
