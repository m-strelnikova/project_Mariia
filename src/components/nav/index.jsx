import style from './styles.module.css';
import { NavLink } from "react-router";
const navMenu = [
  {
    id: 1,
    title: "Главная",
    to: "/",
  },
  {
    id: 2,
    title: "Корзина",
    to: "/shoppingbox",
  },
  {
    id: 3,
    title: "Контакты",
    to: "/contact",
  },
];

function HeaderNav() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      background: "#3b3c3d",
      fontSize: "15px",
      fontWeight: 500,
      color: "#fff",
      width: "100%",
      height: "110px",
      alignItems: "center",
      padding: "0 13.02%"
    }}>
      <div>
        <h1 style={{ fontWeight: 900, fontSize: "20px", color: "#fff" }}>Сникер - магазин</h1>
      </div>
      <div>
        <nav>
          {navMenu.map((navItem) => {
            return (
              <NavLink
                to={navItem.to}
                key={navItem.id}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "rgba(255, 255, 255, 0.5)",
                    textDecoration: "none",
                    paddingLeft: "64px"
                  };
                }}
              >
                {navItem.title}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default HeaderNav;