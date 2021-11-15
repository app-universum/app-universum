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

Appuniversum provides a set of CSS variables to easily tweak it's appearance without the need of a Sass workflow. If you want more control you can also override the references Sass variables found in `_s-colors.scss`, `_s-global.scss` and `_s-utilities.scss`.

````scss
:root {
  // Colors
  --au-white: #{$au-white};
  --au-gray-100: #{$au-gray-100};
  --au-gray-200: #{$au-gray-200};
  --au-gray-300: #{$au-gray-300};
  --au-gray-400: #{$au-gray-400};
  --au-gray-500: #{$au-gray-500};
  --au-gray-600: #{$au-gray-600};
  --au-gray-700: #{$au-gray-700};
  --au-gray-800: #{$au-gray-800};
  --au-gray-900: #{$au-gray-900};
  --au-gray-1000: #{$au-gray-1000};
  --au-blue-100: #{$au-blue-100};
  --au-blue-200: #{$au-blue-200};
  --au-blue-300: #{$au-blue-300};
  --au-blue-600: #{$au-blue-600};
  --au-blue-700: #{$au-blue-700};
  --au-blue-800: #{$au-blue-800};
  --au-blue-900: #{$au-blue-900};
  --au-yellow-100: #{$au-yellow-100};
  --au-yellow-200: #{$au-yellow-200};
  --au-yellow-300: #{$au-yellow-300};
  --au-yellow-400: #{$au-yellow-400};
  --au-yellow-600: #{$au-yellow-600};
  --au-yellow-900: #{$au-yellow-900};
  --au-red-100: #{$au-red-100};
  --au-red-200: #{$au-red-200};
  --au-red-500: #{$au-red-500};
  --au-red-600: #{$au-red-600};
  --au-red-700: #{$au-red-700};
  --au-red-900: #{$au-red-900};
  --au-green-100: #{$au-green-100};
  --au-green-200: #{$au-green-200};
  --au-green-400: #{$au-green-400};
  --au-green-500: #{$au-green-500};
  --au-green-700: #{$au-green-700};
  --au-green-900: #{$au-green-900};

  // Typography
  --au-global-font-size: #{$au-global-font-size};
  --au-global-line-height: #{$au-global-line-height};
  --au-font: #{$au-font};
  --au-font-secondary: #{$au-font-secondary};
  --au-font-tertiary: #{$au-font-tertiary};
  --au-light: #{$au-light};
  --au-regular: #{$au-regular};
  --au-medium: #{$au-medium};
  --au-bold: #{$au-bold};
  --au-base: #{$au-base};
  --au-tiny: #{$au-tiny};
  --au-small: #{$au-small};
  --au-h6: #{$au-h6};
  --au-h5: #{$au-h5};
  --au-h4: #{$au-h4};
  --au-h3: #{$au-h3};
  --au-h2: #{$au-h2};
  --au-h1: #{$au-h1};

  // UI
  --au-page-bg: #{$au-page-bg};
  --au-select-text-color: #{$au-select-text-color};
  --au-select-text-bg: #{$au-select-text-bg};
  --au-radius: #{$au-radius};
  --au-border: #{$au-border};
  --au-outline-border: #{$au-outline-border};
  --au-outline-border-style: #{$au-outline-border-style};
  --au-outline: #{$au-outline};
  --au-outline-offset: #{$au-outline-offset};
  --au-outline-offset-negative: #{$au-outline-offset-negative};
  --au-duration: #{$au-duration};
  --au-easing: #{$au-easing};
  --au-transition: #{$au-transition};
  --au-z-index-alpha: #{$au-z-index-alpha};
  --au-z-index-beta: #{$au-z-index-beta};
  --au-z-index-gamma: #{$au-z-index-gamma};
}
````

</div>