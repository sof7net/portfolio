<template>
    <div class="about">

        <div class="about__intro">
            <h2> ~ {{greet}}</h2>
            <h4>.. et bienvenue sur mon CV virtuel !</h4>
            <p>Moi c'est SOF7, prononcé "Soft" et inspiré par mon vrai prénom Sofiane.</p>
            <p>
                Je suis un jeune développeur web autodidacte alimenté par ce qu'on pourrait appeler une passion pour l'informatique.
                Cela fait maintenant quelques années que je me suis initié à ce vaste domaine et j'estime avoir assez grandit dans cet univers
                pour enfin rejoindre le monde du travail
            </p>
            <p>
                Depuis tout jeune j'ai l'obsession de tout vouloir savoir et ce dans les moindres détails ce qui, allié à mon aisance en anglais, m'a permis d'acquérir
                les connaissances actuelles ainsi que de me sentir véritablement lié à la mentalité de la communauté IT.
            </p>
            <p>
                J'essaye de me pousser à toujours devenir quelqu'un de nouveau, de différent, <u>et pas seulement devant un ordinateur !</u> <br>
                Mes intérêts sont divers et variés: Cultures étrangères, Sport (de l'équitation au MMA), Litérature classique, Manga, et bien d'autres..
            </p>
            <p>Bref, si j'ai bien retenu une chose en apprenant l'UX Design, c'est que les gens n'aiment pas <b>trop</b> lire, alors laissez moi vous guider.</p>
        </div>

        <!-- <div class="about__carousel"> -->
            <!-- <h2>Une chose sur moi</h2> -->
            <!-- <AboutCarousel /> -->
        <!-- </div> -->

        <h2>Mon parcours</h2>
        <div class="about__record">
            <RecordCard v-for="element,index in recordElements" :element="element" :key="index" :reverse="index % 2 != 0"/>
        </div>

        <h2>Mes compétences</h2>
        <p>Pour une meillure illustration et parce qu'on aime tous les graphiques, voici en un pour y voir un peu mieux sur ma maîtrise dans différentes technologies.</p>
        <br>
        <SkillItem v-for="skill in skills" :skill="skill" />

        <h2>Ce qu'il se passe dans ma tête</h2>
        <!-- <AboutBrainstorming /> -->

    </div>
</template>

<script setup lang="ts">

    import { ref } from 'vue';
    import { shuffle } from 'lodash';

    import RecordCard from '../components/RecordCard.vue'
    import SkillItem from '../components/SkillItem.vue'

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

    let skill = {
        name: 'Python',
        type: 'language',
        image: 'https://www.python.org/static/opengraph-icon-200x200.png',
        percent: 100,
        appreciation: 3,
        time_spent: '6 mois',
        level: 'good',
        comment: 'lorem',
        subskills: [
            {
                name: 'Name of the subskill',
                image: 'https://www.python.org/static/opengraph-icon-200x200.png',
                percent: 50,
                comment: 'lorem lorem lorem'
            },
            {
                name: 'Name of the subskill',
                image: 'https://www.python.org/static/opengraph-icon-200x200.png',
                percent: 50,
                comment: 'lorem lorem lorem'
            }
        ]
    }

    let skills = [skill, skill];

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
            margin: 6em 0;
            h2 {
                margin: 0;
                text-align: left;

                &::after {
                    content: '|';
                    margin-left: 0.15em;
                    animation: blink 1.5s steps(2, start) infinite;
                }
            }

            h4 {
                font-family: 'Roboto';
                font-weight: normal;
                margin: 0;
                font-size: 1.5em;
                opacity: .35;
            }
        }
        
        &__record {
            display: grid;
            grid-gap: 10em;
            // Mettre un scroll stylé ?
        }

    }
</style>