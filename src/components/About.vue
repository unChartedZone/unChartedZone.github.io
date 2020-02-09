<template>
	<div class="about container pt-4">
        <div class="self-description row">
            <div class="col-12 mb-5">
                <h1 class="section-header">About Me</h1>
                <hr>
            </div>
            <div class="col-12 col-xl-3 d-flex justify-content-center">
                <img id="myself" src="images/profile-pic.png" alt="Profile Picture">
            </div>
            <div class="col-12 col-xl-6 d-flex justify-content-center align-items-center">
                <h3 class="motto">
                    I am an aspiring full-stack developer with experience in
                    a multitude of fields.
                </h3>
            </div>
        </div>

        <div id="skills">
            <h1 class="section-header">Skills</h1>
            <hr>

            <div 
				class="container skill-section" 
				v-for="skillset in skills" 
				:key="skillset.title"
			>
				<h2 class="skill-section-header">{{skillset.title}}</h2>
				<div class="grid">
					<div class="grid-item" v-for="(item, index) in skillset.items" :key="index">
						<h3>{{item.text}}</h3>
						<i class="skill-icon" :class="item.icon"></i>
					</div>
				</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
        return {
            skills: {
				programmingLanguages: {
					title: 'Programming Languages',
					items: [
						{ text: 'C', icon: 'devicon-c-plain' },
						{ text: 'C++', icon: 'devicon-cplusplus-plain' },
						{ text: 'Java', icon: 'fab fa-java' },
						{ text: 'Python', icon: 'fab fa-python' },
						{ text: 'Javascript', icon: 'fab fa-js-square' },
						{ text: 'PHP', icon: 'fab fa-php' },
						{ text: 'Ruby', icon: 'devicon-ruby-plain' },
						{ text: 'Swift', icon: 'fab fa-swift'}
					]
				},
				web: {
					title: 'Web',
					items: [
						{ text: 'HTML', icon: "fab fa-html5 skill-icon" },
						{ text: 'CSS', icon: "fab fa-css3-alt skill-icon" },
						{ text: 'Bootstrap', icon: "devicon-bootstrap-plain skill-icon" },
						{ text: 'Jquery', icon: "devicon-jquery-plain skill-icon" },
						{ text: 'Wordpress', icon: "fab fa-wordpress skill-icon" },
						{ text: 'Node JS', icon: "fab fa-node skill-icon", style:"font-size: 3em !important;" },
						{ text: 'Django', icon: "django-icon", class:"devicon-django-plain skill-icon" },
						{ text: 'Nginx', icon: "devicon-nginx-original skill-icon" },
						{ text: 'React', icon: "fab fa-react skill-icon" },
						{ text: 'Vue', icon: "fab fa-vuejs skill-icon" },
						{ text: 'Angular', icon:"fab fa-angular skill-icon" },
						{ text: 'MeteorJS', icon: "devicon-meteor-plain skill-icon" },
						{ text: 'MongoDB' , icon: "devicon-mongodb-plain skill-icon" }
					]
				},
				tools: {
					title: 'Tools',
					items: [
							{ text: 'Git', icon: 'devicon-git-plain skill-icon' },
							{ text: 'Github', icon: 'fab fa-github skill-icon' },
							{ text: 'Gitlab', icon: 'fab fa-gitlab skill-icon' },
							{ text: 'Gitkraken', icon: 'fab fa-gitkraken skill-icon' },
					]
				}
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.about {
	position: relative;
	background-color: white;
}

.self-description {
    margin: 10em 0;
}

#myself {
	width: 200px;
	height: 200px;
	border-radius: 50%;
}

.motto {
    font-size: 1.75rem;
}

#ruby-icon {
	width: 35px;
}

#django-icon {
	font-size: 4.0em !important; 
}

.skill-section {
	height: auto;
	margin: 0;
	padding-top: 50px;

	&-header {
		font-size: 3em;

		span {
			background: linear-gradient(110deg, #f93d66, #6d47d9);
			color: white;
			padding: 5px;
			border-radius: 10px;

		}
	}
}

.skill-icon {
	font-size: 2.5em !important; 
}


</style>
