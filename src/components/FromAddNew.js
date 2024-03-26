import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewUsers } from "../action/actions";
function FromAddNew() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const isCreating = useSelector((state) => state.user.isCreating);
  function handleCreate() {
    dispatch(CreateNewUsers(email, password, username));
    setEmail("");
    setPassword("");
    setUsername("");
  }
  return (
    <>
      <Container>
        <br />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>PassWord:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>UserName:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={handleCreate} disabled={isCreating}>
          CREATE
        </Button>{" "}
      </Container>
    </>
  );
}
export default FromAddNew;
