import { twindConfig } from '../twind.config'
import { setup } from 'twind'
setup(twindConfig)
import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'

hydrate(<RemixBrowser />, document)
