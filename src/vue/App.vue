<template>
    <div class="card">
        <h1>Vue Micro App</h1>
        <h3>Vue clicks count: {{count}}</h3>

        <button class="btn increment" @click="increment">Increment count</button>
        <button class="btn decrement" @click="decrement">Decrement count</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: window.store.count
            }
        }, methods: {
            increment() {
                window.store.increment()
            }, decrement() {
                window.store.decrement()
            }
        }, mounted() {
            window.store.subscribe(() => {
                this.count = window.store.count
            })
        }
    }
</script>
