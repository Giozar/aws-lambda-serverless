export const handler = async event => {

  console.log(JSON.stringify(event, undefined, 2));

  const num1 = parseInt(JSON.parse(event.body).num1);
  const num2 = parseInt(JSON.parse(event.body).num2);

  const multi = num1 * num2;

  console.log(`Multiplicación: ${multi}`);

  const response = {
    statusCode: 200,
    body: JSON.stringify({multi}),
  };
  
  return response;
};