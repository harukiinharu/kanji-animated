import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso'
import Layout from '@/layout'
import Home from '@/pages/index'
import NotFound from '@/pages/404'

const App: React.FC = () => {
  return (
    <Layout>
      <LocationProvider>
        <Router>
          <Route path='/' component={Home} />
          <Route default component={NotFound} />
        </Router>
      </LocationProvider>
    </Layout>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('root'))
}

async function prerender(data) {
  return await ssr(<App {...data} />)
}

export default App
export { prerender }
