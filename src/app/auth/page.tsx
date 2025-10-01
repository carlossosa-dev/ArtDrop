export default function Auth() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold mb-4">Login / Register</h1>
      <form className="mt-4 grid gap-3">
        <label htmlFor="name" className="sr-only">Name</label>
        <input id="name" className="border rounded px-3 py-2" placeholder="Name" />

        <label htmlFor="email" className="sr-only">Email</label>
        <input id="email" className="border rounded px-3 py-2" placeholder="Email" type="email" />

        <label htmlFor="password" className="sr-only">Password</label>
        <input id="password" className="border rounded px-3 py-2" type="password" placeholder="Password" />

        <button className="rounded bg-black text-white px-4 py-2">Continue</button>
      </form>
    </div>
  );
}
