export const handler = async event => {

 console.log(JSON.stringify(event, undefined, 2));

  const num1 = parseInt(JSON.parse(event.body).num1);
  const num2 = parseInt(JSON.parse(event.body).num2);
  
  if (isNaN(num1) || isNaN(num2)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'num1 and num2 must be numbers' })
    };
  }

  if (num2 === 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'num2 must not be 0' })
    };
  }

  const div = num1 / num2;

  console.log(`División: ${div}`);
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({ div })
  };
  return response;  
};