import React from 'react'
import classNames from 'classnames'

// import Draggable from '../../layouts/molecules/Draggable'
// import Droppable from '../../layouts/molecules/Droppable'

import styles from './style.module.scss'

const BoardPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <Droppable className={classNames('droptarget', styles.area)}>
        <Draggable uniqueId='p1'>
          <p>이 요소는 드래그 할 수 있습니다. 1</p>
        </Draggable>
        <Draggable uniqueId='p1'>
          <p>이 요소는 드래그 할 수 있습니다. 2</p>
        </Draggable>
        <Draggable uniqueId='p1'>
          <p>이 요소는 드래그 할 수 있습니다. 3</p>
        </Draggable>
      </Droppable>

      <Droppable className={classNames('droptarget', styles.area)} />
      <Droppable className={classNames('droptarget', styles.area)} />
      <Droppable className={classNames('droptarget', styles.area)} /> */}
    </div>
  )
}

export default BoardPage
