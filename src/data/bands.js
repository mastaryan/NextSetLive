const bands = [
  {
    id: "frankie",
    name: "Frankie & the Witch Fingers",
    genre: "Psych Rock / Garage Rock",
    verified: true,
    spotify: "https://open.spotify.com/artist/1q5jJv8fUFl7L9jL7lI4qw",
    instagram: "https://www.instagram.com/frankieandthewitchfingers",
    facebook: "https://www.facebook.com/frankieandthewitchfingers",
    twitter: "https://twitter.com/frankiewitch",
    website: "https://www.frankieandthewitchfingers.com",
    reviews: [
      {
        source: "Troubadour (Los Angeles, CA)",
        text: "Completely sold out! High-energy, unforgettable night.",
        stars: 5,
      },
    ],
    rating: 5,
  },
  {
    id: "demoband",
    name: "Demo Band",
    genre: "Indie Rock",
    verified: true,
    spotify: "https://open.spotify.com",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    twitter: "https://twitter.com",
    website: "https://example.com",
    reviews: [
      {
        source: "Zanzabar (Louisville, KY)",
        text: "Tight performance and great crowd draw.",
        stars: 4,
      },
      {
        source: "Cosmic Charlie’s (Lexington, KY)",
        text: "Solid show, but energy dipped mid-set.",
        stars: 3,
      },
    ],
    rating: 4,
  },
  {
    id: "neonpines",
    name: "Neon Pines",
    genre: "Alt Folk",
    verified: false,
    spotify: "",
    instagram: "",
    facebook: "",
    twitter: "",
    website: "",
    reviews: [],
    rating: 0,
  },
];

export default bands;
