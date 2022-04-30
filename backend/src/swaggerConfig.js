const swaggerUi = require("swagger-ui-express");
const authControllerSwagger = require("./auth/auth.controller.swagger");

const {
  BAD_REQUEST_RESPONSE,
  SUCCESS_RESPONSE,
  UNAUTHORIZED_RESPONSE,
  NOT_FOUND_RESPONSE,
  CONFLICT_RESPONSE,
} = require("./common/base.response");

var swaggerConfig = {
  openapi: "3.0.1",
  info: {
    title: "DDD Server",
    description: "TDDD Server API Docs.",
    termsOfService: "",
    contact: {
      name: "Redniche Github",
      url: "https://github.com/redniche",
    },
    license: {
      name: "Apache 2.0",
      url: "http://www.apache.org/licenses/LICENSE-2.0.html",
    },
    version: "1.0.0",
  },
  externalDocs: {
    description: "Find out more about api",
    url: "https://docs.google.com/spreadsheets/d/1qzjpPkPe-NFa5Q7LsGl0rv9DBEYfOHZ2lgwORTfclHk/edit#gid=0",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
    },
  ],
  paths: {
    ...authControllerSwagger,
  },
  components: {
    schemas: {
      success: {
        description: "요청 성공",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                result: {
                  type: "string",
                  example: "success",
                },
              },
            },
          },
        },
      },
      unauthorized: {
        description: "인증 실패",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                result: {
                  type: "string",
                  example: "fail",
                },
                message: {
                  type: "string",
                  example: UNAUTHORIZED_RESPONSE.message,
                },
              },
            },
          },
        },
      },
      badRequest: {
        description: "잘못된 요청",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                result: {
                  type: "string",
                  example: "fail",
                },
                message: {
                  type: "string",
                  example: BAD_REQUEST_RESPONSE.message,
                },
              },
            },
          },
        },
      },
      notFound: {
        description: "요청한 리소스를 찾을 수 없음",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                result: {
                  type: "string",
                  example: "fail",
                },
                message: {
                  type: "string",
                  example: NOT_FOUND_RESPONSE.message,
                },
              },
            },
          },
        },
      },
      conflict: {
        description: "리소스 충돌 발생",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                result: {
                  type: "string",
                  example: "fail",
                },
                message: {
                  type: "string",
                  example: CONFLICT_RESPONSE.message,
                },
              },
            },
          },
        },
      },
      jwtExpired: {
        description: "jwt 인증 실패",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                result: {
                  type: "string",
                  example: "fail",
                },
                message: {
                  type: "string",
                  example: "jwt expired",
                },
              },
            },
          },
        },
      },
      user: {
        type: "object",
        properties: {
          twitch: {
            type: "object",
            properties: {
              id: { type: "string" },
              displayName: { type: "string" },
              profileImageUrl: { type: "string" },
            },
            required: false,
          },
          walletAddress: { type: "string" },
          createdAt: { type: "number" },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
      cookieAuth: {
        type: "apiKey",
        in: "cookie",
        name: "refreshtoken",
      },
    },
  },
  security: {
    bearerAuth: [],
    cookieAuth: [],
  },
};

module.exports = { swaggerUi, swaggerConfig };
