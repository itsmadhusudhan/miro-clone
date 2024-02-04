"use client";

import { useOrganizationList } from "@clerk/nextjs";
import Item from "./Item";

const OrganisationList = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data) {
    return null;
  }

  return (
    <ul className="space-y-4">
      {userMemberships.data.map(({ organization }) => (
        <Item
          key={organization.id}
          id={organization.id}
          imageUrl={organization.imageUrl}
          name={organization.name}
        />
      ))}
    </ul>
  );
};

export default OrganisationList;
