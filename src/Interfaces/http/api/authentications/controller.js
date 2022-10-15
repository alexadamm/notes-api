const LoginUserUseCase = require('../../../../Applications/use_cases/LoginUserUseCase');
const LogoutUserUseCase = require('../../../../Applications/use_cases/LogoutUserUseCase');

class AuthenticationsController {
  constructor(container) {
    this._container = container;

    this.postAuthenticationController = this.postAuthenticationController.bind(this);
    this.deleteAuthenticationController = this.deleteAuthenticationController.bind(this);
  }

  async postAuthenticationController(req, res, next) {
    try {
      const payload = req.body;
      const loginUserUseCase = this._container.getInstance(LoginUserUseCase.name);
      const authentication = await loginUserUseCase.execute(payload);

      res.status(201).json({
        isSuccess: true,
        message: 'Authentication added successfully',
        data: authentication,
      });
    } catch (e) {
      next(e);
    }
  }

  async deleteAuthenticationController(req, res, next) {
    try {
      const payload = req.body;
      const logoutUserUseCase = this._container.getInstance(LogoutUserUseCase.name);
      await logoutUserUseCase.execute(payload);

      res.status(200).json({
        isSuccess: true,
        message: 'Authentication deleted successfully',
      });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = AuthenticationsController;