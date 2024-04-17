import { extendTheme } from "@chakra-ui/react";
import customColors from "./customColors";
import typography from "./typography";

const customTheme = extendTheme({ colors: customColors, textStyles: typography});

export default customTheme;
