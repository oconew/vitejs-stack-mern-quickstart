// ./src/routes/index.js

import * as React from 'react'
import PathConstants from './pathConstants'

const Home = React.lazy(() => import('../pages/Home'))
// other page components...
const Menu = React.lazy(() => import('../pages/Menu'))

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  // other mappings ...
  { path: PathConstants.MENU, element: <Menu /> },
]

export default routes
