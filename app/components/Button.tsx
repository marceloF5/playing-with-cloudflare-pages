import type { MouseEventHandler } from "react"

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  text: string
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="bg-slate-500 text-gray-50 rounded p-2"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}