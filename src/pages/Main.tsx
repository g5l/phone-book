import './Main.css'
import Header from "../components/Header/Header.tsx";
import {useState} from "react";
import ContactItem from "../components/ContactItem/ContactItem.tsx";
import {Contact} from "../types";

function Main() {
  const [contacts, setContacts] = useState<Contact[]>([{
    id: 1,
    name: 'John Doe',
    phone: '555-555-5555',
  }, {
    id: 2,
    name: 'Gabriel Debona',
    phone: '555-555-5555',
  }])

  return (
    <div className="container mx-auto">
      <div className="max-w-2xl bg-gray-200 rounded-md p-8 mx-auto mt-10">
        <h1 className="text-center text-2xl mb-10">Phone Book App</h1>
        <Header/>
        {contacts.map(contact => <ContactItem key={contact.id} contact={contact}/>)}
      </div>
    </div>
  )
}

export default Main
