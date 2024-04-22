// ** Import Chakra-UI components
import { Box, Heading, Select, Stack } from "@chakra-ui/react"
// ** Import Custom components
import MyButton from "../../Buttons"
// ** Import dummy data
import { languages, regions } from "../../../assets/data"

const Step2 = ({ handleNext, handlePrevious, value, setValue}) => {
    return (
    <div style={{ marginTop:'40px' }}>
        <Heading as='h1' size='md' textAlign={'center'}
                 style={{color:'#434e61', padding:'20px'}}>
           Pick your language and country/region
        </Heading>
        <Stack spacing={3} padding={'10px'}>
            <Select size='md'
                    value={value?.language}
                    onChange={(e) => setValue({...value, language:e.target.value})}>
                {
                    languages.map((el, index)=>(
                        <option key={index} value={el?.value}>{el?.label}</option>
                    ))
                }
            </Select>
        </Stack>
        <Stack spacing={3}  padding={'10px'}>
            <Select size='md'
                    defaultValue={value?.region} 
                    onChange={(e)=> setValue({...value, region:e.target.value})}>
                {
                    regions.map((el, index)=>(
                        <option key={index}  value={el?.value}>{el?.label}</option>
                    ))
                }
            </Select>
        </Stack>
        <Box padding={'10px'} marginTop={'30px'}> 
            <MyButton title={'Next'} width={'60%'} onClick={handleNext} isFilled disabled={value?.language === null || value?.region === null}/>
        </Box>
        <Box padding={'10px'}>
            <MyButton title={'Back'} width={'60%'} onClick={handlePrevious} isFilled={false}/>
        </Box>
    </div>
    )
}

export default Step2
