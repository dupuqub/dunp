
`use strict`

//......................................................................................................................
// Example.

project.bricks.scenes.main.children.button = (inner, id, funktion) =>
({
  id: `button${id}`,
  classes: [`center`, `pointer`, `button`],
  extras: [[`onclick`, funktion]],
  styles:
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

