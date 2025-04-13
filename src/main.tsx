import { hydrate, prerender as ssr } from 'preact-iso'

import Home from '@/pages/index'

if (typeof window !== 'undefined') {
  hydrate(<Home />, document.getElementById('root'))
}

export async function prerender(data) {
  return await ssr(<Home {...data} />)
}
