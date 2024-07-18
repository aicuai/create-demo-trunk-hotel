"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function MainComponent() {
  const [center, setCenter] = React.useState({ lat: 35.6672, lng: 139.7088 });

  return (
    <div className="font-sans bg-gray-100">
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">TRUNK HOTEL</h1>
          <p className="text-xl mt-2">Event at Shibuya's Socializing Hotspot</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Event Location</h2>
          <div className="h-[400px] mb-4">
            <ReactGoogleMaps.APIProvider
              apiKey={NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            >
              <ReactGoogleMaps.Map
                id="map"
                mapId="map"
                center={center}
                zoom={15}
                className="w-full h-full"
              >
                <ReactGoogleMaps.AdvancedMarker position={center} />
              </ReactGoogleMaps.Map>
            </ReactGoogleMaps.APIProvider>
          </div>
          <p className="text-lg">
            Address: 5 Chome 31, Jingumae, Shibuya City, Tokyo 150-0001
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-lg mb-4">
                "An incredible experience! The atmosphere was perfect for
                networking."
              </p>
              <p className="font-bold">- Sarah K.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-lg mb-4">
                "TRUNK HOTEL provides the ideal setting for our creative
                meetups."
              </p>
              <p className="font-bold">- David M.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Influencer Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <img
                src="/influencer1.jpg"
                alt="Influencer 1"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">Yuki T.</h3>
              <p>Fashion & Lifestyle Blogger</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <img
                src="/influencer2.jpg"
                alt="Influencer 2"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">Kenji R.</h3>
              <p>Tech Entrepreneur</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <img
                src="/influencer3.jpg"
                alt="Influencer 3"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">Mia L.</h3>
              <p>Travel Vlogger</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits of using Create</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">
                Networking Opportunities
              </h3>
              <p>
                Connect with like-minded individuals in a vibrant atmosphere.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Inspiring Environment</h3>
              <p>
                Immerse yourself in a space designed to foster creativity and
                collaboration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Exclusive Events</h3>
              <p>Gain access to unique experiences and workshops.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Community Building</h3>
              <p>Be part of a thriving community of creators and innovators.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Register for the Event</h2>
          <form className="bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="occupation"
                className="block text-gray-700 font-bold mb-2"
              >
                Occupation
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            >
              Register
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 TRUNK HOTEL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;