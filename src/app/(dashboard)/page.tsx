"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/EmptyOrg";
import BoardList from "./_components/BoardList";

type Props = {
  searchParams: {
    search?: string;
    favorites?: string;
  };
};

const DashboardPage = (props: Props) => {
  const { searchParams } = props;
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-86px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList organizationId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default DashboardPage;
