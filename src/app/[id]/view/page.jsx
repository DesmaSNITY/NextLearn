"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader } from "lucide-react";

export default function viewPage({params}){
    const {id} = params;
    const [token, setToken] = useState("");
    const [note ,setNote] = useState(null);
    const [title ,setTitle] = useState("")
    const router = useRouter();

    useEffect(() => {

        const storedToken = localStorage.getItem("token");
        if (!storedToken) {
          router.push("/");
          return;
        }
        setToken(storedToken)

        const fetchNote = async () => {
            try{
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`)
                if(!res.ok) throw new Error("catatan tidak ditemukan")
                const {data} = await res.json();
                setTitle(data.title)
                setNote(data.content)
            
            }catch(e){console.log(e)}
        }
        fetchNote();
    }, []);
    if (!note) {
        return (
            <div className="mt-20 flex flex-col justify-center items-center gap-4 text-center text-2xl text-gray-500">
            <Loader size={24} className="animate-spin text-blue-700" />
            <p>Memuat catatan...</p>
            </div>
        )
      }
    return(
    <Card className="max-w-xl mx-auto p-6 space-y-4">
          <h1 className="text-3xl text-center font-bold">Edit Catatan</h1>
    
          <div className="mt-10">
            <Label htmlFor="title" className="ml-2 block text-4xl font-bold mb-1">
              {title}
            </Label>
            
          </div>
    
          <div>
            <Label htmlFor="content" className="ml-2 block text-base font-medium mb-1">
              {note}
            </Label>
          </div>
    
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => router.back()}>
              Kembali
            </Button>
          </div>
        </Card>
    
    );
}