// "use client";

// import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

// import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { SortOrder, useAdminsQuery } from "@/graphql";
// import { cn } from "@/lib/utils";
// import { CheckboxSelect } from "../common/checkbox-select";

// interface Props {
//   className?: string;
//   value?: string[];
//   onChange?: (value: string[]) => void;
//   disabled?: boolean;
// }

// export const AmenitySelect: React.FC<Props> = (props) => {
//   const query = useAdminsQuery({
//     take: 99,
//     orderBy: { fullName: SortOrder.Asc },
//   });
//   const options = (query.data?.admins.data || []).map((item) => ({
//     label: item.fullName,
//     value: String(item.id),
//   }));

//   return <CheckboxSelect options={options} {...props} className={cn("", props.className)} />;
// };

// interface FormFileInputProps<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
// > extends Partial<ControllerProps<TFieldValues, TName>> {
//   name: TName;
//   label?: string;
//   description?: string;
//   required?: boolean;
// }
// export const AmenityFormSelect = <
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
// >(
//   props: FormFileInputProps<TFieldValues, TName>,
// ) => {
//   const { label, name, description, control, required } = props;

//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => {
//         return (
//           <FormItem>
//             <FormLabel type="span" required={required}>
//               {label}
//             </FormLabel>
//             <FormControl>
//               <div>
//                 <AmenitySelect
//                   className="pt-3"
//                   value={field.value || []}
//                   onChange={field.onChange}
//                   disabled={props.disabled}
//                 />
//               </div>
//             </FormControl>
//             <FormDescription>{description}</FormDescription>
//             <FormMessage />
//           </FormItem>
//         );
//       }}
//     />
//   );
// };
