import express from 'express';
import { fetchAllAnimals, fetchAnimalById, adoptAnimal, fetchAnimalByUserId } from '../controllers/animalController.js';

const router = express.Router();

router.get('/animals', fetchAllAnimals);
router.get('/animals/:id', fetchAnimalById);
router.post('/animals/adopt', adoptAnimal);
router.get('/animals/adopt/:user_id', fetchAnimalByUserId);

export default router;