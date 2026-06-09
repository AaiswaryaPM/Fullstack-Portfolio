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

export const createProject = async (req, res) => {
  try {

    const project = await Project.create(req.body);

    return res.status(201).json({
      success: true,
      data: project,
      message: "Project created successfully",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      data: null,
      message: "Server Error",
    });

  }
};

export const updateProject = async (req, res) => {
  try {

    const project =
      await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    return res.status(200).json({
      success: true,
      data: project,
      message: "Project updated successfully",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      data: null,
      message: "Server Error",
    });

  }
};

export const deleteProject = async (req, res) => {
  try {

    await Project.findByIdAndDelete(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      data: null,
      message: "Project deleted successfully",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      data: null,
      message: "Server Error",
    });

  }
};