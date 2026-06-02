// lib/api/auth.ts

import { api } from "./client"
import type { LoginDto } from "@/types/auth"

export const authApi = {
  login: async (payload: LoginDto) => {
    const { data } = await api.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      payload
    )

    return data
  },

  logout: async () => {
    const { data } = await api.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`
    )

    return data
  },

  me: async () => {
    const { data } = await api.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`
    )

    return data
  },
}