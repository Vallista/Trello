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
  draggableClassName: string
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

export interface DroppableState {
  over: boolean
}

export interface DroppableBond {
  onDrop: React.DragEventHandler
  onDragOver: React.DragEventHandler
  onDragLeave: React.DragEventHandler
}

export interface DroppableOption {
  droppableClassName: string
}

const createDroppableBond = (option: DroppableOption): DroppableBond => ({
  onDrop: (e) => {
    e.stopPropagation()

    const data = e.dataTransfer.getData('text')
    const droppableLayer = document.getElementById(data)

    if (droppableLayer) {
      e.currentTarget.appendChild(droppableLayer)

      if (e.currentTarget.classList.contains(option.droppableClassName)) {
        e.currentTarget.classList.remove(option.droppableClassName)
      }
    }
  },

  onDragOver: (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'

    if (!e.currentTarget.classList.contains(option.droppableClassName)) {
      e.currentTarget.classList.add(option.droppableClassName)
    }
  },

  onDragLeave: (e) => {
    e.preventDefault()

    if (e.currentTarget.classList.contains(option.droppableClassName)) {
      e.currentTarget.classList.remove(option.droppableClassName)
    }
  }
})

export const useDraggable = (option: DraggableOption): [DraggableBond] => {
  const bond: DraggableBond = useMemo(() => createDraggableBond(option), [])

  return [ bond ]
}

export const useDroppable = (option: DroppableOption): [DroppableBond] => {
  const bond: DroppableBond = useMemo(() => createDroppableBond(option), [])

  return [ bond ]
}
