<script>
  import { onMount } from 'svelte';
  import ColorPicker from 'svelte-awesome-color-picker';

  let rgb = { r: 246, g: 240, b: 220, a: 1 };

  let currentFill = `fill:rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  let color;

  function handleSvgClick(event) {
    if (event.target?.tagName === 'svg' || event.traget?.tagName === 'path') return;

    event.target.style = currentFill;
  }

  onMount(() => {
    const item = document.getElementById('_fish_2');
    if (!item) return;

    item.addEventListener('click', handleSvgClick);

    return () => {
      item.removeEventListener('click', handleSvgClick);
    };
  });
</script>

<div class="main">
  <div>
    <div class="body">
      <svg
        id="_fish_2"
        class="w-auto h-4/5 object-none"
        data-name="fish 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 694.19 269.65"
      >
        <defs>
          <style>
          </style>
        </defs>
        <g>
          <g id="tail">
            <polygon fill="#fff" points=".5 .87 230.38 133.58 .5 266.3 .5 .87" />
            <path
              d="m1,1.73l228.38,131.85L1,265.44V1.73M0,0v267.17s231.38-133.58,231.38-133.58L0,0H0Z"
            />
          </g>
          <g id="body">
            <ellipse fill="#fff" cx="421.69" cy="135.65" rx="272" ry="133.5" />
            <path
              d="m421.69,2.65c149.71,0,271.5,59.66,271.5,133s-121.79,133-271.5,133-271.5-59.66-271.5-133S271.98,2.65,421.69,2.65m0-1c-150.5,0-272.5,59.99-272.5,134s122,134,272.5,134,272.5-59.99,272.5-134S572.19,1.65,421.69,1.65h0Z"
            />
          </g>
          <g id="eye">
            <circle fill="#fff" cx="545.69" cy="105.15" r="35" />
            <path
              d="m545.69,70.65c19.02,0,34.5,15.48,34.5,34.5s-15.48,34.5-34.5,34.5-34.5-15.48-34.5-34.5,15.48-34.5,34.5-34.5m0-1c-19.61,0-35.5,15.89-35.5,35.5s15.89,35.5,35.5,35.5,35.5-15.89,35.5-35.5-15.89-35.5-35.5-35.5h0Z"
            />
          </g>
        </g>
      </svg>

      <div>
        <ColorPicker
          bind:rgb
          bind:color
          isAlpha={false}
          isTextInput={false}
          on:input={({ detail }) => {
            currentFill = `fill:rgb(${detail.rgb?.r}, ${detail.rgb?.g}, ${detail.rgb?.b})`;
          }}
        />
      </div>
    </div>
  </div>
</div>

<style>
  .main {
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
