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
import { useAppStore } from "@/store/store";
 

export function DeleteModal() {
    const [fileId, setFileId, setIsDeleteModalOpen, setIsRenameModalOpen] = 
    useAppStore(state => [
      state.fileId, state.setFileId, state.setIsDeleteModalOpen, state.setIsRenameModalOpen
    ]);

    async function deleteFile() {
        
    }

  return (
    <Dialog open={setIsDeleteModalOpen}
        onOpenChange={(isOpen) => {
            setIsDeleteModalOpen(isOpen)
        }}
    >
   
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sur eyou want to delete?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
           <Button size="sm" className="px-3 flex-1" variant={"ghost"}
            onClick={() => setIsDeleteModalOpen(false)}
           >
            <span>Cancel</span>
           </Button>
           <Button type="submit" size="sm" className="px-3 flex-1"  
            onClick={() => deleteFile()}
           >
            <span>Delete</span>
           </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
