import { actionAdd } from "../action-creater";
const predefinedUsers = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "user",
    password: "user",
  },
];

const reducer = (state = predefinedUsers, action) => {
  switch (action.type) {
    case "ADD_USER":
  }
};
