export const handler = async event => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));

  return {
    statusCode: 201,
    body: JSON.stringify({ saludos: 'Saludos', })
  }
};
