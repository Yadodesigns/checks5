import { a as e, b as g } from "./chunk-3ZTOJ7KV.mjs";
import {
  A as y,
  D as F,
  G as c,
  L as j,
  M as _,
  U as L,
  aa as k,
  c as U,
  da as B,
  e as b,
  ea as ee,
  ga as re,
  ha as T,
  i as w,
  ia as W,
  q as r,
  r as z,
  u as $,
} from "./chunk-KPCDX42X.mjs";
ee.loadWebFontsFromSelectors(["CUSTOM;Carbon Bold Bold"]);
var ae = [
    {
      family: "Carbon Bold Bold",
      moduleAsset: {
        localModuleIdentifier: "local-module:css/Ty9EKz2Cn:default",
        url: "/fonts/random.ttf",
      },
      url: new URL(
        "https://framerusercontent.com/modules/assets/Ty40lCkAHyn7g4y2nFaiIjMGo~F_9cm0HmWDnWmK3JP5zJ4EHRsiKEQ_fPvrhTu_9gy2k.ttf"
      ).href,
    },
  ],
  te = [
    '.framer-JEEay .framer-styles-preset-yiil52:not(.rich-text-wrapper), .framer-JEEay .framer-styles-preset-yiil52.rich-text-wrapper p, .framer-JEEay .framer-styles-preset-yiil52.rich-text-wrapper [data-preset-tag="p"] { --framer-font-family: "Carbon Bold Bold", serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0px; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, #000000); --framer-text-decoration: none; --framer-text-transform: uppercase; }',
  ],
  ne = "framer-JEEay";
var de = {
    fj0SR0scB: { hover: !0 },
    fTNi7sHLo: { hover: !0 },
    WRIx3NcST: { hover: !0 },
  },
  fe = ["fTNi7sHLo", "WRIx3NcST", "fj0SR0scB"],
  me = {
    fj0SR0scB: "framer-v-1bwf2ht",
    fTNi7sHLo: "framer-v-1hiu9tv",
    WRIx3NcST: "framer-v-1j4o1ia",
  };
function Y(p, ...n) {
  let d = {};
  return n?.forEach((l) => l && Object.assign(d, p[l])), d;
}
var le = { Etherscan: "WRIx3NcST", Opensea: "fTNi7sHLo", Twitter: "fj0SR0scB" },
  ce = {
    default: {
      damping: 60,
      delay: 0,
      duration: 0.3,
      ease: [0.44, 0, 0.56, 1],
      mass: 1,
      stiffness: 500,
      type: "spring",
    },
  },
  pe = b(function (
    {
      id: p,
      style: n,
      className: d,
      width: l,
      height: J,
      layoutId: f,
      variant: v = "fTNi7sHLo",
      ...h
    },
    S
  ) {
    let u = le[v] || v,
      {
        baseVariant: o,
        classNames: I,
        gestureVariant: s,
        setGestureState: i,
        setVariant: X,
        transition: a,
        variants: m,
      } = k({
        cycleOrder: fe,
        defaultVariant: "fTNi7sHLo",
        enabledGestures: de,
        transitions: ce,
        variant: u,
        variantClassNames: me,
      }),
      t = m.join("-") + h.layoutDependency,
      C = () =>
        !(
          ["WRIx3NcST-hover", "fj0SR0scB-hover"].includes(s) ||
          ["WRIx3NcST", "fj0SR0scB"].includes(o)
        ),
      x = () => s === "WRIx3NcST-hover" || o === "WRIx3NcST",
      E = () => s === "fj0SR0scB-hover" || o === "fj0SR0scB",
      V = w();
    return e(z, {
      id: f ?? V,
      children: e(r.div, {
        initial: u,
        animate: m,
        onHoverStart: () => i({ isHovered: !0 }),
        onHoverEnd: () => i({ isHovered: !1 }),
        onTapStart: () => i({ isPressed: !0 }),
        onTap: () => i({ isPressed: !1 }),
        onTapCancel: () => i({ isPressed: !1 }),
        className: c("framer-yt9tf", I),
        style: { display: "contents" },
        children: e(j, {
          href: "https://opensea.io/collection/vv-checks-originals",
          openInNewTab: !0,
          ...Y(
            {
              fj0SR0scB: { href: "https://twitter.com/jackbutcher" },
              WRIx3NcST: {
                href: "https://etherscan.io/address/0x036721e5A769Cc48B3189EFbb9ccE4471E8A48B1",
              },
            },
            o,
            s
          ),
          children: e(r.a, {
            ...h,
            className: `${c("framer-1hiu9tv", d)} framer-1s9vfsq`,
            "data-framer-name": "Opensea",
            layoutDependency: t,
            layoutId: "fTNi7sHLo",
            ref: S,
            style: { ...n },
            transition: a,
            ...Y(
              {
                "fj0SR0scB-hover": { "data-framer-name": void 0 },
                "fTNi7sHLo-hover": { "data-framer-name": void 0 },
                "WRIx3NcST-hover": { "data-framer-name": void 0 },
                fj0SR0scB: { "data-framer-name": "Twitter" },
                WRIx3NcST: { "data-framer-name": "Etherscan" },
              },
              o,
              s
            ),
            children: g(r.div, {
              className: "framer-ht8ezq",
              layoutDependency: t,
              layoutId: "l_Zu9sfZW",
              style: { filter: "invert(0)", WebkitFilter: "invert(0)" },
              transition: a,
              variants: {
                "fj0SR0scB-hover": {
                  filter: "invert(1)",
                  WebkitFilter: "invert(1)",
                },
                "fTNi7sHLo-hover": {
                  filter: "invert(1)",
                  WebkitFilter: "invert(1)",
                },
                "WRIx3NcST-hover": {
                  filter: "invert(1)",
                  WebkitFilter: "invert(1)",
                },
              },
              children: [
                C() &&
                  e(B, {
                    className: "framer-ronc86",
                    "data-framer-name": "Opensea",
                    layout: "position",
                    layoutDependency: t,
                    layoutId: "kbhuYat9P",
                    opacity: 1,
                    radius: 0,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36"><path d="M 36 18.857 C 36 16.149 34.5 13.8 32.318 12.686 C 32.582 11.94 32.726 11.134 32.726 10.286 C 32.726 6.497 29.794 3.432 26.181 3.432 C 25.375 3.432 24.604 3.576 23.89 3.861 C 22.831 1.569 20.589 0 18.001 0 C 15.413 0 13.174 1.572 12.109 3.857 C 11.397 3.574 10.624 3.429 9.819 3.429 C 6.202 3.429 3.274 6.497 3.274 10.286 C 3.274 11.133 3.416 11.938 3.68 12.686 C 1.5 13.8 0 16.145 0 18.857 C 0 21.42 1.34 23.654 3.329 24.833 C 3.295 25.125 3.274 25.416 3.274 25.714 C 3.274 29.503 6.202 32.571 9.819 32.571 C 10.624 32.571 11.396 32.424 12.107 32.143 C 13.17 34.43 15.409 36 17.999 36 C 20.591 36 22.83 34.43 23.89 32.143 C 24.602 32.422 25.373 32.568 26.181 32.568 C 29.798 32.568 32.726 29.499 32.726 25.711 C 32.726 25.413 32.705 25.121 32.669 24.831 C 34.654 23.654 36 21.42 36 18.859 Z" fill="var(--token-4248d933-466b-4069-bc15-9cfdbb085af5, rgb(17, 17, 17)) /* {&quot;name&quot;:&quot;Shade / 700&quot;} */"></path><g transform="translate(9.3 9)" id="ss2104652682_2"><path d="M 1.072 9.251 L 1.133 9.152 L 4.932 3.209 C 4.988 3.125 5.119 3.133 5.16 3.227 C 5.794 4.649 6.343 6.419 6.086 7.519 C 5.978 7.972 5.677 8.585 5.338 9.152 C 5.294 9.235 5.247 9.316 5.195 9.394 C 5.171 9.43 5.13 9.45 5.087 9.45 L 1.183 9.45 C 1.135 9.45 1.091 9.425 1.068 9.384 C 1.045 9.342 1.046 9.291 1.072 9.251 Z" fill="var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, rgb(255, 255, 255))"></path><path d="M 18 11.295 C 18.001 11.348 17.97 11.396 17.921 11.418 C 17.626 11.543 16.619 12.008 16.201 12.589 C 15.132 14.075 14.318 16.201 12.493 16.201 L 4.883 16.201 C 2.184 16.201 0 14.008 0 11.301 L 0 11.213 C 0 11.143 0.058 11.085 0.131 11.085 L 4.372 11.085 C 4.456 11.085 4.518 11.161 4.512 11.246 C 4.481 11.526 4.533 11.81 4.664 12.06 C 4.915 12.569 5.434 12.89 6.001 12.89 L 8.101 12.89 L 8.101 11.251 L 6.024 11.251 C 5.975 11.25 5.93 11.222 5.908 11.179 C 5.885 11.135 5.888 11.082 5.916 11.041 C 5.94 11.006 5.963 10.971 5.992 10.93 C 6.262 10.54 6.514 10.137 6.749 9.724 C 6.944 9.387 7.118 9.037 7.271 8.679 C 7.3 8.615 7.324 8.547 7.35 8.483 C 7.391 8.369 7.432 8.261 7.461 8.156 C 7.49 8.066 7.517 7.972 7.54 7.884 C 7.61 7.581 7.639 7.26 7.639 6.927 C 7.639 6.795 7.633 6.658 7.622 6.53 C 7.616 6.386 7.598 6.243 7.581 6.1 C 7.569 5.975 7.546 5.849 7.522 5.721 C 7.489 5.529 7.45 5.339 7.403 5.151 L 7.385 5.078 C 7.35 4.947 7.318 4.824 7.277 4.693 C 7.161 4.293 7.027 3.898 6.877 3.51 C 6.824 3.361 6.766 3.218 6.705 3.078 C 6.617 2.862 6.527 2.666 6.445 2.482 C 6.404 2.404 6.366 2.324 6.331 2.243 C 6.291 2.155 6.249 2.069 6.205 1.983 C 6.176 1.919 6.141 1.857 6.118 1.799 L 5.861 1.326 C 5.826 1.262 5.884 1.183 5.954 1.203 L 7.56 1.638 L 7.572 1.638 L 7.782 1.7 L 8.016 1.764 L 8.101 1.787 L 8.101 0.835 C 8.101 0.374 8.469 0 8.927 0 C 9.155 0 9.362 0.093 9.508 0.245 C 9.657 0.397 9.75 0.604 9.75 0.835 L 9.75 2.251 L 9.923 2.298 C 9.934 2.304 9.949 2.31 9.961 2.319 C 10.002 2.348 10.063 2.395 10.139 2.453 C 10.2 2.5 10.264 2.558 10.34 2.619 C 10.495 2.745 10.682 2.906 10.884 3.09 C 10.936 3.136 10.989 3.183 11.038 3.233 C 11.298 3.475 11.59 3.758 11.871 4.074 C 11.949 4.164 12.025 4.252 12.104 4.348 C 12.18 4.445 12.265 4.538 12.335 4.631 C 12.431 4.757 12.53 4.888 12.621 5.026 C 12.662 5.09 12.712 5.157 12.75 5.221 C 12.866 5.394 12.966 5.572 13.062 5.75 C 13.103 5.832 13.144 5.922 13.179 6.01 C 13.287 6.249 13.372 6.492 13.424 6.737 C 13.442 6.789 13.453 6.845 13.459 6.897 L 13.459 6.909 C 13.477 6.979 13.482 7.055 13.488 7.134 C 13.513 7.385 13.499 7.638 13.447 7.884 C 13.424 7.99 13.395 8.089 13.36 8.197 C 13.322 8.299 13.287 8.404 13.24 8.506 C 13.15 8.718 13.042 8.923 12.919 9.117 C 12.878 9.19 12.828 9.266 12.782 9.339 C 12.729 9.415 12.674 9.488 12.627 9.558 C 12.56 9.648 12.49 9.742 12.417 9.826 C 12.352 9.914 12.288 10.002 12.215 10.08 C 12.116 10.2 12.019 10.311 11.917 10.419 C 11.859 10.489 11.795 10.562 11.727 10.627 C 11.663 10.7 11.596 10.764 11.538 10.822 C 11.435 10.924 11.354 11 11.284 11.067 L 11.117 11.216 C 11.094 11.239 11.062 11.252 11.03 11.251 L 9.75 11.251 L 9.75 12.89 L 11.36 12.89 C 11.719 12.89 12.06 12.764 12.338 12.528 C 12.431 12.446 12.843 12.09 13.331 11.552 C 13.346 11.533 13.368 11.52 13.392 11.514 L 17.834 10.229 C 17.873 10.218 17.916 10.226 17.948 10.25 C 17.981 10.275 18 10.314 18 10.355 Z" fill="var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, rgb(255, 255, 255))"></path></g></svg>',
                    svgContentId: 2104652682,
                    transition: a,
                    withExternalLayout: !0,
                  }),
                x() &&
                  e(B, {
                    className: "framer-cms77c",
                    "data-framer-name": "Etherscan",
                    layout: "position",
                    layoutDependency: t,
                    layoutId: "XNPN2F2Zl",
                    opacity: 1,
                    radius: 0,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36"><path d="M 36 18.857 C 36 16.149 34.5 13.8 32.318 12.686 C 32.582 11.94 32.726 11.134 32.726 10.286 C 32.726 6.497 29.794 3.432 26.181 3.432 C 25.375 3.432 24.604 3.576 23.89 3.861 C 22.831 1.569 20.589 0 18.001 0 C 15.413 0 13.174 1.572 12.109 3.857 C 11.397 3.574 10.624 3.429 9.819 3.429 C 6.202 3.429 3.274 6.497 3.274 10.286 C 3.274 11.133 3.416 11.938 3.68 12.686 C 1.5 13.8 0 16.145 0 18.857 C 0 21.42 1.34 23.654 3.329 24.833 C 3.295 25.125 3.274 25.416 3.274 25.714 C 3.274 29.503 6.202 32.571 9.819 32.571 C 10.624 32.571 11.396 32.424 12.107 32.143 C 13.17 34.43 15.409 36 17.999 36 C 20.591 36 22.83 34.43 23.89 32.143 C 24.602 32.422 25.373 32.568 26.181 32.568 C 29.798 32.568 32.726 29.499 32.726 25.711 C 32.726 25.413 32.705 25.121 32.669 24.831 C 34.654 23.654 36 21.42 36 18.859 Z" fill="var(--token-4248d933-466b-4069-bc15-9cfdbb085af5, rgb(17, 17, 17)) /* {&quot;name&quot;:&quot;Shade / 700&quot;} */"></path><g transform="translate(9 9)" id="ss2424888077_2"><path d="M 3.8 16.384 C 6.52 18.253 10.12 18.522 13.117 17.08 C 16.114 15.638 18.001 12.73 18 9.552 C 18 9.358 17.99 9.165 17.977 8.974 C 14.71 13.577 8.678 15.729 3.8 16.384" fill="var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, rgb(255, 255, 255))"></path><path d="M 3.718 8.044 C 3.718 7.854 3.798 7.671 3.941 7.537 C 4.084 7.402 4.278 7.327 4.48 7.328 L 5.743 7.332 C 6.162 7.332 6.502 7.653 6.502 8.049 L 6.502 12.561 C 6.644 12.521 6.827 12.478 7.026 12.434 C 7.312 12.371 7.514 12.13 7.514 11.852 L 7.514 6.256 C 7.514 6.066 7.594 5.884 7.737 5.749 C 7.879 5.615 8.072 5.539 8.273 5.539 L 9.539 5.539 C 9.958 5.539 10.298 5.86 10.298 6.256 L 10.298 11.45 C 10.298 11.45 10.615 11.329 10.923 11.206 C 11.158 11.112 11.31 10.895 11.31 10.655 L 11.31 4.463 C 11.31 4.273 11.39 4.09 11.533 3.956 C 11.675 3.821 11.868 3.746 12.069 3.746 L 13.335 3.746 C 13.754 3.746 14.094 4.067 14.094 4.463 L 14.094 9.562 C 15.191 8.811 16.303 7.907 17.185 6.821 C 17.445 6.501 17.518 6.079 17.379 5.697 C 16.156 2.329 12.826 0.05 9.058 0.001 C 4.098 -0.062 -0 3.763 0 8.449 C -0.005 9.931 0.405 11.389 1.188 12.674 C 1.408 13.033 1.828 13.239 2.266 13.202 C 2.564 13.177 2.861 13.148 3.158 13.115 C 3.477 13.081 3.718 12.825 3.718 12.522 L 3.718 8.044" fill="var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, rgb(255, 255, 255))"></path></g></svg>',
                    svgContentId: 2424888077,
                    transition: a,
                    withExternalLayout: !0,
                    ...Y(
                      {
                        WRIx3NcST: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36"><path d="M 36 18.857 C 36 16.149 34.5 13.8 32.318 12.686 C 32.582 11.94 32.726 11.134 32.726 10.286 C 32.726 6.497 29.794 3.432 26.181 3.432 C 25.375 3.432 24.604 3.576 23.89 3.861 C 22.831 1.569 20.589 0 18.001 0 C 15.413 0 13.174 1.572 12.109 3.857 C 11.397 3.574 10.624 3.429 9.819 3.429 C 6.202 3.429 3.274 6.497 3.274 10.286 C 3.274 11.133 3.416 11.938 3.68 12.686 C 1.5 13.8 0 16.145 0 18.857 C 0 21.42 1.34 23.654 3.329 24.833 C 3.295 25.125 3.274 25.416 3.274 25.714 C 3.274 29.503 6.202 32.571 9.819 32.571 C 10.624 32.571 11.396 32.424 12.107 32.143 C 13.17 34.43 15.409 36 17.999 36 C 20.591 36 22.83 34.43 23.89 32.143 C 24.602 32.422 25.373 32.568 26.181 32.568 C 29.798 32.568 32.726 29.499 32.726 25.711 C 32.726 25.413 32.705 25.121 32.669 24.831 C 34.654 23.654 36 21.42 36 18.859 Z" fill="var(--token-4248d933-466b-4069-bc15-9cfdbb085af5, rgb(17, 17, 17)) /* {&quot;name&quot;:&quot;Shade / 700&quot;} */"></path><g transform="translate(9 9)" id="ss1264755892_2"><path d="M 3.8 16.384 C 6.52 18.253 10.12 18.522 13.117 17.08 C 16.114 15.638 18.001 12.73 18 9.552 C 18 9.358 17.99 9.165 17.977 8.974 C 14.71 13.577 8.678 15.729 3.8 16.384" fill="var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, rgb(255, 255, 255))"></path><path d="M 3.718 8.044 C 3.718 7.854 3.798 7.671 3.941 7.537 C 4.084 7.402 4.278 7.327 4.48 7.328 L 5.743 7.332 C 6.162 7.332 6.502 7.653 6.502 8.049 L 6.502 12.561 C 6.644 12.521 6.827 12.478 7.026 12.434 C 7.312 12.371 7.514 12.13 7.514 11.852 L 7.514 6.256 C 7.514 6.066 7.594 5.884 7.737 5.749 C 7.879 5.615 8.072 5.539 8.273 5.539 L 9.539 5.539 C 9.958 5.539 10.298 5.86 10.298 6.256 L 10.298 11.45 C 10.298 11.45 10.615 11.329 10.923 11.206 C 11.158 11.112 11.31 10.895 11.31 10.655 L 11.31 4.463 C 11.31 4.273 11.39 4.09 11.533 3.956 C 11.675 3.821 11.868 3.746 12.069 3.746 L 13.335 3.746 C 13.754 3.746 14.094 4.067 14.094 4.463 L 14.094 9.562 C 15.191 8.811 16.303 7.907 17.185 6.821 C 17.445 6.501 17.518 6.079 17.379 5.697 C 16.156 2.329 12.826 0.05 9.058 0.001 C 4.098 -0.062 -0 3.763 0 8.449 C -0.005 9.931 0.405 11.389 1.188 12.674 C 1.408 13.033 1.828 13.239 2.266 13.202 C 2.564 13.177 2.861 13.148 3.158 13.115 C 3.477 13.081 3.718 12.825 3.718 12.522 L 3.718 8.044" fill="var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, rgb(255, 255, 255))"></path></g></svg>',
                          svgContentId: 1264755892,
                        },
                      },
                      o,
                      s
                    ),
                  }),
                E() &&
                  e(B, {
                    className: "framer-8n02pm",
                    "data-framer-name": "Twitter",
                    layout: "position",
                    layoutDependency: t,
                    layoutId: "r0mEJ0dMD",
                    opacity: 1,
                    radius: 0,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36"><path d="M 36 18.857 C 36 16.149 34.5 13.8 32.318 12.686 C 32.582 11.94 32.726 11.134 32.726 10.286 C 32.726 6.497 29.794 3.432 26.181 3.432 C 25.375 3.432 24.604 3.576 23.89 3.861 C 22.831 1.569 20.589 0 18.001 0 C 15.413 0 13.174 1.572 12.109 3.857 C 11.397 3.574 10.624 3.429 9.819 3.429 C 6.202 3.429 3.274 6.497 3.274 10.286 C 3.274 11.133 3.416 11.938 3.68 12.686 C 1.5 13.8 0 16.145 0 18.857 C 0 21.42 1.34 23.654 3.329 24.833 C 3.295 25.125 3.274 25.416 3.274 25.714 C 3.274 29.503 6.202 32.571 9.819 32.571 C 10.624 32.571 11.396 32.424 12.107 32.143 C 13.17 34.43 15.409 36 17.999 36 C 20.591 36 22.83 34.43 23.89 32.143 C 24.602 32.422 25.373 32.568 26.181 32.568 C 29.798 32.568 32.726 29.499 32.726 25.711 C 32.726 25.413 32.705 25.121 32.669 24.831 C 34.654 23.654 36 21.42 36 18.859 Z" fill="var(--token-4248d933-466b-4069-bc15-9cfdbb085af5, rgb(17, 17, 17)) /* {&quot;name&quot;:&quot;Shade / 700&quot;} */"></path><path d="M 27.221 12.529 C 26.561 12.823 25.861 13.018 25.144 13.106 L 25.107 13.109 C 25.866 12.651 26.437 11.938 26.719 11.098 L 26.726 11.071 C 26.016 11.488 25.242 11.785 24.435 11.949 L 24.386 11.958 C 23.244 10.735 21.421 10.436 19.948 11.23 C 18.475 12.024 17.722 13.711 18.116 15.337 L 18.111 15.312 C 15.159 15.171 12.406 13.783 10.536 11.494 L 10.521 11.475 C 10.193 12.029 10.021 12.662 10.023 13.306 L 10.023 13.329 L 10.023 13.328 L 10.023 13.331 C 10.023 14.556 10.632 15.701 11.648 16.386 L 11.661 16.394 C 11.069 16.376 10.491 16.214 9.975 15.923 L 9.994 15.933 L 9.994 15.979 C 9.994 17.723 11.216 19.228 12.923 19.586 L 12.947 19.59 C 12.399 19.737 11.825 19.757 11.268 19.65 L 11.291 19.653 C 11.779 21.128 13.131 22.179 14.733 22.211 L 14.737 22.211 C 13.438 23.235 11.831 23.79 10.177 23.786 L 10.169 23.786 L 10.169 23.786 C 9.865 23.786 9.56 23.768 9.257 23.733 L 9.294 23.736 C 10.891 24.773 12.844 25.39 14.942 25.39 L 14.951 25.39 L 14.95 25.39 L 15.026 25.39 C 20.77 25.39 25.427 20.733 25.427 14.988 L 25.427 14.919 L 25.427 14.922 C 25.427 14.765 25.427 14.608 25.416 14.451 C 26.13 13.936 26.747 13.299 27.24 12.57 L 27.257 12.544 Z" fill="var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, rgb(255, 255, 255))"></path></svg>',
                    svgContentId: 2858296377,
                    transition: a,
                    withExternalLayout: !0,
                    ...Y({ fj0SR0scB: { svgContentId: 4167719139 } }, o, s),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  ve = [
    '.framer-yt9tf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-yt9tf * { box-sizing: border-box; }",
    ".framer-yt9tf .framer-1s9vfsq { display: block; }",
    ".framer-yt9tf .framer-1hiu9tv { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-yt9tf .framer-ht8ezq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-yt9tf .framer-ronc86, .framer-yt9tf .framer-cms77c, .framer-yt9tf .framer-8n02pm { flex: none; height: 36px; position: relative; width: 36px; }",
    ".framer-yt9tf .framer-v-1hiu9tv .framer-1hiu9tv, .framer-yt9tf .framer-v-1j4o1ia .framer-1hiu9tv, .framer-yt9tf .framer-v-1bwf2ht .framer-1hiu9tv { cursor: pointer; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yt9tf .framer-1hiu9tv, .framer-yt9tf .framer-ht8ezq { gap: 0px; } .framer-yt9tf .framer-1hiu9tv > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-yt9tf .framer-1hiu9tv > :first-child { margin-top: 0px; } .framer-yt9tf .framer-1hiu9tv > :last-child { margin-bottom: 0px; } .framer-yt9tf .framer-ht8ezq > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-yt9tf .framer-ht8ezq > :first-child { margin-left: 0px; } .framer-yt9tf .framer-ht8ezq > :last-child { margin-right: 0px; } }",
  ],
  K = L(pe, ve, "framer-yt9tf"),
  R = K;
K.displayName = "Element / Icon";
K.defaultProps = { height: 36, width: 36 };
F(K, {
  variant: {
    options: ["fTNi7sHLo", "WRIx3NcST", "fj0SR0scB"],
    optionTitles: ["Opensea", "Etherscan", "Twitter"],
    title: "Variant",
    type: y.Enum,
  },
});
T(K, []);
var ue = { y1t3QU67X: { hover: !0 }, yZ6dQmulT: { hover: !0 } },
  he = ["y1t3QU67X", "iS6KY1u0i", "yZ6dQmulT"],
  xe = {
    iS6KY1u0i: "framer-v-14nysvs",
    y1t3QU67X: "framer-v-185m6iu",
    yZ6dQmulT: "framer-v-v870p1",
  };
function ie(p, ...n) {
  let d = {};
  return n?.forEach((l) => l && Object.assign(d, p[l])), d;
}
var ye = { Action: "yZ6dQmulT", Active: "iS6KY1u0i", Default: "y1t3QU67X" },
  ge = {
    default: {
      damping: 60,
      delay: 0,
      duration: 0.3,
      ease: [0.44, 0, 0.56, 1],
      mass: 1,
      stiffness: 500,
      type: "spring",
    },
  },
  Ce = b(function (
    {
      id: p,
      style: n,
      className: d,
      width: l,
      height: J,
      layoutId: f,
      variant: v = "y1t3QU67X",
      title: h = "Link",
      link: S,
      newTab: P = !1,
      ...u
    },
    o
  ) {
    let s = ye[v] || v,
      {
        baseVariant: i,
        classNames: X,
        gestureVariant: a,
        setGestureState: m,
        setVariant: t,
        transition: C,
        variants: x,
      } = k({
        cycleOrder: he,
        defaultVariant: "y1t3QU67X",
        enabledGestures: ue,
        transitions: ge,
        variant: s,
        variantClassNames: xe,
      }),
      E = x.join("-") + u.layoutDependency,
      V = w();
    return e(z, {
      id: f ?? V,
      children: e(r.div, {
        initial: s,
        animate: x,
        onHoverStart: () => m({ isHovered: !0 }),
        onHoverEnd: () => m({ isHovered: !1 }),
        onTapStart: () => m({ isPressed: !0 }),
        onTap: () => m({ isPressed: !1 }),
        onTapCancel: () => m({ isPressed: !1 }),
        className: c("framer-9diQA", ne, X),
        style: { display: "contents" },
        children: e(j, {
          href: S,
          openInNewTab: P,
          smoothScroll: !0,
          children: e(r.a, {
            ...u,
            className: `${c("framer-185m6iu", d)} framer-11fu7x4`,
            "data-border": !0,
            "data-framer-name": "Default",
            layoutDependency: E,
            layoutId: "y1t3QU67X",
            ref: o,
            style: {
              "--border-bottom-width": "0px",
              "--border-color":
                'var(--token-64962b4e-5adf-4846-9a60-b4ed44fb9eb2, rgb(14, 14, 14)) /* {"name":"Shade / 800"} */',
              "--border-left-width": "0px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "0px",
              backgroundColor: "rgba(255, 255, 255, 0)",
              ...n,
            },
            transition: C,
            variants: {
              "y1t3QU67X-hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
              "yZ6dQmulT-hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
              iS6KY1u0i: { backgroundColor: "rgba(255, 255, 255, 0.08)" },
            },
            ...ie(
              {
                "y1t3QU67X-hover": { "data-framer-name": void 0 },
                "yZ6dQmulT-hover": { "data-framer-name": void 0 },
                iS6KY1u0i: { "data-framer-name": "Active" },
                yZ6dQmulT: { "data-framer-name": "Action" },
              },
              i,
              a
            ),
            children: e(re, {
              __fromCanvasComponent: !0,
              children: e(U, {
                children: e(r.p, {
                  className: "framer-styles-preset-yiil52",
                  "data-styles-preset": "Ty9EKz2Cn",
                  style: { "--framer-text-color": "var(--extracted-r6o4lv)" },
                  children: "Intro",
                }),
              }),
              className: "framer-xhycbw",
              layoutDependency: E,
              layoutId: "rOgQBbAd_",
              style: {
                "--extracted-r6o4lv":
                  "var(--token-12d7876f-3aaa-44c3-9d6d-3762e82b3323, rgb(142, 143, 144)) ",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                "--framer-paragraph-spacing": "0px",
              },
              text: h,
              transition: C,
              variants: {
                "y1t3QU67X-hover": {
                  "--extracted-r6o4lv":
                    "var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, rgb(255, 255, 255)) ",
                },
                iS6KY1u0i: {
                  "--extracted-r6o4lv":
                    "var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, rgb(255, 255, 255)) ",
                },
              },
              verticalAlignment: "top",
              withExternalLayout: !0,
              ...ie(
                {
                  yZ6dQmulT: {
                    children: e(U, {
                      children: e(r.p, {
                        className: "framer-styles-preset-yiil52",
                        "data-styles-preset": "Ty9EKz2Cn",
                        children: "Intro",
                      }),
                    }),
                  },
                },
                i,
                a
              ),
            }),
          }),
        }),
      }),
    });
  }),
  be = [
    '.framer-9diQA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-9diQA * { box-sizing: border-box; }",
    ".framer-9diQA .framer-11fu7x4 { display: block; }",
    ".framer-9diQA .framer-185m6iu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 96px; }",
    ".framer-9diQA .framer-xhycbw { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-9diQA .framer-v-185m6iu .framer-185m6iu, .framer-9diQA .framer-v-v870p1 .framer-185m6iu { cursor: pointer; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-9diQA .framer-185m6iu { gap: 0px; } .framer-9diQA .framer-185m6iu > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-9diQA .framer-185m6iu > :first-child { margin-left: 0px; } .framer-9diQA .framer-185m6iu > :last-child { margin-right: 0px; } }",
    ...te,
  ],
  Q = L(Ce, be, "framer-9diQA"),
  N = Q;
Q.displayName = "Element / NavLink";
Q.defaultProps = { height: 48, width: 96 };
F(Q, {
  variant: {
    options: ["y1t3QU67X", "iS6KY1u0i", "yZ6dQmulT"],
    optionTitles: ["Default", "Active", "Action"],
    title: "Variant",
    type: y.Enum,
  },
  uSJu1kJFL: {
    defaultValue: "Link",
    displayTextArea: !1,
    title: "Title",
    type: y.String,
  },
  VS9Aiousb: { title: "Link", type: y.Link },
  NdE2q7TWH: { defaultValue: !1, title: "New Tab", type: y.Boolean },
});
T(Q, [...ae]);
function oe(p) {
  return (n) =>
    e(p, {
      ...n,
      animate: { rotate: 360 },
      transition: {
        ease: "linear",
        duration: 40,
        repeat: 1 / 0,
        repeatType: "loop",
      },
    });
}
var we = oe(r.div),
  ze = ["kYWA7Z_nl"],
  Le = { kYWA7Z_nl: "framer-v-mite40" };
var ke = {},
  Te = {
    default: {
      damping: 60,
      delay: 0,
      duration: 0.3,
      ease: [0.44, 0, 0.56, 1],
      mass: 1,
      stiffness: 500,
      type: "spring",
    },
  },
  Se = b(function (
    {
      id: p,
      style: n,
      className: d,
      width: l,
      height: J,
      layoutId: f,
      variant: v = "kYWA7Z_nl",
      ...h
    },
    S
  ) {
    let u = ke[v] || v,
      {
        baseVariant: o,
        classNames: I,
        gestureVariant: s,
        setGestureState: i,
        setVariant: X,
        transition: a,
        variants: m,
      } = k({
        cycleOrder: ze,
        defaultVariant: "kYWA7Z_nl",
        transitions: Te,
        variant: u,
        variantClassNames: Le,
      }),
      t = m.join("-") + h.layoutDependency,
      C = w();
    return e(z, {
      id: f ?? C,
      children: e(r.div, {
        initial: u,
        animate: m,
        onHoverStart: () => i({ isHovered: !0 }),
        onHoverEnd: () => i({ isHovered: !1 }),
        onTapStart: () => i({ isPressed: !0 }),
        onTap: () => i({ isPressed: !1 }),
        onTapCancel: () => i({ isPressed: !1 }),
        className: c("framer-2HsEK", I),
        style: { display: "contents" },
        children: e(j, {
          href: { webPageId: "g9ns7R18a" },
          openInNewTab: !1,
          children: g(r.a, {
            ...h,
            className: `${c("framer-mite40", d)} framer-1jujr1p`,
            "data-framer-name": "Default",
            layoutDependency: t,
            layoutId: "kYWA7Z_nl",
            ref: S,
            style: { ...n },
            transition: a,
            children: [
              e(we, {
                className: "framer-16qlmde",
                "data-framer-name": "Shape",
                layoutDependency: t,
                layoutId: "DKNGfRm11",
                transition: a,
                children: e(B, {
                  className: "framer-1ggjsh4",
                  "data-framer-name": "Graphic",
                  layout: "position",
                  layoutDependency: t,
                  layoutId: "pBVV53hiu",
                  opacity: 1,
                  radius: 0,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44 44"><path d="M 44 23.048 C 44 19.737 42.166 16.867 39.5 15.505 C 39.822 14.593 39.998 13.609 39.998 12.571 C 39.998 7.941 36.415 4.195 31.999 4.195 C 31.014 4.195 30.071 4.371 29.199 4.718 C 27.905 1.917 25.165 0 22.001 0 C 18.838 0 16.101 1.921 14.8 4.714 C 13.93 4.369 12.985 4.19 12.001 4.19 C 7.58 4.19 4.002 7.941 4.002 12.571 C 4.002 13.606 4.176 14.591 4.498 15.505 C 1.833 16.867 0 19.733 0 23.048 C 0 26.18 1.638 28.91 4.069 30.352 C 4.027 30.708 4.002 31.064 4.002 31.429 C 4.002 36.059 7.58 39.81 12.001 39.81 C 12.985 39.81 13.929 39.629 14.797 39.286 C 16.096 42.081 18.833 44 21.999 44 C 25.166 44 27.903 42.081 29.199 39.286 C 30.069 39.627 31.012 39.805 31.999 39.805 C 36.419 39.805 39.998 36.055 39.998 31.424 C 39.998 31.06 39.973 30.704 39.929 30.35 C 42.355 28.91 44 26.18 44 23.05 Z" fill="var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, rgb(255, 255, 255))"></path></svg>',
                  svgContentId: 2420933054,
                  transition: a,
                  withExternalLayout: !0,
                }),
              }),
              e(B, {
                className: "framer-1sq6heg",
                "data-framer-name": "VV",
                layout: "position",
                layoutDependency: t,
                layoutId: "sl_2TLjq1-shape",
                opacity: 1,
                radius: 0,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 11"><path d="M 7.379 6.592 C 7.379 7.253 7.177 7.799 6.759 8.23 L 4.521 10.558 L 3.093 10.558 L 0.882 8.23 C 0.478 7.799 0.262 7.253 0.262 6.592 L 0.262 0.558 L 1.934 0.558 L 1.934 6.52 C 1.934 6.808 2.001 7.023 2.149 7.181 L 3.848 9.006 L 5.519 7.181 C 5.654 7.038 5.734 6.808 5.734 6.52 L 5.734 0.558 L 7.406 0.558 L 7.406 6.592 Z M 16.53 6.592 C 16.53 7.253 16.328 7.799 15.91 8.23 L 13.673 10.558 L 12.244 10.558 L 10.007 8.23 C 9.603 7.799 9.387 7.253 9.387 6.592 L 9.387 0.558 L 11.058 0.558 L 11.058 6.52 C 11.058 6.808 11.126 7.023 11.274 7.181 L 12.972 9.006 L 14.643 7.181 C 14.778 7.038 14.859 6.808 14.859 6.52 L 14.859 0.558 L 16.53 0.558 Z" fill="var(--token-4248d933-466b-4069-bc15-9cfdbb085af5, rgb(17, 17, 17))"></path></svg>',
                svgContentId: 347544789,
                transition: a,
                withExternalLayout: !0,
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Be = [
    '.framer-2HsEK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-2HsEK * { box-sizing: border-box; }",
    ".framer-2HsEK .framer-1jujr1p { display: block; }",
    ".framer-2HsEK .framer-mite40 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 48px; }",
    ".framer-2HsEK .framer-16qlmde { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: center; left: 0px; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; right: 0px; top: 0px; }",
    ".framer-2HsEK .framer-1ggjsh4 { flex: none; height: 44px; position: relative; width: 44px; }",
    ".framer-2HsEK .framer-1sq6heg { flex: none; height: 11px; position: relative; width: 17px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-2HsEK .framer-mite40, .framer-2HsEK .framer-16qlmde { gap: 0px; } .framer-2HsEK .framer-mite40 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-2HsEK .framer-mite40 > :first-child { margin-top: 0px; } .framer-2HsEK .framer-mite40 > :last-child { margin-bottom: 0px; } .framer-2HsEK .framer-16qlmde > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-2HsEK .framer-16qlmde > :first-child { margin-left: 0px; } .framer-2HsEK .framer-16qlmde > :last-child { margin-right: 0px; } }",
  ],
  Z = L(Se, Be, "framer-2HsEK"),
  O = Z;
Z.displayName = "Element / Logo";
Z.defaultProps = { height: 48, width: 48 };
T(Z, []);
var Ne = W(O),
  Ie = W(R),
  Ee = W(N),
  Fe = [
    "IxQeqrCvy",
    "E7VxtePfS",
    "SXVMNqFT7",
    "LV0rmzc3w",
    "EvKX49nft",
    "DgewqKidE",
    "AMUTJ8fez",
    "AEYFsFKNT",
    "rqHGYSFTX",
  ],
  je = {
    AEYFsFKNT: "framer-v-x2fj38",
    AMUTJ8fez: "framer-v-17xiv54",
    DgewqKidE: "framer-v-1s9an90",
    E7VxtePfS: "framer-v-ncxa3l",
    EvKX49nft: "framer-v-hljzl8",
    IxQeqrCvy: "framer-v-10c7ipg",
    LV0rmzc3w: "framer-v-18gnl3c",
    rqHGYSFTX: "framer-v-p8xm1l",
    SXVMNqFT7: "framer-v-1ridceh",
  };
function H(p, ...n) {
  let d = {};
  return n?.forEach((l) => l && Object.assign(d, p[l])), d;
}
var He = {
    "Desktop / FAQ": "EvKX49nft",
    "Desktop / Feed": "LV0rmzc3w",
    "Desktop / Home": "IxQeqrCvy",
    "Desktop / Intro": "E7VxtePfS",
    "Desktop / Stats": "SXVMNqFT7",
    "Phone / FAQ": "rqHGYSFTX",
    "Phone / Home": "DgewqKidE",
    "Phone / Intro": "AMUTJ8fez",
    "Phone / Stats": "AEYFsFKNT",
  },
  Ve = {
    default: {
      damping: 60,
      delay: 0,
      duration: 0.3,
      ease: [0.44, 0, 0.56, 1],
      mass: 1,
      stiffness: 500,
      type: "spring",
    },
  },
  _e = b(function (
    {
      id: p,
      style: n,
      className: d,
      width: l,
      height: J,
      layoutId: f,
      variant: v = "IxQeqrCvy",
      ...h
    },
    S
  ) {
    let u = He[v] || v,
      {
        baseVariant: o,
        classNames: I,
        gestureVariant: s,
        setGestureState: i,
        setVariant: X,
        transition: a,
        variants: m,
      } = k({
        cycleOrder: Fe,
        defaultVariant: "IxQeqrCvy",
        transitions: Ve,
        variant: u,
        variantClassNames: je,
      }),
      t = m.join("-") + h.layoutDependency,
      C = () =>
        !!["DgewqKidE", "AMUTJ8fez", "AEYFsFKNT", "rqHGYSFTX"].includes(o),
      x = $(),
      E = () =>
        !["DgewqKidE", "AMUTJ8fez", "AEYFsFKNT", "rqHGYSFTX"].includes(o),
      V = w();
  }),
  qe = [
    '.framer-Bdvz7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Bdvz7 * { box-sizing: border-box; }",
    ".framer-Bdvz7 .framer-grrh03 { display: block; }",
    ".framer-Bdvz7 .framer-10c7ipg { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 20px 24px 20px 24px; position: relative; width: 1200px; }",
    ".framer-Bdvz7 .framer-12dvyc0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-Bdvz7 .framer-1mcv5tj-container { flex: none; height: 48px; position: relative; width: 48px; z-index: 2; }",
    ".framer-Bdvz7 .framer-uchkzp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-Bdvz7 .framer-1xwfqev-container, .framer-Bdvz7 .framer-nrzsuf-container, .framer-Bdvz7 .framer-1l0du3s-container, .framer-Bdvz7 .framer-oucj5x-container, .framer-Bdvz7 .framer-1lio9ko-container, .framer-Bdvz7 .framer-wn2cbd-container, .framer-Bdvz7 .framer-1yczwv6-container, .framer-Bdvz7 .framer-1ceonb1-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-Bdvz7 .framer-frj6e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Bdvz7 .framer-12dvyc0, .framer-Bdvz7 .framer-uchkzp, .framer-Bdvz7 .framer-frj6e { gap: 0px; } .framer-Bdvz7 .framer-12dvyc0 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Bdvz7 .framer-12dvyc0 > :first-child, .framer-Bdvz7 .framer-uchkzp > :first-child, .framer-Bdvz7 .framer-frj6e > :first-child { margin-left: 0px; } .framer-Bdvz7 .framer-12dvyc0 > :last-child, .framer-Bdvz7 .framer-uchkzp > :last-child, .framer-Bdvz7 .framer-frj6e > :last-child { margin-right: 0px; } .framer-Bdvz7 .framer-uchkzp > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-Bdvz7 .framer-frj6e > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }",
    ".framer-Bdvz7.framer-v-1s9an90 .framer-10c7ipg, .framer-Bdvz7.framer-v-17xiv54 .framer-10c7ipg, .framer-Bdvz7.framer-v-x2fj38 .framer-10c7ipg, .framer-Bdvz7.framer-v-p8xm1l .framer-10c7ipg { flex-direction: column; gap: 20px; justify-content: flex-start; width: 390px; }",
    ".framer-Bdvz7.framer-v-1s9an90 .framer-12dvyc0, .framer-Bdvz7.framer-v-17xiv54 .framer-12dvyc0, .framer-Bdvz7.framer-v-x2fj38 .framer-12dvyc0, .framer-Bdvz7.framer-v-p8xm1l .framer-12dvyc0 { gap: unset; justify-content: space-between; width: 100%; }",
    ".framer-Bdvz7.framer-v-1s9an90 .framer-frj6e, .framer-Bdvz7.framer-v-17xiv54 .framer-frj6e, .framer-Bdvz7.framer-v-x2fj38 .framer-frj6e, .framer-Bdvz7.framer-v-p8xm1l .framer-frj6e { width: 100%; }",
    ".framer-Bdvz7.framer-v-1s9an90 .framer-oucj5x-container, .framer-Bdvz7.framer-v-1s9an90 .framer-1lio9ko-container, .framer-Bdvz7.framer-v-1s9an90 .framer-1yczwv6-container, .framer-Bdvz7.framer-v-1s9an90 .framer-1ceonb1-container, .framer-Bdvz7.framer-v-17xiv54 .framer-oucj5x-container, .framer-Bdvz7.framer-v-17xiv54 .framer-1lio9ko-container, .framer-Bdvz7.framer-v-17xiv54 .framer-1yczwv6-container, .framer-Bdvz7.framer-v-17xiv54 .framer-1ceonb1-container, .framer-Bdvz7.framer-v-x2fj38 .framer-oucj5x-container, .framer-Bdvz7.framer-v-x2fj38 .framer-1lio9ko-container, .framer-Bdvz7.framer-v-x2fj38 .framer-1yczwv6-container, .framer-Bdvz7.framer-v-x2fj38 .framer-1ceonb1-container, .framer-Bdvz7.framer-v-p8xm1l .framer-oucj5x-container, .framer-Bdvz7.framer-v-p8xm1l .framer-1lio9ko-container, .framer-Bdvz7.framer-v-p8xm1l .framer-1yczwv6-container, .framer-Bdvz7.framer-v-p8xm1l .framer-1ceonb1-container { flex: 1 0 0px; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Bdvz7.framer-v-1s9an90 .framer-10c7ipg, .framer-Bdvz7.framer-v-1s9an90 .framer-12dvyc0 { gap: 0px; } .framer-Bdvz7.framer-v-1s9an90 .framer-10c7ipg > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Bdvz7.framer-v-1s9an90 .framer-10c7ipg > :first-child { margin-top: 0px; } .framer-Bdvz7.framer-v-1s9an90 .framer-10c7ipg > :last-child { margin-bottom: 0px; } .framer-Bdvz7.framer-v-1s9an90 .framer-12dvyc0 > *, .framer-Bdvz7.framer-v-1s9an90 .framer-12dvyc0 > :first-child, .framer-Bdvz7.framer-v-1s9an90 .framer-12dvyc0 > :last-child { margin: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Bdvz7.framer-v-17xiv54 .framer-10c7ipg, .framer-Bdvz7.framer-v-17xiv54 .framer-12dvyc0 { gap: 0px; } .framer-Bdvz7.framer-v-17xiv54 .framer-10c7ipg > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Bdvz7.framer-v-17xiv54 .framer-10c7ipg > :first-child { margin-top: 0px; } .framer-Bdvz7.framer-v-17xiv54 .framer-10c7ipg > :last-child { margin-bottom: 0px; } .framer-Bdvz7.framer-v-17xiv54 .framer-12dvyc0 > *, .framer-Bdvz7.framer-v-17xiv54 .framer-12dvyc0 > :first-child, .framer-Bdvz7.framer-v-17xiv54 .framer-12dvyc0 > :last-child { margin: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Bdvz7.framer-v-x2fj38 .framer-10c7ipg, .framer-Bdvz7.framer-v-x2fj38 .framer-12dvyc0 { gap: 0px; } .framer-Bdvz7.framer-v-x2fj38 .framer-10c7ipg > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Bdvz7.framer-v-x2fj38 .framer-10c7ipg > :first-child { margin-top: 0px; } .framer-Bdvz7.framer-v-x2fj38 .framer-10c7ipg > :last-child { margin-bottom: 0px; } .framer-Bdvz7.framer-v-x2fj38 .framer-12dvyc0 > *, .framer-Bdvz7.framer-v-x2fj38 .framer-12dvyc0 > :first-child, .framer-Bdvz7.framer-v-x2fj38 .framer-12dvyc0 > :last-child { margin: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Bdvz7.framer-v-p8xm1l .framer-10c7ipg, .framer-Bdvz7.framer-v-p8xm1l .framer-12dvyc0 { gap: 0px; } .framer-Bdvz7.framer-v-p8xm1l .framer-10c7ipg > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Bdvz7.framer-v-p8xm1l .framer-10c7ipg > :first-child { margin-top: 0px; } .framer-Bdvz7.framer-v-p8xm1l .framer-10c7ipg > :last-child { margin-bottom: 0px; } .framer-Bdvz7.framer-v-p8xm1l .framer-12dvyc0 > *, .framer-Bdvz7.framer-v-p8xm1l .framer-12dvyc0 > :first-child, .framer-Bdvz7.framer-v-p8xm1l .framer-12dvyc0 > :last-child { margin: 0px; } }",
  ],
  M = L(_e, qe, "framer-Bdvz7"),
  lr = M;
M.displayName = "Section / Navbar";
M.defaultProps = { height: 88, width: 1200 };
F(M, {
  variant: {
    options: [
      "IxQeqrCvy",
      "E7VxtePfS",
      "SXVMNqFT7",
      "LV0rmzc3w",
      "EvKX49nft",
      "DgewqKidE",
      "AMUTJ8fez",
      "AEYFsFKNT",
      "rqHGYSFTX",
    ],
    optionTitles: [
      "Desktop / Home",
      "Desktop / Intro",
      "Desktop / Stats",
      "Desktop / Feed",
      "Desktop / FAQ",
      "Phone / Home",
      "Phone / Intro",
      "Phone / Stats",
      "Phone / FAQ",
    ],
    title: "Variant",
    type: y.Enum,
  },
});
T(M, [...Ne, ...Ie, ...Ee]);
export { R as a, ae as b, te as c, ne as d, lr as e };
//# sourceMappingURL=chunk-NUEVG62M.mjs.map
