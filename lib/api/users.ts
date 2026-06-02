// lib/api/users.ts

import { CreateUserDto, UpdateUserDto } from "@/types/users"
import { api } from "./client"

export const usersApi = {
  getAll: async () => {
    const { data } = await api.get("/users")
    return data
  },

  getById: async (id: string) => {
    const { data } = await api.get(`/users/${id}`)
    return data
  },

  create: async (payload: CreateUserDto) => {
    const { data } = await api.post("/users", payload)
    return data
  },

  update: async (
    id: string,
    payload: UpdateUserDto
  ) => {
    const { data } = await api.patch(
      `/users/${id}`,
      payload
    )

    return data
  },

  delete: async (id: string) => {
    const { data } = await api.delete(
      `/users/${id}`
    )

    return data
  },
}