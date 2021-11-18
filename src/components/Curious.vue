<template>
    <div class="about__curious">
        <div class="about__curious__files">
            <div v-for="i in 24" :key="i">
                <span>Lorem, ipsum dolor.</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at illo voluptas enim facere dicta vitae! Doloremque aspernatur eveniet commodi!</p>
            </div>
        </div>
        <div class="about__curious--wip"><span>WORK IN PROGRESS</span></div>
    </div>
</template>


<style lang="scss">

    .about__curious {

        position: relative;
        user-select: none;

        &__files {
            padding: 0.5em;
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-gap: 0.5em;
            div {
                height: 9em;
                box-shadow: -2px -2px 8px var(--text);
                border-left: solid 3px var(--text);
                border-top: solid 3px var(--text);
                border-bottom: solid 1px var(--text);
                border-right: solid 1px var(--text);
                padding: 0.25em;

                transform: rotateZ(-3.5deg);
                opacity: 0.25;
                overflow: hidden;

                text-align: center;

                display: flex;
                flex-direction: column;

                span {
                    font-size: 0.75em;
                    font-weight: bold;
                }

                p {
                    font-size: 0.65em;
                }
            }
        }

        &--wip {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.25;
            display: grid;
            place-items: center;
            font-size: 4em;
            transition: opacity .2s ease-in-out;
            backdrop-filter: blur(2px);

            &:hover {
                backdrop-filter: blur(4px);
                opacity: 0.75;
                cursor: pointer;
            }

            span {
                padding: 0.1em 0.5em;
                background: var(--text);
                color: var(--base);
            }
        }
    }
</style>