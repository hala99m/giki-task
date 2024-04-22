import { Stack, Button } from '@chakra-ui/react';

const MyButton = ({ title, width, onClick, isFilled, disabled }) => {
    return (
        <Stack direction='row'>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button
                    size='md'
                    onClick={onClick}
                    w={width}
                    isDisabled={disabled}
                    color={isFilled ? '#ffff' : '#000'}
                    backgroundColor={isFilled ? '#ff8c1e' : 'transparent'}
                    _hover={{
                        boxShadow: '0 10px 6px rgba(10, 0, 0, 0.1)',
                        border: isFilled ? '1px solid #ff8c1e' : 'none', fontWeight: 'bolder'
                    }}>
                    {title}
                </Button>
            </div>
        </Stack>
    );
}

export default MyButton;
