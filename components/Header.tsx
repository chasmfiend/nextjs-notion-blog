import Link from "next/link";
import Image from "next/image";
import { links } from "@/site";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-50 py-4 bg-white backdrop-blur-lg bg-opacity-30">
        <div className="flex flex-row items-center justify-between max-w-5xl px-4 m-auto">
          {/* Logo */}
          <div className="flex flex-row items-center">
            <Link className="" href="/">
              <Image
                src="/Logo.svg"
                width={28}
                height={28}
                alt="AnalyticsRoundtable"
              />
            </Link>
          <Link className="hidden ml-1 font-medium text-gray-800 sm:block" href="/">
         Dan Cramer
          </Link>
          </div>

          {/* Navlinks */}
          <div className="flex-shrink-0">
            <ul className="flex flex-row space-x-4">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="block text-sm hover:text-sky-400"
                >
                  <Link href={link.to}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
