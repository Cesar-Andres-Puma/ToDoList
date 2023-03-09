import { Header } from "@/components/header";
import { InputL } from "@/components/input";
import { List } from "@/components/list/list";

export default function Home() {
  return (
    <>
      <Header />
      <InputL type={"text"} name={""} />
      <List />
    </>
  );
}
