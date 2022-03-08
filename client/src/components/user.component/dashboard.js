import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function Dashboard() {
  
  return (
    <>
      <Container className="pt-2">
        <Row>
          <Col lg={3}>
            <Sidebar />
          </Col>
          <Col lg={9}>
          <Outlet/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
