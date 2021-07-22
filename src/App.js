import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Context } from "./Components/Context";
import SubmitForm from "./Components/SubmitForm/index";
import ContactsSection from "./Containers/ContactsSection";
import TitleSection from "./Containers/TitleSection";

function App() {
  const { contacts, isLoading } = useContext(Context);

  return (
    <>
      <Router>
        <Link className="contacts" to="/">
          Contacts
        </Link>
        <Link className="favoritesLink" to="/favorites">
          Favorites
        </Link>
        <Switch>
          <Route exact-path="/">
            <TitleSection>
              <h1>My Contacts</h1>
              <SubmitForm />
            </TitleSection>
            <ContactsSection>
              {isLoading && <h1>Loading Contacts...</h1>}
              {contacts}
            </ContactsSection>
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Router>
    </>
  );

  function FavoritesPage() {
    const { favorites } = useContext(Context);
    return <div>{favorites}</div>;
  }
}

export default App;
