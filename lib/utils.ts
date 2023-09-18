import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function GoToRoute(url:string){
  const router = useRouter()
  router.push(url)

}