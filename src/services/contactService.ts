import {CreateContact} from "../types";
import contactApi from "../api/ContactApi.ts";

export const create = async (createContact: CreateContact) => {
  return await contactApi.create(createContact);
}

export const get = async () => {
  return await contactApi.get();
}

export const remove = async (id: Number) => {
  return await contactApi.remove(id);
}