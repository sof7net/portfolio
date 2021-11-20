<template>
    <div class="contact">
        <h2>Get in touch</h2>
        <p>Si vous avez aimer mon profil et aimeriez collaber avec moi, vous pouvez remplir le formulaire ou m'envoyer un mail à: mail@domain.dn</p>
        <fieldset class="contact__fieldset">

            <legend>Formulaire de contact</legend>

            <div class="contact__fieldset--wrapper">
                <div class="contact__fieldset__fields">
                    <div class="contact__fieldset--field">
                        <label for="">Nom ou Société</label>
                        <input type="text">
                    </div>
                    <div class="contact__fieldset--field">
                        <label for="">E-mail</label>
                        <input type="email" name="" id="">
                    </div>
                    
                    <div class="contact__fieldset--field">
                        <label for="">Type d'offre</label>
                        <select name="" id="">
                            <option value="">Select a type</option>
                            <option value="">Type d'offre 1</option>
                            <option value="">Type d'offre 2</option>
                            <option value="">Type d'offre 3</option>
                        </select>
                    </div>
                    <div class="contact__fieldset--field">
                        <label>Dites moi en plus</label>
                        <textarea placeholder="Missions du poste, technologies utilisés, quel est votre philosophie, est-ce en remote ? etc. "></textarea>
                    </div>
                </div>
                <div class="contact__fieldset__calendar">
                    <h3 style="font-size: 1.5em">Emploi du temps chargé?</h3>
                    <span style="margin-bottom: 2em;">Sélectionnez directement une date de rendez-vous !</span>
                    <Calendar />
                    <div class="contact__fieldset__calendar--confirm">
                        <label style="margin:2em;">Confirmer la demande de rendez-vous</label>
                        <input type="checkbox" v-model="rendezvous">
                    </div>
                </div>
            </div>
            <div class="contact__fieldset--submit" @click="submit">
                <span class="iconify" data-icon="carbon:send-alt-filled"></span>
                <span>Envoyer mon offre</span>
            </div>
        </fieldset>

        <h2>Réseaux sociaux</h2>
        <p>Vous pouvez aussi visiter les prochains liens si vous souhaitez en savoir plus sur moi, ou me contactez via ces plateformes.</p>

        <div class="contact__social">
            <a v-for="social in socials" :href="social.link ? social.link : null" target="blank" :style="social.link ? '' : 'cursor: initial;'">
                <span class="iconify inline" :data-icon="social.icon"></span>
                <span :class="{fancy: 'color' in social}" :style="`--fancy-color: ${social.color}`">{{social.name}}</span>
            </a>
        </div>

    </div>
</template>

<script lang="ts" setup>

    import Calendar from '../components/Calendar.vue';
    import { ref } from 'vue';

    const rendezvous = ref(false);

    const submit = () => {
        alert('form submitted')
    }

    const socials : any[] = [
        {
            name: 'Instagram',
            link: 'https://instagram.com/sof7net',
            icon: 'ant-design:instagram-filled',
            color: '#FFA3A8',
        },
        {
            name: 'Twitch',
            link: 'https://twitch.tv/sof7net',
            icon: 'akar-icons:twitch-fill',
            color: '#D6A3FF',
        },
        {
            name: 'Twitter',
            link: 'https://twitter.com/sof7net',
            icon: 'akar-icons:twitter-fill',
            color: '#A3D8FF',
        },
        {
            name: 'Discord',
            link: '',
            icon: 'akar-icons:discord-fill',
            color: '#A3B1FF',
        },
        {
            name: 'Github',
            link: 'https://github.com/sof7net',
            icon: 'akar-icons:github-fill',
            color: '#A3FFD3',
        },
        {
            name: 'Thank you for visiting',
            link: '',
            icon: 'mdi:hand-wave',
        }
    ];

</script>


<style lang="scss">
    .contact {
        h2 {
            left: 0;
            transform: none;
            margin-bottom: 0.5em;
            margin-top: 2em;
        }

        &__fieldset {
            margin-bottom: 4em;
            margin-top: 3em;
            position: relative;
            padding: 1em 2em;
            padding-bottom: 3em;
            font-family: 'Roboto';
            legend {
                text-transform: uppercase;
                font-family: 'IBM Plex Sans';
                font-size: 1.5em;
                letter-spacing: 0.1em;
                padding: 0 0.5em;
            }
            label {
                margin-top: 1.5em;
                margin-bottom: 0.5em;
                display: block;
            }
            input, textarea, select {
                padding: 0.5em 1em;
                outline: none;
                background: var(--contrast);
                border: none;
                box-shadow: 0px 0px 2px var(--text);
                color: var(--text);
                resize: none;
                font-family: 'Roboto';
            }
            textarea {
                width: 85%;
                height: 8em;
            }

            &__calendar {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            &--wrapper {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }   


            &--submit {
                background: var(--text);
                color: var(--base);
                font-size: 1.5em;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                padding: 0.5em 1em;
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 25%;
                transform: translateX(-50%) translateY(50%);
                border-radius: 50px;
                &:hover {
                    cursor: pointer;
                    box-shadow: 0px 0px 8px var(--text);
                }
            }

            &__calendar {
                h3 {
                    margin: 0.25em;
                }
                &--confirm {
                    display: flex;
                    align-items: center;
                    label {
                        margin: 1em;
                    }
                }
            }
        }

        &__social {
            user-select: none;
            margin: 5em 0;
            position: relative;
            width: 60%;
            left: 20%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 3em;
            grid-row-gap: 2em;
            font-size: 1.15em;
            font-family: "IBM Plex Sans";
            text-transform: uppercase;
            a {
                display: flex;
                align-items: center;
                cursor: pointer;
                color: var(--text);
                text-decoration: none;
                svg {
                    opacity: 0.9;
                    margin-right: 0.5em;
                    font-size: 1.25em;
                }
            }
        }
    }
</style>