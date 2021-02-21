'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * WallLikeTransformer class
 *
 * @class WallLikeTransformer
 * @constructor
 */
class WallLikeTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
      id: model.id
    }
  }

  includeLikes (model) {
    return this.item(model.getReleted('walllikes'), WallLikeTransformer)
  }
}

module.exports = WallLikeTransformer
