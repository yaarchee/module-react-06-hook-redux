import { createAction } from '@reduxjs/toolkit';

//
// const addContact = (name, tel) => ({
//   type: ADD_CONTACT,
//   payload: {
//     name: name,
//     tel: tel,
//     id: tel + name,
//   },
// });
const addContact = createAction('phoneBook/addContact', (name, tel) => ({
  payload: {
    name,
    tel,
    id: name + tel,
  },
}));

// const deleteContact = (id) => ({
//   type: DELETE_CONTACT,
//   payload: id,
// });

const deleteContact = createAction('phoneBook/deleteContact');

// const findContact = (valueQuery) => ({
//   type: FIND_CONTACT,
//   payload: valueQuery,
// });

const findContact = createAction('phoneBook/findContact');

const actionsBook = {
  addContact,
  deleteContact,
  findContact,
};

export default actionsBook;
