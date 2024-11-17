"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitErrorHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import FormTextInput from "@/components/common/form-text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useConfirmModal } from "@/context/confirm-modal-context";
import validator from "@/lib/form-validator";
import { parseErrorMessage } from "@/lib/utils";

const formSchema = z
  .object({
    oldPassword: validator.password("Old Password", 4),
    newPassword: validator.password("New Password", 4),
    confirmPassword: validator.password("Confirm Password", 4),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New Password and Confirm Password do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

export function ChangePasswordForm() {
  const [submitting, setSubmitting] = useState(false);
  const { confirm } = useConfirmModal();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onFormSubmit = async (formValues: FormValues) => {
    confirm?.({
      title: "Change Password Confirmation",
      description: "Are you sure you want to change your password?",
      onConfirm() {
        changePassword(formValues);
      },
      onCancel() {
        form.reset();
      },
    });
  };

  const onFormError: SubmitErrorHandler<FormValues> = (e) => {
    Object.values(e).map((e) => toast.error(e.message));
  };

  const changePassword = async (_formValues: FormValues) => {
    setSubmitting(true);
    try {
      // TODO: Implement password change logic
      form.reset();
      toast.success("Password updated successfully");
    } catch (e) {
      toast.error(parseErrorMessage(e));
    }
    setSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit, onFormError)} className="grid w-full gap-4 space-y-2">
        <FormTextInput
          control={form.control}
          name="oldPassword"
          label="Old Password"
          type="password"
          disabled={submitting}
        />
        <FormTextInput
          control={form.control}
          name="newPassword"
          label="New Password"
          type="password"
          disabled={submitting}
        />
        <FormTextInput
          control={form.control}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          disabled={submitting}
        />

        <div>
          <Button loading={submitting} type="submit" disabled={!form.formState.isDirty}>
            Change Password
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ChangePasswordForm;
