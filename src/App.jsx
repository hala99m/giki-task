import './App.css'
import { Box, Flex } from '@chakra-ui/react'
import HomePage from './views/home'
import { atom } from 'recoil';
import StepperModal from './components/Model';

function App() {
  const showState = atom({
    key: 'showState',
    default: false,
  });
  const modalValue = atom({
    key: 'modalValue',
    default: {
      name: 'Alice',
      language: null,
      region: null,
      images: []
    },
  });
  const isEditable = atom({
    key: 'isEditable',
    default: false
})
  return (
    <Flex width={'100wh'} height={'90vh'} alignContent={'center'} justifyContent={'center'}>
      <Box maxW={'2xl'} m={'0 auto'}>
        <HomePage showState={showState} />
        <StepperModal showState={showState} modalValue={modalValue} isEditable={isEditable} />
      </Box>
    </Flex>
  )
}

export default App
