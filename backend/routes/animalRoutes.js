import express from 'express';
import { fetchAllAnimals, fetchAnimalById, adoptAnimal } from '../controllers/animalController.js';

const router = express.Router();

router.get('/animals', fetchAllAnimals);
router.get('/animals/:id', fetchAnimalById);
router.post('/animals/adopt', adoptAnimal);

export default router;