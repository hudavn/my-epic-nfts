const main = async() => {
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    console.log("Contract deployed at: ", nftContract.address);

    for(let loop = 0; loop<10; loop++) {
        let tx = await nftContract.makeNFT();
        await tx.wait();
        console.log("Minted NFT #", loop);
    }
};

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();