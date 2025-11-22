"use client";

import { useEffect, useState } from "react";

export default function TrendingPage() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch("/api/trending")
      .then((res) => res.json())
      .then((data) => setTrends(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Trending Topics</h1>
      <ul>
        {trends.map((trend: any, i: number) => (
          <li key={i} className="py-2 border-b">
            <span className="font-bold">#{trend.tag}</span>  
            <span className="text-gray-500 text-sm ml-2">{trend.count} posts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
