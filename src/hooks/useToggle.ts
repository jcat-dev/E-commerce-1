import { useState } from "react"

export const useToggle = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const setActive = () => setIsActive(true)
  const setInactive = () => setIsActive(false)
  const toggleIsActive = () => setIsActive(!isActive)

  return {
    isActive,
    setActive,
    setInactive,
    toggleIsActive
  }
}