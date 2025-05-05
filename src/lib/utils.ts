// import { User } from "@/domain/entities/User";
import { type ClassValue, clsx } from "clsx"
import { format } from "date-fns";
import { NavigateFunction } from "react-router-dom";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function setUserLocal(user: User): void {
//   localStorage.setItem('dataUser', JSON.stringify(user));
// }

// export function getUserLocal(): User | null {
//   const user = localStorage.getItem('dataUser');
//   return user ? JSON.parse(user) : null;
// }

export function removeDataLocal(): void {
  localStorage.removeItem('userDomain');
  localStorage.removeItem('dataUser');
  localStorage.removeItem('tenantData');
}

export function formatPhone(phone: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const { length } = cleanPhone;

  if (length <= 10) {
    return cleanPhone.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
  } else if (length <= 11) {
    return cleanPhone.replace(/(\d{2})(\d{5})(\d+)/, '($1) $2-$3');
  }

  return phone;
}

export function feedbackSuccess(msg: string) {
  toast.success('', {
    description: msg
  });
}

export function feedbackError(msg: string) {
  toast.error('', {
    description: msg
  });
}

export function convertArrayToObject<T extends { id: string }>(array: T[]): Record<string, T> {
  return array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {} as Record<string, T>);
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertOutherArrayToObject(array: any[]): any {
  return array.reduce((obj, item) => {
    const [key, value] = Object.entries(item)[0];
    obj[key] = value;
    return obj;
  }, {});
}

export function reloadPage(navigate: NavigateFunction): void {
  setTimeout(() => navigate(0), 1000);
}

export function formatDate(date: Date, formatDate: string = 'dd/MM/yyyy'): string {
  return format(date, formatDate);
}

export function replaceHTML(str: string): string {
  return str.replace(/<[^>]*>?/gm, '');
}

export function truncateInfo(description: string, maxLength: number): string {
  if (description.length <= maxLength) return description;
  return `${description.substring(0, maxLength)}...`;
}

export function normalizeString (text: string): string { 
  return text?.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || "";
}
