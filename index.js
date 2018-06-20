
`use strict`

//......................................................................................................................

const log = item => console.log (item)
const table = item => console.table (item)

const get = query => document.querySelector (query)
const getAll = query => document.querySelectorAll (query)

const styler = item => `${item [0]}: ${item [1]}`
const attributer = item => ` ${item [0]}="${item [1]}"`

const newArray = length => Array.from ({length})
const validArray = array => typeOf (array) === `array` && array.length > 0

const write = text => ({at: box => get (box).innerHTML = text})

//......................................................................................................................

const sum = (a, b) => a + b
const combo = (a, b) => a && b
const concat = link => (a, b) => a + link + b
const random = (min, max) => Math.random () * (max - min) + min
const roll = (min, max) => Math.floor (random (min, max + 1))

//......................................................................................................................

const title = string =>
(
  Array
  .from (string)
  .map ((char, index) => index ? char : char.toUpperCase ())
  .reduce (sum, ``)
)

//......................................................................................................................

const typeOf = item =>
(
    isNaN (item) && typeof item === `number`
  ? `NaN`
  : Array.isArray (item)
  ? `array`
  : item === null
  ? `null`
  : typeof item
)

//......................................................................................................................

const htmlify = brick =>
{
  if (typeOf (brick) === `array`) return !validArray (brick) ? `` : brick.map (htmlify).reduce (sum)
  if (typeOf (brick) !== `object`) return brick

  const type = brick.type || `div`
  const id = !brick.id ? `` : ` id="${brick.id}"`
  const classes = !validArray (brick.classes) ? `` : ` class="${brick.classes.reduce (concat (` `))}"`
  const others = !validArray (brick.others) ? `` : brick.others.map (attributer).reduce (sum)
  const style = !validArray (brick.style) ? `` : ` style="${brick.style.map (styler).reduce (concat (`; `))}"`
  const inner =

      validArray (brick.inner)
    ? brick.inner.map (htmlify).reduce (sum)
    : typeOf (brick.inner) === `object`
    ? htmlify (brick.inner)
    : brick.inner
    ? brick.inner
    : ``

  return `<${type + id + classes + others + style}>${inner}</${type}>`
}

//......................................................................................................................

const alphabets =
[
  {
    id: `nuhAlin`,
    vowels: `ieéaáoóu`,
    consonants: `bpdtgkfvszxjhylrnm`,
    complete: `ieéaáoóubpdtgkfvszxjhylrnm`,
  },
  {
    id: `english`,
    vowels: `aeiou`,
    consonants: `bcdfghjklmnpqrstvwxyz`,
    complete: `abcdefghijklmnopqrstuvwxyz`,
  },
]

