// 현재 element를 들어서 옮기는 hooks
import React, { useMemo } from 'react'

export interface DraggableState {
  pick: boolean
}

// props를 명시 할 인터페이스
export interface DraggableBond {
  draggable: boolean
  onDragStart: React.DragEventHandler
  onDrag: React.DragEventHandler
  onDragEnd: React.DragEventHandler
}

export interface DraggableOption {
  className?: string
}

const createDraggableBond = (option: DraggableOption): DraggableBond => ({
  draggable: true,
  onDragStart: (e) => {
    e.dataTransfer.setData('text', (e.target as any).id)
    e.dataTransfer.dropEffect = 'move'
  },
  onDrag: (e) => {},
  onDragEnd: (e) => {}
})

export const useDraggable = (option: DraggableOption): [DraggableBond] => {
  const bond: DraggableBond = useMemo(() => createDraggableBond(option), [])

  return [ bond ]
}
