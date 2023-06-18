import React, {memo, useState} from "react";
import CreateContactModal from "../CreateContactModal/CreateContactModal.tsx";
import {Contact} from "../../types";

interface Props {
  onCreate: (contact: Contact) => void
}

const Header: React.FC<Props> = ({onCreate}) => {
  const [isCreateContact, setIsCreateContact] = useState<Boolean>(false);

  const toggleCreateContact = () => {
    setIsCreateContact(!isCreateContact);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">
          <i className="fa-solid fa-address-book mr-2"></i>
          Contacts
        </h2>
        <button
          className="py-3 px-4 sm:px-8 rounded-md bg-sky-700 hover:bg-sky-600 text-white"
          onClick={toggleCreateContact}
        >
          <i className="fa-solid fa-plus mr-2"></i>
          Add Contact
        </button>
      </div>
      {isCreateContact && <CreateContactModal onCancel={toggleCreateContact} onCreate={onCreate}/>}
    </>
  );
}

export default memo(Header);