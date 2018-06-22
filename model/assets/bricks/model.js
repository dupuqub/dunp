
`use strict`

//......................................................................................................................
// a brick may be a NaN, null, undefined, string, number, boolean, array, function or object
// if a brick is an object it must follow the structure in the example below (the object the function is returning)
// if it is an array, every member may be anything a brick can be
// functions will return, so watch out for those pesky undefineds

project.bricks.model = () =>
({
  id: ``,
  type: `canvas`,
  classes: [`center`, `column`],
  styles:
  [
    [``, ``],
    [``, ``],
  ],
  others:
  [
    [``, ``],
    [``, ``],
  ],
  inner: null // can be anything a brick can be
})

