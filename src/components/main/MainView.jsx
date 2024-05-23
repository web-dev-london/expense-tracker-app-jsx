import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import SummaryView from "../summary/SummaryView";
import ExpenseView from "../expense/ExpenseView";
import { useContext, useEffect } from "react";
import { GlobalState } from "../../context/GlobalContext";

const MainView = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { expense, setExpense, income, setIncome, sum } = useContext(GlobalState);

    useEffect(() => {
        let income = 0;
        let expense = 0;

        sum.forEach(item => {
            if (item.type === "income") {
                income += parseFloat(item.amount)
            } else {
                expense += parseFloat(item.amount)
            }
            setExpense(expense);
            setIncome(income);
        })

    }, [sum, setExpense, setIncome])

    return (
        <>
            <Flex
                textAlign={'center'}
                flexDir={'column'}
                px={'5'}
            >
                <Flex
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    mt={'12'}
                >
                    <Heading
                        color={'blue.400'}
                        display={['none', 'block']}
                    >
                        Expense Tracker
                    </Heading>
                    <Flex
                        alignItems={'center'}
                    >
                        <Button
                            onClick={onOpen}
                            colorScheme="cyan"
                        >
                            Add New Transaction
                        </Button>
                    </Flex>
                </Flex>
                <SummaryView
                    isOpen={isOpen}
                    onClose={onClose}
                    income={income}
                    expense={expense}
                />
                <Flex
                    w={'100%'}
                    alignItems={'flex-start'}
                    justifyContent={'space-evenly'}
                    flexDir={['column', 'column', 'column', 'row', 'row']}
                >
                    <ExpenseView
                        data={sum.filter(item => item.type === 'expense')}
                        type={'expense'}
                    />
                    <ExpenseView
                        data={sum.filter(item => item.type === 'income')}
                        type={'income'}
                    />
                </Flex>
            </Flex>
        </>
    );
}


export default MainView;