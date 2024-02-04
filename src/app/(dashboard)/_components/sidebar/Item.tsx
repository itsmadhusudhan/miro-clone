" use client";

import Hint from "@/components/Hint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

type Props = {
  id: string;
  name: string;
  imageUrl: string;
};

const Item = (props: Props) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === props.id;

  const onClick = () => {
    if (!setActive) {
      return;
    }

    setActive({ organization: props.id });
  };

  return (
    <div className="aspect-square relative" onClick={onClick}>
      <Hint label={props.name} side="right">
        <Image
          fill={true}
          src={props.imageUrl}
          alt={props.name}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100",
            "transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};

export default Item;
