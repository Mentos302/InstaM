module.exports = () => {
  const Scene = require('telegraf/scenes/base')

  const welcomeScene = new Scene('welcome')
  const sceneServices = require('../../services/scenes/WelcomeServices')

  welcomeScene.enter((ctx) => sceneServices.enter(ctx))

  return welcomeScene
}
