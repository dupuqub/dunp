
`use strict`

//......................................................................................................................
// Example.

project.bricks.scenes.main = () =>
{
  const lang = dunp.getLang()
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
      project.bricks.mainTitle(lang.title),
      project.bricks.mainButton(lang.main[0], `Play`, `console.log(\`play clicked\`)`),
      project.bricks.mainButton(lang.main[1], `Adjust`, `console.log(\`adjust clicked\`)`),
      project.bricks.mainLang(dunp.upper(lang.name)),
    ],
  }

  return brick
}

