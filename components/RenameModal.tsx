'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { db, storage } from "@/firebase";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"


function RenameModal() {

    const { user } = useUser();
    const { toast } = useToast();
    const [input, setInput] = useState("");

    const [ isRenameModalOpen, setIsRenameModalOpen,fileId, filename, setFilename, ] = 
    useAppStore((state) => [
       state.isRenameModalOpen, state.setIsRenameModalOpen, state.fileId, state.filename, state.setFilename, 
    ]);

    async function renameFile() {
      if (!user || !fileId) return;
      
      console.log("trying");
      toast({
        description: "Renaming File",
      });
      await updateDoc(doc(db, "users", user.id, "files", fileId), {
        filename: input
      }).finally(()=> {
        toast({
          description: "File Renamed!",
        });
      });

      setInput("");
      setIsRenameModalOpen(false);
    }

    return (
        <Dialog open={isRenameModalOpen}  
        onOpenChange={(isOpen) => {
            setIsRenameModalOpen(isOpen)
        }}
    >
       
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Rename the File</DialogTitle>
              <Input id="link" defaultValue={filename} onChange={(e) => setInput(e.target.value)}
                onKeyDownCapture={(e) => {
                  if (e.key === "Enter") {
                    renameFile();
                  }
                }}
              />
            </DialogHeader>
            <div className="flex items-center space-x-2">
            <Button 
              size="sm" 
              className="px-3 flex-1" 
              variant="ghost"
              onClick={() => setIsRenameModalOpen(false)} // Pass false to close the modal
            >
              <span>Cancel</span>
            </Button>
               <Button type="submit" size="sm" className="px-3 flex-1"  
                onClick={() => renameFile()}
               >
                <span>Rename</span>
               </Button>
            </div>
           
          </DialogContent>
        </Dialog>
      )
}

export default RenameModal