"use client";

import Link from "next/link";

const locales = ['en', 'no'];

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  return (
    <div className="flex items-center bg-gray-800 rounded-md p-1">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={`/${loc}`}
          className={`px-3 py-1 text-sm font-semibold rounded transition-all ${
            currentLang === loc
              ? "bg-[#FFA324] text-white"
              : "bg-transparent text-gray-400 hover:text-gray-300"
          }`}
          aria-label={`Switch to ${loc.toUpperCase()}`}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
