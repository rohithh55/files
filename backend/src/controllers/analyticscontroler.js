const prisma = require("../lib/prisma");

exports.trackPageView = async (req, res) => {
  try {
    const {
      visitorId,
      pageName,
      timeSpent,
      clickCount,
      referrer
    } = req.body;

    const pageView = await prisma.pageVisit.create({
      data: {
        visitorId,
        pageName,
        timeSpent,
        clickCount,
        referrer
      }
    });

    res.status(201).json({
      success: true,
      data: pageView
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

exports.trackDownload = async (req, res) => {
  try {
    const { visitorId, downloadType } = req.body;

    const download = await prisma.download.create({
      data: {
        visitorId,
        downloadType
      }
    });

    res.status(201).json({
      success: true,
      data: download
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
