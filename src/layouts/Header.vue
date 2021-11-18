<template>
    <header class="header">
        <div class="header__title">
            <h1>S O F 7</h1>
            <span>Self taught developer & it enthusiast</span>
        </div>
        <nav>
            <ul>
                <li><router-link class="fancy" to="/">Home</router-link></li>
                <li><router-link class="fancy" to="/about">About</router-link></li>
                <li><router-link class="fancy" to="/projects">Projects</router-link></li>
                <li><router-link class="fancy" to="/contact">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>


<style lang="scss">

    .header {
        padding: 2em 0;
        margin-bottom: 2em;
        user-select: none;
        font-family: 'IBM Plex Sans';
        display: flex;
        flex-direction: column; // comment for alt style
        align-items: center;

        &__title {
            // background: red;
            position: relative;

            h1 {
                margin: 0;
                font-size: 8em;
                font-weight: 100;
                // letter-spacing: 0.8em;
                text-align: center;
                background: -webkit-linear-gradient(var(--text), var(--base));
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            span {
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
                text-transform: uppercase;
                font-size: 1.25em;
                width: 125%;
                text-align: center;
                opacity: .15;
            }
        }

        nav ul {
            padding: 0;
            margin-top: 3em;
            list-style-type: none;

            li {
                display: inline-block;
                margin: 0 3em; // set to (0,1) alt style
            }
            
            a {
                font-weight: 300;
                text-transform: uppercase;
                text-decoration: none;
                position: relative;
                font-size: 1.25em;
                color: var(--text);

                &:hover, &.router-link-active {
                    // need something better :)
                    color: var(--fancy-color);
                    &::after {
                        background-color: var(--text);
                        opacity: 0.25;
                    }
                }
            }
        }
    }
</style>