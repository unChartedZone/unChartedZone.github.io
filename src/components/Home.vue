<template>
<section class="home-page container d-flex align-start justify-center col">
	<h2 class="header-primary">Hello <span class="hand-emoji">👋</span>,</h2>
	<h1 class="header-primary"> I'm <span class="name">Christian Valdez</span></h1>
	<h2 class="subtitle">California Based Developer</h2>
	<a class="home-btn btn-primary my-1" @click="scrollJumper({id: 'about'})">
		About Me
		<i class="fa fa-chevron-circle-down" />
	</a>
</section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	data() {
		return {
			subtitle: 'California Based Developer'
		}
	},
	methods: {
		...mapMutations(['scrollJumper'])
	}
}
</script>

<style lang="scss" scoped>

i {
	padding: 0 0.5rem;
}

.subtitle {
	animation: slide-in-right ease-out .7s;

	@include respond(sm) {
		font-size: 1.75rem;
	}
}

.home {
	&-page {
		height: 100vh;
	}

	&-btn {
		animation: slide-in-up ease-out .7s;
	}
}

.name {
	background-image: linear-gradient(to right, $color-primary, $color-primary-light);
	-webkit-background-clip: text;
	color: transparent;
}

.header-primary {
	animation: slide-in-left ease-out .7s;

	@include respond(sm) {
		font-size: 2.80rem;
	}
}

.hand-emoji {
	display: inline-block;
	transition: all .4s;

	&:hover {
		transform: rotate(75deg);
	}
}

</style>
