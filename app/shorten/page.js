"use client";

import { redirect } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const handleShorten = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("/api/generate", requestOptions);
      const result = await response.json();
        alert("Your short URL is: " + result.shortUrl);
        setShortUrl("");
        setUrl("");
      setGenerated(result.shortUrl || "Url already exists or invalid input");
      
        
        
    } catch (error) {
      console.error(error);
    }

  
      
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0a14] text-black px-4">
      <div className="bg-white text-black p-6 rounded-xl shadow-xl w-100 max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#5D1C6A]">
          Shorten Your URL
        </h1>

        <input
          type="text"
          className="w-full p-2 border rounded text-black"
          placeholder="Enter Your URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          type="text"
          className="w-full p-2 border rounded text-black"
          placeholder="Enter short name"
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
        />

        <button
          onClick={handleShorten}
          className="w-full bg-[#5D1C6A] text-white py-2 rounded mt-1 hover:bg-purple-700"
        >
          Shorten URL
        </button>

        {generated && (

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">Your Short URL:</p>
                 <a
              href={generated}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 break-all"
            >
             {generated}
            </a>
          </div>

        )}
      </div>
    </div>
  );
};

export default Shorten;
