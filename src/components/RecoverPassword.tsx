import { Button, Text, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';

import { MyInputGroup } from "./Form/MyInputGroup";
import { User } from "phosphor-react";
import { recoverPasswordSchema } from "../yup/schemas";
import { useContext } from "../context/MyContext";
import { yupResolver } from '@hookform/resolvers/yup'

type RecoverPasswordData = {
  email: string;
}

export function RecoverPassword() {
  const { handleRecover } = useContext();
  const { handleSubmit, formState, register } = useForm<RecoverPasswordData>({
    resolver: yupResolver(recoverPasswordSchema)
  });
  const { errors } = formState;
  
  const handleRecoverPassword: SubmitHandler<RecoverPasswordData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    window.alert(JSON.stringify(values, null, 1))
  }
  
  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(handleRecoverPassword)}
      spacing={8}
      mt={6}
    >
      <Text as="h1" fontSize={["1.5rem", "2rem"]}>
        Recover Password
      </Text>

      <Text fontSize={["0.825rem", "1rem"]}>Please enter your email!</Text>

      <MyInputGroup
        id="email"
        placeholder="E-mail"
        error={errors.email}
        type="email"
        icon={<User />}
        {...register("email")}
      />

      <Button
        type="submit"
        w={[64, 80]}
        fontSize="1rem"
        _focus={{
          boxShadow: "0px 0px 1px 2px #B83280",
        }}
        isLoading={formState.isSubmitting}
      >
        Recover
      </Button>

      <Button
        w={[64, 80]}
        colorScheme='red'
        fontSize="1rem"
        onClick={() => handleRecover(false)}
        _focus={{
          boxShadow: "0px 0px 1px 2px #B83280",
        }}
      >
        Return
      </Button>
    </VStack>
  );
}
