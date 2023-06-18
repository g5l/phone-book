import {CreateContact} from "../types";

class ContactValidator {
  validate(createContact: CreateContact): boolean {
    return !!(createContact.name.length && createContact.phone.length);
  }
}

export default new ContactValidator();