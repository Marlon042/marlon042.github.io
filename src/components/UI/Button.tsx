import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="bg-accent hover:bg-accent/60 disabled:bg-accent/40 text-secondary w-full cursor-pointer rounded-lg px-[10px] py-2 transition-colors duration-300">
      {text}
    </button>
  )
}

export default Button
