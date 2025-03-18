import getData from './lib/service.js';

async function main() {
  const userId = 1; 
  const result = await getData(userId);
  console.log(result);
}

main();