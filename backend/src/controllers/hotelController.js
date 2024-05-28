const cloudinary = require("cloudinary");
const Hotel = require("../models/hotel");


exports.postHotel = async (req, res) => {
  try {
    const imageFiles = req.files;
    const newHotel = req.body;
    
    //1. Upload the images to cloudinary.

    const uploadPromises = imageFiles.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      let dataURI = "data:" + image.mimetype + ";base64" + b64;
      const res = await cloudinary.v2.uploader.upload(dataURI);
      return res.url;
    });

//2. If uplaod was sucessful, add the URL to new hotel.

    const imageUrls = await Promise.all(uploadPromises);
    newHotel.imageUrls = imageUrls;
    newHotel.lastUpdated = new Date();
    newHotel.userId = req.userId;

    //3. Save the new hotel in our Database.

    const hotel = new Hotel(newHotel);
    await hotel.save();

    //4. Return a 201 status.

    res.status(201).send(hotel);

  } catch (e) {
    console.logg("Error creating hotel: ", e);
    res.status(500).json({ message: "Something went wrong!" });
  }
};
