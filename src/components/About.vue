<template>
    <div id="about" class="container">
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

            <div class="container skill-section">
                <h2 class="skill-section-header"><span>Languages</span></h2>
                <div class="grid">
                    <div class="grid-item" v-for="skill in skills" :key="skill.text">
                        <h3>{{skill.text}}</h3>
                        <i class="fab skill-icon" :class="skill.icon"></i>
                    </div>
                </div>
            </div>

            <div id="web-skills" class="container skill-section">
                <h2 class="skill-section-header"><span>Web</span></h2>
                <div class="grid">
                    <div class="grid-item">
                        <h3>HTML</h3>
                        <i class="fab fa-html5 skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>CSS</h3>
                        <i class="fab fa-css3-alt skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Bootstrap</h3>
                        <i class="devicon-bootstrap-plain skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Jquery</h3>
                        <i class="devicon-jquery-plain skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Wordpress</h3>
                        <i class="fab fa-wordpress skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Node JS</h3>
                        <i class="fab fa-node skill-icon" style="font-size: 3em !important;"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Django</h3>
                        <i id="django-icon" class="devicon-django-plain skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Nginx</h3>
                        <i class="devicon-nginx-original skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>React</h3>
                        <i class="fab fa-react skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Vue</h3>
                        <i class="fab fa-vuejs skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Angular</h3>
                        <i class="fab fa-angular skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>MeteorJS</h3>
                        <i class="devicon-meteor-plain skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>MongoDB</h3>
                        <i class="devicon-mongodb-plain skill-icon"></i>
                    </div>
                </div>
            </div>

            <div class="container skill-section">
                <h2 class="skill-section-header"><span>Operating Systems</span></h2>
                <div class="grid">
                    <div class="grid-item">
                        <h3>macOS</h3>
                        <i class="fab fa-apple skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Linux</h3>
                        <i class="fab fa-linux skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Windows</h3>
                        <i class="fab fa-windows skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Android</h3>
                        <i class="devicon-android-plain skill-icon"></i>
                    </div>
                </div>
            </div>

            <div class="container skill-section">
                <h2 class="skill-section-header"><span>Tools</span></h2>
                <div class="grid">
                    <div class="grid-item">
                        <h3>Git</h3>
                        <i class="devicon-git-plain skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Github</h3>
                        <i class="fab fa-github skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Gitlab</h3>
                        <i class="fab fa-gitlab skill-icon"></i>
                    </div>
                    <div class="grid-item">
                        <h3>Gitkraken</h3>
                        <i class="fab fa-gitkraken skill-icon"></i>
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
            skills: [
                { text: 'C', icon: 'devicon-c-plain' },
                { text: 'C++', icon: 'devicon-cplusplus-plain' },
                { text: 'Java', icon: 'fa-java' },
                { text: 'Python', icon: 'fa-python' },
                { text: 'Javascript', icon: 'fa-js-square' },
                { text: 'PHP', icon: 'fa-php' },
                { text: 'Ruby', icon: 'devicon-ruby-plain' },
            ]
        }
    }
}
</script>

<style scoped>

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
}

.skill-section-header {
	font-size: 3em;
}

.skill-section-header span {
	background: linear-gradient(110deg, #f93d66, #6d47d9);
	color: white;
	padding: 5px;
	border-radius: 10px;
}

.skill-icon {
	font-size: 2.5em !important; 
}


</style>
