import { redirect } from "next/navigation";

// Eski baglantilar bozulmasin diye yeni sayfaya yonlendiriyoruz.
export default function Page() {
  redirect("/hakkimda");
}
