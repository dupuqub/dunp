
`use strict`

//......................................................................................................................
// Example.

project.bricks.mainButton = (id, funktion) =>
({
  id: `button${dunp.title (id)}`,
  classes: [`center`, `pointer`, `mainButton`],
  extras: [[`onclick`, funktion]],
  style:
  [
    [`width`, `100%`],
    [`height`, `5%`],
    [`font-size`, `calc(var(--u) * 20)`],
    [`margin-bottom`, `calc(var(--u) * 5)`],
  ],
  inner: dunp.upper (id),
})

