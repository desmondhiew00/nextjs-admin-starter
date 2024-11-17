"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitErrorHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { FormItemPreview } from "@/components/common/form-item-preview";
import FormTextInput from "@/components/common/form-text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import validator from "@/lib/form-validator";
import { parseErrorMessage } from "@/lib/utils";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  name: validator.string("Name"),
});
type FormValues = z.infer<typeof formSchema>;

export function ProfileForm() {
  const { data: session, update: sessionUpdate } = useSession();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: session?.authUser.fullName || "",
    },
  });

  const onFormSubmit = async (formValues: FormValues) => {
    setSubmitting(true);
    try {
      // TODO: Call API to update profile
      sessionUpdate({ fullName: formValues.name });
      toast.success("Profile updated successfully");
    } catch (e) {
      toast.error(parseErrorMessage(e));
    }
    setSubmitting(false);
  };

  const onFormError: SubmitErrorHandler<FormValues> = (e) => {
    Object.values(e).map((e) => toast.error(e.message));
  };

  return (
    <div className="sm:max-w-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onFormSubmit, onFormError)} className="grid w-full gap-4 space-y-2">
          <FormTextInput control={form.control} name="name" label="Name" disabled={submitting} />
          <FormItemPreview label="Email" value={session?.authUser.email} />

          <div>
            <Button loading={submitting} type="submit" disabled={!form.formState.isDirty}>
              Update Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ProfileForm;
