import { MainBanner } from "../components/MainBanner";
import { MonitorSection } from "../components/MonitorSection";
export type DataProps = {
  svg: string,
  h1: string,
  p: string,
}

export default function Home() {
  return (
    <>
      <MainBanner />
      <MonitorSection />
    </>
  );
}
