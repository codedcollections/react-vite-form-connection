import { db } from "./firebase"
import { ref, push, set, serverTimestamp } from "firebase/database"
import { onValue } from "firebase/database"

export async function sendRSVP(rsvpData = {}) {
  const rsvpRef = ref(db, "rsvps")

  const newRsvp = push(rsvpRef)

  await new set(newRsvp, {
    ...rsvpData,
    createdAt: serverTimestamp(),
  })
}

export async function onRSVPS(key, setter) {
  const rsvpRef = ref(db, "rsvps")

  onValue(rsvpRef, (snapshot) => {
    const rsvps = snapshot.val()
    console.log(rsvps)
    setter(rsvps)
  })
}
