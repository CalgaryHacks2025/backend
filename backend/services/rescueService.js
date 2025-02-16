import knex from '../db/knexfile.js';

export const getRescueLocations = async (latitude, longitude) => {
    // Logic to fetch nearby rescue centers based on geolocation
    // This could involve querying a database or calling an external API
    const rescueCenters = await knex('rescue_centers')
        .whereRaw('ST_Distance_Sphere(point(longitude, latitude), point(?, ?)) < ?', [longitude, latitude, 5000]); // 5000 meters radius
    return rescueCenters;
};

export const contactRescueCenter = async (centerId, contactDetails) => {
    // Logic to contact a nearby rescue center
    // This could involve sending an email, SMS, or making an API call
    const rescueCenter = await knex('rescue_centers').where({ id: centerId }).first();
    if (!rescueCenter) {
        throw new Error('Rescue center not found');
    }
    // Implement the contact logic here (e.g., send an email)
    return { message: 'Contact request sent successfully', center: rescueCenter };
};