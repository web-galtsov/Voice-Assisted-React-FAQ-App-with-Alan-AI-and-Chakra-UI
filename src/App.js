import React, {useState, useRef, useEffect} from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from "./Navbar";
import { Faq } from "./Faq";
import alanBtn from "@alan-ai/alan-sdk-web";

export const App = () => {
    const alanBtnInstance = useRef(null);
    const [index, setIndex] = useState(null)
    useEffect(() => {
        if (!alanBtnInstance.current) {
            // noinspection JSValidateTypes
            alanBtnInstance.current = alanBtn({
                key: '595ff99f733320f56cf6dcbffd965e702e956eca572e1d8b807a3e2338fdd0dc/stage',
                onCommand: (commandData) => {
                    // noinspection JSUnresolvedVariable
                    if (commandData.command === 'gotoFaq') {
                       // noinspection JSUnresolvedVariable
                        setIndex(commandData.faqId -1)
                    }
                },
            });
        }
    }, []);
  return (
      <ChakraProvider theme={theme}>
        <Navbar/>
        <Faq index={index} setIndex={setIndex}/>
      </ChakraProvider>
  )
}