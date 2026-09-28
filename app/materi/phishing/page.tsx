import ThreatDetailTemplate from "@/components/ThreatDetailTemplate";
import { MATERIALS_DATA } from "@/data/materials";

export default function PhishingPage() {
  return <ThreatDetailTemplate material={MATERIALS_DATA.phishing} />;
}
