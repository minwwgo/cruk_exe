import React from "react";
import styled from "styled-components";

export const MediaVideo = ({ result }) => {
  console.log(result);
  return (
    <VideoContainer>
      <Video src={result.linkOne } type="video/mp4" controls loop muted />
      <VideoTitle>{result.data[0].title}</VideoTitle>
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 20px;
  max-width: 300px;
  max-height: 250px;

  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  margin: 20px;
  padding: 20px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const VideoTitle = styled.p`
  margin-top: 10px;
  font-size: 1rem;
`;
