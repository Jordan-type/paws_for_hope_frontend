import { useContract } from "@thirdweb-dev/react";



export const useDonateContract = (contractAddress: string) => {
  const { contract } = useContract(contractAddress);

  const createDonationPost = async (targetAmount: number, description: string): Promise<any> => {
    return await contract?.call("createDonationPost", [targetAmount, description]);
  };

  const donateToPost = async (postId: number, amount: number): Promise<any> => {
    return await contract?.call("donateToPost", [postId, amount]);
  };

  const closePost = async (postId: number): Promise<any> => {
    return await contract?.call("closePost", [postId]);
  };

  const getPost = async (postId: number): Promise<any> => {
    return await contract?.call("getPost", [postId]);
  };

  return { createDonationPost, donateToPost, closePost, getPost };
};

export const useRegisterUsersContract = (contractAddress: string) => {
  const { contract } = useContract(contractAddress);

  const registerUser = async (address: string): Promise<any> => {
    return await contract?.call("registerUser", [address]);
  };

  const registerEntity = async (address: string): Promise<any> => {
    return await contract?.call("registerEntity", [address]);
  };

  const isRegisteredUser = async (address: string): Promise<boolean> => {
    return await contract?.call("isRegisteredUser", [address]);
  };

  const isRegisteredEntity = async (address: string): Promise<boolean> => {
    return await contract?.call("isRegisteredEntity", [address]);
  };

  return { registerUser, registerEntity, isRegisteredUser, isRegisteredEntity };
};

// blockchain - RedeemContract
export const useRedeemContract = (contractAddress: string) => {
  const { contract } = useContract(contractAddress);

  const createPost = async (stock: number, price: number): Promise<any> => {
    return await contract?.call("createPost", [stock, price]);
  };

  const redeemItem = async (postId: number): Promise<any> => {
    return await contract?.call("redeemItem", [postId]);
  };

  const closePost = async (postId) => {
    return await contract?.call("closePost", [postId]);
  };

  const getPost = async (postId: number): Promise<any> => {
    return await contract?.call("getPost", [postId]);
  };

  return { createPost, redeemItem, closePost, getPost };
};
