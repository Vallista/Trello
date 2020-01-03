import { useCallback, useEffect, useRef } from 'react'

function useMountedState(): () => boolean {
  const mountedRef = useRef<boolean>(false)
  const my = useCallback(() => mountedRef.current, [])

  useEffect(() => {
    mountedRef.current = true

    return () => {
      mountedRef.current = false
    }
  })

  return my
}

export default useMountedState
