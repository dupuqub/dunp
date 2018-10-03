
`use strict`

//......................................................................................................................
// Example.

project.bricks.scenes.main.brick = () =>
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
      project.bricks.scenes.main.children.title(lang.title),
      project.bricks.scenes.main.children.button(lang.main[0], `Play`, `console.log(\`play clicked\`)`),
      project.bricks.scenes.main.children.button(lang.main[1], `Adjust`, `console.log(\`adjust clicked\`)`),
      project.bricks.scenes.main.children.lang(dunp.upper(lang.name)),
    ],
  }

  return brick
}

