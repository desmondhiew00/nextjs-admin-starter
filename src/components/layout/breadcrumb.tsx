import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Route } from "next";

export type BreadCrumbItem = {
  title: string;
  href?: Route;
};

export interface BreadCrumbProps {
  items: BreadCrumbItem[];
}

export default function BreadCrumb({ items }: BreadCrumbProps) {
  // @ts-expect-error
  let itemsWithSeparator = items.reduce((acc, item) => {
    if (Array.isArray(acc)) return acc.concat({ title: "separator" }, item);
    return [acc, { title: "separator" }, item];
  }) as unknown as BreadCrumbItem[] | BreadCrumbItem;
  if (!Array.isArray(itemsWithSeparator)) itemsWithSeparator = [itemsWithSeparator];

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {itemsWithSeparator.length > 0 && <BreadcrumbSeparator />}
        {itemsWithSeparator?.map((item, index) => {
          const num = item.title + index;
          if (item.title === "separator") return <BreadcrumbSeparator key={num} />;
          return (
            <BreadcrumbItem key={item.href || item.title}>
              {item.href ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.title}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
