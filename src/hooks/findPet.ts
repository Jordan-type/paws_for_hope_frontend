import { FindPet } from "../typechain-types";
import { ethers } from "ethers";

export const createFindPetPost = async (
  findPetContract: FindPet,
  amount: ethers.BigNumberish
) => {
  const tx = await findPetContract.createPost(amount);
  await tx.wait();
};

export const closeFindPetPost = async (
  findPetContract: FindPet,
  postId: number,
  beneficiary: string
) => {
  const tx = await findPetContract.closePost(postId, beneficiary);
  await tx.wait();
};

export const getFindPetPost = async (
  findPetContract: FindPet,
  postId: number
) => {
  const post = await findPetContract.getPost(postId);
  return post;
};
