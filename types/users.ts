// types/user.ts

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
}

export interface CreateUserDto {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface UpdateUserDto {
  firstName?: string
  lastName?: string
}