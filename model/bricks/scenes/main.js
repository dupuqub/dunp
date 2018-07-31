
`use strict`

//......................................................................................................................
// Example.

project.bricks.scenes.main = () =>
{
  const lang = dunp.getLang ()
  const brick =
  {
    classes: [`center`, `column`],
    style:
    [
      [`width`, `100%`],
      [`height`, `100%`],
      [`background`, `#444`],
      [`position`, `relative`],
    ],
    inner:
    [
      project.bricks.mainTitle (lang.main.title),
      project.bricks.mainButton (lang.main.play, `Play`, `log (\`play clicked\`)`),
      project.bricks.mainButton (lang.main.adjust, `Adjust`, `log (\`adjust clicked\`)`),
      project.bricks.mainLang (lang.main.lang),
    ],
  }

  return brick
}

