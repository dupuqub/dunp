
`use strict`

//......................................................................................................................

project.bricks.scenes.main = () =>
({
  classes: [`center`, `column`],
  style:
  [
    [`width`, `100%`],
    [`height`, `100%`],
    [`background`, `#444`],
  ],
  inner:
  [
    project.bricks.mainButton (`new`),
    project.bricks.mainButton (`load`),
    project.bricks.mainButton (`options`),
  ],
})

