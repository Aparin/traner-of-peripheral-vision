const currentUser = {
  name: null,
  addName: () => {
    currentUser.name = document.getElementById('name').value;
  },
  getName: (() => currentUser.name),

};

// eslint-disable-next-line import/prefer-default-export
export { currentUser };
