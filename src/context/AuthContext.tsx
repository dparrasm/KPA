import { ReactNode, createContext, useContext, useState } from 'react'
import { User } from '../domain/user'

interface AuthContextType {
  user: User | null
  signIn: (newUser: User) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuthentication = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthentication must be used inside an AuthProvider')
  }

  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const signIn = (newUser: User) => {
    setUser(newUser)
  }

  const signOut = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
