import React, {useState} from 'react';
import {create} from "../../services/contactService.ts";
import {Contact} from "../../types";
import contactValidator from "../../validator/ContactValidator.ts";

interface Props {
  onCreate: (contact:Contact) => void;
  onCancel: () => void;
}

const CreateContactModal: React.FC<Props> = ({onCreate, onCancel}) => {

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleCancel = () => onCancel && onCancel();

  const isValid = () => {
    return contactValidator.validate({name, phone});
  }

  const handleCreate = async () => {
    if (isValid()) {
      const data: Contact = await create({name, phone});
      onCreate(data);
      handleCancel()
    }
  }

  const displayTitle = () => (
    <h3 id="modal-title" className="text-base font-semibold leading-6 text-gray-900">
      Create Contact
    </h3>
  )

  const displayForm = () => (
    <div className="mt-2">
      <input
        type="text"
        className="py-3 px-4 w-full my-2 rounded-md border border-gray-500"
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        className="py-3 px-4 w-full my-2 rounded-md border border-gray-500"
        placeholder="Phone Number"
        onChange={e => setPhone(e.target.value)}
      />
    </div>
  )

  const displayFooter = () => (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-sky-700 hover:bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
        disabled={!isValid()}
        onClick={handleCreate}
      >
        Add Contact
      </button>
      <button
        type="button"
        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="min-h-full p-4 text-center sm:flex sm:justify-center sm:items-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                {displayTitle()}
                {displayForm()}
              </div>
            </div>
            {displayFooter()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateContactModal;