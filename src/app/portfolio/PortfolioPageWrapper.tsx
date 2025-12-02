import PortfolioPage from "@/components/PortfolioPage";
import { getPortfolios } from "@/sanity/lib/client";
export default async function PortfolioPageWrapper() {
  const projects = await getPortfolios(); 
  return <PortfolioPage projects={projects} />;
}
