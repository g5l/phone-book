import {Contact} from "../types";

export const filterContactsBySearch = (contacts: Contact[], search: string): Contact[] => {
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.toLowerCase().includes(search.toLowerCase());
  });
}