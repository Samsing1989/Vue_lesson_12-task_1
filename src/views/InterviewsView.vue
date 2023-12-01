<template>
    <div>
        <creater-inter />
        <interviews-list />
    </div>
</template>

<script>
import CreaterInter from '../components/CreaterInter.vue'
import InterviewsList from '../components/InterviewsList.vue'
export default {
    name: 'InterviewsView',
    components: {
        CreaterInter,
        InterviewsList,
    },
}
</script>

<style lang="scss" scoped></style>
