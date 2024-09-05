export const getUserSwagger = {
  "/users/detail/{id}": {
    get: {
      tags: ["User"],
      summary: "유저 상세 조회합니다.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  user: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                      },
                      name: {
                        type: "string",
                      },
                      age: {
                        type: "number",
                      },
                      email: {
                        type: "string",
                      },

                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const getUsersSwagger = {
  "/users": {
    get: {
      tags: ["User"],
      summary: "유저 리스트를 조회합니다.",
      parameters: [
        {
          in: "query",
          name: "page",
          schema: {
            type: "number",
          },
        },
        {
          in: "query",
          name: "limit",
          schema: {
            type: "number",
          },
        },
      ],
      responses: {
        200: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  user: {
                    type: "array",
                    properties: {
                      id: {
                        type: "string",
                      },
                      name: {
                        type: "string",
                      },
                      age: {
                        type: "number",
                      },
                      email: {
                        type: "string",
                      },

                    },
                  },
                  count: {
                    type: "number",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const updateUserSwagger = {
  "/users": {
    patch: {
      tags: ["User"],
      summary: "유저를 수정합니다.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "number",
          },
        },
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
                age: {
                  type: "number",
                },
                email: {
                  type: "string",
                },

              },
            },
          },
        },
      },
      responses: {
        204: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {},
              },
            },
          },
        },
      },
    },
  },
};

export const createUserSwagger = {
  "/users": {
    post: {
      tags: ["User"],
      summary: "유저를 생성합니다.",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
                age: {
                  type: "number",
                },
                email: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "User created successfully", 
          content: {
            "application/json": {
              schema: {
                type: "object",
                id: {
                  type: "string", 
                },
              },
            },
          },
        },
      },
    },
  },
};

export const deleteUserSwagger = {
  "/users/{id}": {
    delete: {
      tags: ["User"],
      summary: "유저를 삭제합니다.",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        204: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {},
              },
            },
          },
        },
      },
    },
  },
};
