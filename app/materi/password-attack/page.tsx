import ThreatDetailTemplate from "@/components/ThreatDetailTemplate";
import { MATERIALS_DATA } from "@/data/materials";

export default function PasswordAttackPage() {
  return <ThreatDetailTemplate material={MATERIALS_DATA["password-attack"]} />;
}
