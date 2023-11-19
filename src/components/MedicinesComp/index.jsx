import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

import {
    Box,
    Flex,
    Button,
    useDisclosure,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    useBreakpointValue,
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';
import ModalComp from '../ModalComp';

const MedicinesComp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState([]);
    const [dataEdit, setDataEdit] = useState({});

    const isMobile = useBreakpointValue({
        base: true,
        lg: false
    });

    useEffect(() => {
        const db_costumer = localStorage.getItem('cad_medicamentos')
        ? JSON.parse(localStorage.getItem('cad_medicamentos'))
        : [];

        setData(db_costumer);
    }, [setData]);

    const handleRemove = (medicamento) => {
        const newArray = data.filter((item) => item.medicamento !== medicamento);

        setData(newArray);

        localStorage.setItem('cad_medicamentos', JSON.stringify(newArray));
    };



    return(
        <Flex
         h='100vh'
         align='center'
         justify='center'
         fontSize='20px'
         fontFamily='poppins'
        >
        <Box maxW={800} w='100%' h='100vh' py={10} px={10} >
            <Button colorScheme='blue' onClick={() => [setDataEdit({}), onOpen()]}>
                Novo Cadastro
            </Button>
        
            <Box overflowY='auto' height='100%'>
                <Table mt='6'>
                    <Thead>
                        <Tr>
                            <Th maxW={isMobile ? 5 : 100} fontSize='20px'> 
                                Nome
                            </Th>
                            <Th maxW={isMobile ? 5 : 100} fontSize='20px'> 
                                Medicamento
                            </Th>
                            <Th p={0}></Th>
                            <Th p={0}></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map(({name, medicamento}, index) =>(
                            <Tr key={index} cursor='pointer' _hover={{ bg: 'gray.100'}}>
                                <Td maxW ={isMobile ? 5:  100}>{name}</Td>
                                <Td maxW ={isMobile ? 5:  100}>{medicamento}</Td>
                                <Td p={0}>
                                    <EditIcon 
                                        fontSize={20}
                                        onClick={ () => [
                                            setDataEdit({name, medicamento, index}),
                                        ]}
                                    />
                                </Td>
                                <Td p={0}>
                                    <DeleteIcon
                                        fontSize={20}
                                        onClick={ () => handleRemove(medicamento)}
                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
        {isOpen && (
            <ModalComp 
                isOpen={isOpen}
                onClose={onClose}
                data={data}
                setData={setData}
                dataEdit={dataEdit}
                setDataEdit={setDataEdit}
            />
        )}
        </Flex> 
    );
};

export default MedicinesComp;