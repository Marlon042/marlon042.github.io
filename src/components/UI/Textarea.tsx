import { FC, TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  id?: string
}

const Textarea: FC<TextareaProps> = ({ id, label, ...props }) => {
  return (
    <div className="mb-4 flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-neutral text-base">
          {label}
        </label>
      )}
      <textarea
        id={id}
        {...props}
        className="border-border focus:ring-accent text-neutral w-full resize-none rounded-lg border p-[10px] placeholder:font-thin focus:ring-2 focus:outline-none"
      />
    </div>
  )
}

export default Textarea
