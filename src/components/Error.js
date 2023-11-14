import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h3>Something went wrong</h3>
      <div>
        {err.status} <span>{err.statusText}</span>
      </div>
    </>
  );
};

export default Error;
