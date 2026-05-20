const prisma = require("../lib/prisma");

exports.getStats = async (req, res) => {
  try {
    const totalVisitors = await prisma.visitor.count();
    const totalMessages = await prisma.message.count();
    const totalPageViews = await prisma.pageVisit.count();
    const totalDownloads = await prisma.download.count();

    res.json({
      success: true,
      data: {
        totalVisitors,
        totalMessages,
        totalPageViews,
        totalDownloads
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
