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

const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const t = useTranslations("Auth.login")
  const tLegal = useTranslations("Auth.legal")
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState("")

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: LoginFormValues) => {
    try {
      setLoading(true)
      setServerError("")

      await authApi.login(values)

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
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">
                    {t("passwordLabel")}
                  </FieldLabel>

                  <Link
                    href="/forgot-password"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    {t("forgotPassword")}
                  </Link>
                </div>

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
                {t("noAccount")}{" "}
                <Link href="/sign-up" className="font-medium underline">
                  {t("signUpLink")}
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        {tLegal("agreePrefix")}{" "}
        <Link href="/terms">{tLegal("terms")}</Link> {tLegal("and")}{" "}
        <Link href="/privacy">{tLegal("privacy")}</Link>.
      </FieldDescription>
    </div>
  )
}