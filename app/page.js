import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./_components/footer";
import Reqintro from "./_components/reqintro";
import Ourinsights from "./_components/ourinsghts";

export default function Home() {
  return (
    <main>
      <Ourinsights/>
      <Reqintro/>
      <Footer/>
    </main>
  );
}
