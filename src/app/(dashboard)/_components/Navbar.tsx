"use client";

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";
import SearchInput from "./SearchInput";
import InviteButton from "./InviteButton";

const Navbar = () => {
  const { organization } = useOrganization();

  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal={true}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "360px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                justifyContent: "space-between",
                backgroundColor: "white",
                border: "1px solid #E5E7EB",
              },
            },
          }}
        />
      </div>
      {organization ? <InviteButton /> : null}
      <UserButton />
    </div>
  );
};

export default Navbar;
