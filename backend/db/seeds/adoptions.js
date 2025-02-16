// export async function seed(knex) { 
//   await knex('adoptions').del(); 

//   const adoptionsData = [
//     { adoption_date: '2024-02-15', animal_id: 3, user_id: 1 }, 
//     { adoption_date: '2024-02-14', animal_id: 4, user_id: 2 },  
//     { adoption_date: '2024-02-16', animal_id: 6, user_id: 5 },  
//     { adoption_date: '2024-02-17', animal_id: 8, user_id: 7 },
//   ];

//   await knex('adoptions').insert(adoptionsData);
// };

export async function seed(knex) {
  await knex("adoptions").del();
  await knex("adoptions").insert([
    { adoption_date: '2024-02-15', animal_id: 3, user_id: 1 }, 
    { adoption_date: '2024-02-14', animal_id: 4, user_id: 2 },  
    { adoption_date: '2024-02-16', animal_id: 6, user_id: 5 },  
    { adoption_date: '2024-02-17', animal_id: 8, user_id: 7 },
  ]);
};