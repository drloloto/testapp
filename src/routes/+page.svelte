<script lang="ts">
  // not commeting out the following lines causing error "document.querySelectorAll is not a function"
  // import "atomico/ssr/load";
  import "./polyfill";
  import Milkdown from "./Milkdown.svelte";
  import * as Resizable from "$lib/components/ui/resizable";
</script>

<Resizable.PaneGroup direction="horizontal">
  <Resizable.Pane class="bg-yellow-50">
    <Milkdown />
  </Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane class="bg-red-50">Two</Resizable.Pane>
</Resizable.PaneGroup>
