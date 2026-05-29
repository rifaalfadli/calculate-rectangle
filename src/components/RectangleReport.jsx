import { SquareDashed } from "lucide-react";

export function RectangleReport({ result }) {
  if (!result) {
    return (
      <div className="flex min-h-[330px] flex-col rounded-xl border border-slate-200 bg-white p-5">
        <span className="mb-4 inline-block rounded bg-green-950 w-full py-1.5 text-[14px] font-medium uppercase tracking-widest text-green-300">
          Result
        </span>
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <SquareDashed className="h-8 w-8 text-slate-300" />
          <p className="text-sm text-slate-400">
            Result will appear here after calculation.
          </p>
        </div>
      </div>
    );
  }

  const width = result?.data?.width ?? "-";
  const height = result?.data?.height ?? "-";
  const area = result?.data?.area ?? "-";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 min-h-[330px]">
      <span className="mb-4 inline-block rounded bg-green-950 w-full py-1.5 text-[14px] font-medium uppercase tracking-widest text-green-300">
        Result
      </span>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-xs text-slate-400">Width</p>
          <p className="mt-1.5 text-xl font-medium text-slate-800">
            {width}
            <span className="ml-1 text-[11px] font-normal text-slate-400">
              cm
            </span>
          </p>
        </div>
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-xs text-slate-400">Height</p>
          <p className="mt-1.5 text-xl font-medium text-slate-800">
            {height}
            <span className="ml-1 text-[11px] font-normal text-slate-400">
              cm
            </span>
          </p>
        </div>
        <div className="rounded-lg bg-slate-900 p-3">
          <p className="text-xs text-slate-500">Area</p>
          <p className="mt-1.5 text-xl font-medium text-white">
            {area}
            <span className="ml-1 text-[11px] font-normal text-slate-500">
              cm²
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
