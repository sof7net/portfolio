<template>
    <div class="header">
        <h1>S O F 7</h1>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
    </div>
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

        h1 {
            margin: 0;
            font-size: 8em;
            font-weight: 100;
            // letter-spacing: 0.8em;
            text-align: center
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
                &::after {
                    content: '';
                    position: absolute;
                    width: 87.5%;
                    bottom: 10%;
                    right: -5%;
                    height: 22.5%;
                    background: rgba(red, 40%);
                    z-index: -1;
                    opacity: 0.65;
                }
                &:hover, &.router-link-active {
                    // need something better :)
                    color: rgba(red, 40%);
                    &::after {
                        background-color: var(--text);
                        opacity: 0.25;
                    }
                }
            }
        }
    }
</style>