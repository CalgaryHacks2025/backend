import express from 'express';
import db from '../db/knex.js';

const router = express.Router();

// Route to get rescue locations
router.get('/locations', async (req, res) => {
    const { latitude, longitude } = req.query;

    try {
        const rescueCenters = await db('rescue_centers')
            .whereRaw('ST_Distance_Sphere(point(longitude, latitude), point(?, ?)) < ?', [longitude, latitude, 5000]); // 5000 meters radius
        res.json(rescueCenters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch rescue locations' });
    }
});

// Route to contact a rescue center
router.post('/contact', async (req, res) => {
    const { centerId, contactDetails } = req.body;

    try {
        const rescueCenter = await db('rescue_centers').where({ id: centerId }).first();
        if (!rescueCenter) {
            return res.status(404).json({ error: 'Rescue center not found' });
        }
        // Implement the contact logic here (e.g., send an email)
        res.json({ message: 'Contact request sent successfully', center: rescueCenter });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to contact rescue center' });
    }
});

export default router;