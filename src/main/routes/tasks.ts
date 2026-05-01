import { Application } from 'express';
import axios from 'axios';

const API_URL = 'http://localhost:8080/tasks';

export default function (app: Application): void {

  // list tasks
  app.get('/tasks', async (req, res) => {
    try {
      const response = await axios.get(API_URL);
      res.render('tasks', { tasks: response.data });
    } catch (error) {
      console.error(error);
      res.render('tasks', { tasks: [], error: 'Failed to load tasks' });
    }
  });

  // create task
  app.post('/tasks', async (req, res) => {
    try {
      await axios.post(API_URL, {
        title: req.body.title,
        status: 'TODO',
        dueDate: req.body.dueDate
      });
      res.redirect('/tasks');
    } catch (error) {
      res.redirect('/tasks');
    }
  });

  // update status
  app.post('/tasks/:id/status', async (req, res) => {
    try {
      await axios.patch(`${API_URL}/${req.params.id}/status`, {
        status: req.body.status
      });
      res.redirect('/tasks');
    } catch (error) {
      res.redirect('/tasks');
    }
  });

  // update title + due date
  app.post('/tasks/:id/edit', async (req, res) => {
    try {
      await axios.put(`${API_URL}/${req.params.id}`, {
        title: req.body.title,
        dueDate: req.body.dueDate
      });
      res.redirect('/tasks');
    } catch (error) {
      console.error(error);
      res.redirect('/tasks');
    }
  });

  // delete
  app.post('/tasks/:id/delete', async (req, res) => {
    try {
      await axios.delete(`${API_URL}/${req.params.id}`);
      res.redirect('/tasks');
    } catch (error) {
      res.redirect('/tasks');
    }
  });
}
