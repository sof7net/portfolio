<template>
    <div class="about">

        <div class="about__intro">
            <span class="about__intro--greet"> ~ {{greet}}</span>
            <span class="about__intro--welcome">.. et bienvenue sur mon CV virtuel !</span>
            <p>Moi c'est SOF7, prononcé "Soft" et inspiré par mon vrai prénom Sofiane.</p>
            <p>
                Je suis un jeune développeur web autodidacte alimenté par ce qu'on pourrait appeler une passion pour l'informatique.
                Cela fait maintenant quelques années que je me suis initié à ce vaste domaine et j'estime avoir assez grandit dans cet univers
                pour enfin rejoindre le monde du travail
            </p>
            <p>
                Depuis tout jeune j'ai l'obsession de tout vouloir savoir dans les moindres détails ce qui, allié à mon aisance en anglais, m'a permis d'acquérir
                les connaissances actuelles ainsi que de me sentir véritablement lié à la mentalité de la communauté IT.
            </p>
            <p>
                J'essaye de me pousser à toujours devenir quelqu'un de nouveau, de différent, <u>et pas seulement devant un ordinateur !</u> <br>
                Mes intérêts sont divers et variés: Cultures étrangères, Sport (de l'équitation au MMA), Litérature classique, Manga, et bien d'autres..
            </p>
            <p>Bref, si j'ai bien retenu une chose en apprenant l'UX Design, c'est que les gens n'aiment pas <b>trop</b> lire, alors laissez moi vous guider.</p>
        </div>

        <h2>Une chose sur moi</h2>
        <Curious />

        <h2>Mon parcours</h2>
        <div class="about__record">
            <RecordCard v-for="element,index in recordElements" :element="element" :key="index" :reverse="index % 2 != 0"/>
        </div>

        <h2>Mes compétences</h2>

        <p>Pour une meillure illustration et parce qu'on aime tous les graphiques, voici en un pour y voir un peu mieux sur ma maîtrise dans différentes technologies.</p>

        <MultipleSelect title="Filtrer les résultats" :options="skillTypes" :checked="checkedSkills" @update="getChecked"/>

        <SkillItem v-for="skill in skills" v-if="checkedSkills.includes(skill.type)" :skill="skill" :label="skillTypes[skill.type]"/>

        <h2 class="fancy">à quoi je pense..</h2>

        <p>Je suis quelqu'un de curieux et d'assez perfectionniste, je penses donc beaucoup et... j'aime ça !
        <br>Laissez moi vous illustrer un peu ce qui se passe dans ma tête, et ce que j'envisages en ce moment par la même occasion.</p>

        <Brainstorming />

        <div style="text-align: right;">
            <IconTitle link="/projects" text="Concrètement? C'est par ici" />
        </div>

    </div>
</template>

<script setup lang="ts">

    import { ref } from 'vue';
    import { shuffle } from 'lodash';

    import RecordCard from '../components/RecordCard.vue'
    import IconTitle from '../components/IconTitle.vue'
    import SkillItem from '../components/SkillItem.vue'
    import MultipleSelect from '../components/MultipleSelect.vue';
    import Curious from '../components/Curious.vue';
    import Brainstorming from '../components/Brainstorming.vue';

    let greet = ref('');
    let allGreets = ['Hello World', 'Bonjour Monde', 'こんにちは世界', 'مرحبا بالعالم'];

    const exempleElement = {
        title: 'This is a title',
        subtitle: 'This is a subtitle describing stuff',
        text: '',
        imageLink: 'tree'    
    }

    const recordElements : any[] = []

    for (let i=0;i<6;i++)
        recordElements.push(exempleElement)


    // SKILLSET

    const skillTypes: Record<string,string>  = {
        language : 'Langage',
        softskill : 'Soft skill',
        technology : 'Technologie',
        other : 'Autre'
    }

    let checkedSkills  = ref<string[]>([...Object.keys(skillTypes)]);

    const getChecked = (checkedOptions: string[]) => {
        checkedSkills.value = checkedOptions;
    }

    import skill from '../dummy/skill.json';

    let skills = [{...skill}, {...skill}]
    skills[1].percent = 30;

    const delay = (ms=150) => {
        return new Promise<void>(res => {
            setTimeout(_ => {
                res()
            },ms)
        })
    }

    let isGreeting = false;

    const doGreet = async () => {
        if (isGreeting)
            return;

        isGreeting = true;

        allGreets = shuffle(allGreets);
        for (let j = 0; j < allGreets.length; j++) {
            let message = allGreets[j];
            for (let i = 0; i < message.length; i++) {
                greet.value = message.slice(0,i+1);
                await delay()
            };
            await delay(3000)
            for (let i = message.length; i > -1; i--) {
                greet.value = message.slice(0,i);
                await delay()
            }
        };
        isGreeting = false;
    };

    setInterval(doGreet, 1000)

</script>

<style lang="scss">

    @keyframes blink {
        to {
            visibility: hidden;
        }
    }

    .about {

        &__intro {

            &--greet {
                font-family: 'IBM Plex Sans';
                letter-spacing: 0.1em;
                font-weight: 200;
                text-transform: uppercase;
                font-size: 2.5em;
                &::after {
                    content: '|';
                    margin-left: 0.15em;
                    animation: blink 1.5s steps(2, start) infinite;
                }
            }

            &--welcome {
                display: block;
                font-size: 1.25em;
                opacity: .5;
            }
        }
        
        &__record {
            display: grid;
            grid-gap: 10em;
            // Mettre un scroll stylé ?
        }

    }
</style>