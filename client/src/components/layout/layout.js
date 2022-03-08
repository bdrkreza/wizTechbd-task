import { Container } from "react-bootstrap";
import Footer from "../common/footer";
import AppBar from "../common/navbar";



export default function Layout({ children }) {
  return (
    <Container>
      <AppBar />
      <main style={{minHeight:"700px"}}>{children}</main>
      <Footer />
    </Container>
  );
}
