"use client";

import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const page: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (pathname === "/submit-tool") {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [pathname]);

 
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                router.push("/"); 
            }
        };
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, router]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60  flex items-center justify-center z-50">
            <div
                ref={modalRef}
                className="relative w-full max-w-xl  bg-white rounded-md shadow-lg overflow-hidden animate-fadeIn"
            >
                
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500 rounded-t-md"></div>

               
                <div className="flex flex-col">
                    <div className="flex items-center justify-between border-b px-6 py-4 mt-2">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">Submit New Tool</h2>
                            <p className="text-sm text-gray-500 mt-2">
                                Submit a new AI tool to share with the community.
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                // setIsOpen(false);
                                router.push("/");
                            }}
                            className="text-gray-400 hover:text-gray-600 transition cursor-pointer"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    
                    <div className="p-6 max-h-[70vh] overflow-y-auto space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-1">
                                Tool Name *
                            </label>
                            <input
                                type="text"
                                placeholder="Enter tool name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-green-400"
                            />
                            <p className="text-xs mt-1 text-gray-500">Minimum 2 characters</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-1">
                                Description *
                            </label>
                            <textarea
                                placeholder="Describe what the tool does, its key features, and benefits"
                                rows={4}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-green-400 resize-none"
                            ></textarea>
                            <p className="text-xs mt-1 text-gray-500">Minimum 10 characters</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Website URL *
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://example.com"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-green-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Logo/Image URL *
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://example.com/logo.png"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-green-400"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category *
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-white focus:outline-green-400"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select category
                                    </option>
                                    <option value="writing-content">Writing & Content Creation</option>
                                    <option value="image-generation">Image Generation & Editing</option>
                                    <option value="video-editing">Video Creation & Editing</option>
                                    <option value="code-development">Code & Development</option>
                                    <option value="productivity-automation">Productivity & Automation</option>
                                    <option value="business-marketing">Business & Marketing</option>
                                    <option value="research-analysis">Research & Analysis</option>
                                    <option value="communication-chat">Communication & Chat</option>
                                    <option value="education-learning">Education & Learning</option>
                                    <option value="design-creative">Design & Creative</option>
                                    <option value="audio-music">Audio & Music</option>
                                    <option value="data-analytics">Data & Analytics</option>
                                    <option value="social-media">Social Media</option>
                                    <option value="seo-web">SEO & Web</option>
                                    <option value="healthcare-wellness">Healthcare & Wellness</option>
                                    <option value="finance-trading">Finance & Trading</option>
                                    <option value="gaming-entertainment">Gaming & Entertainment</option>
                                    <option value="translation-language">Translation & Language</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Pricing Type *
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-white focus:outline-green-400"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select pricing type
                                    </option>
                                    <option value="free">Free</option>
                                    <option value="freemium">Freemium</option>
                                    <option value="paid">Paid</option>
                                    <option value="subscription">Contact for Pricing</option>
                                    <option value="enterprise">Enterprise</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-1">
                                Key Highlights *
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Free plan, API access, 24/7 support (comma separated)"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-green-400"
                            />
                            <p className="text-xs mt-1 text-gray-500">Enter features sepatated by commas</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Twitter URL 
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://example.com/..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-green-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    GitHub URL 
                                </label>
                                <input
                                    type="url"
                                    placeholder="https://example.com/..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-green-400"
                                />
                            </div>
                        </div>


                        <div className="pt-3 flex justify-end">
                            <button
                                className="w-24 border-2 border-green-700 text-green-700 py-1.5 rounded-lg font-semibold 
             hover:bg-green-100 hover:text-black transition mr-2 cursor-pointer"
                                onClick={() => {
                                    router.push("/");
                                    // setIsOpen(false);
                                }}
                            >
                                Cancel
                            </button>

                            <button className="w-32 border-2 border-green-600 cursor-pointer text-white py-1.5 rounded-lg 
                            bg-gradient-to-r from-green-400 to-green-600 font-semibold
                         hover:from-green-500 hover:to-green-700 transition-all duration-300">
                                Submit Tool
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default page;
