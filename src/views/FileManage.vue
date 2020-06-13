<template>
    <b-container>
        <h2>File Manager</h2>
        <file-upload/>
        <file-list/>
    </b-container>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import FileUpload from "@/components/FileUpload.vue";
    import FileList from "@/components/FileList.vue";

    @Component({
        components: {FileList, FileUpload}
    })
    export default class FileManage extends Vue {
        // test: string | undefined
    }
</script>