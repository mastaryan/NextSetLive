import React, { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import QRCode from "qrcode.react";
import shows from "../data/shows";
import bands from "../data/bands";
import venues from "../data/venues";

export default function TicketConfirm() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const showId = params.get("showId");
  const qty = params.get("qty") || "1";

  const show = useMemo(() => shows.find((s) => s.id === showId) || null, [showId]);
  const band = show ? bands.find((b) => b.id === show.bandId) : null;
  const venue = show ? venues.find((v) => v.id === show.venueId) : null;

  if (!show) return <div className="p-6">Show not found.</div>;

  const payload = JSON.stringify({
    t: "nextset-ticket",
    showId,
    bandId: band?.id,
    bandName: band?.name,
    venueId: venue?.id,
    venueName: venue?.name,
    when: show.date,
    qty
  });

  const onPrint = () => window.print();

  const onTransfer = () => {
    const email = prompt("Enter email to transfer ticket to (demo only):");
    if (email) alert("Transfer link sent to " + email + " (demo).");
  };

  function downloadDemoPass() {
    // Create a demo pass object (JSON). This is NOT a valid signed .pkpass for Apple Wallet.
    const pass = {
      description: "NextSetLive Demo Ticket",
      organizationName: "NextSetLive",
      serialNumber: `nextset-${showId}-${Date.now()}`,
      passTypeIdentifier: "pass.com.example.nextsetlive.demo",
      teamIdentifier: "DEMO",
      event: {
        title: show.title,
        date: show.date,
        band: band?.name,
        venue: venue?.name,
        qty
      },
      qr: {
        payload
      }
    };

    const blob = new Blob([JSON.stringify(pass, null, 2)], { type: "application/vnd.apple.pkpass" });
    const filename = `nextset-ticket-${showId}.pkpass`; // demo file (unsigned)
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 2000);

    // Transparent note: this is a demo .pkpass file (JSON). Apple Wallet requires signed PKPass packages.
    // Use a pass signing service or your backend with a valid certificate to create a real .pkpass.
  }

  return (
    <div className="p-6 max-w-xl mx-auto print:max-w-none">
      <h1 className="text-3xl font-extrabold mb-4 text-green-400">Order Confirmed</h1>

      <div className="border border-gray-700 rounded-lg p-4 bg-gray-900 mb-4">
        <p className="font-semibold text-purple-400">{show.title}</p>
        <p className="text-gray-400">{new Date(show.date).toLocaleString()}</p>
        <p className="text-gray-400">{venue?.name} — {venue?.city}, {venue?.state}</p>
        <p className="text-gray-400">Qty: {qty}</p>
      </div>

      <div className="flex items-center justify-center my-6">
        <QRCode value={payload} size={180} />
      </div>

      <div className="flex gap-3">
        <button onClick={onPrint} className="px-4 py-2 bg-gray-200 text-black rounded">Download PDF</button>

        <button onClick={onTransfer} className="px-4 py-2 bg-purple-600 rounded text-white">Transfer</button>

        <button onClick={downloadDemoPass} className="px-4 py-2 bg-green-500 text-black rounded">Add to Wallet</button>

        <Link to={`/band/${band?.id}`} className="px-4 py-2 bg-gray-800 text-white rounded border border-gray-700">Back to Band</Link>
      </div>

      <p className="text-xs text-gray-500 mt-3">
        Note: the “Add to Wallet” button downloads a demo pass file (unsigned). To integrate with Apple Wallet or Google Pay Wallet in production you must generate a signed .pkpass (Apple) or a properly formatted Android/Google Wallet object via their APIs.
      </p>
    </div>
  );
}
