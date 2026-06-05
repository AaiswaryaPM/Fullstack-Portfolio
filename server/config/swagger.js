import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Aaiswarya PM Portfolio API Documentation",
      version: "1.0.0",
      description: "RESTful API documentation for the Full-Stack Portfolio application built using React, Express.js, MongoDB Atlas, and Resend Email Service.",
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