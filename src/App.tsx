import { Button, ButtonGroup, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Moon, Sun } from "phosphor-react";

import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { useState } from "react";

export function App() {
  const [formType, setFormType] = useState('login');
  const [activeLoginButton, setActiveLoginButton] = useState(true);
  const [activeRegisterButton, setActiveRegisterButton] = useState(false);
  
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<Moon />, <Sun /> );
  const backgroundColor = useColorModeValue('purple.400', 'purple.900');
  const textColorMode = useColorModeValue('Dark', 'Light');
  const activeButtonColor = useColorModeValue('#ffb6e1c5', '#e9108ec5');

  function handleSelectedForm(form: string) {
    setFormType(form);
    if(form === 'register') {
      setActiveRegisterButton(true);
      setActiveLoginButton(false);
      return; 
    }
    setActiveLoginButton(true);
    setActiveRegisterButton(false);
    return;
  }

  return (
    <Flex
      as='div'
      h='100vh'
      w='100vw'
      alignItems='center'
      justify="center"
      flexDirection="column"
    >
      <Button
        size={['sm', 'lg']}
        leftIcon={icon}
        colorScheme='purple'
        variant='solid'
        mb='1rem'
        onClick={toggleColorMode}
      >
        {textColorMode} Mode
      </Button>
      <Flex
        as='main'
        w={['20rem','42rem']}
        h={['30rem','35rem']}
        p='2rem 1rem'
        alignItems='center'
        flexDirection='column'
        bg={backgroundColor}
        borderRadius='8px'
      >
        <ButtonGroup spacing={0}>
          <Button
            w={[28, 32]}
            size={['sm', 'lg']}
            borderRightRadius='none'
            onClick={() => handleSelectedForm('login')}
            isActive={activeLoginButton}
            _focus={activeLoginButton ? {
              boxShadow: "0px 0px 1px 3px #B83280",
            } : {}}
            _active={{
              backgroundColor: activeButtonColor
            }}
          >
            Login
          </Button>
          <Button 
            w={[28, 32]}
            size={['sm', 'lg']}
            borderLeftRadius='none'
            onClick={() => handleSelectedForm('register')}
            isActive={activeRegisterButton}
            _focus={activeRegisterButton ? {
              boxShadow: "0px 0px 1px 3px #B83280",
            } : {}}
            _active={{
              backgroundColor: activeButtonColor
            }}
          >
            Register
          </Button>
        </ButtonGroup>

        {formType === 'login' ? <Login /> : <Register />}
      </Flex>
      <Text mt={['1rem']} fontSize={['0.825rem', '1rem']}>
        Feito por Eduardo Rodrigues
      </Text>
    </Flex>
  );
}