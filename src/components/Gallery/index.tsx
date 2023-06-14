import classes from "./index.module.css";
import { useState, Fragment } from "react";
import imagesList, { ImageInfoInterface, yearsList } from "../../images";
import { filterValuesType } from "../../hooks/useFilterValues";
import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import CustomPhotoRenderer from "../CustomPhotoRenderer";

interface IndexListType {
  [year: string]: number;
}

interface ImagesListByYearsType {
  [year: string]: ImageInfoInterface[];
}

interface GalleryProps {
  /** Filter chosen by user. "All" or a specified year */
  currentFilter: filterValuesType;
}

const Gallery = ({ currentFilter }: GalleryProps) => {
  const filteredImageList =
    currentFilter === "All"
      ? imagesList
      : imagesList.filter(
          (image) => image.date.getFullYear().toString() === currentFilter
        );

  const filteredYearsList =
    currentFilter === "All" ? yearsList : [currentFilter];

  const imagesListByYears: ImagesListByYearsType = filteredYearsList.reduce(
    (acc, year) => ({
      ...acc,
      [year]: filteredImageList
        .filter((image) => image.date.getFullYear().toString() === year)
        .sort((a, b) => b.date.getTime() - a.date.getTime()),
    }),
    {}
  );

  // Is used for storing information about Lightbox modals
  const [indexList, setIndexList] = useState<IndexListType>(
    filteredYearsList.reduce(
      (acc, year) => ({
        ...acc,
        [year]: -1,
      }),
      {}
    )
  );

  const indexListHandler = (year: string, newIndex: number) => {
    setIndexList((prev) => ({ ...prev, [year]: newIndex }));
  };

  return (
    <>
      <main className={classes.container}>
        {filteredYearsList.map((year) => {
          return (
            <Fragment key={year.toString()}>
              <h2 className={classes.subheader}>{year}</h2>
              <PhotoAlbum
                key={year.toString()}
                columns={(containerWidth) => {
                  if (containerWidth < 400) return 1;
                  if (containerWidth < 800) return 2;
                  if (containerWidth < 1000) return 3;
                  return 4;
                }}
                layout="columns"
                photos={imagesListByYears[year]}
                onClick={({ index }) => indexListHandler(year, index)}
                targetRowHeight={300}
                spacing={4}
                renderPhoto={CustomPhotoRenderer}
              />
              <Lightbox
                open={indexList[year] !== -1}
                index={indexList[year]}
                close={() => indexListHandler(year, -1)}
                slides={imagesListByYears[year]}
                plugins={[Counter, Download, Fullscreen, Zoom]}
                zoom={{
                  zoomInMultiplier: 1.25,
                  maxZoomPixelRatio: 5,
                }}
                styles={{
                  container: {
                    backgroundColor: "#17212b",
                  },
                }}
                counter={{ container: { style: { top: 0, bottom: "unset" } } }}
              />
            </Fragment>
          );
        })}
      </main>
    </>
  );
};

export default Gallery;
