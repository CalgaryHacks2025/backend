import db from '../db/knexfile.js';

export const fetchAllAnimals = async () => {
    return await db('animals').select('*');
};

export const fetchAnimalById = async (id) => {
    return await db('animals').where({ id }).first();
};

export const adoptAnimal = async (adoptionData) => {
    const [newAdoption] = await db('adoptions').insert(adoptionData).returning('*');
    return newAdoption;
};