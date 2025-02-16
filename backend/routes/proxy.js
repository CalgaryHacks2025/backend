import express from 'express';
import axios from 'axios';
import multer from 'multer';
import FormData from 'form-data';

const router = express.Router();
const API_BASE = 'http://localhost:8000';

// Configure multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

router.post('/detect', upload.single('file'), async (req, res) => {

    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // Create a FormData object to forward to FastAPI
    const formData = new FormData();
    formData.append('file', req.file.buffer, req.file.originalname);

    try {
        const response = await axios.post(`${API_BASE}/detect/`, formData, {
            headers: formData.getHeaders(),
        });

        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ error: 'Failed to detect objects' });
        }
    }
});

export default router;
