import React, { useContext } from "react";
import Button from "../Button";
import { Context } from "../Context";
import { StyledForm, StyledInput } from "./styles";

function SubmitForm({ children }) {
  const { handleSubmit, handleChange, inputData } = useContext(Context);

  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <StyledInput
          placeholder="NAME"
          name="editName"
          type="text"
          value={inputData.editName}
          onChange={handleChange}
        />
        <StyledInput
          placeholder="EMAIL"
          name="editEmail"
          type="email"
          value={inputData.editEmail}
          onChange={handleChange}
        />
        <Button>Add Contact</Button>
      </form>
    </StyledForm>
  );
}

export default SubmitForm;
