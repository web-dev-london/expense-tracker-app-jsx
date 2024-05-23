import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { PropTypes } from 'prop-types';


const ExpenseView = ({ type, data }) => {
    return (
        <>
            <Box
                flex={1}
                w={'full'}
                bg={'white'}
                mr={'4'}
                mt={'10'}
                p={'5'}
                pb={'4'}
                border={'1px solid'}
                borderColor={'gray.200'}
                borderRadius={'5px'}
            >
                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Heading
                        fontSize={'22px'}
                        color={'gray.600'}
                    >
                        {type === 'income' ? 'Income' : 'Expense'}
                    </Heading>
                    {
                        data.map((item, index) => {
                            return (
                                <Flex key={index}
                                    bg={type === 'expense' ? 'red.50' : 'blue.50'}
                                    mt={'4'}
                                    justifyContent={'space-between'}
                                    alignItems={'center'}
                                    border={'1px solid'}
                                    borderColor={type === 'expense' ? 'red.100' : 'blue.100'}
                                    borderRadius={'5px'}
                                >
                                    <Flex
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                    >
                                        <Text
                                            ml={'3'}
                                            fontWeight={'bold'}
                                            color={'gray.600'}
                                        >{item.description}</Text>
                                    </Flex>
                                    <Text>${item.amount}</Text>
                                </Flex>
                            )
                        })
                    }

                </Flex>
            </Box>
        </>
    );
}

ExpenseView.propTypes = {
    type: PropTypes.string,
    data: PropTypes.array
}

export default ExpenseView;