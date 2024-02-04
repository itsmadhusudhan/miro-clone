import Hint from "@/components/Hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { CreateOrganization } from "@clerk/nextjs";
import { Plus } from "lucide-react";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Create Organisation" side="right">
            <button
              className={cn(
                "bg-white/25 h-full w-full rounded-md opacity-60 hover:opacity-100",
                "flex items-center justify-center",
                "transition"
              )}
            >
              <Plus size={24} />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
