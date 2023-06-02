import { Box, Spinner } from '@chakra-ui/react'

function ToDosLoading() {
    return (
        <Box className='w-16 h-16 mb-12' >
            <Spinner
            />
        </Box>
    )
}

export default ToDosLoading