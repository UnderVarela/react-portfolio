import { useRouteError } from 'react-router-dom'

export function ErrorTemplate () {
  const { status, statusText, data } = useRouteError()
  return (
    <div>{statusText} ({status} {data})</div>
  )
}
