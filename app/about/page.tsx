import { redirect } from "next/navigation";

// Icerik tek sayfa akisina tasindi; eski baglantilar bozulmasin diye
// ilgili bolume yonlendiriyoruz.
export default function Page() {
  redirect("/#hakkimda");
}
