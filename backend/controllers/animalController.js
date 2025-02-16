import AnimalModel from '../models/animalModel.js'; // Import your model

const animalModel = new AnimalModel(); // Create an instance of the model

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
    try {
        // ... your logic to adopt an animal
    } catch (error) {
        console.error("Error adopting animal:", error);
        res.status(500).json({ error: 'Failed to adopt animal' });
    }
};