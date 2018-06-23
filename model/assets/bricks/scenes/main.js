
`use strict`

//......................................................................................................................

project.bricks.scenes.main = () => // only an example
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
    project.bricks.mainButton (`new`, "log (`new clicked`)"),
    project.bricks.mainButton (`load`, "log (`load clicked`)"),
    project.bricks.mainButton (`options`, "log (`options clicked`)"),
  ],
})
