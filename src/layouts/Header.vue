<template>
    <div class="header">
        <h1>SOF7</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
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

        h1 {
            margin: 0;
            font-size: 9em;
            font-weight: 100;
            letter-spacing: 0.4em;
        }

        nav ul {
            display: flex;
            justify-content: space-around;
            margin-top: 3em;
            list-style-type: none;
            
            li a {
                font-weight: 300;
                text-transform: uppercase;
                text-decoration: none;
                position: relative;
                font-size: 1.25em;
                color: black;
                &::after {
                    content: '';
                    position: absolute;
                    width: 87.5%;
                    bottom: 10%;
                    right: -5%;
                    height: 22.5%;
                    background: rgba(red, 40%);
                    z-index: -1;
                }
                &:hover {
                    // todo
                }
            }
        }
    }
</style>