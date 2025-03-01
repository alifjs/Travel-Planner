"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { getPersonalizedRecommendations, popularDestinations } from "@/utils/mockData";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function RecommendationsPage() {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    budget: "Medium",
    interests: [] as string[],
    travelDates: { start: new Date(), end: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
    travelStyle: "Balanced",
  });
  const [recommendations, setRecommendations] = useState<typeof popularDestinations>([]);

  const handleInterestToggle = (interest: string) => {
    setPreferences(prev => {
      const interests = [...prev.interests];
      if (interests.includes(interest)) {
        return { ...prev, interests: interests.filter(i => i !== interest) };
      } else {
        return { ...prev, interests: [...interests, interest] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get personalized recommendations
    let results = getPersonalizedRecommendations(preferences);
    
    // Ensure we always have at least 3 recommendations
    if (results.length === 0) {
      // If no matches, use top rated destinations
      results = [...popularDestinations].sort((a, b) => b.rating - a.rating).slice(0, 3);
    } else if (results.length < 3) {
      // If fewer than 3 matches, add more top-rated destinations that aren't already included
      const existingIds = results.map(dest => dest.id);
      const additionalDestinations = popularDestinations
        .filter(dest => !existingIds.includes(dest.id))
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3 - results.length);
      
      results = [...results, ...additionalDestinations];
    }
    
    setRecommendations(results);
    setStep(2);
  };

  const interestOptions = [
    "Beach", "Mountains", "City", "Culture", "Food", "Adventure", 
    "Relaxation", "Nature", "History", "Shopping", "Nightlife", "Wildlife"
  ];

  return (
    <main className="min-h-screen pb-20 md:pb-0 md:pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-indigo-600 dark:bg-indigo-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Personalized Travel Recommendations
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Tell us about your preferences, and our AI will suggest the perfect destinations for you
          </p>
        </div>
      </section>

      {/* Preferences Form or Results */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        {step === 1 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Your Travel Preferences</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Budget */}
              <div>
                <label className="block text-lg font-medium mb-4">What&apos;s your budget?</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Low", "Medium", "High"].map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        preferences.budget === budget
                          ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:border-indigo-400"
                          : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
                      }`}
                      onClick={() => setPreferences({ ...preferences, budget })}
                    >
                      <div className="font-medium">{budget}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {budget === "Low" && "Budget-friendly options"}
                        {budget === "Medium" && "Balanced quality and cost"}
                        {budget === "High" && "Luxury experiences"}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-lg font-medium mb-4">What are you interested in? (Select all that apply)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      className={`p-3 rounded-lg border transition-colors ${
                        preferences.interests.includes(interest)
                          ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:border-indigo-400"
                          : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
                      }`}
                      onClick={() => handleInterestToggle(interest)}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Travel Style */}
              <div>
                <label className="block text-lg font-medium mb-4">What&apos;s your travel style?</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Relaxed", "Balanced", "Adventurous"].map((style) => (
                    <button
                      key={style}
                      type="button"
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        preferences.travelStyle === style
                          ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:border-indigo-400"
                          : "border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700"
                      }`}
                      onClick={() => setPreferences({ ...preferences, travelStyle: style })}
                    >
                      <div className="font-medium">{style}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {style === "Relaxed" && "Slow-paced, relaxing activities"}
                        {style === "Balanced" && "Mix of relaxation and adventure"}
                        {style === "Adventurous" && "Action-packed, thrilling experiences"}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition duration-150 ease-in-out"
                >
                  Get Recommendations
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Personalized Recommendations</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Based on your preferences, we think you&apos;ll love these destinations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map((destination, index) => (
                <motion.div 
                  key={destination.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{destination.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.activities.slice(0, 3).map((activity, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Best time to visit</p>
                        <p className="font-medium">{destination.bestTimeToVisit}</p>
                      </div>
                      <Link 
                        href={`/destinations/${destination.id}`} 
                        className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center"
                      >
                        Explore <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-8">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 bg-white border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
              >
                Refine Your Preferences
              </button>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
} 