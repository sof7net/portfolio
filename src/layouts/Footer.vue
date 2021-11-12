<template>
    <footer>
        <div class="footer--wrap">
            <div>
                <ul class="footer__link-list">
                    <li v-if="$route.path != '/'"><router-link to="/">Go back to homepage</router-link></li>
                    <li v-if="$route.path != '/about'"><router-link to="/about">Learn more about me</router-link></li>
                    <li v-if="$route.path != '/projects'"><router-link to="/projects">Look at my projects</router-link></li>
                    <li v-if="$route.path != '/contact'"><router-link to="/contact">Let's work together</router-link></li>
                </ul>
            </div>
            <div>
                <p>Made with attention by SOF7</p>
                <p><a href="mailto:sof7net@gmail.com">sof7net@gmail.com</a></p>
                <br>
                <ul class="footer__social-list">
                    <li><a target="blank" class="footer__social-list--github" href="https://github.com/sof7net"><span class="iconify" data-icon="akar-icons:github-fill"></span></a></li>
                    <li><a target="blank" class="footer__social-list--twitter" href="https://twitter.com/sof7net"><span class="iconify" data-icon="akar-icons:twitter-fill"></span></a></li>
                    <li><a target="blank" class="footer__social-list--instagram" href="https://instagram.com/sof7net"><span class="iconify" data-icon="akar-icons:instagram-fill"></span></a></li>
                    <li><a target="blank" class="footer__social-list--linkedin" href="https://linkedin.com/sof7net"><span class="iconify" data-icon="akar-icons:linkedin-fill"></span></a></li>
                    <li><a target="blank" class="footer__social-list--twitch" href="https://twitch.tv/sof7net"><span class="iconify" data-icon="akar-icons:twitch-fill"></span></a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>


<style lang="scss">

    footer {
        position: static;
        width: 100%;
        margin-bottom: 0;
        background: var(--secondary);
        color: var(--text);

        .footer--wrap {
            width: 40%;
            margin-left: 30%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 3em 0;

            p {
                margin: 0.25em;
            }

            div {
                display: grid;
                place-content: center;
                align-content: center;
            }

            a {
                color: var(--text);
            }
        }

        .footer__link-list li {
            margin-bottom: 0.5em
        }

        .footer__social-list {

            svg {
                transition: color .25s ease-in-out;
            }
            
            &--github svg {
                color: rgb(21, 194, 107);
            }
            &--twitter svg {
                color: rgb(65, 141, 241);
            }
            &--instagram svg {
                color: rgb(202, 150, 223);
            }
            &--linkedin svg {
                color: rgb(13, 67, 184);
            }
            &--twitch svg {
                color: rgb(106, 106, 216);
            }

            li {
                font-size: 1.75em;
                margin-right: 0.5em;
                display: inline-block;

                &:not(:hover) {
                    svg {
                        color: var(--text);
                        opacity: 0.7;
                    }
                }
            }
        }
    }

</style>