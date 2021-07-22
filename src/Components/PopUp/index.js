import React from "react";
import StyledPopUp from "./styles";

function PopUp({
  showPopUp,
  setShowPopUp,
  firstName,
  lastName,
  editName,
  name,
  removeContact,
  id,
}) {
  return (
    <>
      <StyledPopUp showPopUp={showPopUp}>
        <h3> Remove {name} from Contacts?</h3>
        <button className="no" onClick={() => setShowPopUp(!showPopUp)}>
          No
        </button>
        <button className="yes" onClick={() => removeContact(name, id)}>
          Yes
        </button>
      </StyledPopUp>
    </>
  );
}

export default PopUp;
