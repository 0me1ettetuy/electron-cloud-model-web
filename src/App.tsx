import Controls from "@/features/Canvas/components/Controls";
import Content from "@/features/Canvas/components/Content";

function App() {
  return (
    <main className="dark min-h-screen flex bg-background text-foreground relative">
      <div className="absolute p-4 inset-0 flex items-center">
        <Controls />
      </div>
      <Content />
    </main>
  );
}

export default App;
