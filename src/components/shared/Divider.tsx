import React , {ComponentProps} from 'react'
import { twMerge } from 'tailwind-merge'

const Divider:React.FC<ComponentProps<"div">> = ({className=""}) => {
  return (
    <div className={twMerge("h-[2px] w-6 bg-black",className)} />
  )
}

export default Divider