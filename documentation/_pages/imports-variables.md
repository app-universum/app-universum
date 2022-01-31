---
title: Imports and variables
layout: documentation
permalink: "/guidelines/imports-and-variables/"
---

<div class="au-c-content">

## Imports

To use appuniversum in your Sass workflow you can import the global appuniversum scss file.

````scss
@import "appuniversum";
````

Or include the partials in your projects and choose the parts you want to use.

````scss
// VARIABLES
@import "appuniversum/s-colors";
@import "appuniversum/s-global";
@import "appuniversum/s-utilities";
@import "appuniversum/s-root";

// MIXINS
@import "appuniversum/t-font-size";
@import "appuniversum/t-sass-mq";

// GENERIC
@import "appuniversum/g-reset";
@import "appuniversum/g-box-sizing";
@import "appuniversum/g-font";

// ELEMENTS
@import "appuniversum/e-page";

// OBJECTS
@import "appuniversum/o-box";
@import "appuniversum/o-flow";
@import "appuniversum/o-grid";
@import "appuniversum/o-layout";
@import "appuniversum/o-region";

// COMPONENTS
// Include your projects UI components here.

// UTILITIES
@import "appuniversum/u-align-text";
@import "appuniversum/u-background";
@import "appuniversum/u-break-word";
@import "appuniversum/u-flex";
@import "appuniversum/u-font-weights";
@import "appuniversum/u-font-family";
@import "appuniversum/u-headings";
@import "appuniversum/u-hide";
@import "appuniversum/u-max-widths";
@import "appuniversum/u-paragraphs";
@import "appuniversum/u-print";
@import "appuniversum/u-responsive-spacings";
@import "appuniversum/u-spacings";
@import "appuniversum/u-visible";
@import "appuniversum/u-widths";
````

## CSS Variables

Appuniversum provides a set of CSS variables to easily tweak it's appearance without the need of a Sass workflow.

````scss
:root {
  // Colors
  --au-white: #FFFFFF;
  --au-gray-100: #F7F9FC;
  --au-gray-200: #e8ebee;
  --au-gray-300: #CFD5DD;
  --au-gray-400: #AFB9C5;
  --au-gray-500: #8695A8;
  --au-gray-600: #7F8B99;
  --au-gray-700: #687483;
  --au-gray-800: #4F5864;
  --au-gray-900: #333332;
  --au-gray-1000: #000000;
  --au-blue-100: #F4F7FB;
  --au-blue-200: #E4EBF5;
  --au-blue-300: #B2CCEF;
  --au-blue-500: #5990DE;
  --au-blue-600: #3779D7;
  --au-blue-700: #0055CC;
  --au-blue-800: #004AB2;
  --au-blue-900: #003B8E;
  --au-yellow-100: #FFF9D5;
  --au-yellow-200: #FFF29B;
  --au-yellow-300: #FFE615;
  --au-yellow-400: #FFC515;
  --au-yellow-600: #7F6E3B;
  --au-yellow-900: #473D21;
  --au-orange-200: #fff9e8;
  --au-orange-300: #FFEEB9;
  --au-orange-400: #FFE49C;
  --au-orange-500: #FFA10A;
  --au-orange-600: #D07B06;
  --au-orange-700: #9F5804;
  --au-red-100: #FDF7F7;
  --au-red-200: #FBEDED;
  --au-red-300: #F4C8C9;
  --au-red-400: #F1AEAE;
  --au-red-500: #E77474;
  --au-red-600: #D2373C;
  --au-red-700: #AA2729;
  --au-red-900: #470000;
  --au-green-100: #F8FCF9;
  --au-green-200: #ecf6ee;
  --au-green-300: #C5E5CC;
  --au-green-400: #b1dcbb;
  --au-green-500: #009E47;
  --au-green-700: #007A37;
  --au-green-900: #323D08;

  // VL colors
  --vl-white: #FFFFFF;
  --vl-grey-05: #F7F9FC;
  --vl-grey-10: #e8ebee;
  --vl-grey-20: #CFD5DD;
  --vl-grey-50: #8695A8;
  --vl-grey-70: #687483;
  --vl-grey-100: #333332;
  --vl-grey-110: #000000;
  --vl-yellow-100: #FFE615;
  --vl-blue-15: #E4EBF5;
  --vl-blue-30: #B2CCEF;
  --vl-blue-65: #5990DE;
  --vl-blue-100: #0055CC;
  --vl-blue-110: #003B8E;
  --vl-green-10: #ecf6ee;
  --vl-green-30: #C5E5CC;
  --vl-green-40: #b1dcbb;
  --vl-green-100: #009E47;
  --vl-green-130: #007A37;
  --vl-red-10: #FBEDED;
  --vl-red-30: #F4C8C9;
  --vl-red-40: #F1AEAE;
  --vl-red-100: #D2373C;
  --vl-red-130: #AA2729;
  --vl-orange-10: #fff9e8;
  --vl-orange-30: #FFEEB9;
  --vl-orange-40: #FFE49C;
  --vl-orange-100: #FFA10A;
  --vl-orange-110: #D07B06;
  --vl-orange-120: #9F5804;
  --vl-lime-100: #A3CC00;
  --vl-lime-120: #6F8B00;
  --vl-brick-100: #D53D5E;
  --vl-brick-120: #85273B;
  --vl-chocolate-100: #D26E25;
  --vl-chocolate-120: #904E1D;
  --vl-picton-100: #32B1E9;
  --vl-picton-120: #16465B;

  // Typography
  --au-global-font-size: 1.5rem;
  --au-global-line-height: 1.5;
  --au-font: "flanders-sans", BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --au-font-secondary: "flanders-serif";
  --au-font-tertiary: courier, monospace;
  --au-light: 300;
  --au-regular: 400;
  --au-medium: 500;
  --au-bold: 700;
  --au-base: 1.5rem;
  --au-para: 1.8rem;
  --au-para-small: 1.6rem;
  --au-lead: 2.2rem;
  --au-lead-medium: 2rem;
  --au-lead-small: 1.8rem;
  --au-small: 1.4rem;
  --au-tiny: 1.3rem;
  --au-h-functional-small: 1.3rem;
  --au-h-functional: 1.5rem;
  --au-h6: 1.6rem;
  --au-h5: 1.8rem;
  --au-h4: 2rem;
  --au-h3-small: 2.2rem;
  --au-h3: 2.6rem;
  --au-h2-small: 2.6rem;
  --au-h2: 3.2rem;
  --au-h1-small: 3rem;
  --au-h1-medium: 4rem;
  --au-h1: 4.4rem;

  // UI
  --au-page-bg: #FFFFFF;
  --au-select-text-color: #333332;
  --au-select-text-bg: #E4EBF5;
  --au-radius: .3rem;
  --au-border: .2rem;
  --au-outline-color: #5990DE;
  --au-outline-border: .3rem;
  --au-outline-border-style: solid;
  --au-outline: #5990DE .3rem solid;
  --au-outline-offset: .2rem;
  --au-outline-offset-negative: -.3rem;
  --au-duration: .125s;
  --au-easing: cubic-bezier(0.190,  1.000, 0.220, 1.000);
  --au-transition: .125s cubic-bezier(0.190,  1.000, 0.220, 1.000);
  --au-z-index-alpha: 1;
  --au-z-index-beta: 2;
  --au-z-index-gamma: 3;
}
````

</div>
