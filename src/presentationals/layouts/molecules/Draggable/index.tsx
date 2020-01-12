import React from 'react'
import { useDraggable } from '../../../../plugins/useDraggable'

interface IProps {
  children: React.ReactNode
  className?: string
}

const Draggable: React.FC<IProps> = ({ children, className }) => {
  const [ bond ] = useDraggable({ className: className || '' })

  return (
    <div className={className} {...bond}>
      {children}
    </div>
  )
}

export default Draggable
