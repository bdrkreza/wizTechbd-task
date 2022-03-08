import { Link } from "react-router-dom";
import { navigation } from "../routes/navItem";

export default function Sidebar() {
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-white" style={{minHeight:"803px"}}>
        <div>
          <a
            href="/"
            className="d-flex align-items-center justify-content-center  mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              width="40"
              alt="Avatar"
            />
            <span className="fs-4 ms-2">albert pollock</span>
          </a>
        </div>
        <hr />
        <ul className="nav  flex-column" style={{minHeight:"600px"}}>
          {navigation.map(({ name, href, current, icons }, index) => (
            <li key={index}>
              <Link to={href} active={current} className="nav-link" aria-current="page">
                <span className="fs-4"> {icons}</span>
                <span className="fs-4"> {name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    </>
  );
}
