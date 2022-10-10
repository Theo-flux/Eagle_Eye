import Image from 'next/image';

export function Logo() {
  return (
    <div>
      <Image
        src={'/images/ee_logo.svg'}
        width={50}
        height={50}
        alt="eagle icon"
      />
    </div>
  );
}

export function LogoType() {
  return <div>index</div>;
}
