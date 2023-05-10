import { instance } from "./auth";



export const getAllContacts = async () => {
  const { data } = await instance.get("api/contacts")
  return data;
}

export const addContact = async (info) => {
  const { data: result } = await instance.post("api/contacts", info);
  return result;
}

export const deleteContact = async id => {
  const { data: result } = await instance.delete(`api/contacts/${id}`);
  return result;
};