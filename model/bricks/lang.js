
`use strict`

//......................................................................................................................

project.bricks.lang = inner =>
{
  const click = () =>
  {
    const allLangs = Object.keys(project.langs)
    const lang = dunp.getLang()
    const langIndex = allLangs.indexOf(lang.id)
    const newLang =

        langIndex === allLangs.length - 1
      ? allLangs[0]
      : allLangs[langIndex + 1]

    const sceneId = project.states.temp.scene.id
    const titleText = project.langs[newLang].title
    const title = dunp.get(`title`)

    project.states.safe.lang = newLang
    title.innerHTML = titleText
    dunp.changeScene(sceneId)
  }

  const brick =
  {
    id: `mainLang`,
    classes: [`center`, `pointer`, `button`],
    extras: [[`onclick`, dunp.trigger(click)]],
    styles:
    [
      [`width`, `100%`],
      [`height`, `calc(var(--u) * 50)`],
      [`font-size`, `calc(var(--u) * 30)`],
      [`transform`, `translateY(calc(var(--h) / 2 - var(--u) * 25))`],
      [`transition`, `all 0.2s`],
      [`position`, `absolute`],
    ],
    inner,
  }

  return brick
}

