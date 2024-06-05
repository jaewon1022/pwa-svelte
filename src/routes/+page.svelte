<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Fish from '../assets/fish.svelte';

  const roomId = $page.params?.roomId;

  let showModal = false;

  function handleTouchStart() {}

  function handleTouchEnd() {}
</script>

<div class="bg-white w-full h-full font-sans disable-double-tab-zoom prevent-long-press">
  <div
    class="modal-overlay bg-[#00000080] absolute w-full h-full justify-center items-center"
    style={`display: ${showModal ? 'flex' : 'none'}`}
  >
    <div
      class="modal flex flex-col justify-evenly -tracking-widest w-2/3 h-1/4 border-2 border-black border-solid bg-white rounded-xl touch-none"
    >
      <div class="font-bold text-center">title</div>
      <div class="text-sm text-center tracking-tighter">
        <p>content</p>
      </div>
      <button class="text-center font-bold text-sm" on:click={() => (showModal = false)}>
        close
      </button>
    </div>
  </div>

  <div class="isolate px-6 pt-16 lg:px-8">
    <div class="mx-auto max-w-2.5xl py-3 sm:py-24 lg:py-36">
      <div class="w-full h-full flex flex-col justify-center items-center text-center">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <p>painting</p>
        </h1>

        <div class="mt-6 flex flex-col items-center justify-center gap-x-2">
          <p>let's customize it!!</p>
        </div>

        <div class="flex justify-center w-5/6 mt-6 gap-y-10">
          <Fish />
        </div>

        <div class="flex justify-center items-center w-2/3 relative mt-8">
          <button
            class="info-badge absolute h-8 w-8 bg-white border-2 border-solid border-black rounded-full font-bold z-20"
            on:click={() => (showModal = true)}>i</button
          >

          <button
            class="button overflow-hidden relative flex justify-center items-center border-2 border-solid border-slate-950 rounded-xl w-full h-20"
            on:touchstart={handleTouchStart}
            on:touchend={handleTouchEnd}
          >
            <p class="z-20">send</p>
            <div class="fill absolute bottom-0 left-0 height-0 w-full bg-[#1dc9ff] z-10" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .disable-double-tab-zoom {
    touch-action: manipulation;
  }

  .prevent-long-press {
    -webkit-touch-callout: none;
    user-select: none;
  }

  .info-badge {
    bottom: 80%;
    right: -1rem;
  }

  .modal-overlay {
    z-index: 21;
  }

  .modal {
    z-index: 22;
  }

  .fill {
    transition: height 5s linear;
  }

  .button:active .fill {
    height: 100%;
  }

  .button:not(:active) .fill {
    height: 0;
    transition: none;
  }
</style>
