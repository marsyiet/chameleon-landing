// lib/api/organizations.ts

import { api } from "@/lib/api/client"


export const organizationsApi = {
  getAll: async () => {
    const { data } = await api.get(
      "/organizations"
    )

    return data
  },

  getById: async (id: string) => {
    const { data } = await api.get(
      `/organizations/${id}`
    )

    return data
  },

  create: async (payload: any) => {
    const { data } = await api.post(
      "/organizations",
      payload
    )

    return data
  },

  update: async (
    id: string,
    payload: any
  ) => {
    const { data } = await api.patch(
      `/organizations/${id}`,
      payload
    )

    return data
  },
}