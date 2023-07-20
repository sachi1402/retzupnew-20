const propertyListingData = [
    {
      id: 1,
      title: "Cozy Apartment in the City Center",
      description: "A lovely apartment located in the heart of the city.",
      price: "₹5000",
      capacity: 2,
      amenities: ["Wifi", "Kitchen", "TV", "Air Conditioning"],
      location: "City Center",
      rating: 4.8,
      images: [
        "https://source.unsplash.com/800x600/?apartment",
        "https://source.unsplash.com/800x600/?interior",
        "https://source.unsplash.com/800x600/?city",
      ],
    },
    {
      id: 2,
      title: "Beachfront Villa with Stunning Views",
      description: "Luxurious villa right by the beach with breathtaking views.",
      price: "₹15000",
      capacity: 6,
      amenities: ["Private Pool", "Beach Access", "BBQ Area", "Garden"],
      location: "Beachfront",
      rating: 4.9,
      images: [
        "https://source.unsplash.com/800x600/?beach",
        "https://source.unsplash.com/800x600/?villa",
        "https://source.unsplash.com/800x600/?luxury",
      ],
    },
    {
      id: 3,
      title: "Charming Countryside Cottage",
      description: "Escape the city and enjoy the tranquility of the countryside.",
      price: "₹4000",
      capacity: 4,
      amenities: ["Fireplace", "Garden", "Patio"],
      location: "Countryside",
      rating: 4.5,
      images: [
        "https://source.unsplash.com/800x600/?countryside",
        "https://source.unsplash.com/800x600/?cottage",
        "https://source.unsplash.com/800x600/?nature",
      ],
    },
    {
      id: 4,
      title: "Modern Studio in the Downtown",
      description: "Contemporary studio apartment with great city views.",
      price: "₹3000",
      capacity: 2,
      amenities: ["Wifi", "Kitchenette", "Gym"],
      location: "Downtown",
      rating: 4.6,
      images: [
        "https://source.unsplash.com/800x600/?studio",
        "https://source.unsplash.com/800x600/?downtown",
        "https://source.unsplash.com/800x600/?modern",
      ],
    },
    {
      id: 5,
      title: "Rustic Cabin in the Woods",
      description: "A charming cabin surrounded by nature's beauty.",
      price: "₹3500",
      capacity: 3,
      amenities: ["Firepit", "Hiking Trails", "Mountain View"],
      location: "Woods",
      rating: 4.7,
      images: [
        "https://source.unsplash.com/800x600/?cabin",
        "https://source.unsplash.com/800x600/?forest",
        "https://source.unsplash.com/800x600/?wooden",
      ],
    },
    {
      id: 6,
      title: "Seaside Retreat with Ocean View",
      description: "Relax and unwind in this peaceful seaside escape.",
      price: "₹7000",
      capacity: 5,
      amenities: ["Ocean View", "Swimming Pool", "Spa"],
      location: "Seaside",
      rating: 4.9,
      images: [
        "https://source.unsplash.com/800x600/?seaside",
        "https://source.unsplash.com/800x600/?ocean",
        "https://source.unsplash.com/800x600/?retreat",
      ],
    },
    {
      id: 7,
      title: "Luxury Penthouse with Skyline Views",
      description: "Elegant penthouse offering breathtaking city skyline views.",
      price: "₹12000",
      capacity: 4,
      amenities: ["Jacuzzi", "Private Terrace", "Fitness Center"],
      location: "Skyline",
      rating: 4.8,
      images: [
        "https://source.unsplash.com/800x600/?penthouse",
        "https://source.unsplash.com/800x600/?luxury",
        "https://source.unsplash.com/800x600/?skyline",
      ],
    },
    {
      id: 8,
      title: "Quaint Cottage by the River",
      description: "A cozy cottage nestled by a peaceful river.",
      price: "₹4500",
      capacity: 3,
      amenities: ["River View", "Fishing", "Outdoor Dining"],
      location: "Riverfront",
      rating: 4.6,
      images: [
        "https://source.unsplash.com/800x600/?cottage",
        "https://source.unsplash.com/800x600/?river",
        "https://source.unsplash.com/800x600/?quaint",
      ],
    },
    {
      id: 9,
      title: "Eco-Friendly Treehouse Retreat",
      description: "Stay in harmony with nature in this unique treehouse.",
      price: "₹5500",
      capacity: 2,
      amenities: ["Treehouse", "Nature Walks", "Solar Power"],
      location: "Forest",
      rating: 4.7,
      images: [
        "https://source.unsplash.com/800x600/?treehouse",
        "https://source.unsplash.com/800x600/?eco",
        "https://source.unsplash.com/800x600/?retreat",
      ],
    },
    {
      id: 10,
      title: "Historic Mansion Experience",
      description: "Step back in time with this elegant historic mansion.",
      price: "₹10000",
      capacity: 8,
      amenities: ["Garden", "Antique Decor", "Library"],
      location: "Historic District",
      rating: 4.9,
      images: [
        "https://source.unsplash.com/800x600/?mansion",
        "https://source.unsplash.com/800x600/?historic",
        "https://source.unsplash.com/800x600/?elegant",
      ],
    },
    // Add more property listings as needed...
  ];
  
  export default propertyListingData;
  