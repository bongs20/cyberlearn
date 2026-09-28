import ThreatDetailTemplate from "@/components/ThreatDetailTemplate";
import { MATERIALS_DATA } from "@/data/materials";

export default function SocialEngineeringPage() {
  return <ThreatDetailTemplate material={MATERIALS_DATA["social-engineering"]} />;
}
