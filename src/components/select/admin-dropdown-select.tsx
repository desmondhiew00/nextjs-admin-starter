// "use client";
// import { useEffect, useState } from "react";

// import { type AdminFragment, SortOrder, useAdminQuery, useInfiniteAdminsQuery } from "@/graphql";

// import { Card, CardContent } from "../ui/card";
// import { Combobox } from "../ui/combo-box";

// interface Props {
//   value?: number;
//   disabled?: boolean;
//   width?: number;
//   placeholder?: string;
//   onChange?: (value: number | undefined) => void;
//   preview?: boolean;
// }

// const limit = 100;
// export const adminSelect: React.FC<Props> = (props) => {
//   const [selected, setSelected] = useState<AdminFragment>();
//   const [value, setValue] = useState<number>();
//   const [keyword, setKeyword] = useState("");

//   useEffect(() => {
//     if (props.value && props.value !== value) setValue(props.value);
//   }, [props.value]);

//   const infoQuery = useAdminQuery({ where: { id: value } }, { enabled: !!value });
//   const info = infoQuery.data?.admin;

//   const query = useInfiniteAdminsQuery(
//     {
//       orderBy: { fullName: SortOrder.Asc },
//       where: keyword ? { fullName: { contains: keyword } } : undefined,
//     },
//     {
//       initialPageParam: { take: limit, skip: 0 },
//       getNextPageParam: (lastPage, pages) => {
//         const itemsCount = pages.map((page) => page.admins.data.length).reduce((a, b) => a + b, 0);
//         const hasMore = lastPage.admins.total > itemsCount;
//         if (hasMore) return { take: limit, skip: limit * pages.length };
//         return undefined;
//       },
//     },
//   );
//   const admins = query.data?.pages.flatMap((page) => page.admins.data) || [];
//   const loading = query.isFetching;
//   const hasSelectedRecord = admins.find((admin) => admin.id === Number(value));
//   if (!hasSelectedRecord && info) admins.unshift(info);

//   const options = admins.map((admin) => ({
//     value: admin.id.toString(),
//     label: admin.fullName,
//   }));
//   return (
//     <>
//       <Combobox
//         disabled={props.disabled}
//         value={value?.toString()}
//         width={props.width || 300}
//         placeholder={props.placeholder || "Select"}
//         loading={loading}
//         options={options}
//         shouldFilter={false}
//         onKeywordChange={setKeyword}
//         onReachBottom={() => {
//           if (query.hasNextPage) query.fetchNextPage();
//         }}
//         onSelect={(value) => {
//           setValue(Number.parseInt(value));
//           props.onChange?.(Number.parseInt(value));
//           setSelected(admins.find((admin) => admin.id === Number(value)));
//         }}
//       />
//       {props.preview && <AdminInfo admin={info || selected} />}
//     </>
//   );
// };

// const AdminInfo = ({ admin }: { admin?: AdminFragment }) => {
//   if (!admin) return null;
//   return (
//     <Card className="mt-2 max-w-[300px]">
//       <CardContent className="p-3">
//         <div className="flex items-start gap-3">
//           <div>
//             <div className="">{admin.fullName}</div>
//             <div className="">{admin.email}</div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default adminSelect;
