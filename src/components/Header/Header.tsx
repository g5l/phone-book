import React, {memo, useState} from "react";
import CreateContactModal from "../CreateContactModal/CreateContactModal.tsx";

const Header: React.FC = () => {
  const [isCreateContact, setIsCreateContact] = useState<Boolean>(false);

  const toggleCreateContact = () => {
    setIsCreateContact(!isCreateContact);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Contacts</h2>
        <button
          className="py-3 px-10 rounded-md bg-sky-700 hover:bg-sky-600 text-white"
          onClick={toggleCreateContact}
        >
          Add Contact
        </button>
      </div>
      {isCreateContact && <CreateContactModal onCancel={toggleCreateContact}/>}
    </>
  );
}

export default memo(Header);