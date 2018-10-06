
`use strict`

//......................................................................................................................

// A brick may be a NaN, null, undefined, string, number, boolean, array, function or object.
// If a brick is an object, it must follow the structure in the example below (the object returned by the function).
// Every part of the brick object may not exist, however if the key "tag" does not exist, its value will be "`div`".
// If the brick is an array, every index may be anything a brick can be.
// Functions will return, so watch out for those pesky "undefined".
// Styles defined here overpower any definition in any CSS file. For hover effects you must use CSS.

//......................................................................................................................
// Example.

project.bricks.model = () =>
({
  id: `brickModel`,
  tag: `canvas`,
  classes: [`center`, `column`],
  extras:
  [
    [`width`, `600`],
    [`height`, `400`],
    [`onclick`, `console.log(\`clicked\`)`],
    [`onmouseover`, `console.log(\`hovered\`)`],
  ],
  styles:
  [
    [`border`, `calc(var(--u) * 3) solid #FFF`],
    [`background`, `#AAA`],
  ],
  inner: null // Can be anything a brick can be.
})

