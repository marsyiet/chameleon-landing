import { LoginForm } from "@/components/login-form"
import Link from "next/link"

export default function SignIn() {
  return (
    <div className="min-h-svh grid lg:grid-cols-2">

      {/* ── Colonne gauche : image + branding ── */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden p-10">
        <img
          src="/images/hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "var(--gradient-primary)" }}
        />

        

        {/* Baseline bas 
        <div className="relative">
          <h2 className="text-white text-4xl leading-tight">
            Gérez votre surface<br />d'attaque externe.
          </h2>
        </div>
        */}
      </div>

      {/* ── Colonne droite : formulaire ── */}
      <div className="flex flex-col items-center justify-center p-6 md:p-10 bg-background">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>

    </div>
  )
}