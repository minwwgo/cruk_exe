import React from "react";

export const DisplayMedia = (props) => {
  const { results } = props;

  const showMedia = results.map((result) => {
    console.log(result.data[0].media_type);

    if (result.data[0].media_type === "movie") {
      return <div> movie </div>;
    }
    if (result.data[0].media_type === "audio") {
      return <div> audio </div>;
    }
    if (result.data[0].media_type === "image") {
      return <div> image </div>;
    }
  });
  
  return <div>{showMedia}</div>;
};
