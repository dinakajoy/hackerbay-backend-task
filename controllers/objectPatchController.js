const { applyOperation } = require('fast-json-patch');

exports.apply = async (request, response) => {
  const document = request.body.objectToPatch;
  const operation = request.body.patchToApply;

  try {
    const result = applyOperation(document, operation).newDocument;
    response.status(200).json({
      status: 'success',
      data: result
    });
  } catch (error) {
    response.status(500).json({
      status: 'error',
      error: error.message
    });
  }
};
