import { StyleConfig, extendTheme } from '@chakra-ui/react';

export const global = extendTheme({
  config: {
    intialColorMode: 'dark',
    useSystemColorMode: true
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: ({colorMode}: Record<string, StyleConfig>) => ({
      body: {
        bg: colorMode === 'dark' ? 'gray.900' : 'gray.300',
        color: colorMode === 'dark' ? 'white' : 'gray.800'
      }
    }),
  }
})