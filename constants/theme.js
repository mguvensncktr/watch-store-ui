import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {

    primary: "#1E6474",
    secondary: "#5B5B5B",

    black: "#464646",
    white: "#FFFFFF",
    lightGray: "#616161",
    lightGray2: "#868E96",
    gray: "#828282",
    gradient1: '#9E7654',
    gradient2: '#DF9E62',
    darkGray: '#7C7C7C',

};

export const SIZES = {

    base: 8,
    font: 14,
    radius: 14,
    padding: 20,


    largeTitle: 36,
    h1: 24,
    h2: 22,
    h3: 20,
    h4: 18,
    h5: 18,
    body1: 16,
    body2: 14,
    body3: 14,

    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Helvetica-Regular", fontSize: SIZES.largeTitle, lineHeight: 42 },
    h1: { fontFamily: "TrajanPro-Bold", fontSize: SIZES.h1, lineHeight: 26 },
    h2: { fontFamily: "TrajanPro-Bold", fontSize: SIZES.h2, lineHeight: 24 },
    h3: { fontFamily: "Helvetica-Regular", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Helvetica-Regular", fontSize: SIZES.h4, lineHeight: 20 },
    h5: { fontFamily: "Helvetica-Light", fontSize: SIZES.h5, lineHeight: 20 },
    body1: { fontFamily: "Helvetica-Regular", fontSize: SIZES.body1, lineHeight: 24 },
    body2: { fontFamily: "Helvetica-Bold", fontSize: SIZES.body1, lineHeight: 24 },
    body3: { fontFamily: "Helvetica-Regular", fontSize: SIZES.body2, lineHeight: 20 },
    body4: { fontFamily: "Helvetica-Light", fontSize: SIZES.body3, lineHeight: 20 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;