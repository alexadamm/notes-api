const { Router } = require('express');
const ServerMiddlewares = require('../../../../Infrastructures/http/middlewares');
const CollaborationsController = require('./controller');

const collaborations = (container) => {
  const collaborationsRouter = Router();
  const collaborationsController = new CollaborationsController(container);

  collaborationsRouter.post('/:noteId/collaborations', ServerMiddlewares.authenticationHandler, collaborationsController.postCollaborationController);

  return collaborationsRouter;
};

module.exports = collaborations;
