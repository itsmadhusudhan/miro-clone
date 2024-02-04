"use client";

import EmptyBoards from "./empty/Boards";
import EmptyFavorites from "./empty/Favorites";
import EmptySearch from "./empty/Search";

type Props = {
  query: {
    search?: string;
    favorites?: string;
  };
  organizationId: string;
};

const BoardList = (props: Props) => {
  const { query, organizationId } = props;
  const data = [];

  if (!data.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data.length) {
    return <EmptyBoards />;
  }

  return <div>Board</div>;
};

export default BoardList;
