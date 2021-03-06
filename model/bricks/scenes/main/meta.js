  
`use strict`

//......................................................................................................................
// Example.

project.bricks.scenes.main.meta = () =>
({
  //....................................................................................................................

  id: `main`,
  stageOptions:
  {
    // "ratio === true" means "w" and "h" will be proportional to the whole screen.
    // "ratio === false" means "w" and "h" will be pixel units.

    ratio: true,
    w: 16,
    h: 9,
  },

  //....................................................................................................................

  beforeOldExit: () => {},
  beforeBuild: () => {},
  afterBuild: () => {},
  exit: () => {},
  loop: () => {},

  //....................................................................................................................
})

