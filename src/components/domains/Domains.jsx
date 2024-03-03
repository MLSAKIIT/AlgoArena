import DomainCard from "./DomainCard";
import Link from "next/link";

const Domains = () => {
  return (
    <div className="flex flex-col max-w-[120rem]">
      <div className="flex justify-center">
        <p className="text-2xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text">
          OUR DOMAINS
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 sm:px-[10px] px-[20px] mx-auto">
        <Link href="/domains/2">
          <DomainCard
            className="cursor-pointer"
            title="WEB DEVELOPMENT"
            img={"/assets/domain/webd.png"}
          />
        </Link>
        <Link href="/domains/1">
          <DomainCard className="cursor-pointer" title="DEVOPS" img={"/assets/domain/devops.png"} />
        </Link>
        <Link href="/domains/3">
          <DomainCard
            className="cursor-pointer"
            title="BLOCKCHAIN"
            img={"/assets/domain/block.png"}
          />
        </Link>
        <Link href="/domains/4">
          <DomainCard
            className="cursor-pointer"
            title="ARTIFICIAL INTELLIGENCE"
            img={"/assets/domain/ai.png"}
          />
        </Link>
        <Link href="/domains/5">
          <DomainCard className="cursor-pointer" title="UI/UX" img={"/assets/domain/ui.png"} />
        </Link>
        <Link href="/domains/0">
          <DomainCard
            className="cursor-pointer"
            title="APP DEVELOPMENT"
            img={"/assets/domain/appd.png"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Domains;
