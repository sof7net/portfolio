<template>
    <div class="about">

        <div class="about__intro">
            <h2> ~ {{greet}}</h2>
            <h4>.. et bienvenue sur mon CV virtuel !</h4>
            <p>Moi c'est SOF7, prononcé "Soft" et inspiré par mon vrai prénom:  Sofiane</p>
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
            <p>Bref, si j'ai apppris une chose en apprenant l'UX Design, c'est que les gens n'aiment pas <b>trop</b> lire, alors laissez moi vous guider.</p>
        </div>

        <div class="about__carousel">
            <h2>Une chose sur moi</h2>
            <!-- <AboutCarousel /> -->
        </div>

        <div class="about__record">
            <h2>Mon parcours</h2>
            <!-- <AboutRecord /> -->
        </div>

        <div class="about__skillset">
            <h2>Mes compétences</h2>
            <!-- <AboutSkillSet /> -->
        </div>

        <div class="about__brainstorming">
            <h2>Ce qu'il se passe dans ma tête</h2>
            <!-- <AboutBrainstorming /> -->
        </div>

    </div>
</template>

<script setup lang="ts">

    import { ref } from 'vue';

    import { shuffle } from 'lodash';

    let greet = ref('');
    let allGreets = ['Hello World', 'Bonjour Monde', 'こんにちは世界', 'مرحبا بالعالم'];

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
            h2 {
                margin: 0;
                text-align: left;

                &::after {
                    content: '|';
                    // background: var(--text);
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

    }
</style>