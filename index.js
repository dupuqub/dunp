
`use strict`

//......................................................................................................................

const log = item => console.log (item)
const table = item => console.table (item)

const newArray = length => Array.from ({length})
const validArray = array => typeOf (array) === `array` && array.length > 0

//......................................................................................................................

const get = query => document.querySelector (query)
const getAll = query => document.querySelectorAll (query)
const getSize = query => get (query).getBoundingClientRect ()
const requestFrame = funktion => window.requestAnimationFrame (funktion)

const styler = item => `${item [0]}: ${item [1]}`
const attributer = item => ` ${item [0]}="${item [1]}"`

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
  if (typeOf (brick) === `function`) htmlify (brick ())
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

const aspectRatio = (item, box) =>
{
  const scale = {w: box.w / item.w, h: box.h / item.h}
  const vertical = scale.w < scale.h

  const w = !item.ratio ? item.w : vertical ? box.w : scale.h * item.w
  const h = !item.ratio ? item.h : !vertical ? box.h : scale.w * item.h
  const u = !item.ratio ? 1 : (w + h) / 3000
  const type = w > h ? `landscape` : w < h ? `portrait` : `square`

  // UNIT = (WIDTH + HEIGHT) / 3000
  // this is because the focus here is a 1080p screen (1920px by 1080px)
  // in such a screen the value of a unit would be 1 because 1920 + 1080 = 3000

  return {w, h, u, type}
}

//......................................................................................................................

const reroot = stage => // MODIFIER
{
  const {w, h, u} = stage

  Array
  .from (document.styleSheets)
  .some (sheet =>
  {
    if (sheet.href !== null
    && sheet.href.indexOf (`/root.css`) !== -1)
    {
      sheet.cssRules [0].style.cssText =

          `--w: ${w}px;`
        + `--h: ${h}px;`
        + `--u: ${u}px;`

      return true
    }
  })
}

//......................................................................................................................

const changeScene = id => // MODIFIER
{
  //....................................................................................................................
  // step 0 . resize the stage to fit the new scene and store its values

  const builtScene = scenes [id] ()
  const oldStage = builtScene.stage
  const body = getSize (`body`)
  const space = {w: body.width, h: body.height}
  const newStage = ratio (oldStage, space)

  info.fluid.stage = newStage

  reroot (newStage)

  //....................................................................................................................
  // step 1 . render the scene into stage

  const stage = get (`#stage`)
  const brick = bricks.scenes [id]
  const text = htmlify (brick)

  stage.innerHTML = text

  //....................................................................................................................
  // step 2 . end last scene and begin the new scene

  loops.scene.exit ()
  scene.begin ()

  loops.scene.exit = scene.exit
  loops.scene.loop = scene.loop
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

//......................................................................................................................

