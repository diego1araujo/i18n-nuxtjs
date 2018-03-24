<template>
    <div class="Content">
        <div class="container">
            <h1 class="Content__Title">{{ $t('product.title') }}</h1>
            <p v-for="prod in $t('products')">
                <nuxt-link :to="$route.fullPath + `/` + prod.slug">
                    {{ prod.title }}
                </nuxt-link>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return { title: this.$t('product.title') }
        }
    }
</script>
