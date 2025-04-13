import { Button } from '@/components/ui/button'
import { useLocation } from 'preact-iso'

const About: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <p className='text-4xl'>About Page</p>
      <a href='/'>link to home</a>
      <Button onClick={() => location.route('/')}>button to home</Button>
    </>
  )
}

export default About
