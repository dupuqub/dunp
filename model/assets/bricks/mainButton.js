
`use strict`

//......................................................................................................................

project.bricks.mainButton = (id, funktion) => // only an example
({
  id: `button${dunp.title (id)}`,
  classes: [`center`, `mainButton`],
  extras: [[`onclick`, funktion]],
  inner: dunp.upper (id),
})

