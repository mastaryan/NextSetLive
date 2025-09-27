// ISO strings so we don't need dayjs at build time.
const shows = [
  // Frankie — Sept–Nov
  { id:"fatwf1", bandId:"frankie", venueId:"terminal-west", venueName:"Terminal West", city:"Atlanta", state:"GA", date:"2025-09-24T20:00:00", ticketsSold:950, verified:900, views:5000 },
  { id:"fatwf2", bandId:"frankie", venueId:"palmer",        venueName:"Palmer Events Center", city:"Austin", state:"TX", date:"2025-09-26T20:00:00", ticketsSold:1150, verified:1100, views:6200 },
  { id:"fatwf3", bandId:"frankie", venueId:"tulips",        venueName:"Tulips", city:"Fort Worth", state:"TX", date:"2025-09-29T20:00:00", ticketsSold:500, verified:480, views:3200 },
  { id:"fatwf4", bandId:"frankie", venueId:"turf-club",     venueName:"Turf Club", city:"St. Paul", state:"MN", date:"2025-10-02T20:00:00", ticketsSold:390, verified:370, views:2900 },
  { id:"fatwf5", bandId:"frankie", venueId:"xray",          venueName:"X-Ray Arcade", city:"Cudahy", state:"WI", date:"2025-10-03T20:00:00", ticketsSold:490, verified:470, views:2800 },
  { id:"fatwf6", bandId:"frankie", venueId:"thirdman",      venueName:"Third Man Records", city:"Detroit", state:"MI", date:"2025-10-10T20:00:00", ticketsSold:780, verified:750, views:3500 },
  { id:"fatwf7", bandId:"frankie", venueId:"glass-house",   venueName:"The Glass House", city:"Pomona", state:"CA", date:"2025-11-05T20:00:00", ticketsSold:1100, verified:1080, views:8000 },

  // Demo Band — mix of prior + upcoming
  { id:"demo1", bandId:"demo", venueId:"zanzabar",         venueName:"Zanzabar", city:"Louisville", state:"KY", date:"2025-10-05T21:00:00", ticketsSold:300, verified:290, views:1800 },
  { id:"demo2", bandId:"demo", venueId:"cosmic-charlies",  venueName:"Cosmic Charlie’s", city:"Lexington", state:"KY", date:"2025-09-10T21:00:00", ticketsSold:250, verified:240, views:1500 }, // prior
  { id:"demo3", bandId:"demo", venueId:"turf-club",        venueName:"Turf Club", city:"St. Paul", state:"MN", date:"2025-08-20T21:00:00", ticketsSold:200, verified:190, views:1400 },       // prior
  { id:"demo4", bandId:"demo", venueId:"brighton",         venueName:"Brighton Music Hall", city:"Boston", state:"MA", date:"2025-07-15T21:00:00", ticketsSold:180, verified:170, views:1200 }, // prior

  // Neon Pines — new, mostly upcoming
  { id:"neon1", bandId:"neon", venueId:"grog",             venueName:"Grog Shop", city:"Cleveland", state:"OH", date:"2025-10-20T20:00:00", ticketsSold:200, verified:180, views:1000 }
];

export default shows;
