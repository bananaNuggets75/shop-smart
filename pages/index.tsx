import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { auth, firestore } from "../firebase/userApp"; // Import the auth from your firebase.js
import { useAuthState } from "react-firebase-hooks/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // Use the imported 'auth' object from your firebase configuration
  const [user, loading, error] = useAuthState(auth);

  console.log("Loading", loading, "|", "Current user: ", user);
  
  return <div>Hello</div>;
}
