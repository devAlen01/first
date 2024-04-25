import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useStudent } from "./context/StudentContext";

const Students = () => {
  const { readStudent, data, removeStudent } = useStudent();

  useEffect(() => {
    readStudent();
  }, []);
  return (
    <>
      <div className="student">
        {data.map((el) => (
          <Card
            key={el}
            sx={{
              width: "250px",
              height: "330px",
              display: "flex",
              flexDirection: "column",
              background: "black",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={5}>
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={el.image}
                alt={el.name}
              />
            </Stack>
            <Box sx={{ color: "white", margin: "10px 0" }}>
              <Typography variant="h6" className="std-text">
                {el.name}
              </Typography>
              <Typography variant="h6" className="std-text">
                {el.lastName}
              </Typography>
              <Typography variant="h6" className="std-text">
                {el.phone}
              </Typography>
            </Box>
            <Box>
              <CardActions>
                <Button onClick={() => removeStudent(el.id)} size="small">
                  Delete
                </Button>
              </CardActions>
            </Box>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Students;
