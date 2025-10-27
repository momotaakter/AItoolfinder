
import Toolcard from "./Toolcard";


export default function Home() {
  return (
    <main className=" bg-gray-50 flex items-center justify-center p-6">
      <Toolcard
        name="Basepilot"
        initials="BA"
        category="workflow automation"
        isFree
        rank={0}
        description="Basepilot is an AI tool designed to automate work tasks, focusing primarily on repetitive, manual jobs."
        votes={48}
      />
    </main>
  );
}
