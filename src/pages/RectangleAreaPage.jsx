import { useRectangleCalculator } from "../hooks/useRectangleCalculator";
import { RectangleForm } from "../components/RectangleForm";
import { RectangleReport } from "../components/RectangleReport";

export function RectangleAreaPage() {
  const { result, requestPayload, loading, error, calculate } =
    useRectangleCalculator();

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <h1 className="text-lg font-medium text-slate-800">
            Rectangle area calculator
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Frontend sends width and height to backend, then displays the
            result.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            <RectangleForm onSubmit={calculate} loading={loading} />
            {error && (
              <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-500">
                {error}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <RectangleReport result={result} />
          </div>
        </div>
      </div>
    </main>
  );
}
