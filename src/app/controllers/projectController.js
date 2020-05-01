const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Project = require('../models/Projects');
const Task = require('../models/Task');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();

    return res.send({ projects });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: 'Error list projects' });
  }
});

router.get('/:project:id', async (req, res) => {
  res.send({ ok: true, user: req.userId });
});

router.post('/', async (req, res) => {
  try {
    const project = await Project.create(req.body);

    return res.send({ project });
  } catch (err) {
    return res.status(400).send({ error: 'Error creating new project' });
  }
});

router.put('/:project:id', async (req, res) => {
  res.send({ ok: true, user: req.userId });
});

router.delete('/:project:id', async (req, res) => {
  res.send({ ok: true, user: req.userId });
});

module.exports = (app) => app.use('/projects', router);
