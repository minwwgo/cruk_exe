import React from "react";
import { MediaVideo } from "./mediavideo";
import { MediaImage } from "./mediaimage";
import { MediaAudio } from "./mediaaudio";

export const DisplayMedia = ({results}) => {
return (
   results.map((result) => {
    switch (result.data[0].media_type) {
      case "image":
        return <MediaImage key={result.id} result={result} />;
      case "audio":
        return <MediaAudio key={result.id} result={result} />;
      case "video":
        return <MediaVideo key={result.id} result={result} />;
      default:
        return null;
    }
  })
  
)
  
};
