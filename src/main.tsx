import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso'

import Layout from '@/components/layout'
import Home from '@/pages/index'
import About from '@/pages/about'
import NotFound from '@/pages/404'

export function App() {
  return (
    <Layout>
      <LocationProvider>
        <Router>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route default component={NotFound} />
        </Router>
      </LocationProvider>
    </Layout>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('root'))
}

export async function prerender(data) {
  return await ssr(<App {...data} />)
}
