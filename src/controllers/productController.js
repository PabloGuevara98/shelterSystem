import Product from '../models/productModel.js';

// Crear un nuevo producto
export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    // Actualizar la lista de productos en el albergue correspondiente
    const shelterId = req.body.shelter;
    //await shelter.findByIdAndUpdate(shelterId, { $push: { products: newProduct._id } });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto.'+error.message });
  }
};

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos.' });
  }
};

// Obtener un producto por su ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto.' });
  }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Producto no encontrado.' + error.message });
      }
  
      // Si el albergue cambia, actualizar la lista de productos en el albergue antiguo y en el nuevo
      if (req.body.shelter && req.body.shelter !== updatedProduct.shelter.toString()) {
        await Shelter.findByIdAndUpdate(updatedProduct.shelter, { $pull: { products: updatedProduct._id } });
        await Shelter.findByIdAndUpdate(req.body.shelter, { $push: { products: updatedProduct._id } });
      }
  
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el producto. ' + error.message });
    }
  };

// Eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Producto no encontrado.' });
      }
  
      // Actualizar la lista de productos en el albergue correspondiente
      const shelterId = deletedProduct.shelter;
      await Shelter.findByIdAndUpdate(shelterId, { $pull: { products: deletedProduct._id } });
  
      res.json({ message: 'Producto eliminado exitosamente.' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el producto.' });
    }
  };
  
