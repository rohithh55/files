const prisma = require("../lib/prisma");
const { v4: uuidv4 } = require("uuid");

exports.trackVisitor = async (req, res) => {
  try {
    const {
      browser,
      device,
      os,
      country,
      city
    } = req.body;

    const visitor = await prisma.visitor.create({
      data: {
        visitorUuid: uuidv4(),
        ipAddress: req.ip,
        browser,
        device,
        os,
        country,
        city
      }
    });

    res.status(201).json({
      success: true,
      data: visitor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
