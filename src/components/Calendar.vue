<template>
    <div class="calendar">
        <div class="calendar__year-months">
            <div class="calendar__year-months__dynamic-select">
                <div @click="change('month','up')"><span class="iconify" data-icon="dashicons:arrow-up"></span></div>
                <span>{{month}}</span>
                <div @click="change('month','down')"><span class="iconify" data-icon="dashicons:arrow-down"></span></div>
            </div>
            <div class="calendar__year-months__dynamic-select">
                <div @click="change('year','up')"><span class="iconify" data-icon="dashicons:arrow-up"></span></div>
                <span>{{year}}</span>
                <div @click="change('year','down')"><span class="iconify" data-icon="dashicons:arrow-down"></span></div>
            </div>
            <div style="display: flex; place-items: center;">
                <div class="calendar__year-months__dynamic-select">
                    <div @click="change('hour','up')"><span class="iconify" data-icon="dashicons:arrow-up"></span></div>
                    <span>{{hour}}</span>
                    <div @click="change('hour','down')"><span class="iconify" data-icon="dashicons:arrow-down"></span></div>
                </div>
                h
                <div class="calendar__year-months__dynamic-select">
                    <div @click="change('minute','up')"><span class="iconify" data-icon="dashicons:arrow-up"></span></div>
                    <span>{{minute < 10 ? '0' + minute : minute}}</span>
                    <div @click="change('minute','down')"><span class="iconify" data-icon="dashicons:arrow-down"></span></div>
                </div>
            </div>
        </div>
        <div class="calendar__days">
            <div v-for="i in dayPerMonth[month]" :class="{selected: day==i}" @click="change('day', i)">{{i}}</div>
        </div>
    </div>
</template>


<script lang="ts" setup>

    import { ref } from 'vue';

    const month = ref('November');
    const year = ref(2021);
    const day = ref(0);
    const hour = ref(8);
    const minute = ref(0);
    const months : string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayPerMonth : Record<string,number> = {
        'January': 31,
        'February': 28,
        'March': 31,
        'April': 30,
        'May': 31,
        'June': 30,
        'July': 31,
        'August': 31,
        'September': 30,
        'October': 31,
        'November': 30,
        'December': 31,
    }

    const emit = defineEmits(['update']);

    const change = (which: string, value: string | number) => {
        if (which == 'day') {
            //@ts-ignore
            day.value = value
        } else {
            funcs[which][value]()
        }
        emit('update', {
            day: day.value,
            month: month.value,
            year: year.value,
            hour: hour.value,
            minute: minute.value
        })
    }

    const funcs: Record<string,any> = {
        month: {
            up: () => {
                let idx = months.indexOf(month.value)
                month.value = idx == 0 ? months[months.length-1] : months[idx-1]
            },
            down: () => {
                let idx = months.indexOf(month.value)
                month.value = months.indexOf(month.value) == months.length-1 ? months[0] : months[idx+1]
            },
        },
        year: {
            up: () => {if (year.value != 2021) year.value--},
            down: () => {if (year.value != 2022) year.value++}
        },
        hour: {
            up: () => {hour.value = hour.value == 8 ? 22 : hour.value-1},
            down: () => {hour.value = hour.value == 22 ? 8 : hour.value+1}
        },
        minute: {
            up: () => {minute.value = minute.value == 0 ? 55 : minute.value-5},
            down: () => {minute.value = minute.value == 55 ? 0 : minute.value+5}
        }
    }

</script>


<style lang="scss">
    .calendar {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1em 0;
        width: 75%;
        &__year-months {
            user-select: none;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: 100%;
            place-items: center;

            &__dynamic-select {
                display: flex;
                flex-direction: column;
                align-items: center;
                svg {
                    opacity: 0.66;
                    font-size: 1.5em;
                    &:hover { cursor: pointer; opacity: 1; }
                }
            }
        }
        &__days {
            margin-top: 0.5em;
            width: 90%;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-gap: 1em;
            grid-row-gap: 0.25em;
            div {
                aspect-ratio: 1 / 1;
                display: grid;
                place-items: center;
                border: solid 1px rgba(0,0,0,0);
                &:hover,&.selected {
                    cursor: pointer;
                    background: var(--secondary);
                    border: solid 1px var(--text);
                }
            }
        }
    }
</style>