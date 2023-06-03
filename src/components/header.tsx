import Link from "next/link";
import { ReactNode } from "react";

interface HeaderProps {
  title: string,
  backUrl?: string,
  children?: ReactNode,
}

export default function Header(props: HeaderProps) {
  return <div className="flex flex-row items-center mb-4 z-50">
    {props.backUrl &&
      <div className="flex group relative group">
        <Link href={props.backUrl} className="material-symbols-outlined pr-2 hover:animate-bounce-left opacity-50">
            arrow_back_ios
        </Link>
        <div className="hidden group-hover:block absolute top-8 -left-1 bg-gray-200 p-2 rounded-md text-sm text-gray-700 min-w-max">
          Kembali ke halaman sebelumnya
        </div>
      </div>
    }
    <h1 className="text-2xl font-semibold">{props.title}</h1>
    <div className="flex flex-row justify-end grow gap-2 items-center">
      {props.children}
    </div>
  </div>
}