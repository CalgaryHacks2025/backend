import express from 'express';
import { fetchAllAnimals, fetchAnimalById, adoptAnimal } from '../controllers/animalController.js';

const router = express.Router();

router.get('/api/animals', fetchAllAnimals);
router.get('/api/animals/:id', fetchAnimalById);
router.post('/api/animals/adopt', adoptAnimal);

export default router;