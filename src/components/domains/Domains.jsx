import DomainCard from "./DomainCard";
import webd from "@/app/images/domain-logos/webd.png";
import devops from "@/app/images/domain-logos/devops.png";
import block from "@/app/images/domain-logos/block.png";
import ai from "@/app/images/domain-logos/ai.png";
import ui from "@/app/images/domain-logos/ui.png";
import appd from "@/app/images/domain-logos/appd.png";
import Link from "next/link";

const Domains = () => {
  return (
    <div className="flex flex-col">
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
            img={webd}
          />
        </Link>
        <Link href="/domains/1">
          <DomainCard className="cursor-pointer" title="DEVOPS" img={devops} />
        </Link>
        <Link href="/domains/3">
          <DomainCard
            className="cursor-pointer"
            title="BLOCKCHAIN"
            img={block}
          />
        </Link>
        <Link href="/domains/4">
          <DomainCard
            className="cursor-pointer"
            title="ARTIFICIAL INTELLIGENCE"
            img={ai}
          />
        </Link>
        <Link href="/domains/5">
          <DomainCard className="cursor-pointer" title="UI/UX" img={ui} />
        </Link>
        <Link href="/domains/0">
          <DomainCard
            className="cursor-pointer"
            title="APP DEVELOPMENT"
            img={appd}
          />
        </Link>
      </div>
    </div>
  );
};

export default Domains;
