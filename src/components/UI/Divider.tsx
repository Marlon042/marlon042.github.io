import { FC } from 'react'

interface DividerProps {
  single?: boolean
}

const Divider: FC<DividerProps> = ({ single }) => {
  return (
    <div
      className={`${single ? 'border-t-2' : 'border-y-2'} border-neutral my-8 w-full border-dotted p-2`}
    />
  )
}

export default Divider
