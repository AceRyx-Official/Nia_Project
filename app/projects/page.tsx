// app/projects/page.tsx

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-semibold">Project 1</h2>
          <p className="text-gray-700">Short description of the project.</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-semibold">Project 2</h2>
          <p className="text-gray-700">Short description of the project.</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h2 className="text-2xl font-semibold">Project 3</h2>
          <p className="text-gray-700">Short description of the project.</p>
        </div>
      </div>
    </main>
  );
}
