import React from "react";
import LogoOrange from "../../assets/LogoOrange.svg";
import LogoGreen from "../../assets/LogoGreen.svg";
import TitleImg from "../../assets/mainCarrers/TitleImg.svg";
import Write from "../../assets/mainCarrers/write.svg";

type imgType = {
  name: string;
  width?: string;
  height?: string;
};

type ImgDetail = {
  src: string;
  width: string;
  height: string;
};

export const ImgStore = ({
  name,
  width = "35px",
  height = "35px",
}: imgType) => {
  let Img: ImgDetail | null = null;

  switch (name) {
    case "LogoGreen":
      Img = { src: LogoGreen, width, height };
      break;
    case "LogoOrange":
      Img = { src: LogoOrange, width, height };
      break;
    case "TitleImg":
      Img = { src: TitleImg, width, height };
      break;
    case "Write":
      Img = { src: Write, width, height };
      break;
    default:
      Img = null;
  }

  if (!Img) return null;

  return (
    <img
      src={Img.src}
      style={{
        width: Img.width,
        height: Img.height || "auto",
        objectFit: "cover",
        maxWidth: "100%",
      }}
      alt={name}
    />
  );
};
