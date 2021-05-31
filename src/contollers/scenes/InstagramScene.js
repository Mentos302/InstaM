module.exports = () => {
  const Scene = require('telegraf/scenes/base')

  const instagramScene = new Scene('instagram')
  const sceneServices = require('../../services/scenes/InstagramServices')

  instagramScene.enter((ctx) => sceneServices.enter(ctx))

  instagramScene.on('message', (ctx) => sceneServices.getUserID(ctx))

  //   instagramScene.on('callback_query', (ctx) => sceneServices.actions(ctx))

  return instagramScene
}
