import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">Fin<span className="text-primary">Vise</span></span>
        </Link>

        {/* CTA Button */}
        <Button variant="ghost" size="sm">
          Take Control Now
        </Button>
      </div>
    </header>
  )
}
