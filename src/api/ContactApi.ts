import Api from "./Api.ts";
import {Contact, CreateContact} from "../types";

class ContactApi extends Api {
  private readonly BASE_URL = "http://localhost:3000"
  
  async get(): Promise<Array<Contact>> {
    return await super.get(`${this.BASE_URL}/contacts`);
  }
  
  async create(contact: CreateContact): Promise<Contact> {
    return await super.post(`${this.BASE_URL}/contacts`, contact);
  }
  
  async remove(id: Number): Promise<void> {
    return await super.delete(`${this.BASE_URL}/contacts/${id}`);
  }
  
}

export default new ContactApi();