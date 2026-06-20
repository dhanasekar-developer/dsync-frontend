export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
      <div className="flex items-center space-x-1 h-20">
        <span className="block h-12 w-2 bg-blue-500 rounded-md animate-wave1"></span>
        <span className="block h-12 w-2 bg-blue-500 rounded-md animate-wave2"></span>
        <span className="block h-12 w-2 bg-blue-500 rounded-md animate-wave3"></span>
        <span className="block h-12 w-2 bg-blue-500 rounded-md animate-wave2"></span>
        <span className="block h-12 w-2 bg-blue-500 rounded-md animate-wave1"></span>
      </div>
    </div>
  );
}
