import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useStudent } from "./context/StudentContext";

const Admin = () => {
  const { addStudent } = useStudent();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  // valid.

  let newName =
    name.length > 0
      ? name[0].toLocaleUpperCase() + name.slice(1).toLocaleLowerCase()
      : "";

  let newLastName =
    lastName.length > 0
      ? lastName[0].toLocaleUpperCase() + lastName.slice(1).toLocaleLowerCase()
      : "";
  // Valid.

  function handleChange() {
    let obj = {
      image,
      name: newName,
      lastName: newLastName,
      phone,
      id: Date.now(),
    };
    addStudent(obj);
    setImage("");
    setName("");
    setLastName("");
    setPhone("");
  }

  return (
    <>
      <Box
        className="add"
        sx={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box className="add-todo">
          <Typography color="white" variant="h6">
            ADD STUDENT
          </Typography>

          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="input-add"
            type="text"
            placeholder="Student IMG"
          />

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-add"
            type="text"
            placeholder="Name"
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input-add"
            type="text"
            placeholder="Last name"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-add"
            type="number"
            placeholder="Phone"
          />
          <Box>
            <Button
              sx={{
                padding: "18px 0",
                width: "300px",
                color: "white",
                fontSize: "20px",
              }}
              onClick={handleChange}
              variant="outlined"
            >
              ADD
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
