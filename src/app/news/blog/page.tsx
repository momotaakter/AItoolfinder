
import ArticleCard from "./ArticleCard";
import Searchinput from "./Searchinput";
import TitleSection from "@/components/common/TitleSection";

export default function Home() {
  const articles = [
    {
      title: "Optimizing Machine Learning Models for Production",
      description: "Learn essential techniques for optimizing and deploying machine learning models in production environments with best practices in MLOps.",
      author: "David Kumar",
      authorInitials: "DK",
      date: "5/12/2025",
      readTime: "15",
      tags: ["MLOps", "Performance", "DevOps"],
      imageSrc: "./news/aj.jpg",
    },
    {
      title: "Edge AI: Computing at the Frontier",
      description: "Learn about the latest developments in Edge AI and how it’s enabling real-time processing and decision-making on devices.",
      author: "James Wilson",
      authorInitials: "JW",
      date: "5/12/2025",
      readTime: "9",
      tags: ["Edge Computing", "AI", "IoT"],
      imageSrc: "/images/ai-bg-2.jpg",
    },
    {
      title: "AI Project Management Best Practices",
      description: "Master the art of managing AI projects with these proven best practices and methodologies for successful delivery.",
      author: "Rachel Adams",
      authorInitials: "RA",
      date: "5/12/2025",
      readTime: "14",
      tags: ["Project Management", "AI", "Best Practices"],
      imageSrc: "/images/ai-bg-3.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-8">

      <TitleSection
        title="🚀 Latest AI Tool Launches"
        paragraph="Discover the most recent AI tools that have launched. Stay updated with the latest innovations in artificial intelligence."
      ></TitleSection>




   
      <Searchinput></Searchinput>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              author={article.author}
              authorInitials={article.authorInitials}
              date={article.date}
              readTime={article.readTime}
              tags={article.tags}
              imageSrc={article.imageSrc}
            />
          ))}
        </div>
      </div>
    </main>
  );
}