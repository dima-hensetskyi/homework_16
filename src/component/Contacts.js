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
        male: true,
        female: true,
        neither: true,
    }
    filter = () => {
        const genderFilter = contacts.filter(contact => (contact.gender === "male" && (this.state.male)) ||
            (contact.gender === "female" && this.state.female) || (!contact.gender && this.state.neither));
        const newContact = genderFilter.filter(contact => (contact.firstName + " " + contact.lastName).toLowerCase().includes(this.state.search.toLowerCase()) ||
            (contact.phone).includes(this.state.search));
        this.setState({ contacts: newContact });

    }

    handleSearchChange = async (event) => {
        await this.setState({ search: event.target.value });
        this.filter()
    }

    genderFiltration = async (event) => {
        switch (event.target.id) {
            case "male":
                await event.target.className === "genderChecked" ? this.setState({ male: false }) : this.setState({ male: true });
                break;
            case "female":
                await event.target.className === "genderChecked" ? this.setState({ female: false }) : this.setState({ female: true });
                break;
            case "neither":
                await event.target.className === "genderChecked" ? this.setState({ neither: false }) : this.setState({ neither: true });
                break;
            default:
                break;
        }
        this.filter()
    }

    render() {
        return (
            <div className="app" >
                <div className="search">
                    <input type="text" placeholder="🔍 Search contacts" value={this.state.search} onChange={this.handleSearchChange} />
                </div>
                <div className="genderPanel">
                    <button id="male" className={this.state.male ? "genderChecked" : "genderUnchecked"} onClick={this.genderFiltration}>Male</button>
                    <button id="female" className={this.state.female ? "genderChecked" : "genderUnchecked"} onClick={this.genderFiltration}>Female</button>
                    <button id="neither" className={this.state.neither ? "genderChecked" : "genderUnchecked"} onClick={this.genderFiltration}>Neither</button>
                </div>
                <div className="contacts">
                    {this.state.contacts.map((contact, i) => <Contact {...contact} key={i} />)}
                </div>
            </div>
        )
    }
}

export default Contacts;