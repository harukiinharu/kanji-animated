import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useTheme from '@/hooks/use-theme'
import { useLocation } from 'preact-iso'

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  return (
    <>
      <p className='text-3xl'>template - preact@10 - shadcn@canary - tailwindcss@4 - SSG</p>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant='ghost' size='icon'>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
      <a href='/about'>link to about</a>
      <Button onClick={() => location.route('/about')}>button to about</Button>
    </>
  )
}

export default Home
