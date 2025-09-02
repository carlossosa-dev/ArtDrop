export default function Auth() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold mb-4">Login / Register</h1>
      <p className="text-sm text-gray-600">Supabase auth will be added later.</p>
      <form className="mt-4 grid gap-3">
        <input className="border rounded px-3 py-2" placeholder="Name" />
        <input className="border rounded px-3 py-2" placeholder="Email" />
        <input className="border rounded px-3 py-2" type="password" placeholder="Password" />
        <button className="rounded bg-black text-white px-4 py-2">Continue</button>
      </form>
    </div>
  );
}
