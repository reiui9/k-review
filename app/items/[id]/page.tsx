import { notFound } from "next/navigation";

import { EARTH_ITEM_BY_ID } from "@/app/lib/earth-data";

import ItemDetailClient from "./ItemDetailClient";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = EARTH_ITEM_BY_ID[id];
  if (!item) notFound();
  return <ItemDetailClient item={item} />;
}
