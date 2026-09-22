import { getAuth } from "firebase-admin/auth";
import "@/lib/firebase-admin";

export async function verifyUser(request) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.split("Bearer ")[1];

  try {
    const decodedToken = await getAuth().verifyIdToken(token);

    return decodedToken;
  } catch {
    return null;
  }
}