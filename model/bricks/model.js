
`use strict`

//......................................................................................................................
// A brick may be a NaN, null, undefined, string, number, boolean, array, function or object.
//
// If a brick is an object it must follow the structure in the example below (the object returned by the function).
//
// Every part of the brick object may not exist, however if the type does not exist, its value will be "`div`".
//
// If the brick is an array, every member may be anything a brick can be.
//
// Functions will return, so watch out for those pesky "undefined".
//
// Styles defined here overpower any definition in any CSS file.
//
// "calc(var())" is not on-pattern like "calc (var ())" because most standard text-editors syntax highlighting
// don't recognize the spaces in between. It would run normally, but is written this way to preserve the CSS pattern.
//
// Functions at "extras" are inside double quotes (") so code inside may be within the JS pattern.

project.bricks.model = () => // Only an example.
({
  id: `brickModel`,
  type: `canvas`,
  classes: [`center`, `column`],
  styles:
  [
    [`border`, `calc(var(--u) * 3) solid #FFF`],
    [`background`, `#AAA`],
  ],
  extras:
  [
    [`width`, `600`],
    [`height`, `400`],
    [`onclick`, "log (`clicked`)"],
    [`onmouseover`, "log (`hovered`)"],
  ],
  inner: null // Can be anything a brick can be.
})

