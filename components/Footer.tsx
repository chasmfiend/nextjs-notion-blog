import { footerNavigation } from "@/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2">
      <div className="max-w-5xl px-4 py-4 m-auto space-y-3 md:flex md:items-center md:justify-between">
        <p className="text-center text-md">
          &copy; Dan Cramer
        </p>
        <div className="flex justify-center space-x-6">
          {footerNavigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-4 h-4" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
