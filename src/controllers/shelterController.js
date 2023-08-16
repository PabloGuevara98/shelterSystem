import Shelter from '../models/shelterModel.js';

// Crear un nuevo albergue
export const createShelter = async (req, res) => {
  try {
    const newShelter = await Shelter.create(req.body);
    res.status(201).json(newShelter);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el albergue.' });
  }
};

// Obtener todos los albergues
export const getAllShelters = async (req, res) => {
  try {
    const shelters = await Shelter.find();
    res.json(shelters);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los albergues.' });
  }
};

// Obtener un albergue por su ID
export const getShelterById = async (req, res) => {
  try {
    const shelter = await Shelter.findById(req.params.id);
    if (!shelter) {
      return res.status(404).json({ error: 'Albergue no encontrado.' });
    }
    res.json(shelter);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el albergue.' });
  }
};

// Actualizar un albergue
export const updateShelter = async (req, res) => {
  try {
    const updatedShelter = await Shelter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedShelter) {
      return res.status(404).json({ error: 'Albergue no encontrado.' });
    }
    res.json(updatedShelter);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el albergue.' });
  }
};

// Eliminar un albergue
export const deleteShelter = async (req, res) => {
  try {
    const deletedShelter = await Shelter.findByIdAndDelete(req.params.id);
    if (!deletedShelter) {
      return res.status(404).json({ error: 'Albergue no encontrado.' });
    }
    res.json({ message: 'Albergue eliminado exitosamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el albergue.' });
  }
};
