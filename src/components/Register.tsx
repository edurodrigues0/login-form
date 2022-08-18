import {
  Button,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Lock, User } from "phosphor-react";
import { SubmitHandler, useForm } from 'react-hook-form';

import { MyInputGroup } from "./Form/MyInputGroup";
import { registerFormSchema } from "../yup/schemas";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

type RegisterData = {
  email: string;
  password: string;
  password_confirmation: string;
}

export function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const { handleSubmit, formState, register } = useForm<RegisterData>({
    resolver: yupResolver(registerFormSchema)
  });
  const { errors } = formState;
  
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowRepeatPassword = () => setShowRepeatPassword(!showRepeatPassword);

  const handleRegister: SubmitHandler<RegisterData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    window.alert(JSON.stringify(values, null, 3))
  }

  return (
    <>
      <Text as="h1" fontSize={["1.5rem", "2rem"]} mt={6}>
        Register
      </Text>

      <Text fontSize={["0.825rem", "1rem"]}>
        Please create your account!
      </Text>
      <form onSubmit={handleSubmit(handleRegister)}>
        <VStack spacing={6} mt={6}>
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

          <MyInputGroup
            id="password_confirmation"
            placeholder="Password"
            type={showRepeatPassword ? "text" : "password"}
            icon={<Lock />}
            error={errors.password_confirmation}
            autoComplete='off'
            {...register("password_confirmation")}
            >
            <InputRightElement w="3.5rem">
              <Button
                borderLeftRadius="none"
                fontSize="0.75rem"
                variant="ghost"
                onClick={handleShowRepeatPassword}
                _focus={{
                  boxShadow: "0px 0px 0px 0px",
                  color: "purple.400",
                }}
                _hover={{
                  backgroundColor: "transparent",
                }}
              >
                {showRepeatPassword ? "hide" : "show"}
              </Button>
            </InputRightElement>
          </MyInputGroup>

          <Button
            type="submit"
            w={80}
            fontSize="1rem"
            _focus={{
              boxShadow: "0px 0px 1px 2px #B83280",
            }}
            isLoading={formState.isSubmitting}
          >
            Create
          </Button>
        </VStack>
      </form>
    </>
  );
}
