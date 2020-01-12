import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

interface IProps {
  className?: string
  onChange: React.ChangeEventHandler
  value: string | number
}

const Input: React.FC<IProps> = ({ className, onChange, value }) => {
  const classProps = classNames(styles.default, className)

  return <input className={classProps} onChange={onChange} value={value} />
}

export default Input
