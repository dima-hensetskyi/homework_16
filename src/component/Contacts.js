import React, { Component } from 'react';
import Contact from "./Contact";
import './style.css';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

class Contacts extends Component {
    state = {
        contacts: contacts,
        search: "",
    }

    handleSearchChange = (event) => {
        let newContact = contacts.filter(contact => (contact.firstName + " " + contact.lastName).toLowerCase().includes(event.target.value.toLowerCase()) ||
            (contact.phone).includes(event.target.value));
        this.setState({ contacts: newContact });
        this.setState({ search: event.target.value });
    }


    render() {
        return (
            <div className="app">
                <div className="search">
                    <input type="text" placeholder="🔍 Search contacts" value={this.state.search} onChange={this.handleSearchChange} />
                </div>
                <div className="contacts">
                    {this.state.contacts.map((contact, i) => <Contact {...contact} key={i} />)}
                </div>
            </div>
        )
    }
}

export default Contacts;