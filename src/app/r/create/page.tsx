"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { toast } from "@/hooks/use-toast";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  return (
    <div className="container flex items-center h-full max-w-3xl mx-auto">
      <div className="relative bg-white dark:bg-zinc-900 dark:text-slate-200 w-full h-fit p-4 rounded-lg space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Create a Post</h1>
        </div>

        <hr className="bg-red-500 h-px" />

        <div>
          <p className="text-lg font-medium">Reward Amount (USDC)</p>
          <p className="text-xs pb-2">
            Specify the reward amount for finding your Pet in USDC.
          </p>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter reward amount"
          />
        </div>

        <div>
          <p className="text-lg font-medium">Description</p>
          <p className="text-xs pb-2">Provide a brief description of your Pet.</p>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="subtle" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button>
            Create Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
