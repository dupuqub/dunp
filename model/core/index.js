
`use strict`

//......................................................................................................................

const {changeScene, requestFrame} = dunp

//......................................................................................................................

onresize = unused => changeScene (project.states.temp.scene.id)

//......................................................................................................................

project.begin = () =>
{
  changeScene (`main`)
}

//......................................................................................................................

project.loop = () =>
{
  project.states.temp.scene.loop ()
  requestFrame (project.loop)
}

//......................................................................................................................

project.begin ()
project.loop ()

