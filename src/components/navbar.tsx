

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex gap-6">
                <li>
                   <a className="hover:text-teal-200" href="#">Inicio</a>
                </li>
                <li>
                   <a className="hover:text-teal-200" href="">Ley 21.180</a>
                </li>
                <li>
                   <a className="hover:text-teal-200" href="">Servicios</a>
                </li>
                 <li>
                   <a className="hover:text-teal-200" href="">Recursos</a>
                </li>
                 <li>
                   <a className="hover:text-teal-200" href="">Nosotros</a>
                </li>
            </ul>
        </nav>
    )
}
