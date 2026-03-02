import { db } from "./firebase"
import { ref, push, set, serverTimestamp } from "firebase/database"

export async function sendRSVP(rsvpData = {}) {
  const rsvpRef = ref(db, "rsvps")

  const newRsvp = push(rsvpRef)

  await new set(newRsvp, {
    ...rsvpData,
    createdAt: serverTimestamp(),
  })
}
