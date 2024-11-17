export const Color = {
	orange: {
		50: "#FFF2EA",
		100: "#FFCDB1",
		200: "#FFB48B",
		300: "#FFA26E",
		400: "#FF9154",
		500: "#FF7E36",
		600: "#FF7326",
		700: "#FF6C1A",
		800: "#FF6814",
		900: "#FF640D"
	},
	green: {
		50: "#F8FFFB",
		100: "#B9ECCF",
		200: "#80E4AD",
		300: "#60DC98",
		400: "#49DE8C",
		500: "#33D37B",
		600: "#30DA7C",
		700: "#28DD78",
		800: "#1CE174",
		900: "#15E772"
	},
	gray: {
		50: "#FBFBFB",
		100: "#E6E6E6",
		200: "#CACACA",
		300: "#B0B0B0",
		400: "#969696",
		600: "#5F5F5F",
		700: "#494949",
		800: "#343434",
		900: "#141414"
	},
	extra: {
		white: "#FFFFFF",
		black: "#000000",
		focus: "#006EFF",
		error: "#E84045",
		check: "#04DF00"
	}
};

const fontToCss = (size: number, weight: string = "normal") => {
	return {
		fontSize: `${size}px`,
		fontWeight: weight,
	}
};

export const Font = {
	h1: fontToCss(32, "bold"),
	h2: fontToCss(28, "semibold"),
	h3: fontToCss(24, "semibold"),
	h4: fontToCss(24, "medium"),
	h5: fontToCss(20, "semibold"),

	p1: fontToCss(20, "regular"),
	p2: fontToCss(18, "semibold"),
	p3: fontToCss(18, "regular"),
	p4: fontToCss(16, "medium"),
	p5: fontToCss(16, "regular"),

	btn1: fontToCss(14, "medium"),
	caption1: fontToCss(14, "regular"),
	caption2: fontToCss(12, "regular"),
}
