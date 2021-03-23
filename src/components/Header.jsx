import { Link } from "react-router-dom";

const Header = () => {

  const menu = [
    { id: 1, title: "Все авторы", href: "/" },
    { id: 2, title: "О сайте", href: "/about" }
  ];  

  return (
    <header className="header">
      <nav>
        <ul className="d-flex nav-menu">
          {
            menu.map(item => (
              <li key={item.id}>
                <Link to={item.href}>{ item.title }</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;