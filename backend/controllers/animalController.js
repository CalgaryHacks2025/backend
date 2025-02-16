import AnimalModel from '../models/animalModel.js';
import AdoptionModel from '../models/adoptionModel.js';

const animalModel = new AnimalModel();
const adoptionModel = new AdoptionModel();

export const fetchAllAnimals = async (req, res) => {
    try {
        const animals = await animalModel.getAllAnimals();
        res.status(200).json(animals);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching animals', error });
    }
};

export const fetchAnimalById = async (req, res) => {
    const { id } = req.params;
    try {
        const animal = await animalModel.getAnimalById(id);
        if (animal) {
            res.status(200).json(animal);
        } else {
            res.status(404).json({ message: 'Animal not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching animal', error });
    }
};

export const adoptAnimal = async (req, res) => {
    const { animalId, userId } = req.body;
    try {
        const adoption = await adoptionModel.initiateAdoption(animalId, userId);
        res.status(201).json({ message: 'Adoption initiated', adoption });
    } catch (error) {
        res.status(500).json({ message: 'Error initiating adoption', error });
    }
};