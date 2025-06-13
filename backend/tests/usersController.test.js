const usersController = require('../src/controllers/usersController');
const userService = require('../src/services/userService');

jest.mock('../src/services/userService');

describe('usersController', () => {
  let req, res;

  beforeEach(() => {
    req = { headers: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks();
  });

  describe('gitHubUsers', () => {
    it('should return 401 if no authorization header', async () => {
      await usersController.gitHubUsers(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ error: 'Unauthorized' });
    });

    it('should return user data if token is valid', async () => {
      req.headers.authorization = 'Bearer validtoken';
      userService.getGitHubUserProfile.mockResolvedValue({ login: 'testuser' });

      await usersController.gitHubUsers(req, res);

      expect(userService.getGitHubUserProfile).toHaveBeenCalledWith('validtoken');
      expect(res.json).toHaveBeenCalledWith({ user: { login: 'testuser' } });
    });

    it('should return 500 if service throws error', async () => {
      req.headers.authorization = 'Bearer validtoken';
      userService.getGitHubUserProfile.mockRejectedValue(new Error('GitHub error'));

      await usersController.gitHubUsers(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch user data from GitHub.' });
    });
  });
});