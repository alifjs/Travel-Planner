"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { sampleItineraries, generateItinerary, popularDestinations } from "@/utils/mockData";
import Image from "next/image";
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ItineraryPage() {
  const [selectedItinerary, setSelectedItinerary] = useState(sampleItineraries[0]);
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);
  const [customizing, setCustomizing] = useState(false);
  const [customOptions, setCustomOptions] = useState({
    destination: selectedItinerary.destination,
    duration: parseInt(selectedItinerary.duration.split(" ")[0]),
  });

  const toggleDayExpansion = (day: number) => {
    if (expandedDays.includes(day)) {
      setExpandedDays(expandedDays.filter(d => d !== day));
    } else {
      setExpandedDays([...expandedDays, day]);
    }
  };

  const handleCustomItinerary = () => {
    const newItinerary = generateItinerary(customOptions.destination, customOptions.duration);
    setSelectedItinerary(newItinerary);
    setExpandedDays([1]);
    setCustomizing(false);
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0 md:pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-indigo-600 dark:bg-indigo-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Travel Itineraries
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Detailed day-by-day plans for amazing destinations
          </p>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Sample Itineraries</h2>
              
              <div className="space-y-4 mb-8">
                {sampleItineraries.map((itinerary) => (
                  <button
                    key={itinerary.id}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedItinerary.id === itinerary.id
                        ? "bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-600 dark:border-indigo-400"
                        : "bg-gray-50 dark:bg-gray-700/30 hover:bg-indigo-50 dark:hover:bg-indigo-900/10"
                    }`}
                    onClick={() => {
                      setSelectedItinerary(itinerary);
                      setExpandedDays([1]);
                      setCustomOptions({
                        destination: itinerary.destination,
                        duration: parseInt(itinerary.duration.split(" ")[0]),
                      });
                    }}
                  >
                    <h3 className="font-medium">{itinerary.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {itinerary.destination}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {itinerary.duration}
                    </div>
                  </button>
                ))}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="font-bold mb-4">Create Custom Itinerary</h3>
                <button
                  onClick={() => setCustomizing(!customizing)}
                  className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-150 ease-in-out"
                >
                  Customize Itinerary
                </button>

                {customizing && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2">Destination</label>
                      <select
                        value={customOptions.destination}
                        onChange={(e) => setCustomOptions({ ...customOptions, destination: e.target.value })}
                        className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                      >
                        {popularDestinations.map((destination) => (
                          <option key={destination.id} value={destination.name}>
                            {destination.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Duration (days)</label>
                      <select
                        value={customOptions.duration}
                        onChange={(e) => setCustomOptions({ ...customOptions, duration: parseInt(e.target.value) })}
                        className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                      >
                        {[3, 5, 7, 10, 14].map((days) => (
                          <option key={days} value={days}>
                            {days} days
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={handleCustomItinerary}
                      className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-150 ease-in-out"
                    >
                      Generate
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={selectedItinerary.image}
                  alt={selectedItinerary.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold">{selectedItinerary.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {selectedItinerary.destination}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {selectedItinerary.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {selectedItinerary.description}
                </p>

                <h3 className="text-xl font-bold mb-6">Day-by-Day Itinerary</h3>
                
                <div className="space-y-4">
                  {selectedItinerary.days.map((day) => (
                    <div 
                      key={day.day} 
                      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700/30 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                        onClick={() => toggleDayExpansion(day.day)}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold mr-3">
                            {day.day}
                          </div>
                          <span className="font-medium">{day.title}</span>
                        </div>
                        {expandedDays.includes(day.day) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      
                      {expandedDays.includes(day.day) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="p-4 border-t border-gray-200 dark:border-gray-700"
                        >
                          <ul className="space-y-3">
                            {day.activities.map((activity, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                                  {index + 1}
                                </div>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 