const border = {
  border: {
    value: 'border'
  },
  borderB: {
    value: 'border-bottom'
  },
  borderT: {
    value: 'border-top'
  },
  borderL: {
    value: 'border-left'
  },
  borderR: {
    value: 'border-right'
  },
  borderX: {
    value: ['border-left', 'border-right']
  },
  borderY: {
    value: ['border-top', 'border-bottom']
  },
  borderRadius: {
    value: 'border-radius'
  },
  borderBLRadius: {
    value: 'border-bottom-left-radius'
  },
  borderBRRadius: {
    value: 'border-bottom-right-radius'
  },
  borderBRadius: {
    value: ['border-bottom-right-radius', 'border-bottom-left-radius']
  },
  borderTRRadius: {
    value: 'border-top-right-radius'
  },
  borderTLRadius: {
    value: 'border-top-left-radius'
  },
  borderTRadius: {
    value: ['border-top-right-radius', 'border-top-left-radius']
  },
  borderLRadius: {
    value: ['border-top-left-radius', 'border-bottom-left-radius']
  },
  borderRRadius: {
    value: ['border-top-right-radius', 'border-bottom-right-radius']
  },
  borderBStyle: {
    value: 'border-bottom-style'
  },
  borderTStyle: {
    value: 'border-top-style'
  },
  borderLStyle: {
    value: 'border-left-style'
  },
  borderRStyle: {
    value: 'border-right-style'
  },
  borderXStyle: {
    value: ['border-right-style', 'border-left-style']
  },
  borderYStyle: {
    value: ['border-top-style', 'border-bottom-style']
  },
  borderStyle: {
    value: 'border-style'
  },
  borderColor: {
    value: 'border-color'
  },
  borderTColor: {
    value: 'border-top-color'
  },
  borderBColor: {
    value: 'border-bottom-color'
  },
  borderLColor: {
    value: 'border-left-color'
  },
  borderRColor: {
    value: 'border-right-color'
  },
  borderYColor: {
    value: ['border-top-color', 'border-bottom-color']
  },
  borderXColor: {
    value: ['border-right-color', 'border-left-color']
  },
  borderWidth: {
    value: 'border-width'
  },
  borderTWidth: {
    value: 'border-top-width'
  },
  borderBWidth: {
    value: 'border-bottom-width'
  },
  borderLWidth: {
    value: 'border-left-width'
  },
  borderRWidth: {
    value: 'border-right-width'
  },
  borderXWidth: {
    value: ['border-left-width', 'border-right-width']
  },
  borderYWidth: {
    value: ['border-top-width', 'border-bottom-width']
  },
  borderImage: {
    value: 'border-image'
  }
}

const tableBorder = {
  ...border,
  borderCollapse: {
    value: 'border-collapse'
  },
  borderSpacing: {
    value: 'border-spacing'
  }
}

export {
  border,
  tableBorder
}
