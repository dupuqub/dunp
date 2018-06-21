
`use strict`

//......................................................................................................................

const log = item => console.log (item)
const table = item => console.table (item)

const newArray = length => Array.from ({length})
const validArray = array => typeOf (array) === `array` && array.length > 0

//......................................................................................................................

const get = query => document.querySelector (query)
const getAll = query => document.querySelectorAll (query)

const styler = item => `${item [0]}: ${item [1]}`
const attributer = item => ` ${item [0]}="${item [1]}"`

const size = item => item.getBoundingClientRect ()
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

const html = brick =>
{
  if (typeOf (brick) === `array`) return !validArray (brick) ? `` : brick.map (html).reduce (sum)
  if (typeOf (brick) !== `object`) return brick

  const type = brick.type || `div`
  const id = !brick.id ? `` : ` id="${brick.id}"`
  const classes = !validArray (brick.classes) ? `` : ` class="${brick.classes.reduce (concat (` `))}"`
  const others = !validArray (brick.others) ? `` : brick.others.map (attributer).reduce (sum)
  const style = !validArray (brick.style) ? `` : ` style="${brick.style.map (styler).reduce (concat (`; `))}"`
  const inner =

      validArray (brick.inner)
    ? brick.inner.map (html).reduce (sum)
    : typeOf (brick.inner) === `object`
    ? html (brick.inner)
    : brick.inner
    ? brick.inner
    : ``

  return `<${type + id + classes + others + style}>${inner}</${type}>`
}

//......................................................................................................................

const ratio = (box, space) =>
{
  const scale = {w: space.w / box.w, h: space.h / box.h}
  const vertical = scale.w < scale.h

  const w = vertical ? space.w : scale.h * box.w
  const h = !vertical ? space.h : scale.w * box.h
  const u = (w + h) / 3000

  // "UNIT = (WIDTH + HEIGHT) / 3000"
  // this is because the focus here is a 1080p screen (1920px by 1080px)
  // in such a screen the value of a unit would be 1 because 1920 + 1080 = 3000

  return {w, h, u}
}

//......................................................................................................................

const reroot = stage =>
{
  const {w, h, u} = stage

  const rooter = sheet =>
  {
    if (sheet.href !== null
    && sheet.href.indexOf (`dunp/index.css`) !== -1)
    {
      sheet.cssRules [0].style.cssText =

          `--w: ${w}px;`
        + `--h: ${h}px;`
        + `--u: ${u}px;`

      return true
    }
  }

  Array
  .from (document.styleSheets)
  .some (rooter)
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

