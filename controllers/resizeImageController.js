const imageThumbnail = require('image-thumbnail');

exports.resize = async (request, response) => {
  const { imageUrl } = request.body;

  try {
    const options = { width: 50, height: 50, responseType: 'base64' };
    const thumbnail = await imageThumbnail({ uri: imageUrl }, options);
    response.status(200).json({
      status: 'success',
      data: thumbnail
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      error: error.message
    });
  }
};
