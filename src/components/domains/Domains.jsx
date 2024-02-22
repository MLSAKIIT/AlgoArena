
import DomainCard from "./DomainCard"
import webd from "@/app/images/domain-logos/webd.png"
import devops from "@/app/images/domain-logos/devops.png"
import block from "@/app/images/domain-logos/block.png"
import ai from "@/app/images/domain-logos/ai.png"
import ui from "@/app/images/domain-logos/ui.png"
import appd from "@/app/images/domain-logos/appd.png"

const Domains = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <p className="text-2xl font-sans font-bold bg-gradient-to-r from-white to-purple-500 inline-block text-transparent bg-clip-text">OUR DOMAINS</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 md:px-[100px] lg:px-[200px] sm:px-[100px] px-[20px] sm:mx-0 mx-auto">
        <DomainCard title="WEB DEVELOPMENT" img={webd}/>
        <DomainCard title="DEVOPS" img={devops}/>
        <DomainCard title="BLOCKCHAIN" img={block}/>
        <DomainCard title="ARTIFICIAL INTELLIGENCE" img={ai}/>
        <DomainCard title="UI/UX" img={ui}/>
        <DomainCard title="APP DEVELOPMENT" img={appd}/>
    </div>
    </div>
  )
}

export default Domains;
