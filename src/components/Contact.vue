<script setup lang="ts">
    import resume from '../config/resume.json'

    const contact = resume.contact
</script>

<template>
    <div class="lg:m-12">
        <h3>{{ contact.title }}</h3>
        <div class="data">
            <strong>E-mail:</strong>
            {{ contact.email }}
        </div>
        <div class="data">
            <strong>Phone:</strong>
            {{ contact.phone }}
        </div>
    </div>
</template>

<style scoped lang="scss">
    h3 {
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 600;
        display: block;
        border-bottom: 1px solid green;
    }
</style>
