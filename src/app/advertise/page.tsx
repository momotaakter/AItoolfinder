import { Smile, Target, TrendingUp } from "lucide-react";
import  TitleSection  from '@/components/common/TitleSection';


interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ value, label, icon, color }: StatCardProps) => {
  return (
    
   <>





    <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">






      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${color} flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        {value}
      </h3>
      <p className="text-sm sm:text-base text-gray-500 mt-1">{label}</p>
    </div>
    </>
  );
};

export default function StatsSection() {
  return (

    <div>
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">

   <TitleSection
        title="🚀 Latest AI Tool Launches"
        paragraph="Discover the most recent AI tools that have launched. Stay updated with the latest innovations in artificial intelligence."
      ></TitleSection>




      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <StatCard
            value="50K+"
            label="Monthly Visitors"
            icon={<Smile className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />}
            color="bg-green-50"
          />
          <StatCard
            value="85%"
            label="Tech Decision Makers"
            icon={<Target className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />}
            color="bg-green-50"
          />
          <StatCard
            value="3.5x"
            label="Avg. ROI"
            icon={<TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />}
            color="bg-green-50"
          />
        </div>



      </div>
    







    </section>















</div>





    
  );
}