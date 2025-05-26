"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import CardNotes from "@/components/my-components/CardNotes";
import { Loader, FilePlus2 } from "lucide-react";
import jwt from "jsonwebtoken";



const ProfilePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [notes, setNotes] = useState([]);
    const [userId, setUserId] = useState(null);
    const  [userName, setUserName] = useState(null);



  useEffect(() => {
    const fetchNotes = async () => {
        const token = localStorage.getItem("token");
        // if (!userId) return;
        try {
          const decodedToken = jwt.decode(token);
          setUserId(decodedToken.userId);
          setUserName(decodedToken.username)
          setIsLoggedIn(!!decodedToken?.userId);
          console.log(decodedToken,"this is user id")
        
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`);
          const data = await response.json();
          if (data.code === 200) {
            // setNotes(data.data.notes);
            const filteredNotes = data.data.notes.filter(note => note.id_user === decodedToken.userId);
            setNotes(filteredNotes);
          }
        } catch (error) {
          console.error("Error fetching notes:", error);
          setIsLoggedIn(false);
        } finally {
          setLoading(false);
        }
    };

    

    fetchNotes();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="p-8">
        {/* Profile Box */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mx-8">
          <div className="flex items-center justify-between">
            {/* Left side - Profile info */}
            <div className="flex items-center space-x-4">
              {/* Profile Photo */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              
              {/* User Name */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{userName}</h2>
              </div>
            </div>

            {/* Right side - Logout Button */}
            <Button 
              variant="outline" 
              className="flex items-center space-x-2 text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
        <div className="container max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        📚 My Notes Collection
      </h1>

      {loading ? (
        <div className="mt-20 flex flex-col justify-center items-center gap-4 text-center text-xl text-primary animate-pulse">
          <Loader size={32} className="animate-spin text-primary" />
          <p>Mengambil catatan...</p>
        </div>
      ) : notes.length === 0 ? (
        <div className="mt-24 flex flex-col items-center justify-center text-gray-500">
          <FilePlus2 size={48} className="mb-4 text-blue-400" />
          <p className="text-lg">Belum ada catatan yang dibuat.</p>
          <p className="text-sm mt-2 text-muted-foreground">Klik tombol tambah catatan untuk memulai.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {notes.map((note) => (
              <CardNotes note={note} isOwner={note.id_user === userId} />
          ))}
        </div>
      )}
    </div>
      </main>
    </div>
  );
};

export default ProfilePage;