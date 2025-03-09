import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const DownloadLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-2 text-black truncate font-regular w-fit hover:underline hover:text-primary-500"
    >
      <Download size={16} />
      {children}
    </Link>
  );
};

export default DownloadLink;
