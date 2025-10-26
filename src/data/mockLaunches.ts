export interface LaunchItem {
  id: string;
  name: string;
  description: string;
  category: string;
  launchDate: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  pricing: string;
  tags: string[];
  website: string;
  featured: boolean;
}

export const mockLaunches: LaunchItem[] = [
  {
    id: "1",
    name: "AI Content Generator Pro",
    description: "Advanced AI tool for creating high-quality content across multiple formats",
    category: "Writing",
    launchDate: "2024-10-25",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.8,
    reviews: 124,
    pricing: "Freemium",
    tags: ["Content Creation", "AI Writing", "Marketing"],
    website: "https://aicontentpro.com",
    featured: true
  },
  {
    id: "2",
    name: "CodeAssistant AI",
    description: "Intelligent code completion and debugging assistant for developers",
    category: "Code",
    launchDate: "2024-10-24",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.9,
    reviews: 89,
    pricing: "Paid",
    tags: ["Development", "Programming", "Debugging"],
    website: "https://codeassistant.ai",
    featured: true
  },
  {
    id: "3",
    name: "ImageGen Studio",
    description: "Create stunning AI-generated images with advanced customization options",
    category: "Image",
    launchDate: "2024-10-23",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.7,
    reviews: 156,
    pricing: "Freemium",
    tags: ["Image Generation", "Art", "Design"],
    website: "https://imagegen.studio",
    featured: false
  },
  {
    id: "4",
    name: "VoiceClone Pro",
    description: "Realistic voice cloning and text-to-speech with emotional control",
    category: "Audio",
    launchDate: "2024-10-22",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.6,
    reviews: 67,
    pricing: "Paid",
    tags: ["Voice Synthesis", "Audio", "TTS"],
    website: "https://voiceclone.pro",
    featured: false
  },
  {
    id: "5",
    name: "VideoEdit AI",
    description: "Automated video editing with AI-powered effects and transitions",
    category: "Video",
    launchDate: "2024-10-21",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.5,
    reviews: 92,
    pricing: "Freemium",
    tags: ["Video Editing", "Automation", "Effects"],
    website: "https://videoedit.ai",
    featured: false
  },
  {
    id: "6",
    name: "DataAnalyzer Pro",
    description: "Advanced data analysis and visualization with AI insights",
    category: "Research",
    launchDate: "2024-10-20",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.8,
    reviews: 78,
    pricing: "Paid",
    tags: ["Data Analysis", "Research", "Visualization"],
    website: "https://dataanalyzer.pro",
    featured: false
  },
  {
    id: "7",
    name: "MarketingAutomate AI",
    description: "Complete marketing automation platform with AI optimization",
    category: "Marketing",
    launchDate: "2024-10-19",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.7,
    reviews: 113,
    pricing: "Freemium",
    tags: ["Marketing", "Automation", "Analytics"],
    website: "https://marketingautomate.ai",
    featured: false
  },
  {
    id: "8",
    name: "ProductivityBoost AI",
    description: "AI-powered productivity suite for teams and individuals",
    category: "Productivity",
    launchDate: "2024-10-18",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.9,
    reviews: 145,
    pricing: "Freemium",
    tags: ["Productivity", "Teamwork", "Automation"],
    website: "https://productivityboost.ai",
    featured: false
  },
  {
    id: "9",
    name: "ResearchAssistant AI",
    description: "AI research assistant for academic and professional research",
    category: "Research",
    launchDate: "2024-10-17",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.6,
    reviews: 56,
    pricing: "Paid",
    tags: ["Research", "Academic", "Analysis"],
    website: "https://researchassistant.ai",
    featured: false
  },
  {
    id: "10",
    name: "ChatBot Builder Pro",
    description: "Build intelligent chatbots with no-code interface and AI training",
    category: "Productivity",
    launchDate: "2024-10-16",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.7,
    reviews: 98,
    pricing: "Freemium",
    tags: ["Chatbots", "Automation", "Customer Service"],
    website: "https://chatbotbuilder.pro",
    featured: false
  },
  {
    id: "11",
    name: "DesignGen AI",
    description: "AI-powered design tool for creating professional graphics and layouts",
    category: "Image",
    launchDate: "2024-10-15",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.8,
    reviews: 134,
    pricing: "Freemium",
    tags: ["Design", "Graphics", "Layout"],
    website: "https://designgen.ai",
    featured: false
  },
  {
    id: "12",
    name: "AudioEnhance AI",
    description: "Professional audio enhancement and noise reduction tool",
    category: "Audio",
    launchDate: "2024-10-14",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.5,
    reviews: 72,
    pricing: "Paid",
    tags: ["Audio Enhancement", "Noise Reduction", "Professional"],
    website: "https://audioenhance.ai",
    featured: false
  },
  {
    id: "13",
    name: "CodeReview AI",
    description: "Automated code review and quality assurance with AI suggestions",
    category: "Code",
    launchDate: "2024-10-13",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.9,
    reviews: 87,
    pricing: "Freemium",
    tags: ["Code Review", "Quality Assurance", "Development"],
    website: "https://codereview.ai",
    featured: false
  },
  {
    id: "14",
    name: "ContentOptimize AI",
    description: "AI-powered content optimization for SEO and engagement",
    category: "Writing",
    launchDate: "2024-10-12",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.6,
    reviews: 105,
    pricing: "Freemium",
    tags: ["SEO", "Content Optimization", "Marketing"],
    website: "https://contentoptimize.ai",
    featured: false
  },
  {
    id: "15",
    name: "VideoTranslate AI",
    description: "Real-time video translation with accurate subtitles and dubbing",
    category: "Video",
    launchDate: "2024-10-11",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.7,
    reviews: 63,
    pricing: "Paid",
    tags: ["Video Translation", "Subtitles", "Dubbing"],
    website: "https://videotranslate.ai",
    featured: false
  },
  {
    id: "16",
    name: "MarketAnalyzer AI",
    description: "Comprehensive market analysis and trend prediction tool",
    category: "Research",
    launchDate: "2024-10-10",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.8,
    reviews: 91,
    pricing: "Paid",
    tags: ["Market Analysis", "Trends", "Business"],
    website: "https://marketanalyzer.ai",
    featured: false
  },
  {
    id: "17",
    name: "TeamCollaborate AI",
    description: "AI-enhanced team collaboration and project management platform",
    category: "Productivity",
    launchDate: "2024-10-09",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.7,
    reviews: 118,
    pricing: "Freemium",
    tags: ["Team Collaboration", "Project Management", "Productivity"],
    website: "https://teamcollaborate.ai",
    featured: false
  },
  {
    id: "18",
    name: "SocialMedia AI",
    description: "AI-powered social media management and content scheduling",
    category: "Marketing",
    launchDate: "2024-10-08",
    imageUrl: "/placeholder-tool.jpg",
    rating: 4.6,
    reviews: 142,
    pricing: "Freemium",
    tags: ["Social Media", "Marketing", "Scheduling"],
    website: "https://socialmedia.ai",
    featured: false
  }
];