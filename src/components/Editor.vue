<template>
  <div class="editor" id="editor__content">
    <editor-menu-bar :editor="editor">
      <div class="menubar buttons" slot-scope="{ commands, isActive }">
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <i class="mdi mdi-format-bold"/>
        </button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <i class="mdi mdi-format-italic"/>
        </button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <i class="mdi mdi-format-strikethrough"/>
        </button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <i class="mdi mdi-format-underline"/>
        </button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <i class="mdi mdi-code-tags"/>
        </button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <i class="mdi mdi-format-paragraph"/>
        </button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >H1</button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >H2</button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >H3</button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <i class="mdi mdi-format-list-bulleted"/>
        </button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <i class="mdi mdi-format-list-numbered"/>
        </button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <i class="mdi mdi-format-quote-open"/>
        </button>
        
        <button
          class="menubar__button button is-white"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <i class="mdi mdi-code-braces"/>
        </button>

        <button
            class="menubar__button button is-white"
            @click="showImagePrompt(commands.image)"
          >
            <i class="mdi mdi-image" />
        </button>
        
        <button class="menubar__button button is-white" @click="commands.undo">
          <i class="mdi mdi-undo"/>
        </button>
        
        <button class="menubar__button button is-white" @click="commands.redo">
          <i class="mdi mdi-redo"/>
        </button>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor"/>
  </div>
</template>

<script>
import "@/assets/editor.scss";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image
} from "tiptap-extensions";

export default {
  name: "ticket-reply-form",
  components: {
    EditorContent,
    EditorMenuBar
  },

  data() {
    return {
      editor: null
    };
  },

  beforeMount() {
    let defaultString = `<p>Write here</p>`;

    this.editor = new Editor({
      content: defaultString,
      extensions: [
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new ListItem(),
        new OrderedList(),
        new TodoItem(),
        new TodoList(),
        new Bold(),
        new Code(),
        new Italic(),
        new Link(),
        new Strike(),
        new Underline(),
        new History(),
        new Image(),
      ],
      onUpdate: ({ getHTML }) => {
        this.$emit("input", getHTML());
      }
    });
  },

  methods: {
    showImagePrompt(command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    }
  },

  mounted() {
    setTimeout(() => {
      const element = document.getElementById("editor__content");
      element.scrollIntoView({ block: "end", behavior: "smooth" });
    }, 200);
  },

  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>