//Stateful Authorization

const mapSessionIDwithUser = new Map();

function setUser(id, user) {
    mapSessionIDwithUser.set(id, user);
}

function getUser(id) {
    return mapSessionIDwithUser.get(id);
}

module.exports = {
    setUser,
    getUser,
}