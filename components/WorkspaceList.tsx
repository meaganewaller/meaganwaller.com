import { WorkspaceData } from "@localTypes/workspace";
import WorkspaceItem from "./Items/WorkspaceItem";

type Props = {
  items: WorkspaceData[];
}

export function WorkspaceList({ items }: Props) {
  return (
    <div className="list-none grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item) => (
        <WorkspaceItem key={item.slug} slug={item.slug} item={item} />
      ))}
    </div>
  );
}
