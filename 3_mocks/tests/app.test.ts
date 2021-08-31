import axios from 'axios';
import { data } from '../src/app';
const mockedAxios = axios as jest.Mocked<typeof axios>; // No właśnie musimy sobie tutaj poradzić z typami

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  mockedAxios.get.mockResolvedValue(resp);

  // alternatywa
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return axios.get('/').then(data => expect(data.data).toEqual(users));
});