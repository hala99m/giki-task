// ** Import Chakra-UI components
import { Heading, Input, InputGroup, InputRightElement, Text, Tooltip } from "@chakra-ui/react"
// ** Import Icons
import { EditIcon } from "@chakra-ui/icons"
// ** Import Images
import headerImg from '../../../assets/images/header.svg'
// ** Import Custom components
import MyImage from "../../Images"
import MyButton from "../../Buttons"

const Step1 = ({ handleNext, setValue, value, setEditable, editable }) => {
    return (
        <div style={{ marginTop: '30px' }}>
            <MyImage file={headerImg} size={'100px'} alt="giki logo" />
            <Text align='center'
                fontSize='sm'
                textShadow="1px 1px 2px rgba(0,0,0,0.4)"
                style={{ color: '#b3b3b3', padding: '10px' }}>
                alice@wonderland.space
            </Text>
            <Heading as='h2' size='md' textAlign={'center'}
                style={{ color: '#434e61', padding: '20px' }}>
                Welcome to Giki
            </Heading>
            <InputGroup>
                <Input
                    isInvalid={value?.name === ''}
                    errorBorderColor='crimson'
                    variant={editable ? 'outline' : 'filled'}
                    textAlign={'center'}
                    defaultValue={value.name}
                    fontSize={'30px'}
                    fontWeight={'bolder'}
                    color={'orange'}
                    focusBorderColor='orange.300'
                    disabled={editable === false}
                    onChange={(e) => setValue({ ...value, name: e.target.value })} />
                <Tooltip label={!editable ? 'Activate editing input' : 'Deactivate editing input'} aria-label='A tooltip'>
                    <InputRightElement>
                        <EditIcon color='gray.500' onClick={() => setEditable(!editable)} />
                    </InputRightElement>
                </Tooltip>
            </InputGroup>
            <Text align='center'
                fontSize='sm'
                textShadow="1px 1px 2px rgba(0,0,0,0.4)"
                style={{ color: '#000', padding: '30px' }}>
                Your answers to the next few questions will help us find the right communities for you
            </Text>
            <MyButton title={'Next'} width={'60%'} onClick={handleNext} isFilled disabled={value?.name === ''} />
        </div>
    )
}

export default Step1
