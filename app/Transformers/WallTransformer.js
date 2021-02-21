'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const WallLikeTransformer = use('App/Transformers/WallLikeTransformer')
/**
 * WallTransformer class
 *
 * @class WallTransformer
 * @constructor
 */
class WallTransformer extends BumblebeeTransformer {
  defaultInclude () {
    return ['likes']
  }

  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
      id: model.id,
      title: model.title,
      content: model.content

    }
  }

  includeLikes (model) {
    return this.item(model.getReleted('walllikes'), WallLikeTransformer)
  }
}

module.exports = WallTransformer
