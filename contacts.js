const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join("./db", "contacts.json");

// TODO: udokumentuj każdą funkcję
async function listContacts() {
  // ...twój kod
  try {
    const data = await fs.readFile(contactsPath);

    const data_array = data.toString();

    console.log(data_array);
  } catch (err) {
    console.log(err.message);
  }
}

function getContactById(contactId) {
  // ...twój kod
}

function removeContact(contactId) {
  // ...twój kod
}

function addContact(name, email, phone) {
  // ...twój kod
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
