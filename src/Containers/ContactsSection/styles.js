import styled from "styled-components";

const StyledContactsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  color: white;
  @media (max-width: 600px) {
    flex-wrap: none;
    flex-direction: column;
  }
`;

export default StyledContactsContainer;
