import DashboardLayout from "../components/layout/Dashboard/DashboardLayout";
import FormWidget from "../components/widgets/FormWidget";
import { Container, Row, Col } from "react-bootstrap";

export default function Login() {
  const formLogin = [
    {
      type: "INPUT",
      name: "username",
      label: "Usuario",
      required: true,
      minLength: 3,
    },
    {
      type: "INPUT",
      name: "password",
      label: "Contrasena",
      required: true,
      minLength: 5,
    },
  ];
  return (
    <DashboardLayout
      metadata={{ title: "Login" }}
      showSideBar={false}
      showNavbar={false}
    >
      <Container className="shadow pt-5" style={{}}>
        <Row className="justify-content-md-center">
          <Col md="4">
            <FormWidget fields={formLogin} />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
}
