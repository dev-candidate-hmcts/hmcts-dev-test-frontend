import path from 'path';
import request from 'supertest';
import express from 'express';
import axios from 'axios';
import tasks from '../../main/routes/tasks';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Tasks route', () => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));

  app.set('views', path.join(__dirname, '../../main/views'));

  app.engine('njk', (_path, _options, callback) => {
    callback(null, 'OK');
  });

  app.set('view engine', 'njk');

  tasks(app);

  test('GET /tasks returns 200', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [] });

    const res = await request(app).get('/tasks');

    expect(res.status).toBe(200);
  });
});
