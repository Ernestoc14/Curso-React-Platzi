import { Box, Spinner } from '@chakra-ui/react'

function ToDosLoading() {
    return (
        <Box className='w-16 h-16 mb-12' >
            <Spinner
                thickness='4px'
                speed='0.65s'
                color='#000000'
                emptyColor='#707070'
                height={'100%'}
                width={'100%'}
            />
        </Box>
    )
}

export default ToDosLoading