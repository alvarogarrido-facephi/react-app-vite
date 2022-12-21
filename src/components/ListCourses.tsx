import React from "react";
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface ListCoursesProps {
  id: string;
  title: string;
  author: string;
  category: string[];
  language: string[];
  valoracion: number;
  deleteTodo: (id: string) => void;
}

const ListCorusesList = (props: ListCoursesProps) => {
  return (

    <li className="border-gray-400  flex flex-row">
      <div className="select-none bg-white flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400">
        <div className="flex-1 pl-1 mr-16">
          <div className="font-medium"><span className="font-bold">Título:</span> {props.title}</div>
          <div className="font-medium"><span className="font-bold">Autor:</span>{props.author}</div>
          <div className="font-medium"><span className="font-bold">Categoría:</span>{props.category}</div>
          <div className="font-medium"><span className="font-bold">Idioma:</span>{props.language}</div>
          <div className="font-medium"><span className="font-bold">Valoración:</span>{props.valoracion}</div>
        </div>
        <button onClick={() => props.deleteTodo(props.id)} className="bg-red-500 hover:bg-red-700 ml-2 text-white font-bold py-2 px-4 rounded-full">
          Eliminar
        </button>
      </div>
    </li>
  
//   <Card
//   direction={{ base: 'column', sm: 'row' }}
//   overflow='hidden'
//   variant='outline'
// >
//   <Image
//     objectFit='cover'
//     maxW={{ base: '100%', sm: '200px' }}
//     src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
//     alt='Caffe Latte'
//   />

//   <Stack>
//     <CardBody>
//       <Heading size='md'>{props.title}</Heading>

//       <Text py='2'>
//       {props.author}
//       </Text>
//     </CardBody>

//     <CardFooter>
//       <Button variant='solid' colorScheme='blue' onClick={() => props.deleteTodo(props.id)}>
//         Buy Latte
//       </Button>
//     </CardFooter>
//   </Stack>
// </Card>
)};

export default ListCorusesList;
