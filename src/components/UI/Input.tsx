import { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  id?: string
}

const Input: FC<InputProps> = ({ type = 'text', id, label, ...props }) => {
  return (
    <div className="mb-4 flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-neutral text-base">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        {...props}
        className="border-border focus:ring-accent text-neutral w-full rounded-lg border p-[10px] placeholder:font-thin focus:ring-2 focus:outline-none"
      />
    </div>
  )
}

export default Input
