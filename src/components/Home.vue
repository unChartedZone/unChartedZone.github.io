<template>
<div class="header">
	<div class="header-bg"></div>
	<div class="header-content d-flex flex-column align-items-center justify-content-center">
		<h1 class="header-title">Christian Valdez</h1>
		<h3>California Based Developer</h3>
	</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Christian Valdez',
            typewriter: 'California Based Developer',
        }
    },
    methods: {
        temp() {
            console.log('hello world')
        }
    },
    created() {
        // window.addEventListener('scroll', this.temp)
    }
}
</script>

<style lang="scss" scoped>
.header {
	background-color: black;
	color: white;
	position: relative;
	height: 100vh;

	&-bg {
		background: url("/images/desk-bg.jpg");
		background-size: cover;
		filter: blur(4px);
		font-family: 'Google Sans';
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		z-index: 4;
		overflow: hidden;
	}

	&-content {
		height: 100vh;
		position: fixed;
		z-index: 5;
		width: 100%;
	}

	&-title {
		font-size: 6.25em;
		padding: 1rem;
		animation: slideDown .5s ease-out;
	}
}

</style>