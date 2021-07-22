import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  margin: 10 12px;
  margin-bottom: 15px;
  text-align: center;
  align-content: center;
`;
export const StyledInput = styled.input`
  border: unset;
  background: #e73c7e;
  width: 200px;
  height: 45px;
  margin: 3px;
  border-radius: 16px;
  color: white;
  font-weight: bolder;
  margin-bottom: 12px;
  margin-right: 8px;
  opacity: 0.9;
  -webkit-box-shadow: 1px 1px 2px 3px #ccc;
  ::placeholder {
    text-align: center;
    color: white;
    font-weight: bolder;
  }
`;

export default StyledInput;
