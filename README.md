# NextSetLive

NextSetLive is a demo platform that connects **bands** and **venues** with a focus on accountability, credibility, and verified ticket sales.

---

## 🚀 Features
- **Landing Page**  
  Simple intro with waitlist cards for **Bands** and **Venues**.  

- **Bands Directory & Profiles**  
  - Lists all bands.  
  - Profile pages show upcoming shows, recent shows (last 3), reviews, star ratings, and social links.  
  - Frankie and the Witch Fingers are included with real socials and demo tour stops.  
  - DemoBand and Neon Pines are sample/demo bands with reviews and ratings.  

- **Venues Directory & Profiles**  
  - Lists all venues with star ratings at a glance.  
  - Profile page shows capacity, booking contact, verified stats, upcoming shows (linked with bands), and recent shows with ticket stats.  

- **Tickets Flow**  
  - Select number of tickets (max 4).  
  - Enter fake credit card number (e.g., `4444 4444 4444 4444`).  
  - Confirm purchase → generates QR code.  
  - Options to **Add to Wallet**, **Print**, or **Transfer** tickets.  
  - Ticket confirmation page displays band, venue, date, and number of tickets purchased.  

- **Credibility / Social Score**  
  - Bands and venues each have a **star rating** (randomized for demo venues).  
  - Band and venue reviews appear inside profile pages.  
  - Past events automatically show ticket stats for transparency.  

---

## 🛠️ Tech Stack
- [React 18](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Day.js](https://day.js.org/)
- [QRCode.react](https://github.com/zpao/qrcode.react)
- [Vite](https://vitejs.dev/)

---

## 📂 Project Structure


## 🔧 Quickstart

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the dev server
   ```bash
   npm run dev
   ```

3. Open the app (Vite will open automatically). Key routes for the demo:
   - `/` — Landing
   - `/bands` — Band Directory
   - `/band/frankie` — Frankie & The Witch Fingers profile
   - `/venues` — Venue Directory
   - `/venue/masquerade_atlanta` — Masquerade profile
   - `/join` — Join form (Band / Venue / Agent toggle)
   - `/agent` — Agent login (visual only)
   - `/ticket/checkout` — Ticketing demo (fake checkout)
