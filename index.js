const contacts = require("./contacts");

contacts.listContacts();
let run = true;
while (run) {
  setTimeout(() => {
    console.log("Pip");
  }, 1000);
  run = false;
  console.log("working");
}
