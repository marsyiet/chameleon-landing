"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"

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

const signUpSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordMismatch",
    path: ["confirmPassword"],
  })

type SignUpFormValues = z.infer<typeof signUpSchema>

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const t = useTranslations("Auth.signup")
  const tLegal = useTranslations("Auth.legal")
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState("")

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      setLoading(true)
      setServerError("")

      await authApi.register(values)

      router.push("http://localhost:3005/dashboard")
    } catch (error: any) {
      setServerError(
        error?.response?.data?.message ?? t("genericError")
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-6 md:p-8"
          >
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h3>{t("title")}</h3>
                <p className="text-balance text-muted-foreground">
                  {t("subtitle")}
                </p>
              </div>

              {serverError && (
                <div className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
                  {serverError}
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="firstName">
                    {t("firstNameLabel")}
                  </FieldLabel>
                  <Input
                    id="firstName"
                    placeholder={t("firstNamePlaceholder")}
                    {...form.register("firstName")}
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.firstName.message}
                    </p>
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="lastName">
                    {t("lastNameLabel")}
                  </FieldLabel>
                  <Input
                    id="lastName"
                    placeholder={t("lastNamePlaceholder")}
                    {...form.register("lastName")}
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.lastName.message}
                    </p>
                  )}
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="email">{t("emailLabel")}</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="password">
                  {t("passwordLabel")}
                </FieldLabel>
                <Input
                  id="password"
                  type="password"
                  {...form.register("password")}
                />
                {form.formState.errors.password && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  {t("confirmPasswordLabel")}
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...form.register("confirmPassword")}
                />
                {form.formState.errors.confirmPassword && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.confirmPassword.message ===
                    "passwordMismatch"
                      ? t("errors.passwordMismatch")
                      : form.formState.errors.confirmPassword.message}
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
                  {t("submit")}
                </Button>
              </Field>

              <FieldDescription className="text-center">
                {t("alreadyHaveAccount")}{" "}
                <Link
                  href="/sign-in"
                  className="underline underline-offset-4"
                >
                  {t("signInLink")}
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        {tLegal("agreePrefixSignup")}{" "}
        <Link href="/terms" className="underline underline-offset-4">
          {tLegal("terms")}
        </Link>{" "}
        {tLegal("and")}{" "}
        <Link href="/privacy" className="underline underline-offset-4">
          {tLegal("privacy")}
        </Link>
        .
      </FieldDescription>
    </div>
  )
}