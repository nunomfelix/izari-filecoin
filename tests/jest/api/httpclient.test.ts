import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import HttpClient from '../../../src/api/HttpClient';

describe('HttpClient', () => {
  let axiosMock: AxiosMockAdapter;
  let httpClient: HttpClient;

  beforeAll(() => {
    axiosMock = new AxiosMockAdapter(axios);
    httpClient = new HttpClient('http://example.com');
  });

  afterEach(() => {
    axiosMock.reset();
  });

  afterAll(() => {
    axiosMock.restore();
  });

  describe('get', () => {
    it('should make a GET request and return the response', async () => {
      const mockResponse = { data: { message: 'hello' } };
      axiosMock.onGet('/test').reply(200, mockResponse);

      const response = await httpClient.get('/test');

      expect(response.status).toEqual(200);
      expect(response.data).toEqual(mockResponse);
    });

    it('should handle errors', async () => {
      axiosMock.onGet('/error').reply(500);

      await expect(httpClient.get('/error')).rejects.toThrow();
    });
  });

  describe('post', () => {
    it('should make a POST request and return the response', async () => {
      const mockResponse = { data: { message: 'posted' } };
      const mockData = { data: 'data' };
      axiosMock.onPost('/test', mockData).reply(200, mockResponse);

      const response = await httpClient.post('/test', mockData);

      expect(response.status).toEqual(200);
      expect(response.data).toEqual(mockResponse);
    });

    it('should handle errors', async () => {
      const mockData = { data: 'data' };
      axiosMock.onPost('/error', mockData).reply(500);

      await expect(httpClient.post('/error', mockData)).rejects.toThrow();
    });
  });
});
