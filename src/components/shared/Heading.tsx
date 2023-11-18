import React from 'react'
import Divider from './Divider'

const Heading:React.FC<{heading:string,dividerClass?:string}> = ({heading,dividerClass=""}) => {
  return (
    <div className='w-max flex flex-col items-center gap-3'>
        <h2 className='font-mango text-5xl tracking-wider uppercase font-semibold'>{heading}</h2>
        <Divider className={dividerClass} />
    </div>
  )
}

export default Heading