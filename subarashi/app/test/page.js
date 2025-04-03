// app/test/page.jsx
"use client";

import { useState, useEffect } from "react";

export default function TestPage() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState({ status: "Initializing" });

  async function testEndpoint() {
    try {
      setDebugInfo((prev) => ({ ...prev, status: "Starting fetch" }));
      setLoading(true);
      setError(null);

      // Log before fetch attempt
      console.log("Attempting to fetch from /api/listings");

      const response = await fetch("/api/listings/sales-listings");
      setDebugInfo((prev) => ({
        ...prev,
        status: "Fetch completed",
        responseStatus: response.status,
        responseOk: response.ok,
      }));

      // Log response status
      console.log(`Response status: ${response.status}`);

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data received:", data);
      setDebugInfo((prev) => ({
        ...prev,
        status: "Data parsed",
        dataReceived: !!data,
        listingsCount: data?.listings?.length || 0,
      }));

      setResults(data);
    } catch (err) {
      console.error("Error in testEndpoint:", err);
      setDebugInfo((prev) => ({
        ...prev,
        status: "Error occurred",
        errorMessage: err.message,
        errorName: err.name,
        errorStack: err.stack,
      }));
      setError(err.message || "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  }

  // Automatically run the test when the component mounts
  useEffect(() => {
    console.log("Test page mounted, running test endpoint");
    testEndpoint();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">API Endpoint Test</h1>

      <div className="mb-4 p-4 bg-yellow-50 border border-yellow-300 rounded">
        <h2 className="font-bold">Debug Info:</h2>
        <pre className="whitespace-pre-wrap">
          {JSON.stringify(debugInfo, null, 2)}
        </pre>
      </div>

      <button
        onClick={testEndpoint}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        {loading ? "Testing..." : "Retry Test"}
      </button>

      {loading && <p className="mt-4">Loading data...</p>}

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p>
            <strong>Error:</strong> {error}
          </p>
          <p className="mt-2">
            <strong>Refresh the page</strong> and check browser console for more
            details.
          </p>
        </div>
      )}

      {results && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Results:</h2>
          <p className="mb-2">Successfully fetched {results.count} listings</p>

          <div className="mt-4 border p-4 rounded bg-gray-50">
            <h3 className="font-medium">First Listing Sample:</h3>
            <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto max-h-96">
              {JSON.stringify(results.listings[0], null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
