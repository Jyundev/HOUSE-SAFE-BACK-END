export const getLandlordsSwagger = {
    "/landlords": {
        get: {
          tags: ["Landlords"],
        summary: "나쁜 임대인(채무불이행자)를 조회합니다.",
        parameters: [
          {
            in: "query",
            name: "page",
            schema: {
              type: "number",
              default: 1
            },
            describe: "기본값은 1입니다."
          },
          {
            in: "query",
            name: "limit",
            schema: {
              type: "number",
              default: 20
            },
            describe: "기본값은 20입니다."
          },
        ],
        responses: {
          200: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    landlord: {
                      type: "array",
                      properties: {
                        id: {
                          type: "number",
                        },
                        name: {
                          type: "string",
                        },
                        age: {
                          type: "number",
                        },
                        address: {
                          type: "string",
                        },
                        depositObligation: {
                          type: "string",
                        },
                        dueDate: {
                          type: "string",
                          format: "date",
                          example: "2024-01-01"

                        },
                        delinquency: {
                          type: "number",
                        },
                        fulfillmentDate: {
                          type: "string",
                          format: "date",
                          example: "2024-01-01"

                        },
                        reimbursementDebt: {
                          type: "string",
                        },
                        executionCount: {
                          type: "number",
                        },
                        referenceDate: {
                          type: "string",
                          format: "date",
                          example: "2024-01-01"
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
  
  
  export const getLandlordsByNameSwagger = {
    "/landlords/{name}": {
        get: {
          tags: ["Landlords"],
        summary: "이름을 기준으로 나쁜 임대인(채무불이행자)를 조회합니다.",
        parameters: [
          {
            in: "path",
            name: "name",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "page",
            schema: {
              type: "number",
              default: 1
            },
            describe: "기본값은 1입니다."
          },
          {
            in: "query",
            name: "limit",
            schema: {
              type: "number",
              default: 20
            },
            describe: "기본값은 20입니다."
          },
          
        ],
        responses: {
          200: {
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    landlord: {
                      type: "array",
                      properties: {
                        id: {
                          type: "number",
                        },
                        name: {
                          type: "string",
                        },
                        age: {
                          type: "number",
                        },
                        address: {
                          type: "string",
                        },
                        depositObligation: {
                          type: "string",
                        },
                        dueDate: {
                          type: "string",
                          format: "date",
                          example: "2024-01-01"

                        },
                        delinquency: {
                          type: "number",
                        },
                        fulfillmentDate: {
                          type: "string",
                          format: "date",
                          example: "2024-01-01"

                        },
                        reimbursementDebt: {
                          type: "string",
                        },
                        executionCount: {
                          type: "number",
                        },
                        referenceDate: {
                          type: "string",
                          format: "date",
                          example: "2024-01-01"
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
  
  