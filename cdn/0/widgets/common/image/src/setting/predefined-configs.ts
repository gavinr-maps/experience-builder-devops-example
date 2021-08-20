const shapes = {
  square: {
    borderRadius: {
      number: [0],
      unit: 'px'
    },
    thumbUrl: require('./assets/shape_square.svg')
  },
  capsule: {
    borderRadius: {
      number: [10, 10, 10, 10],
      unit: '%'
    },
    thumbUrl: require('./assets/shape_capsule.svg')
  },
  round: {
    borderRadius: {
      number: [50, 50, 50, 50],
      unit: '%'
    },
    thumbUrl: require('./assets/shape_round.svg')
  }
}

const PreDefinedConfigs = {
  shapes: shapes
}

export { PreDefinedConfigs }
