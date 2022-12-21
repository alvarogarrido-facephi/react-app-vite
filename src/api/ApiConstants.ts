export const ApiConstants = {
  COURSES: {
    ADD: "/v1/courses/create",
    FIND_ALL: "/v1/courses/all",
    DELETE: (todoId: string) => {
      return "/v1/courses/" + todoId;
    },
  },
  USER: {
    SIGN_UP: "/auth/register",
    FIND_ALL: "/auth/all",
    DELETE: (userId: string) => {
      return "/auth/remove/" + userId;
    },
  },
  LOGIN: "/auth/login",
};

