import {
  InputGroup as ChakraInputGroup,
  FormControl,
  FormErrorMessage,
  Input,
  InputLeftElement,
  InputProps,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ForwardRefRenderFunction,
  ReactElement,
  ReactNode,
  forwardRef,
} from "react";

import { FieldError } from "react-hook-form";

interface MyInputGroupProps extends InputProps {
  name: string;
  icon: ReactElement;
  error?: FieldError;
  children?: ReactNode;
}

const InputGroup: ForwardRefRenderFunction<
  HTMLInputElement,
  MyInputGroupProps
> = ({ icon, error, name, children, ...rest }, ref) => {
  const errorMessageColor = useColorModeValue('gray.900', 'red.500');
  
  return (
    <FormControl isInvalid={!!error}>
      <ChakraInputGroup>
        <InputLeftElement pointerEvents="none" children={icon} />
        <Input
          id={name}
          name={name}
          fontSize={["0.75rem", "1rem"]}
          variant="filled"
          ref={ref}
          {...rest}
        />
        {children}
      </ChakraInputGroup>
      {!!error && <FormErrorMessage color={errorMessageColor}>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const MyInputGroup = forwardRef(InputGroup);
