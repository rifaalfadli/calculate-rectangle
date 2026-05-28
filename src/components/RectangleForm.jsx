import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { rectangleSchema } from "../schemas/rectangleSchema";

export function RectangleForm({ onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(rectangleSchema),
    defaultValues: { width: "", height: "" },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-slate-200 bg-white p-5 h-[330px] flex flex-col"
    >
      <span className="mb-4 inline-block rounded bg-blue-950 w-full py-1.5 text-[14px] font-medium uppercase tracking-widest text-blue-300">
        Input
      </span>

      <div className="space-y-4 flex-1">
        <div>
          <div className="mb-1.5 flex items-baseline justify-between">
            <label className="text-sm text-slate-500">Width</label>
            {errors.width && (
              <span className="text-[11px] text-red-400">
                {errors.width.message}
              </span>
            )}
          </div>
          <div className="relative">
            <input
              type="number"
              step="any"
              placeholder="Input width"
              {...register("width")}
              className={`w-full rounded-lg border bg-slate-50 py-2 pl-3 pr-10 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white ${
                errors.width ? "border-red-400" : "border-slate-200"
              }`}
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-400">
              cm
            </span>
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-baseline justify-between">
            <label className="text-sm text-slate-500">Height</label>
            {errors.height && (
              <span className="text-[11px] text-red-400">
                {errors.height.message}
              </span>
            )}
          </div>
          <div className="relative">
            <input
              type="number"
              step="any"
              placeholder="Input height"
              {...register("height")}
              className={`w-full rounded-lg border bg-slate-50 py-2 pl-3 pr-10 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white ${
                errors.height ? "border-red-400" : "border-slate-200"
              }`}
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-400">
              cm
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-between gap-2">
        <button
          type="button"
          onClick={() => reset({ width: "", height: "" })}
          disabled={loading}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-500 transition hover:bg-slate-50 disabled:opacity-40"
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-700 disabled:opacity-40"
        >
          {loading ? "Calculating..." : "Calculate"}
        </button>
      </div>
    </form>
  );
}
