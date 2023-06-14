import { RenderPhotoProps } from "react-photo-album";
import classes from "./index.module.css";
import { Blurhash } from "react-blurhash";
import { useEffect, useState } from "react";

// https://react-photo-album.com/documentation#RenderPhoto
// Render Photo example

// function CustomPhotoRendererWithHash = (blurHash: string) =>

const CustomPhotoRenderer = (props: RenderPhotoProps) => {
  console.log(props);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Inspired by https://www.youtube.com/watch?v=VyUJUD5gyoo
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = props.photo.src;
  }, [props.photo.src]);

  return (
    <div
      style={{ position: "relative", ...props.wrapperStyle }}
      className={classes.photo}
      onClick={props.imageProps.onClick}
    >
      <div
        style={{ opacity: imageLoaded ? "0" : "1" }}
        className={classes.blurredPlacehodler}
      >
        <Blurhash
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          hash={(props.photo as any).blurHash}
          width={props.layout.width}
          height={props.layout.height}
          resolutionX={64}
          resolutionY={64}
          punch={1}
        />
      </div>
      <img
        src={props.photo.src}
        loading="lazy"
        style={{ opacity: !imageLoaded ? "0" : "1" }}
        className={classes.image}
      />
    </div>
  );
};

export default CustomPhotoRenderer;
