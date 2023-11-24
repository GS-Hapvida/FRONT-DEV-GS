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
    const [ medicine, setMedicine ] = useState(dataEdit.medicine || '');
    const [ description, setDescription ] = useState(dataEdit.description || '');

    const handleSave = () => {
        if (!medicine || !description) return;

        if (Object.keys(dataEdit).length) {
            data[dataEdit.index] = {medicine, description};
        }

        const newDataArray = !Object.keys(dataEdit).length
            ? [...(data ? data : []), { medicine, description }]
            : [...(data ? data : [])];

        localStorage.setItem('cad_medicines', JSON.stringify(newDataArray));

        setData(newDataArray);

        onClose();
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
                            <FormLabel>Medicamento</FormLabel>
                            <Input
                                type='text'
                                placeholder='Nome do medicamento'
                                value={medicine}
                                onChange={(e) => setMedicine(e.target.value)}
                            />
                        </Box>
                        <Box>
                            <FormLabel>Descrição</FormLabel>
                            <Input
                                type='text'
                                placeholder='Ex: 10ml / 5 em 5 horas'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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