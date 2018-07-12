
`use strict`

//......................................................................................................................

project.bricks.scenes.main = () => // Only an example.
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
    ],
    inner:
    [
      project.bricks.mainButton (lang.main.play, "log (`play clicked`)"),
      project.bricks.mainButton (lang.main.settings, "log (`settings clicked`)"),
    ],
  }

  return brick
}

