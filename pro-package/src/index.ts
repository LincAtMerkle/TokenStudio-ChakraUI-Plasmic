import * as components from './components'
import * as foundations from './foundations'

// import getChakraSemanticTokens from '../getChakraSemanticTokens'
// import tokenStudioChakra from './foundations/tokens'
// const semanticTokens = getChakraSemanticTokens(tokenStudioChakra)

// const semanticTokens = {
//   colors:{
//   'fg-default': {
//     // 'default': tokenStudioChakra.colors['hh-light']['btn-primary-active-background-color']
//     'default': '#ff0000'
//     }
//   }
// }


export const theme: Record<string, any> = {
  ...foundations,
  // semanticTokens,
  components: { ...components }
}
