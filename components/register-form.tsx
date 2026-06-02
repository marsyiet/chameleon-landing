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

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your information to get started
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="firstName">
                    First name
                  </FieldLabel>
                  <Input
                    id="firstName"
                    placeholder="John"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="lastName">
                    Last name
                  </FieldLabel>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    required
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="email">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">
                  Password
                </FieldLabel>
                <Input
                  id="password"
                  type="password"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm password
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                />
              </Field>

              <Field>
                <Button type="submit">
                  Create account
                </Button>
              </Field>

              <FieldDescription className="text-center">
                Already have an account?{" "}
                <a
                  href="/sign-in"
                  className="underline underline-offset-4"
                >
                  Sign in
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>

          <div className="relative hidden bg-muted md:block">
            <img
              src="/placeholder.svg"
              alt="Sign up illustration"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        By creating an account, you agree to our{" "}
        <a href="#" className="underline underline-offset-4">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4">
          Privacy Policy
        </a>.
      </FieldDescription>
    </div>
  )
}