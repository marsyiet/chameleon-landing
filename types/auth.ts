export interface LoginDto {
  email: string
  password: string
}

export interface RegisterDto {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface Verify2FADto {
  code: string
}

export interface ForgotPasswordDto {
  email: string
}

export interface ResetPasswordDto {
  token: string
  password: string
}

export interface AuthUser {
  id: string
  email: string
  firstName: string
  lastName: string

  role: string

  organizationId: string

  isEmailVerified: boolean

  isTwoFactorEnabled: boolean

  createdAt: string
  updatedAt: string
}

export interface AuthResponse {
  user: AuthUser
}