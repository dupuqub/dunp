
`use strict`

//......................................................................................................................
// Example.

project.bricks.mainButton = (id, inner, funktion) =>
({
  id: `button${id}`,
  classes: [`center`, `pointer`, `mainButton`],
  extras: [[`onclick`, funktion]],
  style:
  [
    [`width`, `13%`],
    [`height`, `7%`],
    [`transition`, `all 0.2s`],
    [`font-size`, `calc(var(--u) * 40)`],
    [`margin-bottom`, `calc(var(--u) * 10)`],
    [`border-radius`, `calc(var(--u) * 10)`],
  ],
  inner,
})

