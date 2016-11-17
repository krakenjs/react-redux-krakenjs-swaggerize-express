module.exports = function User (user) {
    user = user || {};
    this.name = user.name;
    this.username = user.username || user.login;
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.avatar_url = user.avatar_url;
    this.company = user.company;
    this.location = user.location;
};
