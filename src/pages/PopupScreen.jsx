export default function Popup({ close }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 w-80 text-center shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Popup Screen</h2>
        <p className="text-gray-600 mb-4">
          This popup appears when any button is clicked.
        </p>

        <button
          onClick={close}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
