"use client";

import { createGlobalStyle } from "styled-components";
import { sharedCss } from "@/styles/shared-css";

/** Site-wide reset, theme variables and shared layout classes (cards, hero, grids…). */
const GlobalStyle = createGlobalStyle`${sharedCss}`;

export default GlobalStyle;
