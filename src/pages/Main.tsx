import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header.tsx";
import Search from "../components/Search/Search.tsx";
import ContactList from "../components/ContactList/ContactList.tsx";
import {Contact} from "../types";
import {filterContactsBySearch} from "../services/searchService.ts";
import {get, remove} from "../services/contactService.ts";

const Main: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const contacts = await get();
      setContacts(contacts);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredContacts(filterContactsBySearch(contacts, search));
  }, [search, contacts]);

  const handleCreateContact = (contact: Contact) => setContacts([...contacts, contact]);
  const handleDeleteContact = async (id: Number) => {
    await remove(id);
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleSearch = (value: string) => setSearch(value);

  return (
    <div className="container mx-auto">
      <div className="max-w-2xl bg-gray-200 rounded-md p-8 mx-auto sm:mt-10">
        <h1 className="text-center text-2xl mb-10">Phone Book App</h1>
        <Header onCreate={handleCreateContact}/>
        <Search onSearch={handleSearch}/>
        <ContactList
          contacts={filteredContacts}
          isLoading={isLoading}
          onDelete={handleDeleteContact}
        />
      </div>
    </div>
  )
}

export default Main
