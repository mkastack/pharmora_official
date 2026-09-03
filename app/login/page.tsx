import { redirect } from "next/navigation";
import { PHARMORA_CONSOLE_URL } from "@/lib/utils";

/**
 * The Pharmora marketing site does not host its own authentication system.
 * All sign-in flows are handled by the Pharmora Console at:
 *   https://pharmora-console.vercel.app/
 *
 * This page performs a server-side permanent redirect so any direct links or
 * bookmarks to /login on the marketing site reach the correct destination.
 */
export default function LoginPage() {
  redirect(PHARMORA_CONSOLE_URL);
}
