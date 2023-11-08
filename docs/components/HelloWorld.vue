<script lang="ts" setup>
// console.log(import.meta);
// console.log(import.meta.env);
import { Octokit } from "octokit";
const octokit = new Octokit({
    auth: import.meta.env.VITE_TOKEN || process.env.TOKEN,
});
const onClick = async () => {
    console.log('onClick');
    const res = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "ZXinL-CN",
        repo: "ictc_cms",
    });
    console.log(res);
}
</script>
<template>
    <div class="action">
        <a class="VPButton medium alt" @click="onClick()">click</a>
    </div>
</template>