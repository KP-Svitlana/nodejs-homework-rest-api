const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contatsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contatsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === contactId);
    return result || null;
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    console.log(index);
    if (index === -1) {
      return null;
    }

    const result = contacts.splice(index, 1);
    await fs.writeFile(contatsPath, JSON.stringify(contacts, null, 2));
    return result;
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (body) => {
  try {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), ...body };
    contacts.push(newContact);
    await fs.writeFile(contatsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (contactId, body) => {
  try {
    console.log(contactId);
    console.log(body);
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    console.log(index);
    if (index === -1) {
      return null;
    }
    contacts[index] = { contactId, ...body };
    await fs.writeFile(contatsPath, JSON.stringify(contacts, null, 2));
    console.log(contacts[index]);
    return contacts[index];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
