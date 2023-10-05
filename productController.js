// controllers/productController.js
const Product = require('../models/Product');
const path = require('path');
const fs=require('fs');
const rootDir=require('../util/path');

exports.getAddProduct = (req, res) => {
  res.sendFile(path.join(rootDir,'view','form.html'));

};

exports.postAddProduct = (req, res) => {
  const { name, description } = req.body;

  Product.create({
    name,
    description,
  })
    .then(() => {
      res.redirect('/products');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occurred while adding the product.');
    });
};

exports.getProducts = async (req, res) => {
  try {
    const appointments = await Product.findAll();
    const filePath =(path.join(rootDir,'view','display.html'));
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('An error occurred while rendering the display page.');
      } else {
        const appointmentList = appointments.map(appointment => `
          <li>Name: ${appointment.name}, Description: ${appointment.description}</li>`).join('');
        const modifiedHtmlContent = data.replace('<!-- DynamicContentPlaceholder -->', appointmentList);
        res.send(modifiedHtmlContent)
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching appointments.');
  }
};