<script>
  import { ShaderBackground } from 'svelte-shader-background';
  import '../app.css';

  let { children } = $props();
</script>

<ShaderBackground
  colors={["#000000", "#636363", "#696969", "#f4dcdc"]}
  speed={0.1}
  scale={1.15}
  opacity={0.15}
  swirl={1.2}
/>
{@render children()}
