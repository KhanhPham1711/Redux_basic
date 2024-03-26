import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, fetchAllUsers } from "../action/actions";

function TableUser() {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUser);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);

  console.log(listUsers);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const handleDelete = (users) => {
    dispatch(deleteUsers(users.id));
  };
  return (
    <Container>
      <hr />
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isError ? (
            <tr>
              <td colSpan="4">Error occurred while loading data.</td>
            </tr>
          ) : (
            <>
              {isLoading === true ? (
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              ) : (
                <>
                  {listUsers.map((item, index) => (
                    <tr key={`users-${index}`}>
                      <td>{index + 1}</td>
                      <td>{item.email}</td>
                      <td>{item.username}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(item)} // Truyền đối tượng người dùng vào hàm handleDelete
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableUser;
