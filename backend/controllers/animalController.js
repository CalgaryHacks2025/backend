import AnimalModel from '../models/animalModel.js'; // Import your model
import AdoptionModel from '../models/adoptionModel.js'; // Import your model

const animalModel = new AnimalModel(); // Create an instance of the model
const adoptionModel = new AdoptionModel(); // Create an instance of the model

export const fetchAllAnimals = async (req, res) => { // Define the controller function
    try {
        const animals = await animalModel.getAllAnimals();
        res.status(200).json(animals);
    } catch (error) {
        console.error("Error fetching animals:", error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to fetch animals' }); // Send an error response
    }
};

export const fetchAnimalById = async (req, res) => {
    try {
        const animal = await animalModel.getAnimalById(req.params.id);
        if (!animal) {
            return res.status(404).json({ error: 'Animal not found' });
        }
        res.status(200).json(animal);
    } catch (error) {
        console.error("Error fetching animal by ID:", error);
        res.status(500).json({ error: 'Failed to fetch animal' });
    }
};

export const adoptAnimal = async (req, res) => {
    const { user_id, animal_id } = req.body;
    // Validate input
    if (!user_id || !animal_id) {
        return res.status(400).json({ error: 'user_id and animal_id are required' });
    }

    // Convert animal_id to a number to avoid type issues
    const numericAnimalId = Number(animal_id);
    if (isNaN(numericAnimalId)) {
        return res.status(400).json({ error: 'Invalid animal ID' });
    }

    try {
        // Check if the animal exists
        const animal = await animalModel.getAnimalById(numericAnimalId);

        if (!animal) {
            return res.status(404).json({ error: 'Animal not found' });
        }

        // Create the adoption record
        const adoptionData = {
            user_id: user_id,
            animal_id: numericAnimalId,
            adoption_date: new Date().toISOString().split('T')[0],
        };

        const newAdoption = await adoptionModel.createAdoption(adoptionData);

        res.status(201).json({
            message: 'Animal adopted successfully',
            adoption: newAdoption,
        });

    } catch (error) {
        console.error('Error during adoption:', error);
        res.status(500).json({ error: 'Failed to adopt animal' });
    }
};

export const fetchAnimalByUserId = async (req, res) => {
    const { user_id } = req.params;

    if (!user_id) {
        return res.status(400).json({ error: 'user_id is required' });
    }

    try {
        const adoptions = await adoptionModel.getAdoptionsByUserId(user_id);

        if (!adoptions || adoptions.length === 0) {
            return res.status(404).json({ error: 'No adoptions found for this user' });
        }

        res.status(200).json(adoptions);
    } catch (error) {
        console.error('Error fetching adoptions by user ID:', error);
        res.status(500).json({ error: 'Failed to fetch adoptions' });
    }
};