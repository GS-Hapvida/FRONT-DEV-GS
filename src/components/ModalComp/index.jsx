import React, { useState } from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
} from '@chakra-ui/react';

const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [ name, setName ] = useState(dataEdit.name || '');
    const [ email, setEmail ] = useState(dataEdit.email || '');

    const handleSave = () => {
        if (!name || !email) return;

        if (emailAlreadyExists()) {
            return alert("E-mail já cadastrado!");
        }

        if (Object.keys(dataEdit).length) {
            data[dataEdit.index] = {name, email};
        }

        const newDataArray = !Object.keys(dataEdit).length
            ? [...(data ? data : []), { name, email }]
            : [...(data ? data : [])];

        localStorage.setItem('cad_medicamentos', JSON.stringify(newDataArray));

        setData(newDataArray);

        onClose();
    };

    const emailAlreadyExists = () => {
        if (dataEdit.email !== email && data?.length){
            return data.find((item) => item.email === email);
        }

        return false;
    };

    return(
       <>
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Registre seu Medicamento</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl display='flex' flexDir='column' gap={4}>
                        <Box>
                            <FormLabel>Nome</FormLabel>
                            <Input
                                type='text'
                                placeholder='Nome'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Box>
                        <Box>
                            <FormLabel>Medicamento</FormLabel>
                            <Input
                                type='text'
                                placeholder='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                    </FormControl>
                </ModalBody>

                <ModalFooter justifyContent='start'>
                    <Button colorSheme='blue' mr={3} onClick={handleSave}>
                        Salvar
                    </Button>
                    <Button colorSheme='red' mr={3} onClick={onClose}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
       </> 
    );
};

export default ModalComp;