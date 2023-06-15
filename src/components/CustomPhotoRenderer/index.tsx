import { RenderPhotoProps } from "react-photo-album";
import classes from "./index.module.css";
import { Blurhash } from "react-blurhash";
import { useEffect, useState } from "react";

// https://react-photo-album.com/documentation#RenderPhoto
// Render Photo example
const CustomPhotoRenderer = ({
  /** Basic info about a photo: width, height, src */
  photo,
  /** Required for styles to properly work */
  wrapperStyle,
  /** Props passed from `PhotoAlbum`, I need only `onClick` */
  imageProps,
  /** I guess that's the dimensions of an image in the final layout */
  layout,
}: RenderPhotoProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Inspired by https://www.youtube.com/watch?v=VyUJUD5gyoo
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = photo.src;
  }, [photo.src]);

  return (
    <div
      style={{ position: "relative", ...wrapperStyle }}
      className={classes.photo}
      onClick={imageProps.onClick}
    >
      <div
        style={{ opacity: imageLoaded ? "0" : "1" }}
        className={classes.blurredPlacehodler}
      >
        <Blurhash
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          hash={(photo as any).blurHash}
          width={layout.width}
          height={layout.height}
          resolutionX={64}
          resolutionY={64}
          punch={1}
        />
      </div>
      <img
        src={photo.src}
        loading="lazy"
        style={{ opacity: !imageLoaded ? "0" : "1" }}
        className={classes.image}
      />
    </div>
  );
};

export default CustomPhotoRenderer;
