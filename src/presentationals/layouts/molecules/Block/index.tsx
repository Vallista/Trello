import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

export enum Direction {
  ROW = 'row',
  COLUMN = 'column'
}

export enum Sort {
  LEFT_TOP = 'left-top',
  LEFT_CENTER = 'left-center',
  LEFT_BOTTOM = 'left-bottom',
  CENTER_TOP = 'center-top',
  CENTER_CENTER = 'center-center',
  CENTER_BOTTOM = 'center-bottom',
  RIGHT_TOP = 'right-top',
  RIGHT_CENTER = 'right-center',
  RIGHT_BOTTOM = 'right-bottom'
}

interface IProps {
  className?: string
  children?: React.ReactNode
  direction?: Direction
  sort?: Sort
}

const Block: React.FC<IProps> = ({ className, children, direction = Direction.ROW, sort = Sort.CENTER_CENTER }) => {
  const classProps = classNames(
    styles.default,
    className,
    direction,
    direction === Direction.COLUMN ? `c-${sort}` : sort
  )

  return <div className={classProps}>{children}</div>
}

export default Block
