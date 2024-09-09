import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div>
          <h1>LOGO</h1>

          <nav>
            <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/servicios'>Servicios</NavLink>
            <NavLink to='/contacto'>Contacto</NavLink>
          </nav>
        </div>
    </header>
  )
}
