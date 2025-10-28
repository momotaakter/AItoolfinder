import Image from "next/image";

interface ArticleCardProps {
  title: string;
  description: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  tags: string[];
  imageSrc: string;
}

export default function ArticleCard({
  title,
  description,
  author,
  authorInitials,
  date,
  readTime,
  tags,
  imageSrc,
}: ArticleCardProps) {
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative h-48 sm:h-56 md:h-64 w-full">
        {isValidUrl(imageSrc) && (
          <Image
            src='./news/aj./jpg'
            alt='blog img'
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </span>
          <span className="mx-1">•</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {readTime} min read
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
              {authorInitials}
            </div>
            <span className="text-sm font-medium text-gray-900">{author}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
              +{tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}