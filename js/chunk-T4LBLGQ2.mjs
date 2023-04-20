import { a as h, b as K, c as L, d as Z } from "./chunk-NUEVG62M.mjs";
import { a as e, b as z } from "./chunk-3ZTOJ7KV.mjs";
import {
  $ as R,
  A as p,
  D as V,
  G as m,
  U as I,
  W as G,
  Z as P,
  aa as S,
  c as H,
  da as U,
  e as j,
  ga as M,
  ha as F,
  i as D,
  ia as B,
  q as r,
  r as E,
} from "./chunk-KPCDX42X.mjs";
var ee = ["Kn6iWaUFl", "Ik3Hru0uo"],
  re = { Ik3Hru0uo: "framer-v-11etjkj", Kn6iWaUFl: "framer-v-xqskds" };
function te(f, ...t) {
  let i = {};
  return t?.forEach((s) => s && Object.assign(i, f[s])), i;
}
var ae = { "01": "Kn6iWaUFl", "02": "Ik3Hru0uo" },
  ne = {
    default: {
      damping: 60,
      delay: 0,
      duration: 0.3,
      ease: [0.44, 0, 0.56, 1],
      mass: 1,
      stiffness: 80,
      type: "spring",
    },
  },
  ie = j(function (
    {
      id: f,
      style: t,
      className: i,
      width: s,
      height: O,
      layoutId: d,
      variant: c = "Kn6iWaUFl",
      ...v
    },
    N
  ) {
    let g = ae[c] || c,
      {
        baseVariant: w,
        classNames: b,
        gestureVariant: u,
        setGestureState: l,
        setVariant: q,
        transition: o,
        variants: Q,
      } = S({
        cycleOrder: ee,
        defaultVariant: "Kn6iWaUFl",
        transitions: ne,
        variant: g,
        variantClassNames: re,
      }),
      a = Q.join("-") + v.layoutDependency,
      { activeVariantCallback: k, delay: n } = G(w),
      C = k(async (...W) => {
        await n(() => q(R), 1e3);
      });
    P(w, { default: C });
    let _ = D();
    return e(E, {
      id: d ?? _,
      children: e(r.div, {
        initial: g,
        animate: Q,
        onHoverStart: () => l({ isHovered: !0 }),
        onHoverEnd: () => l({ isHovered: !1 }),
        onTapStart: () => l({ isPressed: !0 }),
        onTap: () => l({ isPressed: !1 }),
        onTapCancel: () => l({ isPressed: !1 }),
        className: m("framer-3mqCc", b),
        style: { display: "contents" },
        children: e(r.div, {
          ...v,
          className: m("framer-xqskds", i),
          "data-framer-name": "01",
          "data-highlight": !0,
          layoutDependency: a,
          layoutId: "Kn6iWaUFl",
          ref: N,
          style: { opacity: 0.2, ...t },
          transition: o,
          variants: { Ik3Hru0uo: { opacity: 1 } },
          ...te({ Ik3Hru0uo: { "data-framer-name": "02" } }, w, u),
          children: e(U, {
            className: "framer-p5n8ph",
            "data-framer-name": "Arrow",
            layout: "position",
            layoutDependency: a,
            layoutId: "dUx5LApbc",
            opacity: 1,
            radius: 0,
            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 7"><path d="M 12.329 0.846 L 6.5 6.154 L 0.671 0.846" fill="transparent" stroke-width="1.32" stroke="var(--token-3a9b8b7c-810d-46db-9a47-f2ca45ae7a09, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;Shade / 100&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
            svgContentId: 2847551608,
            transition: o,
            withExternalLayout: !0,
          }),
        }),
      }),
    });
  }),
  oe = [
    '.framer-3mqCc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-3mqCc * { box-sizing: border-box; }",
    ".framer-3mqCc .framer-12ciu0y { display: block; }",
    ".framer-3mqCc .framer-xqskds { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: hidden; padding: 8px 0px 0px 0px; position: relative; width: 40px; }",
    ".framer-3mqCc .framer-p5n8ph { flex: none; height: 7px; position: relative; width: 13px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3mqCc .framer-xqskds { gap: 0px; } .framer-3mqCc .framer-xqskds > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-3mqCc .framer-xqskds > :first-child { margin-top: 0px; } .framer-3mqCc .framer-xqskds > :last-child { margin-bottom: 0px; } }",
    ".framer-3mqCc.framer-v-11etjkj .framer-xqskds { padding: 20px 0px 0px 0px; }",
  ],
  x = I(ie, oe, "framer-3mqCc"),
  A = x;
x.displayName = "Element / Down";
x.defaultProps = { height: 40, width: 40 };
V(x, {
  variant: {
    options: ["Kn6iWaUFl", "Ik3Hru0uo"],
    optionTitles: ["01", "02"],
    title: "Variant",
    type: p.Enum,
  },
});
F(x, []);
var se = B(A),
  de = B(h),
  le = ["WG80vQlfh", "nAiUQ408Q", "DVBMBZmtt"],
  pe = {
    DVBMBZmtt: "framer-v-77c3fs",
    nAiUQ408Q: "framer-v-1x4uocu",
    WG80vQlfh: "framer-v-spbf7l",
  };
function me(f, ...t) {
  let i = {};
  return t?.forEach((s) => s && Object.assign(i, f[s])), i;
}
var fe = {
    "Desktop / Arrow": "WG80vQlfh",
    "Desktop / NoArrow": "nAiUQ408Q",
    Phone: "DVBMBZmtt",
  },
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
  ue = j(function (
    {
      id: f,
      style: t,
      className: i,
      width: s,
      height: O,
      layoutId: d,
      variant: c = "WG80vQlfh",
      title: v = "Don't Trust, Check.",
      arrow: N = !0,
      ...T
    },
    g
  ) {
    let b = fe[c] || c,
      {
        baseVariant: u,
        classNames: l,
        gestureVariant: q,
        setGestureState: o,
        setVariant: Q,
        transition: a,
        variants: k,
      } = S({
        cycleOrder: le,
        defaultVariant: "WG80vQlfh",
        transitions: ce,
        variant: b,
        variantClassNames: pe,
      }),
      n = k.join("-") + T.layoutDependency,
      C = () => u !== "DVBMBZmtt",
      _ = () => (u === "DVBMBZmtt" ? N : !0),
      W = D();
  }),
  he = [
    '.framer-seeEi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-seeEi * { box-sizing: border-box; }",
    ".framer-seeEi .framer-1o3ow83 { display: block; }",
    ".framer-seeEi .framer-spbf7l { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 24px 24px 24px 24px; position: relative; width: 1200px; }",
    ".framer-seeEi .framer-a6s85z { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-seeEi .framer-6lvoog { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-seeEi .framer-1rpitw1-container { flex: none; height: 40px; position: relative; width: 40px; z-index: 1; }",
    ".framer-seeEi .framer-pzfo5j { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-seeEi .framer-1j4oevo-container, .framer-seeEi .framer-15ouxgl-container, .framer-seeEi .framer-k7xjdv-container { flex: none; height: auto; position: relative; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-seeEi .framer-a6s85z, .framer-seeEi .framer-pzfo5j { gap: 0px; } .framer-seeEi .framer-a6s85z > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-seeEi .framer-a6s85z > :first-child, .framer-seeEi .framer-pzfo5j > :first-child { margin-left: 0px; } .framer-seeEi .framer-a6s85z > :last-child, .framer-seeEi .framer-pzfo5j > :last-child { margin-right: 0px; } .framer-seeEi .framer-pzfo5j > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }",
    ".framer-seeEi.framer-v-77c3fs .framer-spbf7l { gap: 0px; justify-content: center; padding: 20px 20px 20px 20px; width: 390px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-seeEi.framer-v-77c3fs .framer-spbf7l { gap: 0px; } .framer-seeEi.framer-v-77c3fs .framer-spbf7l > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-seeEi.framer-v-77c3fs .framer-spbf7l > :first-child { margin-left: 0px; } .framer-seeEi.framer-v-77c3fs .framer-spbf7l > :last-child { margin-right: 0px; } }",
    ...L,
  ],
  y = I(ue, he, "framer-seeEi"),
  Ve = y;
export { Ve as a };
//# sourceMappingURL=chunk-T4LBLGQ2.mjs.map
