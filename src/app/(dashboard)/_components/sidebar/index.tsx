import NewButton from "./NewButton";
import OrganisationList from "./OrganisationList";

import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <aside
      className={cn(
        "fixed z-[1] left-0 h-full w-[60px] flex flex-col",
        " p-3 bg-blue-950 text-white gap-y-4"
      )}
    >
      <OrganisationList />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
