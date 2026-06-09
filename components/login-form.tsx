"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"

import { authApi } from "@/lib/api"

const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required"),
})

type LoginFormValues = z.infer<
  typeof loginSchema
>

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()

  const [loading, setLoading] =
    useState(false)

  const [serverError, setServerError] =
    useState("")

  const form =
    useForm<LoginFormValues>({
      resolver:
        zodResolver(loginSchema),

      defaultValues: {
        email: "",
        password: "",
      },
    })

  const onSubmit = async (
    values: LoginFormValues
  ) => {
    try {
      setLoading(true)
      setServerError("")

      await authApi.login(values)

      router.push("http://localhost:3005")
    } catch (error: any) {
      setServerError(
        error?.response?.data?.message ??
          "Unable to login"
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        className
      )}
      {...props}
    >
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form
            onSubmit={form.handleSubmit(
              onSubmit
            )}
            className="p-6 md:p-8"
          >
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">
                  Welcome back
                </h1>

                <p className="text-balance text-muted-foreground">
                  Sign in to access
                  Chameleon
                </p>
              </div>

              {serverError && (
                <div className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
                  {serverError}
                </div>
              )}

              <Field>
                <FieldLabel htmlFor="email">
                  Email
                </FieldLabel>

                <Input
                  id="email"
                  type="email"
                  placeholder="admin@company.com"
                  {...form.register(
                    "email"
                  )}
                />

                {form.formState.errors
                  .email && (
                  <p className="text-sm text-destructive">
                    {
                      form.formState.errors
                        .email.message
                    }
                  </p>
                )}
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">
                    Password
                  </FieldLabel>

                  <Link
                    href="/forgot-password"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Input
                  id="password"
                  type="password"
                  {...form.register(
                    "password"
                  )}
                />

                {form.formState.errors
                  .password && (
                  <p className="text-sm text-destructive">
                    {
                      form.formState.errors
                        .password.message
                    }
                  </p>
                )}
              </Field>

              <Field>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                  loading={loading}
                >
                  Login
                </Button>
              </Field>

              <FieldDescription className="text-center">
                Don't have an
                account?{" "}
                <Link
                  href="/sign-up"
                  className="font-medium underline"
                >
                  Sign up
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>

          <div className="relative hidden bg-muted md:block">
            <img
              src="/globe.svg"
              alt="Chameleon"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.3]"
            />
          </div>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        By continuing you agree to
        our{" "}
        <Link href="/terms">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy">
          Privacy Policy
        </Link>
        .
      </FieldDescription>
    </div>
  )
}