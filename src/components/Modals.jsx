import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modals = () => {
  const nav = useNavigate();
  const [admin, setAdmin] = useState("");
  const [password, setPasword] = useState("");

  function secure() {
    if (admin == "Alen" && password == "123") {
      nav("/admin");
    } else {
      alert("Доступ закрыт");
    }
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
          <input
            onChange={(e) => setAdmin(e.target.value)}
            className="input-add"
            type="text"
            placeholder="Admin name"
          />

          <input
            onChange={(e) => setPasword(e.target.value)}
            className="input-add"
            type="password"
            placeholder="Password"
          />
          <Box>
            <Button
              sx={{
                padding: "18px 0",
                width: "300px",
                color: "white",
                fontSize: "20px",
              }}
              variant="outlined"
              onClick={secure}
            >
              Войти
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Modals;
