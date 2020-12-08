<script>
    import Modal from '../modules/Modal'

    export default {
        components: {
            Modal
        },
        methods: {
            extendEvent(id) {
                this.$refs.Modal.openItem(id)
            }
        }
    }
</script>

<template>
    <div class="worksArea">
        <h2>Works</h2>
        <div class="innerBlock">
            <ul>
                <li class="item" @click="extendEvent(0)">
                    <p class="img"><img src="/src/assets/images/work_1_1.png" alt=""></p>
                </li>
                <li class="item" @click="extendEvent(1)">
                    <p class="img"><img src="/src/assets/images/work_2_1.png" alt=""></p>
                </li>
                <li class="item" @click="extendEvent(2)">
                    <p class="img"><img src="/src/assets/images/work_3_1.png" alt=""></p>
                </li>
                <li class="item" @click="extendEvent(3)">
                    <p class="img"><img src="/src/assets/images/work_4_1.png" alt=""></p>
                </li>
                <li class="item" @click="extendEvent(4)">
                    <p class="img"><img src="/src/assets/images/work_5_1.png" alt=""></p>
                </li>
            </ul>
        </div>
        <Modal ref="Modal" />
    </div>
</template>