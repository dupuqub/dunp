
`use strict`

//......................................................................................................................

const log = a => console.log(a)
const table = a => console.table(a)

//......................................................................................................................

const dunp = {}

//......................................................................................................................

dunp.array = {}
dunp.array.new = length => Array.from({length})
dunp.array.valid = array => dunp.typeOf(array) === `array` && array.length > 0
dunp.array.styler = array => `${array[0]}: ${array[1]}`
dunp.array.attributer = array => ` ${array[0]}="${array[1]}"`

//......................................................................................................................

dunp.sum = (a, b) => a + b
dunp.combo = (a, b) => a && b
dunp.concat = link => (a, b) => a + link + b
dunp.random = (min, max) => Math.random() * (max - min) + min
dunp.roll = (min, max) => Math.floor(dunp.random(min, max + 1))

//......................................................................................................................

dunp.get = query => document.querySelector(query)
dunp.getAll = query => document.querySelectorAll(query)
dunp.getBounds = query => dunp.get(query).getBoundingClientRect()
dunp.requestFrame = funktion => window.requestAnimationFrame(funktion)

//......................................................................................................................

dunp.lower = string => string.toLowerCase()
dunp.upper = string => string.toUpperCase()
dunp.title = string =>
(
  Array
  .from(string)
  .map((char, index) => index ? dunp.lower(char) : dunp.upper(char))
  .reduce(dunp.sum, ``)
)

//......................................................................................................................

dunp.typeOf = item =>
(
    isNaN(item) && typeof item === `number`
  ? `NaN`
  : Array.isArray(item)
  ? `array`
  : item === null
  ? `null`
  : typeof item
)

//......................................................................................................................

dunp.htmlify = brick =>
{
  const {typeOf, htmlify, sum, concat, array} = dunp
  const {valid, attributer, styler} = array

  if(typeOf(brick) === `function`) return htmlify(brick())
  if(typeOf(brick) === `array`) return !valid(brick) ? `` : brick.map(htmlify).reduce(sum)
  if(typeOf(brick) !== `object`) return brick

  const type = brick.type || `div`
  const id = !brick.id ? `` : ` id="${brick.id}"`
  const classes = !valid(brick.classes) ? `` : ` class="${brick.classes.reduce(concat(` `))}"`
  const extras = !valid(brick.extras) ? `` : brick.extras.map(attributer).reduce(sum)
  const style = !valid(brick.style) ? `` : ` style="${brick.style.map(styler).reduce(concat(`; `))}"`
  const inner =

      valid(brick.inner)
    ? brick.inner.map(htmlify).reduce(sum)
    : typeOf(brick.inner) === `object`
    ? htmlify(brick.inner)
    : brick.inner
    ? brick.inner
    : ``

  return `<${type + id + classes + extras + style}>${inner}</${type}>`
}

//......................................................................................................................

dunp.aspectRatio = (options, space) =>
{
  const scale = {w: space.w / options.w, h: space.h / options.h}
  const vertical = scale.w < scale.h

  const w = !options.ratio ? options.w : vertical ? space.w : scale.h * options.w
  const h = !options.ratio ? options.h : !vertical ? space.h : scale.w * options.h
  const u = !options.ratio ? 1 : (w + h) / 3000
  const type = w > h ? `landscape` : w < h ? `portrait` : `square`

  // UNIT = (WIDTH + HEIGHT) / 3000
  // This is because the focus here is a 1080p screen(1920px by 1080px).
  // In such a screen the value of a unit would be 1 because 1920 + 1080 = 3000.

  return {w, h, u, type}
}

//......................................................................................................................
// MODIFIER PROJECTUAL

dunp.reroot = stage =>
{
  const {w, h, u} = stage

  Array
  .from(document.styleSheets)
  .some(sheet =>
  {
    if(sheet.href !== null
    && sheet.href.indexOf(`/dunp.css`) !== -1)
    {
      sheet.cssRules[0].style.cssText =

          `--w: ${w}px;`
        + `--h: ${h}px;`
        + `--u: ${u}px;`

      return true
    }
  })
}

//......................................................................................................................
// PROJECTUAL

dunp.getLang = () =>
{
  const langId = project.states.safe.lang
  const lang = project.langs[langId]

  return lang
}

//......................................................................................................................
// MODIFIER PROJECTUAL

dunp.changeScene = (id, saveScene, saveStage) =>
{
  // set actors
  const {get, getBounds, aspectRatio, reroot, htmlify} = dunp
  const {scenes, bricks, states} = project
  const oldScene = states.temp.scene
  const newScene = scenes[id]()

  // Make necessary transitions.
  newScene.beforeOldExit()
  if(oldScene.exit) oldScene.exit()
  newScene.beforeBuild()

  // set actors
  const {stageOptions} = newScene
  const bodySize = getBounds(`body`)
  const space = {w: bodySize.width, h: bodySize.height}
  const newStageInfo = aspectRatio(stageOptions, space)
  const stage = get(`#stage`)
  const brick = bricks.scenes[id]()
  const text = htmlify(brick)

  // Store values.
  project.states.temp.scene = newScene
  project.states.temp.stage = newStageInfo

  if(saveScene) project.states.safe.scene = newScene
  if(saveStage) project.states.safe.stage = newStageInfo

  // Resize stage to fit the new scene.
  reroot(newStageInfo)

  // Put the built scene into stage.
  stage.innerHTML = text

  // Finish it.
  newScene.afterBuild()
}

//......................................................................................................................
// VISUALIZER

dunp.logMatrix2d = matrix =>
{
  let matrixHeader = `   `
  let lines = ``
  let line = ``

  dunp
  .array
  .new(matrix.length)
  .forEach((item, index) => matrixHeader += `${index}.`)

  matrix[0].forEach((item0, index0) =>
  {
    line = ``

    matrix.forEach((item1, index1) =>
    {
      line += `${matrix[index1][index0]} `
    })

    lines += `${index0}. ${line}\n`
  })

  log(matrixHeader)
  log(lines)
}

//......................................................................................................................

dunp.alphabets =
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

