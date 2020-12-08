<script>
    export default {
        data() {
            return {
                isModalActive: false,
                key: '',
                arrImg: '',
                items: [{
                    id: 0,
                    title: '横浜デジタルアーツ専門学校・選抜作品展2016',
                    date: '2016/03',
                    text: '専門学校の作品展告知サイトの制作をおこないました。<br>初めて外部に公開したWebサイトです。',
                    tools: 'Webサイトデザイン・HTML/CSS/JS コーディング・レスポンシブ',
                    images: [
                        {
                            path: '/src/assets/images/work_1_2.png',
                            alt: 'トップページ'
                        },
                        {
                            path: '/src/assets/images/work_1_3.png',
                            alt: 'コンセプト説明と会場マップ'
                        },
                        {
                            path: '/src/assets/images/work_1_4.png',
                            alt: 'コンセプトのスマートフォン画面'
                        },
                        {
                            path: '/src/assets/images/work_1_5.png',
                            alt: '関連リンクのスマートフォン画面'
                        }
                    ]
                },
                {
                    id: 1,
                    title: '横浜デジタルアーツ専門学校・学園祭2016',
                    date: '2016/10',
                    text: '専門学校の学園祭サイト制作をおこないました。',
                    tools: 'Webサイトデザイン・HTML/CSS/JS コーディング・レスポンシブ',
                    images: [
                        {
                            path: '/src/assets/images/work_2_2.png',
                            alt: 'トップページ'
                        },
                        {
                            path: '/src/assets/images/work_2_3.png',
                            alt: 'Tシャツのデザイン'
                        },
                        {
                            path: '/src/assets/images/work_2_4.png',
                            alt: 'Tシャツのデザイン'
                        },
                        {
                            path: '/src/assets/images/work_2_5.png',
                            alt: 'Tシャツのデザイン'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'ネイルサロンポータルサイト',
                    date: '2018/01',
                    text: 'ネイルサロンのポータルサイトを制作しました。<br>ワードプレスのテーマは新規で作成したものを使用しました。',
                    tools: 'Webサイトデザイン・HTML/CSS/JS コーディング・レスポンシブ・PHP/WordPress',
                    images: [
                        {
                            path: '/src/assets/images/work_3_2.png',
                            alt: 'トップページ'
                        },
                        {
                            path: '/src/assets/images/work_3_3.png',
                            alt: 'トップページの各コンテンツ'
                        },
                        {
                            path: '/src/assets/images/work_3_4.png',
                            alt: '採用ページのスマートフォン画面'
                        },
                        {
                            path: '/src/assets/images/work_3_5.png',
                            alt: 'フッターのスマートフォン画面'
                        }
                    ]
                },
                {
                    id: 3,
                    title: '寿司居酒屋からくさ',
                    date: '2020/10',
                    text: '店舗のオープン告知のランディングページを制作しました。<br>ページ内のカルーセルはフルスクラッチで作成しています。',
                    tools: 'Webサイトデザイン・HTML/CSS/JS コーディング・レスポンシブ',
                    images: [
                        {
                            path: '/src/assets/images/work_4_2.png',
                            alt: 'トップページ'
                        },
                        {
                            path: '/src/assets/images/work_4_3.png',
                            alt: '店舗コンセプト説明'
                        },
                        {
                            path: '/src/assets/images/work_4_4.png',
                            alt: '店舗の様子、アクセスのスマートフォン画面'
                        },
                        {
                            path: '/src/assets/images/work_4_5.png',
                            alt: '店舗マップとフッターのスマートフォン画面'
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'ポートフォリオサイト',
                    date: '2020/10',
                    text: '転職活動で使用するためのポートフォリオサイトを制作しました。<br>CLIは使用せずにできるだけ最小の環境を構築しました。',
                    tools: 'Webサイトデザイン・HTML/CSS/JS コーディング・レスポンシブ・Vue.js',
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
                this.scroll = document.querySelector('body').classList
                this.isModalActive = ! this.isModalActive
                this.isModalActive ? this.scroll.add('active') : this.scroll.remove('active')
            }
        }
    }
</script>

<template>
    <div>
        <transition name="vshow">
        <div class="p-modal" v-show="isModalActive">
            <div class="innerBlock">
                <div class="content">
                    <p class="head">
                        <span class="title">{{key.title}}</span>
                        <span class="close" @click="toggleModal"></span>
                    </p>
                    <p class="detail">
                        <span class="date">{{key.date}}</span>
                        <span class="text" v-html="key.text"></span>
                        <span clas="tool">{{key.tools}}</span>
                    </p>
                    <div class="item">
                        <ul>
                            <li v-for="item in arrImg" :key="item.images">
                                <span class="dots"></span>
                                <img class="img" :src="item.path" :alt="item.alt">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </transition>
        <transition name="vshow">
        <div class="overlay" v-show="isModalActive" @click="toggleModal"></div>
        </transition>
    </div>
</template>