export const handler = async event => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));

  const num1 = parseInt(JSON.parse(event.body).num1);
  const num2 = parseInt(JSON.parse(event.body).num2);

  const sum = num1 + num2;
  console.log(`Suma: ${sum}`);

  const response = {
    statusCode: 200,
    body: JSON.stringify({sum}),
  };

  return response;
};
