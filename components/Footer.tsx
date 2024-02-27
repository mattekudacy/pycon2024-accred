"use client";

import { useTheme } from "next-themes";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  return (
    <footer className="flex flex-col text-sm bg-white drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] p-5 justify-between text-center dark:bg-[#0B142E]">
       <p className="m-auto text-center text-gray-500">
        Made with {theme === "light" ? "🖤" : "🤍"} by{" "}
        <a
          href="https://github.com/blurridge"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @blurridge
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/zachriane/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Zach Riane Machacon
        </a>
      </p>
      <p className="m-auto text-center text-gray-500">
        Reach out to <a href="mailto:cyrus@kaizend.org" className="hover:underline">cyrus@kaizend.org</a> for inquiries regarding your certificate.
      </p>
    </footer>
  );
};
