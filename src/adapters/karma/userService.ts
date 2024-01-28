import usersData from '../../fakeKarmaAPI/fakeUsers.json'
import { User } from '../../domain/user'

let users: User[] = usersData.users

const createUser = (newUser: User): void => {
  users = [...users, newUser]
}

const getUsers = (): User[] => users

const getUserByEmail = (email: string): User | undefined => {
  return users.find((user) => user.email === email)
}

const updateUserByEmail = (email: string, updatedUser: User): void => {
  users = users.map((user) =>
    user.email === email ? { ...user, ...updatedUser } : user
  )
}

const deleteUserByEmail = (email: string): void => {
  users = users.filter((user) => user.email !== email)
}

export const UserService = {
  createUser,
  getUsers,
  getUserByEmail,
  updateUserByEmail,
  deleteUserByEmail
}
