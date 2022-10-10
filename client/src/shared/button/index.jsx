import Link from "next/link";

export function LinkButton({ content, href }) {
  return (
    <Link href={`${href}`} passHref>
      <a
        className={`
                inline-block transition-all duration-700 ease-in-out mt-4 mb-8 py-4 px-10 text-xl
                leading-8 text-white font-heading font-medium tracking-tighter text-center bg-violet-500
                focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 hover:bg-violet-600 rounded-xl
            `}
        href="#"
      >
        {content}
      </a>
    </Link>
  );
}

export function AnchorButton({className, content, href }) {
  return (
    <a
      className={`
                inline-block transition-all duration-700 ease-in-out mt-4
                mb-8 py-4 px-10 text-xl leading-8 text-white font-heading
                font-medium tracking-tighter text-center bg-violet-500 focus:ring-2
                focus:ring-violet-500 focus:ring-opacity-50 hover:bg-violet-600 rounded-xl
                ${className}
            `}
      href={`${href}`}
    >
      {content}
    </a>
  );
}
