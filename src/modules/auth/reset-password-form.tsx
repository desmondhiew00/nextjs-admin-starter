"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { type SubmitErrorHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import FormTextInput from "@/components/common/form-text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { LinkButton } from "@/components/ui/link-button";
import validator from "@/lib/form-validator";
import { parseErrorMessage } from "@/lib/utils";

import { resetPassword } from "./auth.action";

const formSchema = z
  .object({
    newPassword: validator.password("New Password", 4),
    confirmPassword: validator.password("Confirm Password", 4),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New Password and Confirm Password do not match",
    path: ["confirmPassword"],
  });
type FormValues = z.infer<typeof formSchema>;

export default function ResetPasswordForm({ token, email }: { token: string; email: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { newPassword: "", confirmPassword: "" },
  });

  const onFormSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const res = await resetPassword(token, data.newPassword);
      if (res.error) throw new Error(res.error);
      toast.success("Password reset successfully. You can now login with your new password.");
      setSuccess(true);
    } catch (e) {
      toast.error(parseErrorMessage(e));
    }
    setLoading(false);
  };

  const onFormError: SubmitErrorHandler<FormValues> = (e) => {
    Object.values(e).map((e) => toast.error(e.message));
  };

  if (success) {
    return (
      <div className="text-center">
        <div className="mb-4 space-y-3 text-center">
          <CheckCircle2 className="bounce-in-top mx-auto h-16 w-16 text-green-500" />
          <h1 className="text-2xl font-semibold tracking-tight">Password Reset Successful</h1>
          <p className="text-sm text-muted-foreground">
            Your password has been reset successfully. You can now login with your new password.
          </p>
        </div>
        <LinkButton href="/login" className="mt-4 fade-in" label="Back to Sign In" />
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Reset Your Password</h1>
        <p className="text-sm text-muted-foreground">Enter your new password to reset your password.</p>
        <h3 className="p-2 rounded bg-secondary font-medium">{email}</h3>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onFormSubmit, onFormError)} className="w-full space-y-2">
          <FormTextInput control={form.control} name="newPassword" label="New Password" type="password" />
          <FormTextInput control={form.control} name="confirmPassword" label="Confirm Password" type="password" />
          <div className="pt-6">
            <Button loading={loading} className="ml-auto w-full" type="submit" disabled={!form.formState.isDirty}>
              Reset Password
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
