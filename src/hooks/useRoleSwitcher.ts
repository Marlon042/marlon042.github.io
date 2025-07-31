import { useEffect, useState } from 'react'

interface RoleSwitcherOptions {
  roles: string[]
  interval?: number
}

function useRoleSwitcher({ roles, interval = 1800 }: RoleSwitcherOptions): string {
  const [role, setRole] = useState<string>(roles.length > 0 ? roles[0] : '')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRole((prev) => roles[(roles.indexOf(prev) + 1) % roles.length])
    }, interval)

    return () => clearInterval(intervalId)
  }, [roles, interval])

  return role
}

export default useRoleSwitcher
