<script lang="ts">
  import { Editor, defaultValueCtx, rootCtx } from "@milkdown/kit/core";
  //   import { imageBlockComponent } from "@milkdown/kit/component/image-block";
  import { commonmark } from "@milkdown/kit/preset/commonmark";
  import { nord } from "@milkdown/theme-nord";

  const markdown = `
    # Milkdown Component Image Inline

    Crepe provides three themes: Crepe ![crepe](/crepe.png), Nord ![](/nord.png) and Script ![](/script.png).

    Maybe more? ![]()

    This is a demo for using [Milkdown](https://milkdown.dev) image inline component
    `;

  function editor(dom: HTMLDivElement) {
    // to obtain the editor instance we need to store a reference of the editor.
    const MakeEditor = Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, dom);
        ctx.set(defaultValueCtx, markdown);
      })

      .config(nord)
      .use(commonmark)
      .create();
    MakeEditor.then((editor) => {});
  }
</script>

<div use:editor></div>
