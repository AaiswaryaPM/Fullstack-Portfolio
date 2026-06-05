import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Portfolio API",
      version: "1.0.0",
      description: "API documentation for my portfolio backend",
    },

    servers: [
      {
        url: "http://localhost:5000",
      },
      {
        url: "https://portfolio-backend-acqk.onrender.com",
      },
    ],
  },

  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;