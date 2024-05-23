import {
    FormControl,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    ModalOverlay,
    FormLabel,
    Input,
    RadioGroup,
    Radio,
    ModalFooter,
    Button,
    ModalContent,
} from "@chakra-ui/react";
import { PropTypes } from 'prop-types';
import { useContext } from "react";
import { GlobalState } from "../../context/GlobalContext";




const TransactionView = ({ isOpen, onClose }) => {

    const { form, setForm, value, setValue, handleSubmit } = useContext(GlobalState);

    function handleInpuChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleSubmit(form)
    }




    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <form onSubmit={handleFormSubmit}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add New Transaction</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <FormLabel>Enter Description</FormLabel>
                                <Input
                                    placeholder="Enter Description"
                                    name="description"
                                    type="text"
                                    onChange={handleInpuChange}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Enter Amount</FormLabel>
                                <Input
                                    placeholder="Enter Description"
                                    name="amount"
                                    type="number"
                                    onChange={handleInpuChange}
                                />
                            </FormControl>
                            <RadioGroup
                                value={value}
                                onChange={setValue}
                                mt={5}
                            >
                                <Radio
                                    value={'income'}
                                    checked={form.type === 'income'}
                                    name="type"
                                    colorScheme="teal"
                                    onChange={handleInpuChange}
                                >
                                    Income
                                </Radio>
                                <Radio
                                    value={'expense'}
                                    checked={form.type === 'expense'}
                                    name="type"
                                    colorScheme="red"
                                    onChange={handleInpuChange}
                                >
                                    Expense
                                </Radio>
                            </RadioGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                onClick={onClose}
                                mr={5}
                            >
                                Close
                            </Button>
                            <Button
                                type="submit"
                                onClick={onClose}
                            >
                                Add
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    );
}

TransactionView.propTypes = {
    onClose: PropTypes.objectOf(PropTypes.function),
    isOpen: PropTypes.objectOf(PropTypes.boolean)
}

export default TransactionView;