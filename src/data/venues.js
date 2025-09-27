// All directory cards show stars from this rating.
// Keep these aligned fields so cards are the same height.
const venues = [
  { id:"terminal-west", name:"Terminal West", city:"Atlanta", state:"GA", capacity:1000, email:"info@terminalwest.com", facebook:"https://facebook.com/terminalwest", verified:true,  rating:4.9 },
  { id:"palmer",        name:"Palmer Events Center", city:"Austin", state:"TX", capacity:1200, email:"info@palmercenter.com", facebook:"https://facebook.com/palmerevents", verified:true, rating:4.8 },
  { id:"tulips",        name:"Tulips", city:"Fort Worth", state:"TX", capacity:600, email:"info@tulips.com", facebook:"https://facebook.com/tulipsftw", verified:true, rating:4.6 },
  { id:"turf-club",     name:"Turf Club", city:"St. Paul", state:"MN", capacity:400, email:"info@turfclub.com", facebook:"https://facebook.com/turfclubstpaul", verified:true, rating:4.4 },
  { id:"xray",          name:"X-Ray Arcade", city:"Cudahy", state:"WI", capacity:500, email:"info@xrayarcade.com", facebook:"https://facebook.com/xrayarcade", verified:true, rating:4.7 },
  { id:"thirdman",      name:"Third Man Records", city:"Detroit", state:"MI", capacity:800, email:"info@thirdmanrecords.com", facebook:"https://facebook.com/thirdmanrecords", verified:true, rating:4.9 },
  { id:"grog",          name:"Grog Shop", city:"Cleveland", state:"OH", capacity:450, email:"info@grogshop.com", facebook:"https://facebook.com/grogshopcleveland", verified:true, rating:3.8 },
  { id:"lees-palace",   name:"Lee's Palace", city:"Toronto", state:"ON", capacity:700, email:"info@leespalace.com", facebook:"https://facebook.com/leespalace", verified:true, rating:4.8 },
  { id:"brighton",      name:"Brighton Music Hall", city:"Boston", state:"MA", capacity:800, email:"info@brightonmusichall.com", facebook:"https://facebook.com/brightonmusichall", verified:true, rating:4.5 },
  { id:"glass-house",   name:"The Glass House", city:"Pomona", state:"CA", capacity:1200, email:"info@theglasshouse.com", facebook:"https://facebook.com/theglasshousepomona", verified:true, rating:4.9 },

  // KY demo rooms (used by Demo Band / Neon Pines)
  { id:"zanzabar",      name:"Zanzabar", city:"Louisville", state:"KY", capacity:400, email:"info@zanzabarlouisville.com", facebook:"https://facebook.com/zanzabar", verified:false, rating:4.2 },
  { id:"cosmic-charlies",name:"Cosmic Charlie's", city:"Lexington", state:"KY", capacity:300, email:"info@cosmiccharlies.com", facebook:"https://facebook.com/cosmiccharlies", verified:true, rating:4.5 }
];

export default venues;
