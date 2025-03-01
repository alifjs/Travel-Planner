// Mock data for destinations
export const popularDestinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    description: "Tropical paradise with beautiful beaches, lush rice terraces, and vibrant culture.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1024",
    bestTimeToVisit: "April to October",
    budget: "$$",
    activities: ["Beach", "Temples", "Surfing", "Hiking"],
    weather: "Tropical",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Ancient city with stunning temples, traditional gardens, and rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1024",
    bestTimeToVisit: "March to May, October to November",
    budget: "$$$",
    activities: ["Temples", "Gardens", "Cultural Experiences", "Food Tours"],
    weather: "Temperate",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Santorini, Greece",
    description: "Breathtaking island with white-washed buildings, blue domes, and spectacular sunsets.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1024",
    bestTimeToVisit: "April to October",
    budget: "$$$",
    activities: ["Beaches", "Sailing", "Wine Tasting", "Sunset Viewing"],
    weather: "Mediterranean",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Barcelona, Spain",
    description: "Vibrant city with unique architecture, delicious cuisine, and beautiful beaches.",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1024",
    bestTimeToVisit: "May to June, September to October",
    budget: "$$",
    activities: ["Architecture Tours", "Beaches", "Food Tours", "Museums"],
    weather: "Mediterranean",
    rating: 4.6,
  },
  {
    id: 5,
    name: "New York City, USA",
    description: "Iconic metropolis with world-class museums, diverse neighborhoods, and endless entertainment.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1024",
    bestTimeToVisit: "April to June, September to November",
    budget: "$$$",
    activities: ["Museums", "Broadway Shows", "Shopping", "Food Tours"],
    weather: "Seasonal",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Cape Town, South Africa",
    description: "Stunning coastal city with mountains, beaches, and diverse cultural experiences.",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1024",
    bestTimeToVisit: "October to April",
    budget: "$$",
    activities: ["Hiking", "Beaches", "Wildlife", "Wine Tours"],
    weather: "Mediterranean",
    rating: 4.8,
  },
];

// Mock data for activities
export const popularActivities = [
  {
    id: 1,
    name: "Beach Day",
    description: "Relax on pristine beaches with crystal clear waters.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1024",
    category: "Relaxation",
    duration: "Full Day",
    price: "$",
  },
  {
    id: 2,
    name: "Cultural Tour",
    description: "Explore local traditions, historical sites, and cultural landmarks.",
    image: "https://images.unsplash.com/photo-1558383817-c1c4ff52bd7e?q=80&w=1024",
    category: "Cultural",
    duration: "Half Day",
    price: "$$",
  },
  {
    id: 3,
    name: "Adventure Hiking",
    description: "Trek through stunning landscapes and natural wonders.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1024",
    category: "Adventure",
    duration: "Full Day",
    price: "$$",
  },
  {
    id: 4,
    name: "Food Tour",
    description: "Sample local cuisine and learn about culinary traditions.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1024",
    category: "Food & Drink",
    duration: "Half Day",
    price: "$$",
  },
  {
    id: 5,
    name: "Wildlife Safari",
    description: "Observe exotic animals in their natural habitats.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1024",
    category: "Nature",
    duration: "Full Day",
    price: "$$$",
  },
  {
    id: 6,
    name: "Water Sports",
    description: "Enjoy thrilling activities like surfing, kayaking, or snorkeling.",
    image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1024",
    category: "Adventure",
    duration: "Half Day",
    price: "$$",
  },
];

// Mock data for accommodations
export const accommodations = [
  {
    id: 1,
    name: "Luxury Beach Resort",
    description: "5-star beachfront resort with stunning ocean views and premium amenities.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1024",
    location: "Bali, Indonesia",
    price: "$$$",
    rating: 4.9,
    amenities: ["Pool", "Spa", "Restaurant", "Beach Access", "Fitness Center"],
  },
  {
    id: 2,
    name: "Boutique City Hotel",
    description: "Charming hotel in the heart of the city with unique design and personalized service.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1024",
    location: "Barcelona, Spain",
    price: "$$",
    rating: 4.7,
    amenities: ["Free Breakfast", "WiFi", "Concierge", "Bar", "Room Service"],
  },
  {
    id: 3,
    name: "Mountain Lodge",
    description: "Cozy retreat nestled in the mountains with breathtaking views and outdoor activities.",
    image: "https://images.unsplash.com/photo-1517320964276-a002fa203177?q=80&w=1024",
    location: "Kyoto, Japan",
    price: "$$",
    rating: 4.8,
    amenities: ["Fireplace", "Restaurant", "Hiking Trails", "Scenic Views", "WiFi"],
  },
  {
    id: 4,
    name: "Urban Apartment",
    description: "Modern apartment in a trendy neighborhood with easy access to attractions.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1024",
    location: "New York City, USA",
    price: "$$",
    rating: 4.6,
    amenities: ["Kitchen", "WiFi", "Washer/Dryer", "Air Conditioning", "Security"],
  },
];

// Mock data for sample itineraries
export const sampleItineraries = [
  {
    id: 1,
    destination: "Bali, Indonesia",
    duration: "7 days",
    title: "Tropical Paradise Escape",
    description: "Experience the best of Bali with this perfect balance of relaxation, adventure, and culture.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1024",
    days: [
      {
        day: 1,
        title: "Arrival & Relaxation",
        activities: [
          "Arrive at Ngurah Rai International Airport",
          "Check in to your beachfront resort in Seminyak",
          "Relax on the beach and adjust to the tropical climate",
          "Enjoy a welcome dinner at a local restaurant with sunset views"
        ]
      },
      {
        day: 2,
        title: "Cultural Ubud",
        activities: [
          "Visit the Sacred Monkey Forest Sanctuary",
          "Explore the Ubud Art Market",
          "Tour the Tegalalang Rice Terraces",
          "Attend a traditional Balinese dance performance"
        ]
      },
      {
        day: 3,
        title: "Temple Hopping",
        activities: [
          "Visit Tanah Lot Temple at sunrise",
          "Explore Uluwatu Temple",
          "Relax at Padang Padang Beach",
          "Enjoy a seafood dinner at Jimbaran Bay"
        ]
      },
      {
        day: 4,
        title: "Adventure Day",
        activities: [
          "White water rafting on the Ayung River",
          "Visit the Tegenungan Waterfall",
          "Try a Balinese cooking class",
          "Explore local villages"
        ]
      },
      {
        day: 5,
        title: "Island Excursion",
        activities: [
          "Day trip to Nusa Penida Island",
          "Visit Kelingking Beach",
          "Snorkeling at Crystal Bay",
          "Return to Bali for dinner"
        ]
      },
      {
        day: 6,
        title: "Wellness & Relaxation",
        activities: [
          "Morning yoga session",
          "Traditional Balinese spa treatment",
          "Beach relaxation",
          "Sunset cocktails at a beach club"
        ]
      },
      {
        day: 7,
        title: "Departure Day",
        activities: [
          "Last-minute shopping at local boutiques",
          "Final beach time",
          "Check out and transfer to airport",
          "Departure"
        ]
      }
    ]
  },
  {
    id: 2,
    destination: "Kyoto, Japan",
    duration: "5 days",
    title: "Cultural Heritage Journey",
    description: "Immerse yourself in the ancient traditions and beautiful landscapes of Kyoto.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1024",
    days: [
      {
        day: 1,
        title: "Arrival & First Impressions",
        activities: [
          "Arrive at Kansai International Airport",
          "Transfer to Kyoto and check in to your ryokan",
          "Evening stroll through Gion district",
          "Traditional kaiseki dinner"
        ]
      },
      {
        day: 2,
        title: "Eastern Kyoto Temples",
        activities: [
          "Visit Kiyomizu-dera Temple",
          "Explore Ninenzaka and Sannenzaka historic streets",
          "Tour Kodaiji Temple",
          "Tea ceremony experience"
        ]
      },
      {
        day: 3,
        title: "Arashiyama & Bamboo Grove",
        activities: [
          "Visit the Arashiyama Bamboo Grove",
          "Explore Tenryuji Temple",
          "Lunch at a local restaurant",
          "Boat ride on the Hozugawa River"
        ]
      },
      {
        day: 4,
        title: "Northern Kyoto",
        activities: [
          "Visit Kinkakuji (Golden Pavilion)",
          "Explore Ryoanji Temple and rock garden",
          "Tour Nijo Castle",
          "Shopping at Nishiki Market"
        ]
      },
      {
        day: 5,
        title: "Departure Day",
        activities: [
          "Morning visit to Fushimi Inari Shrine",
          "Last-minute souvenir shopping",
          "Check out and transfer to airport",
          "Departure"
        ]
      }
    ]
  }
];

// Mock data for weather forecasts
export const weatherForecasts = {
  "Bali, Indonesia": [
    { month: "January", temperature: "26-32°C", precipitation: "High", crowds: "Medium", recommendation: "Rainy season, but still warm" },
    { month: "February", temperature: "26-32°C", precipitation: "High", crowds: "Low", recommendation: "Rainy season, good deals" },
    { month: "March", temperature: "26-32°C", precipitation: "Medium", crowds: "Low", recommendation: "Transitioning to dry season" },
    { month: "April", temperature: "26-32°C", precipitation: "Medium", crowds: "Medium", recommendation: "Good balance of weather and crowds" },
    { month: "May", temperature: "25-31°C", precipitation: "Low", crowds: "Medium", recommendation: "Excellent time to visit" },
    { month: "June", temperature: "24-30°C", precipitation: "Low", crowds: "High", recommendation: "Peak season begins" },
    { month: "July", temperature: "23-29°C", precipitation: "Low", crowds: "Very High", recommendation: "Dry and busy" },
    { month: "August", temperature: "23-29°C", precipitation: "Low", crowds: "Very High", recommendation: "Peak season, book in advance" },
    { month: "September", temperature: "24-30°C", precipitation: "Low", crowds: "High", recommendation: "Excellent weather, slightly fewer crowds" },
    { month: "October", temperature: "25-31°C", precipitation: "Medium", crowds: "Medium", recommendation: "Good time before rainy season" },
    { month: "November", temperature: "26-32°C", precipitation: "High", crowds: "Low", recommendation: "Rainy season begins" },
    { month: "December", temperature: "26-32°C", precipitation: "High", crowds: "High", recommendation: "Holiday season despite rain" }
  ],
  "Kyoto, Japan": [
    { month: "January", temperature: "1-9°C", precipitation: "Low", crowds: "Low", recommendation: "Cold but peaceful" },
    { month: "February", temperature: "1-10°C", precipitation: "Low", crowds: "Low", recommendation: "Winter season, occasional snow" },
    { month: "March", temperature: "4-13°C", precipitation: "Medium", crowds: "Medium", recommendation: "Cherry blossom season begins" },
    { month: "April", temperature: "9-19°C", precipitation: "Medium", crowds: "Very High", recommendation: "Peak cherry blossom season" },
    { month: "May", temperature: "14-24°C", precipitation: "Medium", crowds: "High", recommendation: "Pleasant spring weather" },
    { month: "June", temperature: "19-27°C", precipitation: "High", crowds: "Medium", recommendation: "Rainy season begins" },
    { month: "July", temperature: "23-31°C", precipitation: "High", crowds: "High", recommendation: "Hot and humid, Gion Festival" },
    { month: "August", temperature: "24-33°C", precipitation: "Medium", crowds: "High", recommendation: "Very hot and humid" },
    { month: "September", temperature: "20-29°C", precipitation: "High", crowds: "Medium", recommendation: "Typhoon season, but cooling down" },
    { month: "October", temperature: "13-22°C", precipitation: "Medium", crowds: "High", recommendation: "Autumn colors begin, beautiful" },
    { month: "November", temperature: "8-17°C", precipitation: "Medium", crowds: "Very High", recommendation: "Peak autumn foliage" },
    { month: "December", temperature: "3-12°C", precipitation: "Low", crowds: "Low", recommendation: "Cold but festive" }
  ]
};

// Mock function to simulate AI recommendations
export const getPersonalizedRecommendations = (preferences: {
  budget: string;
  interests: string[];
  travelDates: { start: Date; end: Date };
  travelStyle: string;
}) => {
  // This would be replaced by actual AI logic in a real application
  const { budget, interests, travelStyle } = preferences;
  
  // Simple filtering based on preferences
  let recommendedDestinations = popularDestinations.filter(destination => {
    // Budget match
    if (budget === "Low" && destination.budget === "$$$") return false;
    if (budget === "Medium" && destination.budget === "$$$") return false;
    
    // Interest match (at least one interest should match)
    const hasMatchingInterest = interests.some(interest => 
      destination.activities.some(activity => 
        activity.toLowerCase().includes(interest.toLowerCase())
      )
    );
    
    return hasMatchingInterest;
  });
  
  // Sort by rating if luxury travel style
  if (travelStyle === "Luxury") {
    recommendedDestinations = recommendedDestinations.sort((a, b) => b.rating - a.rating);
  }
  
  // Limit to top 3 recommendations
  return recommendedDestinations.slice(0, 3);
};

// Mock function to generate itinerary
export const generateItinerary = (destination: string, duration: number) => {
  // In a real app, this would call an AI service
  const existingItinerary = sampleItineraries.find(
    itinerary => itinerary.destination === destination
  );
  
  if (existingItinerary) {
    // Adjust the itinerary based on duration
    return {
      ...existingItinerary,
      days: existingItinerary.days.slice(0, duration)
    };
  }
  
  // Return a default itinerary if no match
  return sampleItineraries[0];
}; 