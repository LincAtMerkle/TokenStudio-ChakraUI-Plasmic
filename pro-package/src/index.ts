import * as components from './components'
import * as foundations from './foundations'

// Do I import this here???
import getChakraSemanticTokens from '../getChakraSemanticTokens'
import tokenStudioChakra from '../src/foundations/tokenStudioChakra.json'
const semanticTokens = getChakraSemanticTokens(tokenStudioChakra)



export const theme: Record<string, any> = {
  ...foundations,
  semanticTokens,
  components: { ...components },
}
