/**
 @param { import("knex").Knex } knex
@returns { Promise<void> } */
// import seed data files, arrays of objects
import usersData from "backend/seed-data/users-data.js";
import animalData from "../../seed-data/animals-data.js";
import animal_activity from "../../seed-data/animal_activity-data.js";
import adoptionData from "../../seed-data/adoptions-data.js"

export async function seed(knex) {
  await knex("users").del();
  await knex("animals").del();
  await knex("adoptions").del();
  await knex("animal_activity").del();

  await knex("users").insert(usersData);
  await knex("animals").insert(animalData);
  await knex("adoptions").insert(adoptionData);
  await knex("animal_activity").insert(animal_activity);
}