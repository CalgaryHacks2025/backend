import { rescueService } from '../services/rescueService.js';

export const getRescueLocations = async (req, res) => {
    try {
        const locations = await rescueService.fetchRescueLocations(req.query);
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching rescue locations', error: error.message });
    }
};

export const contactRescueCenter = async (req, res) => {
    try {
        const response = await rescueService.contactCenter(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error contacting rescue center', error: error.message });
    }
};