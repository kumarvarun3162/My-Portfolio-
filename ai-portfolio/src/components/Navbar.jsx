export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-10 py-6 z-50">
      <h1 className="text-lg font-bold ">Varun Kumar</h1>

      <div className="flex gap-8 text-sm">
        <a href="#">Work</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}