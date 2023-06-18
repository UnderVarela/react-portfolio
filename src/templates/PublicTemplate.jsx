import { Outlet } from 'react-router-dom'

export function PublicTemplate () {
  return (
    <>
      <header>
        <nav>
          Menú
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
    </>
  )
}
