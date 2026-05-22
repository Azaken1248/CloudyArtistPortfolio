import { motion } from 'framer-motion'

const shimmer =
  'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_ease-in-out_infinite] before:bg-[linear-gradient(90deg,transparent_0%,rgba(175,203,255,0.18)_50%,transparent_100%)]'

function Bone({
  className = '',
}: {
  className?: string
}) {
  return (
    <div
      className={`rounded-2xl bg-secondary/40 ${shimmer} ${className}`}
    />
  )
}

export function LoadingSkeleton() {
  return (
    <motion.div
      className="relative isolate min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_14%_12%,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.88)_16%,transparent_36%),radial-gradient(circle_at_82%_16%,rgba(220,235,255,0.96)_0%,transparent_26%),radial-gradient(circle_at_50%_36%,rgba(175,203,255,0.48)_0%,transparent_30%),radial-gradient(circle_at_18%_78%,rgba(248,250,255,0.96)_0%,transparent_24%),radial-gradient(circle_at_84%_82%,rgba(220,235,255,0.88)_0%,transparent_26%),linear-gradient(180deg,#eef5ff_0%,#f8faff_40%,#eaf3ff_100%)] text-neutral"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Nav skeleton */}
      <header className="sticky top-0 z-50 border-b border-secondary/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Bone className="h-11 w-11 !rounded-2xl" />
              <div className="space-y-1.5">
                <Bone className="h-5 w-24" />
                <Bone className="h-3 w-16" />
              </div>
            </div>
            <Bone className="hidden h-10 w-36 !rounded-full md:block" />
          </div>

          <div className="mt-3 hidden items-center justify-center gap-2 md:flex">
            <div className="flex items-center gap-2 rounded-full bg-secondary/45 p-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Bone key={i} className="h-9 w-28 !rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="py-10 sm:py-14 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <Bone className="h-9 w-64 !rounded-full" />
              <div className="space-y-6">
                <Bone className="h-4 w-32" />
                <div className="space-y-3">
                  <Bone className="h-12 w-full max-w-lg" />
                  <Bone className="h-12 w-3/4 max-w-lg" />
                </div>
                <div className="space-y-2">
                  <Bone className="h-5 w-full max-w-xl" />
                  <Bone className="h-5 w-4/5 max-w-xl" />
                </div>
                <Bone className="h-5 w-3/5 max-w-md" />
              </div>
              <div className="flex gap-3">
                <Bone className="h-12 w-40 !rounded-full" />
                <Bone className="h-12 w-48 !rounded-full" />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Bone className="aspect-square w-full max-w-lg !rounded-full" />
            </div>
          </div>
        </section>

        {/* Gallery skeleton */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="space-y-2 text-center">
            <Bone className="mx-auto h-4 w-32" />
            <Bone className="mx-auto h-10 w-72" />
            <Bone className="mx-auto h-5 w-96" />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Bone key={i} className="aspect-[4/5] !rounded-[2rem]" />
            ))}
          </div>
        </section>
      </main>
    </motion.div>
  )
}
