import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { PropTypes } from 'prop-types';
import TransactionView from "../transaction/TransactionView";
import ChartView from "../chart/ChartView";



const SummaryView = ({ isOpen, onClose, income, expense }) => {
    return (
        <>
            <Box
                border={'1px solid'}
                borderColor={'gray.200'}
                borderRadius={'5px'}
                overflow={'hidden'}
                backgroundColor={'white'}
                mt={5}
                p={'10px'}
                display={'flex'}
            >
                <Flex
                    w={'full'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDir={{ base: 'column', lg: 'row' }}
                >
                    <Flex
                        flex={1}
                        w={'full'}
                        flexDir={'column'}
                        alignItems={'center'}
                        justifyContent={'space-evenly'}
                        ml={'-20'}
                        mr={'2'}
                    >
                        <Heading
                            size={'md'}
                            mb={'4'}
                            color={'gray.500'}
                        >
                            Balance is ${income - expense}
                        </Heading>
                        <Flex
                            justifyContent={'space-evenly'}
                            alignItems={'center'}
                            bg={'gray.50'}
                            w={'full'}
                            h={'100px'}
                            border={'1px solid'}
                            borderColor={'gray.100'}
                        >
                            <Flex
                                flexDir={'column'}
                            >
                                <Heading
                                >
                                    ${income}
                                </Heading>
                                <Text
                                    color="gray.600"
                                >
                                    Total Income
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            justifyContent={'space-evenly'}
                            alignItems={'center'}
                            bg={'gray.50'}
                            w={'full'}
                            h={'100px'}
                            border={'1px solid'}
                            borderColor={'gray.100'}
                        >
                            <Flex
                                flexDir={'column'}
                            >
                                <Heading
                                >
                                    ${expense}
                                </Heading>
                                <Text
                                    color="gray.600"
                                >
                                    Total Expense
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Box
                        flex={1}
                        mt={'10'}
                        ml={'-90px'}
                        mr={'5'}
                        width={'300px'}
                        height={'300px'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Heading>
                            <ChartView expense={expense} income={income} />
                        </Heading>
                    </Box>
                </Flex>
                <TransactionView onClose={onClose} isOpen={isOpen} />
            </Box>
        </>
    );
}

SummaryView.propTypes = {
    isOpen: PropTypes.objectOf(PropTypes.boolean),
    onClose: PropTypes.objectOf(PropTypes.function),
    income: PropTypes.number,
    expense: PropTypes.number,
}

export default SummaryView;