import { Container, Navbar } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";
import style from "../../scss/navbar.module.scss";
export default function AppBar() {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="#EAF2FF">
        <Container>
          <Navbar.Brand href="#">
            <div className={style.brand_logo}>
              post
            </div>
          </Navbar.Brand>
          <div className={style.right_top_header}>
            <ul>
              <li>
                <VscSearch />
              </li>

              <li >
                <IoMdNotificationsOutline />
              </li>

              <li>
                <AiOutlineUser />
              </li>
            </ul>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
