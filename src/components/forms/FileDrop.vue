<template>
    <div class="upload-field">
      <h3 class="is-size-7">Screenshots</h3>
        <b-field>
            <b-upload v-model="dropFiles"
                multiple
                drag-drop
                :accept="accept"
                @input="addFile">
                <section class="section">
                    <div class="has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                    </div>
                </section>
            </b-upload>
        </b-field>

        <div class="tags">
            <span v-for="(file, index) in dropFiles"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                </button>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'file-drop',
        data() {
            return {
                dropFiles: []
            }
        },
        props: {
          value: Array,
          accept: String
        },
        methods: {
            deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
                this.$emit('input', this.dropFiles)
            },
            addFile(value) {
              this.$emit('input', value)
            }
        }
    }
</script>