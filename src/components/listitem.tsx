import Link from "next/link";
import React from "react";

interface ListItemProps {
    href: string,
    title: string,
    subtitle: string,
}

export default function ListItem(props: ListItemProps) {
    return <Link href={props.href}>
        <React.Fragment>
            <div className="flex flex-row justify-between items-center hover:bg-gray-100 hover:scale-105 transition-all hover:border-gray-300 ease-out rounded-md hover:shadow-md">
                <div className="p-3">
                    <p className="px-2">{props.title}</p>
                    <p className="px-2 text-xs opacity-50">{props.subtitle}</p>
                </div>
                <span className="material-symbols-outlined opacity-40">
                    arrow_forward_ios
                </span>
            </div>
            <div className="h-px bg-gray-300"></div>
        </React.Fragment>
    </Link>
}