import React, { useState, useRef, useEffect } from "react";
import Contact from "../Contact";

const Context = React.createContext();

function ContextProvider({ children }) {
  //todo: refactor colors as vars
  const inputRef = useRef(null);
  const [inputData, setInputData] = useState({
    id: 0,
    editName: "",
    editEmail: "",
  });
  const [contactsData, setContactsData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("contactsData", JSON.stringify(contactsData));
    localStorage.setItem("inputData", JSON.stringify(inputData));
  }, [contactsData, inputData]);

  useEffect(() => {
    const getUsers = async () => {
      const localData = localStorage.getItem("contactsList");
      const dataJSON = JSON.parse(localData);
      if (localData) return null;
      try {
        let users = await fetch("https://jsonplaceholder.typicode.com/users");
        let userData = await users.json();
        let sortedData = userData.sort((a, b) => a.name.localeCompare(b.name));
        setContactsData(localData ? dataJSON : sortedData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.editName) {
      alert("Please Enter A First and Last Name");
      return;
    }
    const newUser = {
      id: inputData.id,
      name: inputData.editName,
      email: inputData.editEmail,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch("https://jsonplaceholder.typicode.com/users", options)
      .then((res) => res.json())
      .then((post) => {
        setContactsData((prevContacts) =>
          [...prevContacts, post].sort((a, b) => a.name.localeCompare(b.name))
        );
      });
    //pushes contact data into contacts array
    setInputData((prevInputData) => ({
      id: prevInputData.id + 1,
      editName: "",
      editEmail: "",
    }));
  };

  const removeContact = (name, id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
    setContactsData((prevContact) =>
      prevContact.filter((data) => data.name !== name)
    );
  };

  const contacts = contactsData.map((contact) => (
    <Contact
      key={contact.name}
      handleChange={handleChange}
      name={contact.name ? contact.name : contact.editName}
      email={contact.email}
      id={contact.id}
      removeContact={removeContact}
    >
      {children}
    </Contact>
  ));

  return (
    <Context.Provider
      value={{
        inputData,
        setInputData,
        contactsData,
        setContactsData,
        handleSubmit,
        handleChange,
        removeContact,
        contacts,
        inputRef,
        favorites,
        setFavorites,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
