import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from 'remix'
import { getGlobalStyles } from './styles/global'
import { useStyles } from './utils/styleContext'
import type { MetaFunction } from 'remix'
import { tw } from 'twind'

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

export default function App() {
  const styles = useStyles()

  return (
    <html lang="en" className={tw(getGlobalStyles())}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {styles}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
