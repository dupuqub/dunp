
`use strict`

//......................................................................................................................
// Example.

project.bricks.mainTitle = inner =>
({
  id: `mainTitle`,
  classes: [`center`],
  style:
  [
    [`color`, `#BBB`],
    [`font-size`, `calc(var(--u) * 150)`],
    [`margin-bottom`, `calc(var(--u) * 120)`],
  ],
  inner,
})

