import React from "react";
import {Contact} from "../../types";
import ContactItem from "../ContactItem/ContactItem.tsx";

interface Props {
  contacts: Contact[]
  isLoading: boolean
  onDelete: (id: Number) => void
}

const ContactList: React.FC<Props> = ({contacts, isLoading, onDelete}) => {

  const displayEmptyState = () => (
    <div className="text-center mt-10 mb-5">
      <i className="fa-regular fa-clipboard fa-3x"></i>
      <h2 className="text-2xl mt-5">Your Phone Book is empty</h2>
    </div>
  )

  const displayLoadingState = () => (
    <div className="text-center mt-10 mb-5">
      <i className="fa-solid fa-spinner fa-spin fa-3x"></i>
    </div>
  )

  if (isLoading) return displayLoadingState();
  if (contacts.length === 0) return displayEmptyState();
  return contacts.map(contact => (
    <ContactItem key={contact.phone} contact={contact} onDelete={onDelete}/>
  ))
}

export default ContactList;