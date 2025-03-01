"use client";

import { useState, useEffect, Suspense } from "react";
import Navbar from "@/components/Navbar";
import { popularDestinations } from "@/utils/mockData";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Star, Filter, X } from "lucide-react";
import { useSearchParams } from "next/navigation";

function DestinationsContent() {
  const searchParams = useSearchParams();
  const initialSearchQuery = searchParams.get('search') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [filteredDestinations, setFilteredDestinations] = useState(popularDestinations);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    budget: [] as string[],
    activities: [] as string[],
    weather: [] as string[],
  });

  // Extract all unique activities, budgets, and weather types for filters
  const allActivities = Array.from(new Set(popularDestinations.flatMap(dest => dest.activities)));
  const allBudgets = Array.from(new Set(popularDestinations.map(dest => dest.budget)));
  const allWeatherTypes = Array.from(new Set(popularDestinations.map(dest => dest.weather)));

  // Apply filters and search
  useEffect(() => {
    let results = [...popularDestinations];
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(dest => 
        dest.name.toLowerCase().includes(query) || 
        dest.description.toLowerCase().includes(query) ||
        dest.activities.some(activity => activity.toLowerCase().includes(query))
      );
    }
    
    // Apply budget filters
    if (filters.budget.length > 0) {
      results = results.filter(dest => filters.budget.includes(dest.budget));
    }
    
    // Apply activity filters
    if (filters.activities.length > 0) {
      results = results.filter(dest => 
        dest.activities.some(activity => 
          filters.activities.some(filter => activity.includes(filter))
        )
      );
    }
    
    // Apply weather filters
    if (filters.weather.length > 0) {
      results = results.filter(dest => filters.weather.includes(dest.weather));
    }
    
    setFilteredDestinations(results);
  }, [searchQuery, filters]);

  // Initialize with search query from URL if present
  useEffect(() => {
    if (initialSearchQuery) {
      setSearchQuery(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already applied via the useEffect
  };

  const toggleFilter = (type: 'budget' | 'activities' | 'weather', value: string) => {
    setFilters(prev => {
      const current = [...prev[type]];
      const index = current.indexOf(value);
      
      if (index === -1) {
        current.push(value);
      } else {
        current.splice(index, 1);
      }
      
      return {
        ...prev,
        [type]: current
      };
    });
  };

  const clearFilters = () => {
    setFilters({
      budget: [],
      activities: [],
      weather: [],
    });
    setSearchQuery('');
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0 md:pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-indigo-600 dark:bg-indigo-800 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Explore Amazing Destinations
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Discover the perfect destination for your next adventure
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 flex">
            <form onSubmit={handleSearch} className="flex w-full">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search destinations, activities, or interests..."
                  className="block w-full pl-10 pr-3 py-3 border-0 rounded-lg bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button 
                type="button"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-150 ease-in-out flex items-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-5 h-5 mr-2" />
                <span>Filters</span>
              </button>
            </form>
          </div>
          
          {/* Filters Panel */}
          {showFilters && (
            <div className="max-w-3xl mx-auto mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-left">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Filters</h3>
                <button 
                  onClick={clearFilters}
                  className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
                >
                  Clear All
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Budget Filter */}
                <div>
                  <h4 className="font-medium mb-2">Budget</h4>
                  <div className="space-y-2">
                    {allBudgets.map((budget) => (
                      <label key={budget} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
                          checked={filters.budget.includes(budget)}
                          onChange={() => toggleFilter('budget', budget)}
                        />
                        <span>{budget}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Activities Filter */}
                <div>
                  <h4 className="font-medium mb-2">Activities</h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {allActivities.map((activity) => (
                      <label key={activity} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
                          checked={filters.activities.includes(activity)}
                          onChange={() => toggleFilter('activities', activity)}
                        />
                        <span>{activity}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Weather Filter */}
                <div>
                  <h4 className="font-medium mb-2">Climate</h4>
                  <div className="space-y-2">
                    {allWeatherTypes.map((weather) => (
                      <label key={weather} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
                          checked={filters.weather.includes(weather)}
                          onChange={() => toggleFilter('weather', weather)}
                        />
                        <span>{weather}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowFilters(false)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-150 ease-in-out"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Active Filters */}
      {(filters.budget.length > 0 || filters.activities.length > 0 || filters.weather.length > 0 || searchQuery) && (
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center gap-2">
          <span className="text-gray-700 dark:text-gray-300 mr-2">Active filters:</span>
          
          {searchQuery && (
            <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm flex items-center">
              Search: {searchQuery}
              <button onClick={() => setSearchQuery('')} className="ml-2">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          
          {filters.budget.map(budget => (
            <span key={budget} className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm flex items-center">
              Budget: {budget}
              <button onClick={() => toggleFilter('budget', budget)} className="ml-2">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
          
          {filters.activities.map(activity => (
            <span key={activity} className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm flex items-center">
              Activity: {activity}
              <button onClick={() => toggleFilter('activities', activity)} className="ml-2">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
          
          {filters.weather.map(weather => (
            <span key={weather} className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm flex items-center">
              Climate: {weather}
              <button onClick={() => toggleFilter('weather', weather)} className="ml-2">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
          
          <button 
            onClick={clearFilters}
            className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline ml-auto"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Destinations Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <div 
                key={destination.id} 
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
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
                    {destination.activities.map((activity, index) => (
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
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">No destinations found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Try adjusting your search criteria or filters to find more destinations.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-150 ease-in-out"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not sure where to go?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Get personalized destination recommendations based on your preferences
          </p>
          <Link 
            href="/recommendations" 
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition duration-150 ease-in-out"
          >
            Get Personalized Recommendations
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function DestinationsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Loading destinations...</h2>
          <p className="text-gray-600">Please wait while we prepare amazing places for you to explore.</p>
        </div>
      </div>
    }>
      <DestinationsContent />
    </Suspense>
  );
} 