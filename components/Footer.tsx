"use client";

import { useTheme } from "next-themes";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  return (
    <footer className="flex flex-col text-sm bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] p-5 justify-between text-center dark:bg-[#0B142E]">
      <p className="m-auto text-center text-gray-500">Message us at pycon@python.ph for questions and inquiries</p>
      <p className="m-auto text-center text-gray-500">
        Reach out to cyrus@kaizend.org for inquiries regarding your certificate.
      </p>
    </footer>
  );
};
