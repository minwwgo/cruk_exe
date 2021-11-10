import React from 'react'
import styled from 'styled-components'

export const MediaImage = ({result}) => {
  console.log(result)
  return (
    <ImageWrapper>
      <Image src={result.linkOne} alt={result.data[0].title} />
      <p> {result.data[0].title}</p>
    </ImageWrapper>
  );
}
const Image = styled.img`
  width: 100%; 
  height: 80%;
  
  `
  const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    max-width: 300px;
    max-height: 250px;
    overflow: hidden;
    border-radius: 5px; 
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    margin: 20px;
    padding: 20px;
  `;
  