import { parsePhoneNumber } from "libphonenumber-js";

interface Props {
  value: string | null | undefined;
  emptyText?: string | null;
  render?: (text: string) => React.ReactNode;
}

export const PhoneNumberText: React.FC<Props> = ({ value, emptyText = "-", render }) => {
  if (!value) return emptyText;

  let phoneVal = value;
  if (phoneVal.charAt(0) !== "+") phoneVal = `+${phoneVal}`;

  try {
    const phoneNumber = parsePhoneNumber(phoneVal);
    const valid = phoneNumber.isValid();
    const text = valid ? phoneNumber.formatInternational() : value;

    return render ? render(text) : text;
  } catch (_error) {
    return render ? render(value) : value;
  }
};

export default PhoneNumberText;
