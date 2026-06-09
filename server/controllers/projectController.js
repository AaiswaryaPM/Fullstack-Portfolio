import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {

    const projects = await Project.find();

    return res.status(200).json({
      success: true,
      data: projects,
      message: "Projects fetched successfully",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      data: null,
      message: "Server Error",
    });

  }
};