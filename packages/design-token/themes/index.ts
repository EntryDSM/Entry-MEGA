import "./index.css";

export const Colors = {
  orange: {
    900: "#FF640D",
    800: "#FF6814",
    700: "#FF6C1A",
    600: "#FF7326",
    500: "#FF7E36",
    400: "#FF9154",
    300: "#FFA26E",
    200: "#FFB48B",
    100: "#FFCDB1",
    50: "#FFF2EA",
  },
  green: {
    900: "#15E772",
    800: "#1CE174",
    700: "#28DD78",
    600: "#30DA7C",
    500: "#33D37B",
    400: "#49DE8C",
    300: "#60DC98",
    200: "#80E4AD",
    100: "#B9ECCF",
    50: "#F8FFFB",
  },
  gray: {
    900: "#141414",
    800: "#343434",
    700: "#494949",
    600: "#5F5F5F",
    400: "#969696",
    300: "#B0B0B0",
    200: "#CACACA",
    100: "#E6E6E6",
    50: "#FBFBFB",
  },
  extra: {
    check: "#04DF00",
    error: "#E84045",
    focus: "#006EFF",
    black: "#000000",
    white: "#FFFFFF",
  },
};

const fontGenerator = (
  fontFamily: string,
  weight: number | string,
  size: number,
) => ({
  fontFamily: `${fontFamily}`,
  fontWeight: `${weight}`,
  fontSize: `${size}px`,
});

export const Fonts = {
  h1: fontGenerator("PretendardVariable", 700, 32),
  h2: fontGenerator("PretendardVariable", 600, 28),
  h3: fontGenerator("PretendardVariable", 600, 24),
  h4: fontGenerator("PretendardVariable", 500, 24),
  h5: fontGenerator("PretendardVariable", 600, 20),
  p1: fontGenerator("PretendardVariable", 400, 20),
  p2: fontGenerator("PretendardVariable", 600, 18),
  p3: fontGenerator("PretendardVariable", 400, 18),
  p4: fontGenerator("PretendardVariable", 500, 16),
  p5: fontGenerator("PretendardVariable", 400, 16),
  btn1: fontGenerator("PretendardVariable", 500, 14),
  caption1: fontGenerator("PretendardVariable", 400, 14),
  caption2: fontGenerator("PretendardVariable", 400, 12),
};
