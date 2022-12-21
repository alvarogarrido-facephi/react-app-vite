import React from "react";

interface AddCoursesListProps {
  id: string;
  todo: string;
  author: string;
  deleteTodo: (id: string) => void;
}

const AddCoursesList = (props: AddCoursesListProps) => {
  return (
    <li className="border-gray-400  flex flex-row">
      <div className="select-none bg-white flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400">
        <div className="flex-1 pl-1 mr-16">
          <div className="font-medium">{props.todo}</div>
          <div className="font-medium">{props.author}</div>
        </div>
        <button onClick={() => props.deleteTodo(props.id)} className="bg-red-500 hover:bg-red-700 ml-2 text-white font-bold py-2 px-4 rounded-full">
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default AddCoursesList;
