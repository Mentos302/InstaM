module.exports = () => {
  const Scene = require('telegraf/scenes/base')

  const welcomeScene = new Scene('welcome')
  const sceneServices = require('../../services/scenes/WelcomeServices')

  welcomeScene.enter((ctx) => sceneServices.enter(ctx))

  welcomeScene.on('callback_query', (ctx) => sceneServices.actions(ctx))

  return welcomeScene
}
