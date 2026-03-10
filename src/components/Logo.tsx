import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  width = 50,
  height = 50,
}: {
  width: number;
  height: number;
}) => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="/logo.svg"
        alt="BYD Logo"
        className="w-auto h-full"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default Logo;
