const fs = require("fs").promises;
const path = require("path");
const nanoid = require("nanoid");

const contactsPath = path.join("./db", "contacts.json");
const columns = ["id", "name", "email", "phone"];

// TODO: udokumentuj każdą funkcję
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const dataArray = JSON.parse(data.toString());
    console.table(dataArray, columns);
  } catch (err) {
    console.log(err.message);
  }
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath);
  const dataArray = JSON.parse(data.toString());
  const contact = dataArray.find((element) => element.id === contactId);
  if (contact) {
    console.table([contact], columns);
  } else {
    console.log("Contact not found");
  }
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath);
  const dataArray = JSON.parse(data.toString());

  const newArray = dataArray.filter((element) => element.id !== contactId);

  if (dataArray.length > newArray.length) {
    fs.writeFile(contactsPath, JSON.stringify(newArray));
  } else {
    console.log("Contact not found");
  }
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath);
  const dataArray = JSON.parse(data.toString());

  if (name && email && phone) {
    const newContact = {
      id: nanoid.nanoid(),
      name: name,
      email: email,
      phone: phone,
    };
    dataArray.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(dataArray));
  } else {
    console.log("Not enough data");
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
