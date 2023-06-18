import { createBrowserRouter } from 'react-router-dom'
import PortfolioApp from '../PortfolioApp'
import { PublicTemplate, ErrorTemplate } from '../templates'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicTemplate />,
    errorElement: <ErrorTemplate />,
    children: [
      {
        path: '/',
        element: <PortfolioApp />
      }
    ]
  }
])
