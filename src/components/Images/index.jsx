import { Image, Stack } from '@chakra-ui/react'

const MyImage = ({ file, size }) => {
    return (
        <Stack direction='row' justifyContent={'center'}>
            <Image boxSize={size} src={file} alt='Logo Image' />
        </Stack>
    )
}
export default MyImage