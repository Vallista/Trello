import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

interface IProps {
  className?: string
  children?: React.ReactNode
  radius?: number
}

const Card: React.FC<IProps> = ({ className, children, radius = 0 }) => {
  const classProps = classNames(styles.default, className)
  return (
    <div style={{ borderRadius: `${radius}px` }} className={classProps}>
      {children}
    </div>
  )
}

export default Card
