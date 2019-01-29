const currentUser = {
    name: null,
    addName: () => {
        currentUser.name = document.getElementById('name').value;
    },
    getName: (() => currentUser.name)

}

export { currentUser };