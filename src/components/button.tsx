'use client'

import { ReactNode, MouseEvent, MouseEventHandler } from 'react';

export enum ButtonType {
  action,
  danger,
}

interface ButtonProps {
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: ButtonType
}

export default function Button(props: ButtonProps) {
  const type = props.type ?? ButtonType.action
  return (
    <button 
        className={`
        text-white 
          px-4 py-2 
          rounded-md
          ${type == ButtonType.action ? "bg-cyan-500" : "bg-red-500"}
          ${type == ButtonType.action ? "hover:bg-cyan-600" : "hover:bg-red-700"}
          transition-all
          ${props.className}
        `}
        onClick={props.onClick}
        >
            {props.children}
    </button>
  )
}
