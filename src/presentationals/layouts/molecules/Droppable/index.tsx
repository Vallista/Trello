import React from 'react'
import { useDroppable } from '../../../../plugins/useDroppable'

interface IProps {
  children: React.ReactNode
  className?: string
}

const Droppable: React.FC<IProps> = ({ children, className }) => {
  const [ bond ] = useDroppable({ className: className || '' })

  return (
    <div className={className} {...bond}>
      {children}
    </div>
  )
}

export default Droppable
