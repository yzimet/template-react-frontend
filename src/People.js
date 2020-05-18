import React, { useState } from "react";
import { useFetch } from "react-hooks-async";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function Photos() {
  const url = "http://swapi.dev/api/people/1/";
  const { pending, result } = useFetch(url);

  if (pending || !result) {
    return <div>Loading&hellip;</div>;
  }

  return (
    <Box>
      <Typography variant="h5">{result.name}</Typography>
      <Typography>Height: {result.height}</Typography>
      <Typography>Mass: {result.mass}</Typography>
    </Box>
  );
}
