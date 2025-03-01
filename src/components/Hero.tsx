"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Hero = () => {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to destinations page with search parameters
    if (destination) {
      router.push(`/destinations?search=${encodeURIComponent(destination)}${startDate ? `&startDate=${startDate.toISOString()}` : ''}${endDate ? `&endDate=${endDate.toISOString()}` : ''}`);
    }
  };

  const formatDateRange = () => {
    if (startDate && endDate) {
      return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
    } else if (startDate) {
      return startDate.toLocaleDateString();
    }
    return "";
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Your Perfect Trip with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Personalized travel recommendations based on your preferences, budget, and travel style.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4 md:p-6 max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0 md:flex md:gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="When are you traveling?"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  value={formatDateRange()}
                  onClick={() => setDatePickerOpen(!datePickerOpen)}
                  readOnly
                />
                {datePickerOpen && (
                  <div className="absolute z-50 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700">
                    <DatePicker
                      selected={startDate}
                      onChange={(dates) => {
                        const [start, end] = dates as [Date, Date];
                        setStartDate(start);
                        setEndDate(end);
                        if (end) setDatePickerOpen(false);
                      }}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline
                      minDate={new Date()}
                      className="bg-white dark:bg-gray-800"
                    />
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-150 ease-in-out flex items-center justify-center"
            >
              <Search className="h-5 w-5 mr-2" />
              <span>Search</span>
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/recommendations"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition duration-150 ease-in-out"
          >
            Get Personalized Recommendations
          </Link>
          <Link
            href="/destinations"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition duration-150 ease-in-out"
          >
            Explore Popular Destinations
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 