import React, { useEffect, useState } from "react";
import { db } from "../../firebase"; // adjust to your config path
import { doc, getDoc } from "firebase/firestore";
import { Users } from "lucide-react";

const TotalUsers: React.FC = () => {
  const [userCount, setUserCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const ref = doc(db, "totalusers", "totalusers");
        const snap = await getDoc(ref);

        if (!snap.exists()) {
          const errorMessage = "🔥 Document not found";
          console.error(errorMessage);
          setError(errorMessage); // Set error state
          return;
        } else {
          const data = snap.data();
          console.log("🔥 Fetched data:", data); // Add this line for debugging
          const raw = data.totalusers;
          let count: number;

          if (typeof raw === "number") {
            count = raw;
          } else if (typeof raw === "string") {
            const parsed = parseInt(raw, 10);
            count = isNaN(parsed) ? 0 : parsed;
          } else {
            const errorMessage = "⚠️ Unexpected field type: " + typeof raw;
            console.error(errorMessage);
            setError(errorMessage); // Set error state
            count = 0;
          }

          setUserCount(count);
        }
      } catch (e: any) {
        const errorMessage = "❌ Error fetching totalusers: " + e.message;
        console.error(errorMessage);
        setError(errorMessage); // Set error state
      } finally {
        setLoading(false);
      }
    };

    fetchTotalUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center dark:bg-[#1f1f1f]">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Current Users</h3>
              <p className="text-4xl font-bold mt-1">Loading…</p>
            </div>
            <Users className="w-12 h-12 text-white opacity-80" />
          </div>
          <p className="mt-4">Updates daily</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center dark:bg-[#1f1f1f]">
        <div className="bg-red-500 text-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Error</h3>
              <p className="text-xl font-bold mt-1">{error}</p>
            </div>
            {/* You might want to use a different icon here, like an AlertTriangle */}
            <Users className="w-12 h-12 text-white opacity-80" />
          </div>
          <p className="mt-4">Failed to load user data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center dark:bg-[#1f1f1f]">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl shadow-xl p-6 w-full max-w-sm hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Current Users</h3>
            <p className="text-4xl font-bold mt-1">
              {userCount !== null ? userCount.toLocaleString() : "0"}
            </p>
          </div>
          <Users className="w-12 h-12 text-white opacity-80" />
        </div>
        <p className="mt-4">Updates daily</p>
      </div>
    </div>
  );
};

export default TotalUsers;
