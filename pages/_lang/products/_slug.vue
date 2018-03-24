<template>
    <div class="Content">
        <div class="container">
            <h1 class="Content__Title">{{ $t('products[' + index + '].title') }}</h1>
            <p>{{ $t('products[' + index + '].introduction') }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index: this.indexWhere(),
            }
        },
        head() {
            return { title: this.$t('products[' + this.indexWhere() + '].title') }
        },
        methods: {
            indexWhere() {
                let slug = this.$route.params.slug;
                let array = this.$t('products');

                const item = array.find(item => item.slug === slug);

                return array.indexOf(item);
            }
        }
    }
</script>
