import React, { useState, useContext } from "react";
import StyledContact from "./styles.js";
import StyledButton from "../Button/styles.js";
import StyledInput from "../SubmitForm/styles.js";
import PopUp from "../PopUp";
import { Context } from "../Context";

function Contact({
  editName,
  name,
  removeContact,
  handleSubmit,
  email,
  id,
  editEmail,
  children,
}) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [edit, setEdit] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { inputRef, setContactsData, handleChange, setFavorites } =
    useContext(Context);

  const upDateValue = (id, name) => {
    if (inputRef.current.value === name) {
      setEdit(false);
      return;
    }
    const upDateUser = {
      id: id,
      name: inputRef.current.value,
      email: email,
    };
    const upDateOptions = {
      method: "PUT",
      body: JSON.stringify(upDateUser),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, upDateOptions)
      .then((res) => res.json())
      .then((put) => {
        setContactsData((prevContacts) =>
          [...prevContacts, put]
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((contact) => contact.name !== name)
        );
      });

    setEdit(false);
  };

  const renderInput = () => {
    return (
      <div>
        <StyledInput
          type="text"
          defaultValue={`${name}`}
          name="newName"
          onChange={handleChange}
          ref={inputRef}
        />
        <StyledButton
          className="edit"
          onClick={() => {
            upDateValue(id, name);
          }}
        >
          Save
        </StyledButton>
      </div>
    );
  };

  const changeEditMode = () => {
    setEdit(!edit);
  };

  const renderData = () => {
    return (
      <>
        {name} <br />
        {email}
      </>
    );
  };
  const removeFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id)
    );
  };
  //displays heart icon on mouseOver
  const displayHeart = (id) => {
    if (isFavorited) {
      return (
        <img
          className="favorite-star"
          src={"../images/filledstar.png"}
          alt="yellow star icon"
          onClick={() => {
            setIsFavorited(!isFavorited);
            removeFavorite(id);
          }}
        />
      );
    }
    if (hovered) {
      return (
        <img
          className="favorite-star"
          src={"../images/star.png"}
          alt="star icon"
          onClick={() => {
            setIsFavorited(!isFavorited);
            setFavorites((prevFavorites) => [...prevFavorites, id]);
          }}
        />
      );
    }
  };

  return (
    <>
      <PopUp
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
        name={name}
        removeContact={removeContact}
        id={id}
      />
      <StyledContact
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {edit ? (
          renderInput()
        ) : (
          <h3 style={{ cursor: "pointer" }} onDoubleClick={changeEditMode}>
            {renderData()}
          </h3>
        )}
        <StyledButton
          onClick={() => setShowPopUp(!showPopUp)}
          disabled={showPopUp}
        >
          Remove
        </StyledButton>
        {displayHeart(id)}
      </StyledContact>
    </>
  );
}

export default Contact;
