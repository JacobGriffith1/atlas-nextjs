import { PowerIcon } from "@heroicons/react/24/outline";
import { doSignOut } from "./signout-actions";

export default function SignOutButton() {
  return (
    <form action={doSignOut}>
      <button
        type="submit"
        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-foreground hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 cursor-pointer"
      >
        <PowerIcon className="w-6" />
        <span className="hidden md:block">Sign Out</span>
      </button>
    </form>
  );
}
