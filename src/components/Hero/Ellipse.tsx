import { FC, HTMLAttributes, RefObject } from 'react'

interface EllipseProps extends HTMLAttributes<SVGElement> {
  ref: RefObject<SVGSVGElement>
}

const Ellipse: FC<EllipseProps> = ({ ref, ...props }) => {
  return (
    <svg
      ref={ref}
      width="412"
      height="413"
      viewBox="0 0 412 413"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle
        cx="206"
        cy="206.401"
        r="204.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="18 36 54 72"
      />
    </svg>
  )
}

export default Ellipse
