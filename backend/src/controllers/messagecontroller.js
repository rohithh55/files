const prisma = require("../lib/prisma");

exports.createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const savedMessage = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message
      }
    });

    res.status(201).json({
      success: true,
      data: savedMessage
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
