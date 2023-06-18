import React from 'react';

interface Props {
  onCancel: () => void;
}

const CreateContactModal: React.FC<Props> = ({onCancel}) => {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="min-h-full p-4 text-center sm:flex sm:justify-center sm:items-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3
                  id="modal-title"
                  className="text-base font-semibold leading-6 text-gray-900"
                >
                  Create Contact
                </h3>
                <div className="mt-2">
                  <input
                    type="text"
                    className="py-3 px-4 w-full my-2 rounded-md border border-gray-500"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="py-3 px-4 w-full my-2 rounded-md border border-gray-500"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-sky-700 hover:bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
              >
                Add Contact
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateContactModal;