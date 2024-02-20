"use client";

import ContactMe from "@/components/ContactMe.mdx";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <article className="prose dark:prose-invert py-10 m-auto">
        <div className="flex flex-col justify-center items-center mb-10">
          {/* <div className="flex justify-center items-center w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="https://github.com/blurridge.png"
              width={500}
              height={500}
              alt="Profile Picture"
              priority
            />
          </div> */}
        </div>
        <div className="mb-10">
          <h1 className="text-center">Thank you for attending PYCON 2024!</h1>
          <h3 className="text-center">
            We hope you enjoyed your experience and met new connections. See you again next year!
          </h3>
        </div>
        <ContactMe />
      </article>
    </>
  );
};

export default Page;
