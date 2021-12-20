import express from 'express';
import toursController from '../controllers/toursController';
import Validator from '../middlewares/validator';
import verifyToken from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAccess"

const ToursRouter =express.Router();
ToursRouter.post('/create',verifyToken,
verifyAccess("admin"),
Validator.newTourRules(),
Validator.ValidatorInput,
toursController.createTour);

ToursRouter.get('/all',toursController.getAlltours);
ToursRouter.get('/:id',toursController.getOneTour);
ToursRouter.delete('/:id',toursController.deleteOneTour);
export default ToursRouter;