<template>
    <div>
      <span class="relative flex overflow-hidden rounded-full p-[1px]">
        <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
        <div class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl whitespace-nowrap">
          {{ text }}
        </div>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnimatedBadge',
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
  </script>