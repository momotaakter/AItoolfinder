import Latest from "./Latest";
import  TitleSection  from '@/components/common/TitleSection';


export default function LatestNewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-12">

    
   <TitleSection
        title="🚀 Latest AI Tool Launches"
        paragraph="Discover the most recent AI tools that have launched. Stay updated with the latest innovations in artificial intelligence."
      ></TitleSection>




      
      <Latest></Latest>


        </div>
    
  
  );
}