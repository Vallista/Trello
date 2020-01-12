import React, { useMemo } from 'react'

export interface DroppableState {
  over: boolean
}

export interface DroppableBond {
  onDrop: React.DragEventHandler
  onDragOver: React.DragEventHandler
  onDragLeave: React.DragEventHandler
}

export interface DroppableOption {
  className: string
}

const createDroppableBond = (option: DroppableOption): DroppableBond => ({
  onDrop: (e) => {
    e.stopPropagation()

    const data = e.dataTransfer.getData('text')
    const droppableLayer = document.getElementById(data)

    if (droppableLayer) {
      e.currentTarget.appendChild(droppableLayer)

      if (e.currentTarget.classList.contains(option.className)) {
        e.currentTarget.classList.remove(option.className)
      }
    }
  },

  onDragOver: (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'

    if (!e.currentTarget.classList.contains(option.className)) {
      e.currentTarget.classList.add(option.className)
    }
  },

  onDragLeave: (e) => {
    e.preventDefault()

    if (e.currentTarget.classList.contains(option.className)) {
      e.currentTarget.classList.remove(option.className)
    }
  }
})

export const useDroppable = (option: DroppableOption): [DroppableBond] => {
  const bond: DroppableBond = useMemo(() => createDroppableBond(option), [])

  return [ bond ]
}
