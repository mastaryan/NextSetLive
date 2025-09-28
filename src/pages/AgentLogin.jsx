import React from "react";

export default function AgentLogin(){
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-green-400">Agent Login</h1>
      <p className="text-gray-300 mb-4">Demo-only login for booking agents managing multiple bands.</p>
      <form className="space-y-4 bg-gray-900 border border-gray-800 p-4 rounded-xl">
        <label className="block">
          <span className="text-sm text-gray-400">Email</span>
          <input className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded" placeholder="agent@example.com" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-400">Password</span>
          <input type="password" className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded" placeholder="••••••••" />
        </label>
        <button className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-500 font-bold">Log In</button>
      </form>
      <div className="mt-4 text-sm text-gray-400">This is a visual placeholder — authentication not implemented.</div>
    </div>
  )
}
