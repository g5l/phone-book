import React from "react";
import {Contact} from "../../types";

interface Props {
  contact: Contact,
  onDelete: (id: Number) => void
  onEdit: () => void
}

const ContactItem: React.FC<Props> = ({contact, onDelete}) => {

  const handleDelete = (id: Number) => {
    
    onDelete(id);
  }

  return (
    <div className="flex justify-between items-center bg-white p-5 my-5 rounded-md">
      <div>
        <p className="text-xl">{contact.name}</p>
        <p className="text-sm text-gray-400">{contact.phone}</p>
      </div>
      <button
        className="py-3 px-5 rounded-md bg-red-700 hover:bg-red-600 text-white"
        onClick={() => handleDelete(contact.id)}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default ContactItem;