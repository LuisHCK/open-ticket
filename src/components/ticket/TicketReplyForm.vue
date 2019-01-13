<template>
  <div class="ticket-reply-form panel" id="editor__content">
    <div class="is-flex is-centered-vertically">
      <avatar :img="ticket.user.avatar" :alt="ticket.user.name"/>
      <div class="user-info">
        <div>
          <small class="has-text-grey">Reply to</small>
          <small class="user-name" v-text="ticket.user.name"/>
        </div>
      </div>
    </div>
    <hr>
    <div class="editor">
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
    <div class="buttons">
      <button
        class="button is-success"
        @click="submitReply"
        v-text="reply.id? 'Update reply':'Send reply'"
      />
      <button class="button is-link is-danger" @click="cancelReply">Cancel</button>
    </div>
  </div>
</template>

<script>
import "@/assets/editor.scss";
import { mapState } from "vuex";
import Avatar from "@/components/Avatar.vue";
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
  History
} from "tiptap-extensions";

export default {
  name: "ticket-reply-form",
  components: {
    Avatar,
    EditorContent,
    EditorMenuBar
  },

  data() {
    return {
      editor: null,
      ticketRawHtml: undefined
    };
  },

  computed: {
    ...mapState(["currentUser"])
  },

  props: {
    ticket: {
      type: Object,
      default: () => {
        return {
          user: {
            name: ""
          }
        };
      }
    },

    reply: {
      type: Object,
      default: () => {
        return {
          user: {}
        };
      }
    }
  },

  methods: {
    submitReply() {
      if (this.reply.id) {
        this.reply.description = this.ticketRawHtml;
        this.$store.commit("updateTicketReply", this.reply);
      } else {
        const reply = {
          id: Math.floor(Math.random() * 999 + 1),
          ticket_id: this.ticket.id,
          user: { name: "Luis Centeno" },
          created_at: new Date().toISOString(),
          description: this.ticketRawHtml
        };
        this.$store.commit("addTickedReply", reply);
      }

      this.$emit("submit");
      this.editor.clearContent(true);
    },

    cancelReply() {
      this.$emit("cancel");
    }
  },

  beforeMount() {
    let defaultString = `<p>Hi ${this.ticket.user.name},</p><p></p>`;

    this.editor = new Editor({
      content: this.reply.description ? this.reply.description : defaultString,
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
        new History()
      ],
      onUpdate: ({ getHTML }) => {
        this.ticketRawHtml = getHTML();
      }
    });
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

<style scoped lang="scss">
.user-name {
  margin-left: 6px;
}
</style>