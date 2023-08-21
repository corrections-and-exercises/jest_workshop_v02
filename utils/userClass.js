class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.location = {
      city: city,
    };
  }

  changeAge(newAge) {
    this.age = newAge;
  }
}

module.exports = {User};
