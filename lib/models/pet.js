module.exports = function Pet (pet) {
    pet = pet || {};
    this.name = pet.name;
    this.id = pet.id;
    this.photoUrls = pet.photoUrls;
    this.tags = pet.tags;
    this.status = pet.status;

};
