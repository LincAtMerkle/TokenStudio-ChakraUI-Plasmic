import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const baseStyle = (props: StyleFunctionProps) => ({
  label: {
    color: 'muted',
    fontWeight: 'medium',
  },
  control: {
    bg: mode('white', 'gray.800')(props),
    borderRadius: 'base',
  },
})

const sizes = {
  md: {
    label: {
      fontSize: 'sm',
    },
  },
  xxl:{
    label: {
      fontSize: 'xl',
    },
  }
}

const variants = {
  primary: (props: StyleFunctionProps) =>
    props.theme.components['Checkbox']['variants']['solid']({
      ...props,
      variant: 'solid',
      colorScheme: 'brand',
    }),
  'primary-on-accent': () => ({
    bg: 'brand.50',
    color: 'brand.600',
    _hover: { bg: 'brand.100' },
    _active: { bg: 'brand.100' },
  }),
}

const defaultProps = {
  colorScheme: 'brand',
}

export default {
  baseStyle,
  sizes,
  variants,
  defaultProps,
}
