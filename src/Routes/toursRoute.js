import express from 'express';
import toursController from '../controllers/toursController';
import Validator from '../middlewares/validator';


const ToursRouter =express.Router();
ToursRouter.post('/create',
Validator.newTourRules(),
Validator.ValidatorInput,
toursController.createTour);

ToursRouter.get('/all',toursController.getAlltours);
ToursRouter.get('/:id',toursController.getOneTour);
ToursRouter.delete('/:id',toursController.deleteOneTour);
export default ToursRouter;