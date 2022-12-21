import React from "react";
import NavBar from "../components/NavBar";
import TodoList from "../components/AddCourses";
import { getLoginInfo } from "../utils/LoginInfo";
import custom_axios from "../axios/AxiosSetup";
import { ApiConstants } from "../api/ApiConstants";
import { toast } from "react-toastify";
import ListCorusesList from "../components/ListCourses";

interface CourseModel {
  category: string[];
  language: string[];
  title: string;
  author: string;
  id: string;
  valoracion: number;
}

const CompeletedTodos = () => {
  const [todos, setTodos] = React.useState<CourseModel[]>([]);

  const showData = async () => {
    const id = getLoginInfo()?.id;
    if (id != null) {
      const token =localStorage.getItem("token");
      const response = await custom_axios.get(ApiConstants.COURSES.FIND_ALL, { headers: { Authorization: `Bearer ${token}` } });
      setTodos(response.data);
    } else {
      toast.info("Sorry you are not authenticated");
    }
  };

  React.useEffect(() => {
    if (todos.length == 0) showData();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <h1 className=" text-center text-5xl p-4">Cursos</h1>
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul className="flex flex-col p-4">
          {todos.map((todo) => {
            return (
              <ListCorusesList
                key={todo.id}
                author={todo.author}
                deleteTodo={async () => {
                  const response = await custom_axios.delete(ApiConstants.COURSES.DELETE(todo.id), { headers: { Authorization: "Bearer " + localStorage.getItem("token") } });
                  showData();
                  toast.success("Course Deleted Sucessfully!!");
                }}
                id={todo.id}
                title={todo.title}
                valoracion={todo.valoracion}
                category={todo.category}
                language={todo.language}

              ></ListCorusesList>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CompeletedTodos;
