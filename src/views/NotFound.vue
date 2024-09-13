<template>
    <v-empty-state
        headline="404"
        title="페이지를 찾을 수 없습니다."
        text="The page you were looking for does not exist."
        image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/connection.svg"
        action-text="홈으로 이동"
        @click:action="onClickAction"></v-empty-state>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const onClickAction = () => {
    router.push('/login');
};
</script>

<style scoped>
html,
body {
    height: 100%;
}

div {
    height: 100%;
    text-align: center;
}
</style>
