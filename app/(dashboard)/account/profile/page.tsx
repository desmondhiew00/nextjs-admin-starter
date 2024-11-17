import BreadCrumb from "@/components/layout/breadcrumb";
import InfoContainer from "@/components/layout/info-container";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import ProfileForm from "@/modules/account/profile-form";

export const metadata = {
  title: "Profile Settings",
  description: "Manage your profile settings",
};

export default async function Page() {
  return (
    <InfoContainer>
      <BreadCrumb items={[{ title: "Account" }, { title: "Profile Settings" }]} />
      <Heading title="Profile Settings" description="Manage your profile settings" />

      <Separator />

      <ProfileForm />
    </InfoContainer>
  );
}
