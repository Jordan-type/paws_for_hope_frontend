import HeroSection from "@/components/HeroSection";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {

  return (
    <>
    <HeroSection/>
    </>
  );
}
