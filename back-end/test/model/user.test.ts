import { User } from "../../model/user";
import { UserRole } from "../../types";
import { User as UserPrisma } from "@prisma/client";

const role = "Admin";

const userData = {
  id: 1,
  name: "John Doe",
  password: "password123",
  email: "john.doe@example.com",
    role: role as UserRole,
};

test('given: valid values for user, when: user is created, then: user is created with those values', () => {
  // given

  // when
  const user = new User(userData);

  // then
  expect(user.getId()).toEqual(userData.id);
  expect(user.getName()).toEqual(userData.name);
  expect(user.getPassword()).toEqual(userData.password);
  expect(user.getEmail()).toEqual(userData.email);
  expect(user.getRole()).toEqual(userData.role);
});

test('given: user data from database, when: User.from is called, then: user is created with those values', () => {
  // given
  const userPrisma: UserPrisma = {
    id: 1,
    name: "John Doe",
    password: "password123",
    email: "john.doe@example.com",
    role: "Admin",
  };

  // when
  const user = User.from(userPrisma);

  // then
  expect(user.getId()).toEqual(userPrisma.id);
  expect(user.getName()).toEqual(userPrisma.name);
  expect(user.getPassword()).toEqual(userPrisma.password);
  expect(user.getEmail()).toEqual(userPrisma.email);
  expect(user.getRole()).toEqual(userPrisma.role);
});

test('given: an existing user, when: getting user details, then: user details are returned', () => {
  // given
  const user = new User(userData);

  // when
  const id = user.getId();
  const name = user.getName();
  const password = user.getPassword();
  const email = user.getEmail();
  const role = user.getRole();

  // then
  expect(id).toEqual(userData.id);
  expect(name).toEqual(userData.name);
  expect(password).toEqual(userData.password);
  expect(email).toEqual(userData.email);
  expect(role).toEqual(userData.role);
});

test('given: two identical users, when: equals is called, then: it returns true', () => {
  // given
  const user1 = new User(userData);
  const user2 = new User(userData);

  // when
  const isEqual = user1.equals(user2);

  // then
  expect(isEqual).toBe(true);
});

test('given: two different users, when: equals is called, then: it returns false', () => {
  // given
  const user1 = new User(userData);
  const differentUserData = { ...userData, email: "jane.doe@example.com" };
  const user2 = new User(differentUserData);

  // when
  const isEqual = user1.equals(user2);

  // then
  expect(isEqual).toBe(false);
});