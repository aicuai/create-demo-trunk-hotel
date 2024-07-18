"use client";
import React from "react";

function MainComponent() {
  const [prompt, setPrompt] = React.useState(
    "1girl, looking at viewer, animation"
  );
  const [negativePrompt, setNegativePrompt] = React.useState(
    "worst quality, nsfw"
  );
  const [resolution, setResolution] = React.useState("1024x1024");
  const [generatedImage, setGeneratedImage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const [width, height] = resolution.split("x").map(Number);
      const response = await fetch(
        `/integrations/stable-diffusion-v-3/?prompt=${encodeURIComponent(
          prompt
        )}&negative_prompt=${encodeURIComponent(
          negativePrompt
        )}&width=${width}&height=${height}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setGeneratedImage(data.data[0]);
    } catch (error) {
      console.error("Error generating image:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">
              Image Generation
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              Stable Diffusion V3
            </h1>
            <div className="mt-4">
              <label
                htmlFor="prompt"
                className="block text-sm font-medium text-gray-700"
              >
                Prompt
              </label>
              <input
                type="text"
                name="prompt"
                id="prompt"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="negativePrompt"
                className="block text-sm font-medium text-gray-700"
              >
                Negative Prompt
              </label>
              <input
                type="text"
                name="negativePrompt"
                id="negativePrompt"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="resolution"
                className="block text-sm font-medium text-gray-700"
              >
                Resolution
              </label>
              <input
                type="text"
                name="resolution"
                id="resolution"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                placeholder="1024x1024"
              />
            </div>
            <div className="mt-6">
              <button
                onClick={handleGenerate}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isLoading}
              >
                {isLoading ? "Generating..." : "Generate"}
              </button>
            </div>
          </div>
        </div>
        {generatedImage && (
          <div className="p-8">
            <img
              src={generatedImage}
              alt="Generated image based on user prompt"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MainComponent;