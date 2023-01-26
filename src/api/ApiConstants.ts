export const ApiConstants = {
  COURSES: {
    ADD: "/v1/courses/create",
    FIND_ALL: "/v1/courses/all",
    DELETE: (todoId: string) => {
      return "/v1/courses/" + todoId;
    },
  },
  USER: {
    SIGN_UP: "/v1/auth/register",
    FIND_ALL: "/v1/auth/all",
    DELETE: (userId: string) => {
      return "/v1/auth/remove/" + userId;
    },
  },
  LOGIN: "/v1/auth/login",
};

