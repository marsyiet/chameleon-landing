// hooks/useUsers.ts

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { usersApi } from "@/lib/api/users"

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: usersApi.getAll,
  })
}

export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: usersApi.create,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      })
    },
  })
}