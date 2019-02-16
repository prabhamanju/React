import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyHeader from "./MyHeader";
import MockData from "./MockData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: MockData,
      originalContacts: MockData,
      filteredContacts: [],
      searchText: "",
      activeContactIndex: 0
    };
  }

  handleSelectContact = Contact => {
    this.setState({
      activeContactIndex: this.state.originalContacts.indexOf(Contact)
    });
  };
  renderContacts(contact) {
    if (
      this.state.originalContacts.indexOf(contact) ===
      this.state.activeContactIndex
    ) {
      return (
        <div
          key={contact.id}
          className="clist__contact active"
          onClick={() => this.handleSelectContact(contact)}
        >
          <div className="clist__icon">
            <img src={contact.profileImage} alt="" />
          </div>

          <div className="clist__name">
            <span className="clist__firstName">{contact.firstName}</span>
            <span className="clist__lastName">{contact.lastName}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={contact.id}
          className="clist__contact"
          onClick={() => this.handleSelectContact(contact)}
        >
          <div className="clist__icon">
            <img src={contact.profileImage} alt="" />
          </div>

          <div className="clist__name">
            <span className="clist__firstName">{contact.firstName}</span>
            <span className="clist__lastName">{contact.lastName}</span>
          </div>
        </div>
      );
    }
  }

  handleSeach(e) {
    const value = e.target.value;
    console.log("searchText:", value);
    this.setState({ searchText: value });

    const myfilteredContacts = this.state.originalContacts.filter(
      mycontact =>
        mycontact.firstName.toLowerCase().includes(value.toLowerCase()) |
        mycontact.lastName.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ contacts: myfilteredContacts });
    this.setState({ filteredContacts: myfilteredContacts });
    console.log("filteredContacts:", this.state.filteredContacts);
  }

  render() {
    const {
      contacts,
      originalContacts,
      activeContactIndex,
      searchText
    } = this.state;
    const activeContact = originalContacts[activeContactIndex];
    const allContacts = contacts.map(contact => this.renderContacts(contact));

    return (
      <div className="App">
        <header className="App-header">
          <MyHeader />
          <div className="main">
            <div className="clist">
              <div className="clist__search">
                <span className="clist__searchIcon">
                  <i className="fas fa-search" />
                </span>

                <input
                  className="clist__searchInput"
                  type="search"
                  placeholder="Search by name...."
                  value={searchText}
                  onChange={this.handleSeach.bind(this)}
                />
              </div>
              <div className="clist_contact">{allContacts}</div>
            </div>
            <div class_name="details">
              <div className="details__large">
                <div className="details__icon">
                  <img
                    scr={logo}
                    src={activeContact.profileImage}
                    alt={activeContact.firstName + " " + activeContact.lastName}
                  />
                </div>
                <div className="details__name">
                  <span className="details__firstName">
                    {activeContact.firstName}
                  </span>
                  {""}
                  <span className="details__lastName">
                    {activeContact.lastName}
                  </span>
                </div>
              </div>

              <div className="details__info">
                <div className="details__row">
                  <label className="details__label">Mobile</label>
                  <span className="details__text">{activeContact.mobile}</span>
                </div>
                <div className="details__row">
                  <label className="details__label">Telephone</label>
                  <span className="details__text">
                    {activeContact.telephone}
                  </span>
                </div>
                <div className="details__row">
                  <label className="details__label">Email</label>
                  <span className="details__text">{activeContact.email}</span>
                </div>
                <div className="details__row">
                  <label className="details__label">Home Address</label>
                  <span className="details__text">
                    {activeContact.homeAddress}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
