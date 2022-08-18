import {
  Button,
  Checkbox,
  InputRightElement,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Lock, User } from "phosphor-react";
import { SubmitHandler, useForm } from 'react-hook-form';

import { MyInputGroup } from "./Form/MyInputGroup";
import { RecoverPassword } from "./RecoverPassword";
import { loginFormSchema } from '../yup/schemas';
import { useContext } from '../context/MyContext';
import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup'

type LoginData = {
  email: string;
  password: string;
  rememberMe: boolean;
}

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const { handleRecover, recoverPassword } = useContext();
  const linkForgotPasswordColor = useColorModeValue('gray.700', 'white');
  const { handleSubmit, formState, register } = useForm<LoginData>({
    resolver: yupResolver(loginFormSchema)
  });
  const { errors } = formState;
  
  const handleLogin: SubmitHandler<LoginData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    window.alert(JSON.stringify(values, null, 3))
  }

  if(recoverPassword === true) {
    return <RecoverPassword />
  }

  return (
    <>
      <Text as="h1" fontSize={["1.5rem", "2rem"]} mt={6}>
        Login
      </Text>

      <Text fontSize={["0.825rem", "1rem"]}>
        Please enter your login and password!
      </Text>
      <form onSubmit={handleSubmit(handleLogin)}>
        <VStack spacing={8} mt={6}>
          <MyInputGroup
            id="email"
            placeholder="E-mail"
            error={errors.email}
            type="email"
            icon={<User />}
            {...register('email')}
          />

          <MyInputGroup
            id="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            icon={<Lock />}
            error={errors.password}
            autoComplete='off'
            {...register("password")}
            >
            <InputRightElement w="3.5rem">
              <Button
                borderLeftRadius="none"
                fontSize="0.75rem"
                variant="ghost"
                onClick={handleShowPassword}
                _focus={{
                  boxShadow: "0px 0px 0px 0px",
                  color: "purple.400",
                }}
                _hover={{
                  backgroundColor: "transparent",
                }}
              >
                {showPassword ? "hide" : "show"}
              </Button>
            </InputRightElement>
          </MyInputGroup>

          <Checkbox
            id="rememberMe"
            colorScheme="purple"
            {...register('rememberMe')}
          >
            Remember me?
          </Checkbox>

          <Button
            type="submit"
            w={[64, 80]}
            fontSize="1rem"
            _focus={{
              boxShadow: "0px 0px 1px 2px #B83280",
            }}
            isLoading={formState.isSubmitting}
          >
            Enter
          </Button>

          <Button
            onClick={() => handleRecover(true)}
            variant='link'
            color={linkForgotPasswordColor}
            fontSize="0.75rem"
            _focus={{
              ring: "none",
              textDecoration: "underline",
            }}
          >
            Forgot password?
          </Button>
        </VStack>
      </form>
    </>
  );
}
