<script>
    export default {
        data() {
            return {
                isModalActive: false,
                key: '',
                arrImg: '',
                items: [{
                    id: 0,
                    title: '犬・Tシャツ',
                    date: '2020/10',
                    text: '自身で書いたイラストをTシャツにしてみました。<br>犬種はシーズーです。',
                    tools: 'Photoshop',
                    images: [
                        {
                            path: '/src/assets/images/work_1_1.png',
                            alt: 'Tシャツの画像'
                        },
                        {
                            path: '/src/assets/images/work_1_2.png',
                            alt: 'Tシャツのデザイン'
                        }
                    ]
                },
                {
                    id: 1,
                    title: 'inu-T 2222',
                    date: '2020/12',
                    text: '自身で書いたイラストをTシャツにしてみました。犬種はシーズーです。',
                    tools: 'Photoshop',
                    images: [
                        {
                            path: '/src/assets/images/work_1_1.png',
                            alt: 'Tシャツの画像'
                        },
                        {
                            path: '/src/assets/images/work_1_2.png',
                            alt: 'Tシャツのデザイン'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'inu-T',
                    date: '2020/10',
                    text: '自身で書いたイラストをTシャツにしてみました。犬種はシーズーです。',
                    tools: 'Photoshop',
                    images: [
                        {
                            path: '/src/assets/images/work_1_1.png',
                            alt: 'Tシャツの画像'
                        },
                        {
                            path: '/src/assets/images/work_1_2.png',
                            alt: 'Tシャツのデザイン'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'inu-T',
                    date: '2020/10',
                    text: '自身で書いたイラストをTシャツにしてみました。犬種はシーズーです。',
                    tools: 'Photoshop',
                    images: [
                        {
                            path: '/src/assets/images/work_1_1.png',
                            alt: 'Tシャツの画像'
                        },
                        {
                            path: '/src/assets/images/work_1_2.png',
                            alt: 'Tシャツのデザイン'
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'inu-T',
                    date: '2020/10',
                    text: '自身で書いたイラストをTシャツにしてみました。犬種はシーズーです。',
                    tools: 'Photoshop',
                    images: [
                        {
                            path: '/src/assets/images/work_1_1.png',
                            alt: 'Tシャツの画像'
                        },
                        {
                            path: '/src/assets/images/work_1_2.png',
                            alt: 'Tシャツのデザイン'
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'inu-T',
                    date: '2020/10',
                    text: '自身で書いたイラストをTシャツにしてみました。犬種はシーズーです。',
                    tools: 'Photoshop',
                    images: [
                        {
                            path: '/src/assets/images/work_1_1.png',
                            alt: 'Tシャツの画像'
                        },
                        {
                            path: '/src/assets/images/work_1_2.png',
                            alt: 'Tシャツのデザイン'
                        }
                    ]
                }]
            }
        },
        methods: {
            openItem(re_id) {
                this.toggleModal()
                this.key = this.items[re_id]
                this.arrImg = this.key.images
            },
            toggleModal() {
                this.isModalActive = ! this.isModalActive
            }
        }
    }
</script>

<template>
    <div>
        <div class="p-modal" :class="{'is-open': isModalActive}">
            <div class="innerBlock">
                <div class="content">
                    <p class="head">
                        <span class="title">{{key.title}}</span>
                        <span class="close" @click="toggleModal">×</span>
                    </p>
                    <p class="detail">
                        <span class="date">{{key.date}}</span>
                        <span class="text" v-html="key.text"></span>
                        <span clas="tool">{{key.tools}}</span>
                    </p>
                    <ul>
                        <li v-for="item in arrImg" :key="item.images">
                            <img class="img" :src="item.path" :alt="item.alt">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="overlay" :class="{'is-open': isModalActive}" @click="toggleModal"></div>
    </div>
</template>