// lib/api/error.ts

export function getApiError(error: any) {
  return (
    error?.response?.data?.message ||
    error?.message ||
    "Something went wrong"
  )
}