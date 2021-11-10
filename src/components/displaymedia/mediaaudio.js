import React from "react";
import styled from "styled-components";


export const MediaAudio = ({ result }) => {
  console.log(result);
  return (
    <AudioContent key={result.data[0].nasa_id}>
      <audio controls>
        <source src={result.linkOne} />
      </audio>
      <p> {result.data[0].title}</p>
    </AudioContent>
  );
};

const AudioContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  margin:10px 0 10px 0;
  max-width:300px;
`;

