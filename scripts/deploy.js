async function main() {
  const HelloWorld = await ethers.getContractFactory('HelloWorld');

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await HelloWorld.deploy('Hello World!');
  console.log('Contract deployed to address:', hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//Contract deployed to address: 0x6C421B348808CDb96B20db1a631517F55446C1D8
