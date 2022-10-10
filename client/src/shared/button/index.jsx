import Link from 'next/link';

export function LinkButton({ content, href }) {
  return (
    <Link href={`${href}`} passHref>
      <a
        className={`
                inline-block transition-all duration-700 ease-in-out mt-4 mb-8 py-4 px-10 text-xl
                leading-8 text-white font-heading font-medium tracking-tighter text-center bg-west rounded
            `}
        href="#"
      >
        {content}
      </a>
    </Link>
  );
}

export function AnchorButton({ className, content, href }) {
  return (
    <a
      className={`
                inline-block transition-all duration-700 ease-in-out mt-4
                mb-8 py-4 px-10 text-xl leading-8 text-white font-heading
                font-medium tracking-tighter text-center bg-west rounded
                ${className}
            `}
      href={`${href}`}
    >
      {content}
    </a>
  );
}

export function Connect({ className, content, href }) {
  return (
    <a
      className={`
        inline-block transition-all duration-700 ease-in-out px-4 py-2 text-sm
        md:text-base md:px-8 md:py-2 text-white font-heading 
        font-medium tracking-tighter text-center bg-west rounded-full
        ${className}
      `}
      href={`${href}`}
    >
      {content}
    </a>
  );
}
