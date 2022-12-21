import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import AddCoursesList from "../components/AddCourses";
import custom_axios from "../axios/AxiosSetup";
import { getLoginInfo } from "../utils/LoginInfo";
import { toast } from "react-toastify";
import { ApiConstants } from "../api/ApiConstants";
interface CourseModel {
  author: string;
  title: string;
  valoracion: number;
  id: string;
}
function ActiveTodos() {
  const [todos, setTodos] = React.useState<CourseModel[]>([]);
  const title: any = React.useRef();
  const datePost: any = React.useRef();
  const author: any = React.useRef();
  const linkCourse: any = React.useRef();
  const coverImage: any = React.useRef();
  const category: any = React.useRef();
  const language: any = React.useRef();
  const valoracion: any = React.useRef();

  // get all todos not completed with respect to userid
  const showData = async () => {
    const userId = getLoginInfo()?.id;
    if (userId != null) {
      const response = await custom_axios.get(ApiConstants.COURSES.FIND_ALL, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } });
      setTodos(response.data);
    } else {
      toast.info("Sorry you are not authenticated");
    }
  };

  const saveTodo = async () => {
    if (title.current.value == "") {
      toast.info("Please Provide Title");
      return;
    }
    const userId = getLoginInfo()?.id;
    if (userId != null) {
      const response = await custom_axios.post(
        ApiConstants.COURSES.ADD,
        {
          title: title.current.value,
          creationDate: new Date(),
          datePost: datePost.current.value,
          author: author.current.value,
          linkCourse: linkCourse.current.value,
          coverImage: coverImage.current.value,
          category: [category.current.value],
          language: [language.current.value],
          valoracion : +valoracion.current.value
        },
        { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
      );

      showData();
      title.current.value = "";
      datePost.current.value = "";
      author.current.value = "";
      linkCourse.current.value = "";
      coverImage.current.value = "";
      category.current.value = "";
      language.current.value = "";
      valoracion.current.value = "";
      toast.success("Course Added Scuessfully!!");
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
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul className="flex flex-col p-4">
          <span className="text-black text-2xl ">Introduce los datos del curso: </span>
          <input ref={title} className="mt-2 p-2  rounded-xl " placeholder="Título"></input>
          <input ref={datePost} className="mt-2 p-2  rounded-xl "placeholder="Fecha de publicación"></input>
          <input ref={author} className="mt-2 p-2  rounded-xl "placeholder="Autor"></input>
          <input ref={linkCourse} className="mt-2 p-2  rounded-xl "placeholder="Enlace"></input>
          <input ref={coverImage} className="mt-2 p-2  rounded-xl "placeholder="Imagen portada"></input>
          <input ref={category} className="mt-2 p-2  rounded-xl "placeholder="Categoría"></input> 
          <input ref={language} className="mt-2 p-2  rounded-xl "placeholder="Idioma"></input>
          <input ref={valoracion} className="mt-2 p-2  rounded-xl "placeholder="Valoración"></input>
          <button onClick={saveTodo} className="w-36 px-2 py-4 text-white mx-auto mb-12 mt-2 bg-green-400 rounded-xl hover:bg-green-500 text-2xl">
            Guardar
          </button>

          {todos.map((todo) => {
            return (
              <AddCoursesList
                key={todo.id}
                deleteTodo={async () => {
                  const response = await custom_axios.delete(ApiConstants.COURSES.DELETE(todo.id), { headers: { Authorization: "Bearer " + localStorage.getItem("token") } });
                  showData();
                  toast.success("Course Deleted Sucessfully!!");
                } }
                id={todo.id}
                todo={todo.title} 
                author={todo.author} 
              ></AddCoursesList>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ActiveTodos;
