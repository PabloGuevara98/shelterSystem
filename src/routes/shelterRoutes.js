import express from 'express';
import {
  createShelter,
  getAllShelters,
  getShelterById,
  updateShelter,
  deleteShelter
} from '../controllers/shelterController.js';

const router = express.Router();

router.post('/create', createShelter);
router.get('/all', getAllShelters);
router.get('/:id', getShelterById);
router.put('/:id', updateShelter);
router.delete('/:id', deleteShelter);

export default router;
