import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function LoginForm({ className, ...props }) {
  return (
    <form className={cn("flex flex-col gap-5", className)} {...props}>
      <div className="flex flex-col text-[#F2DE9B] items-center gap-2 text-center">
        <h1 className="text-3xl font-bold">Welcome back GOAT</h1>
        <h1 className="text-3xl font-bold">The Ronaldo Mode</h1>
        <p className="text-muted-foreground text-sm mt-2 text-balance">
          Dribble past this form
        </p>
      </div>
      <div className="grid text-gray-100 gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-red-200 text-sm">
        Come on be a GOAT?{" "}
        <Link to="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
