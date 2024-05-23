import { Box, Container, Flex } from "@chakra-ui/react"
import MainView from "./components/main/MainView"


function App() {


    return (
        <>
            <Container
                bg={'#f8fafd'}
                maxW={'7xl'}
                h={'100vh'}
            >
                <Flex
                    h={'full'}
                >
                    <Box
                        flex={5}
                        w={['20%', '30%', '20%', '50%', '60%']}
                    >
                        <MainView />
                    </Box>
                </Flex>
            </Container>
        </>
    )
}

export default App
