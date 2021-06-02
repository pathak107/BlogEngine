const sharp = require('sharp');
const path = require('path');
const compressImage = async (inputBuffer, filename) => {
    await sharp(inputBuffer)
        .resize(1000, 500, { fit: 'inside' })
        .toFormat('jpeg')
        .jpeg({ quality: 70 })
        .toFile(path.join(__dirname, `../../../public/uploads/${filename}.jpeg`));
};

module.exports = { compressImage };
