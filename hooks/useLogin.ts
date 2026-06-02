// hooks/use-login.ts

import { useMutation } from "@tanstack/react-query"
import { authApi } from "@/lib/api"

export function useLogin() {
  return useMutation({
    mutationFn: authApi.login,
  })
}