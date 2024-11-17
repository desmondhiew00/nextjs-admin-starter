"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { type SubmitErrorHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import FormTextInput from "@/components/common/form-text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import type { AdminFragment, AdminInfoFragment } from "@/graphql";
import validator from "@/lib/form-validator";
import { parseErrorMessage } from "@/lib/utils";

const formSchema = z.object({
  name: validator.string("Name"),
});
type FormValues = z.infer<typeof formSchema>;

const toFormData = (record?: AdminFragment): FormValues => {
  return {
    name: record?.name || "",
  };
};

interface Props {
  mode: "create" | "edit";
  record?: AdminInfoFragment;
}

export default function AdminForm({ mode, record }: Props) {
  const _router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const isCreate = !record;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: toFormData(record),
  });

  const onFormSubmit = async (_formValues: FormValues) => {
    setSubmitting(true);
    try {
      if (mode === "create") {
        // TODO: Implement create logic
        toast.success("Admin created successfully");
      } else if (mode === "edit" && record) {
        // TODO: Implement update logic
        toast.success("Admin updated successfully");
      }
      // TODO: define redirect path
      // router.push("/");
    } catch (e) {
      toast.error(parseErrorMessage(e));
    }
    setSubmitting(false);
  };

  const onFormError: SubmitErrorHandler<FormValues> = (e) => {
    Object.values(e).map((e) => toast.error(e.message));
  };

  return (
    <div className="lg:max-w-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onFormSubmit, onFormError)} className="grid w-full gap-4 space-y-2">
          <FormTextInput control={form.control} name="name" label="Name" disabled={submitting} />
          {/* Other inputs */}
          <div>
            <Button loading={submitting} type="submit" disabled={!form.formState.isDirty}>
              {isCreate ? "Create" : "Update"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
