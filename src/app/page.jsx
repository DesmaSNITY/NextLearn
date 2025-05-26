"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { Loader, FilePlus2 } from "lucide-react";
import CardNotes from "@/components/my-components/CardNotes";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`);
        const data = await response.json();
        if (data.code === 200) {
          setNotes(data.data.notes);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    };

    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
    } else {
      try {
        const decodedToken = jwt.decode(token);
        setUserId(decodedToken.userId);
        setIsLoggedIn(decodedToken?.userId ? true : false);
      } catch {
        setIsLoggedIn(false);
      }
    }

    fetchNotes();
  }, []);
  
  return (
    <>
    {isLoggedIn ? (
      <div className="container max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        📚 Notes Collection
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
    ) : 
    (<div className="min-h-screen bg-primary/10 flex flex-col justify-center items-center p-6">
      {/* Container utama */}
      <div
      className="text-center p-8 max-w-4xl bg-white rounded-2xl shadow-md border border-primary opacity-0 translate-y-6 animate-fadeIn"
      style={{ animationDelay: "0s" }}
      >
      <h1
      className="text-5xl md:text-6xl font-extrabold text-primary mb-6 opacity-0 translate-y-6 animate-fadeIn"
      style={{ animationDelay: "0.2s" }}
      >
      Welcome to NotesApp
      </h1>
      <p
      className="text-lg md:text-xl text-secondary mb-6 max-w-xl mx-auto opacity-0 translate-y-6 animate-fadeIn"
      style={{ animationDelay: "0.4s" }}
      >
      A simple and powerful note-taking app for your everyday thoughts.
      </p>
      <Link href={isLoggedIn ? "/notes/create" : "/login"}>
      <p
      className="relative z-10 inline-block px-8 py-3 mb-4 bg-primary text-white rounded-lg text-lg font-semibold shadow hover:bg-primary/90 transition duration-300 translate-y-6 animate-fadeIn opacity-0"
      style={{ animationDelay: "0.6s" }}
      >
      Create a New Note
      </p>
      </Link>
      </div>
      
      {/* Features */}
      <div className="mt-20 max-w-7xl w-full px-4">
      <h2
      className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center opacity-0 translate-y-6 animate-fadeIn"
      style={{ animationDelay: "0.8s" }}
      >
      Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {[
        {
          title: "Take Notes",
          description:
          "Create and organize your notes with ease. Add title and content to each note.",
          icon: (
            <svg
            className="w-10 h-10 text-primary mb-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20h9M12 4h9M12 12h9M3 6h.01M3 18h.01M3 12h.01"
                    />
                </svg>
              ),
            },
            {
              title: "View Notes",
              description:
              "Browse all your notes and find them easily whenever you need.",
              icon: (
                <svg
                className="w-10 h-10 text-primary mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553-2.276a2 2 0 011.447 3.666l-4.553 2.275a2 2 0 01-1.447-3.665zM3 19v-4a4 4 0 014-4h12"
                    />
                </svg>
              ),
            },
            {
              title: "Edit Notes",
              description:
              "Update and modify your notes whenever needed with just a few clicks.",
              icon: (
                <svg
                className="w-10 h-10 text-primary mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5h6M7 8h10M7 12h10M7 16h10M7 20h10"
                    />
                </svg>
              ),
            },
          ].map(({ title, description, icon }, i) => (
            <div
            key={title}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 opacity-0 translate-y-6 animate-fadeIn"
            style={{ animationDelay: `${1 + i * 0.2}s` }}
            >
              {icon}
              <h3 className="text-xl font-semibold text-primary mb-2">
                {title}
              </h3>
              <p className="text-secondary">{description}</p>
            </div>
          ))}
          </div>
          </div>
          
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(15px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeIn {
              animation-name: fadeIn;
              animation-duration: 0.6s;
              animation-fill-mode: forwards;
              animation-timing-function: ease-out;
            }
            `}</style>
            </div>)
            
          }
          </>
        );
      }
      