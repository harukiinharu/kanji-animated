import useTheme from '@/hooks/use-theme'
import '@/globals.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useTheme()
  return <div className='flex flex-col h-screen items-center justify-center gap-4'>{children}</div>
}
export default Layout
