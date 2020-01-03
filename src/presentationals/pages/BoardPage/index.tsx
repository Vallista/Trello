import React from 'react'
import { useDraggable, useDroppable } from '../../../plugins/useDraggable'
import classNames from 'classnames'

import styles from './style.module.scss'

const BoardPage: React.FC = () => {
  const [ bond ] = useDraggable({ draggableClassName: styles.draggable })
  const [ areaBond ] = useDroppable({ droppableClassName: styles.droppable })

  return (
    <div className={styles.container}>
      <div className={classNames('droptarget', styles.area)} {...areaBond}>
        <p id='p1' {...bond}>
          이 요소는 드래그 할 수 있습니다. 1
        </p>
        <p id='p2' {...bond}>
          이 요소는 드래그 할 수 있습니다. 2
        </p>
        <p id='p3' {...bond}>
          이 요소는 드래그 할 수 있습니다. 3
        </p>
      </div>
      <div className={classNames('droptarget', styles.area)} {...areaBond} />
      <div className={classNames('droptarget', styles.area)} {...areaBond} />
      <div className={classNames('droptarget', styles.area)} {...areaBond} />
    </div>
  )
}

export default BoardPage
