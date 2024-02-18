"use client";
import Products from "@/components/layout/product/Products";
import { usePathname } from "next/navigation";

export default function ProductsCategoryPage() {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const category = parts[parts.length - 1];
  return (
    <div className="relative flex flex-col h-full pt-16 bg-neutral-900">
      <Products category={category} />
    </div>
  );
}
