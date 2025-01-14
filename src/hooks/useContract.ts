import { ethers, JsonRpcProvider, parseEther, formatEther } from "ethers";
import address from "@/typechain-types/contractAddress.json";

type AddressType = {
  [key: string]: string;
  RegisterUsers: string;
  PawsForHopeToken: string;
  Donate: string;
  FindPet: string;
  Redeem: string;
  USDCPaws: string;
};

const toWei = (num: number) => parseEther(num.toString());
const fromWei = (num: number) => formatEther(num);

let ethereum: any;
let tx: any;

if (typeof window !== "undefined") ethereum = (window as any).ethereum;

const getEthereumContract = async (contractName: string, abi: any) => {
  const accounts = await ethereum?.request?.({ method: "eth_accounts" });

  if (accounts?.length > 0) {
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(address[contractName as keyof typeof address], abi, signer);
  } else {
    const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);
    const wallet = ethers.Wallet.createRandom();
    const signer = wallet.connect(provider);
    return new ethers.Contract(address[contractName as keyof typeof address], abi, signer);
  }
};

// Example: Get Registered Users
const getRegisteredUsers = async () => {
  const abi = (await import("@/typechain-types/RegisterUsers.json")).abi;
  const contract = await getEthereumContract("RegisterUsers", abi);
  return await contract.getRegisteredUsers();
};

// Example: Mint Tokens for PawsForHopeToken
const mintPawsForHopeTokens = async (to: string, amount: number) => {
  const abi = (await import("@/typechain-types/PawsForHopeToken.json")).abi;
  const contract = await getEthereumContract("PawsForHopeToken", abi);

  tx = await contract.mint(to, toWei(amount));
  await tx.wait();
  console.log(`Minted ${amount} tokens to ${to}`);
};

// Example: Create Donation Post
const createDonationPost = async (
  targetAmount: number,
  description: string
) => {
  const abi = (await import("@/typechain-types/Donate.json")).abi;
  const contract = await getEthereumContract("Donate", abi);

  tx = await contract.createDonationPost(toWei(targetAmount), description);
  await tx.wait();
  console.log("Donation post created successfully");
};

// Example: Find a Pet
const findPet = async (petId: number) => {
  const abi = (await import("@/typechain-types/FindPet.json")).abi;
  const contract = await getEthereumContract("FindPet", abi);

  const pet = await contract.getPet(petId);
  return pet;
};

// Example: Redeem an Item
const redeemItem = async (itemId: number, quantity: number) => {
  const abi = (await import("@/typechain-types/Redeem.json")).abi;
  const contract = await getEthereumContract("Redeem", abi);

  tx = await contract.redeem(itemId, quantity);
  await tx.wait();
  console.log(`Redeemed ${quantity} items for item ID ${itemId}`);
};

// Example: Get USDC Paws Balance
const getUSDCPawsBalance = async (address: string) => {
  const abi = (await import("@/typechain-types/USDCPaws.json")).abi;
  const contract = await getEthereumContract("USDCPaws", abi);

  const balance = await contract.balanceOf(address);
  return fromWei(balance);
};

// Error Handling
const safeExecution = async (fn: () => Promise<any>) => {
  try {
    return await fn();
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while interacting with the contract.");
  }
};

// Export Functions
export {
  getRegisteredUsers,
  mintPawsForHopeTokens,
  createDonationPost,
  findPet,
  redeemItem,
  getUSDCPawsBalance,
};
