const {User} = require('../utils/userClass.js');

test('check if generated object has expected properties', () => {
  const schema = {
    name: expect.any(String),
    age: expect.any(Number),
    location: {
      city: expect.any(String),
    },
    changeAge: expect.any(Function),
  };

  const name = 'Karl';
  const age = 20;
  const city = 'berlin';

  const user = new User(name, age, city);

  expect(user).toEqual(schema);
});
