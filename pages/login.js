import { useState } from "react";
import DashboardLayout from "../components/layout/Dashboard/DashboardLayout";
import FormWidget from "../components/widgets/FormWidget";
import { Container, Row, Col } from "react-bootstrap";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { withApollo } from "../apollo/client";
import authQuery from "../apollo/queries/authQuery";
import storage from "../components/util/storage";

const Login = () => {
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
      inputType: "password",
      name: "password",
      label: "Contrasena",
      required: true,
      minLength: 5,
    },
  ];

  const client = useApolloClient();
  const [login] = useMutation(authQuery.LOGIN_MUTATION);
  const [errorMsg, setErrorMsg] = useState();
  const router = useRouter();

  async function handleSubmit(result) {
    console.log(result);

    // const emailElement = event.currentTarget.elements.email;
    // const passwordElement = event.currentTarget.elements.password;

    try {
      await client.resetStore();
      const { data } = await login({
        variables: {
          login: result.username,
          password: result.password,
        },
      });
      if (data.login.token) {
        storage.setToken(data.login.token, true);
        await router.push("/");
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <DashboardLayout
      metadata={{ title: "Login" }}
      showSideBar={false}
      showNavbar={false}
    >
      <Container className="shadow pt-5" style={{}}>
        <Row className="justify-content-md-center">
          <Col md="4">
            <FormWidget fields={formLogin} onSubmit={handleSubmit} />
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default withApollo(Login);
