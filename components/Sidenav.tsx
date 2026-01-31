import Image from "next/image";
import Link from "next/link";
import { ListBulletIcon } from "@heroicons/react/24/outline";

import logo from "@/assets/logo.png";
import TopicLinks from "./TopicLinks";
import NavLink from "./NavLink";
import SignOutButton from "./SignOutButton";
import NewTopicButton from "./NewTopicButton";

export default async function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Logo />

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 overflow-scroll">
        <NavLink
          href="/ui"
          exact
          className="flex md:hidden h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-foreground md:flex-none md:justify-start md:p-2 md:px-3"
          activeClassName="bg-primary-foreground"
        >
          <ListBulletIcon className="w-6" />
          <p className="md:block">Topics</p>
        </NavLink>

        <TopicLinks />

        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block" />

        <NewTopicButton />
        <SignOutButton />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link
      className="mb-2 flex h-20 items-end justify-center rounded-md bg-secondary p-4 md:h-40"
      href="/ui"
    >
      <Image
        src={logo}
        alt="Acme Logo"
        className="h-14 md:h-full object-contain"
      />
    </Link>
  );
}
