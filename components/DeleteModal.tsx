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
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useToast } from "@/components/ui/use-toast"

export function DeleteModal() {
    const { user } = useUser();
    const { toast } = useToast();
    const [ isDeleteModalOpen, setIsDeleteModalOpen, fileId, setFileId, ] = 
    useAppStore((state) => [
       state.isDeleteModalOpen, state.setIsDeleteModalOpen, state.fileId, state.setFileId, 
    ]);

    async function deleteFile() {
        
        if (!user || !fileId) return;
        
        const fileRef = ref(storage, `users/${user.id}/files/${fileId}`);

        try {
          toast({
            description: "File Deleting",
          });
            await deleteObject(fileRef).then(async () => {
                console.log("Deleted file");
                deleteDoc(doc(db, "users", user.id, "files", fileId)).then(() => {
                    console.log("deleted from db log");
                    
                });
            }).finally(() => {
              setIsDeleteModalOpen(false);
              toast({
                description: "File Deleted",
              });
            });
          
        } catch (error) {
            console.log(error);
        }
       
    }

  return (
    <Dialog open={isDeleteModalOpen}  
    onOpenChange={(isOpen) => {
        setIsDeleteModalOpen(isOpen)
    }}
>
   
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
        <Button 
          size="sm" 
          className="px-3 flex-1" 
          variant="ghost"
          onClick={() => setIsDeleteModalOpen(false)} // Pass false to close the modal
        >
          <span>Cancel</span>
        </Button>
           <Button type="submit" size="sm" className="px-3 flex-1"  
            onClick={() => deleteFile()}
           >
            <span>Delete</span>
           </Button>
        </div>
       
      </DialogContent>
    </Dialog>
  )
}
