<script>
    export default {
        data: () => {
            return {
                isActive: false
            }
        },
        methods: {
            mouseOverAction(key) {
                this.isActive = key
            },
            mouseLeaveAction() {
                this.isActive = false
            }
        }
    }
</script>

<template>
    <div class="chronologyArea">
        <h2>Me</h2>
        <div class="innerBlock pc">
            <div class="phase">
                <div class="date">
                    <span class="circle" v-on:mouseover="mouseOverAction(1001)" v-on:mouseleave="mouseLeaveAction"></span>
                    <p class="year">2015/04 -</p>
                    <div class="balloon" v-if="isActive === 1001 || false">
                        <div class="head">
                            <p class="title">専門学校に入学</p>
                        </div>
                        <div class="content">
                            <p class="text">高校卒業後にWeb制作を学びに専門学校へ入学。<br>
                                学内作品展や学園祭のWebサイト制作を行った他、グラフィックデザインも学ぶ。</p>
                        </div>
                    </div>
                </div>
                <div class="date">
                    <span class="circle" v-on:mouseover="mouseOverAction(1002)" v-on:mouseleave="mouseLeaveAction"></span>
                    <p class="year">2017/04 -</p>
                    <div class="balloon" v-if="isActive === 1002 || false">
                        <div class="head">
                            <p class="title">新卒入社</p>
                        </div>
                        <div class="content">
                            <p class="text">専門学校卒業後に現在の会社に新卒入社。<br>
                                入社後はプログラミング（主にPHP）を中心に約半年間の研修をおこなう。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="phase">
                <div class="date">
                    <span class="circle" v-on:mouseover="mouseOverAction(1003)" v-on:mouseleave="mouseLeaveAction"></span>
                    <p class="year">2017/10 -</p>
                    <div class="balloon" v-if="isActive === 1003 || false">
                        <div class="head">
                            <p class="title">ツアー予約サイトの新規開発</p>
                        </div>
                        <div class="content">
                            <p class="text">客先常駐にてバックエンドエンジニアとして新規開発に従事。<br>
                                GoogleMapsAPIを利用したカスタムマップの描画、位置データのDB送信処理などを担当。</p>
                        </div>
                    </div>
                </div>
                <div class="date">
                    <span class="circle" v-on:mouseover="mouseOverAction(1004)" v-on:mouseleave="mouseLeaveAction"></span>
                    <p class="year">2018/01 -</p>
                    <div class="balloon" v-if="isActive === 1004 || false">
                        <div class="head">
                            <p class="title">ネイルサロンWebサイト制作</p>
                        </div>
                        <div class="content">
                            <p class="text">同現場が運営しているネイルサロンのポータルサイト制作に従事。<br>
                                サイトデザイン作成からディレクション、WordPress新規テーマの作成までワンストップで担当。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="phase">
                <div class="date">
                    <span class="circle" v-on:mouseover="mouseOverAction(1005)" v-on:mouseleave="mouseLeaveAction"></span>
                    <p class="year">2018/03 -</p>
                    <div class="balloon" v-if="isActive === 1005 || false">
                        <div class="head">
                            <p class="title">BtoC向けECサイトの保守・運用</p>
                        </div>
                        <div class="content">
                            <p class="text">UXデザインチームにてマークアップ、フロントエンドエンジニアとして保守、運用業務に従事。<br>
                                その他、イベントLPやエンジニア採用LPのコーディングも担当。</p>
                        </div>
                    </div>
                </div>
                <div class="date">
                    <span class="circle" v-on:mouseover="mouseOverAction(1006)" v-on:mouseleave="mouseLeaveAction"></span>
                    <p class="year">2019/09 -</p>
                    <div class="balloon" v-if="isActive === 1006 || false">
                        <div class="head">
                            <p class="title">BtoB向けECサイト商品再配達申請サイト制作</p>
                        </div>
                        <div class="content">
                            <p class="text">同現場が運営しているBtoB向けECサイトの商品再配達申請ページやUI改善におけるコーディングを担当。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="phase">
                <div class="date">
                    <span class="circle" v-on:mouseover="mouseOverAction(1007)" v-on:mouseleave="mouseLeaveAction"></span>
                    <p class="year">2019/11 -</p>
                    <div class="balloon" v-if="isActive === 1007 || false">
                        <div class="head">
                            <p class="title">自社内勤に戻る</p>
                        </div>
                        <div class="content">
                            <p class="text">フロントエンドエンジニア兼PLとして社内インフラシステムの開発やマネジメント業務に従事。<br>
                                中途、新卒社員の研修やワークショップなども担当。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="date">
                    <span class="circle" v-on:mouseover="mouseOverAction(1008)" v-on:mouseleave="mouseLeaveAction"></span>
                    <p class="year">2020/12 -</p>
                    <div class="balloon" v-if="isActive === 1008 || false">
                        <div class="head">
                            <p class="title">現在</p>
                        </div>
                        <div class="content">
                            <p class="text">開発、マネジメント業務と並行して、会社の年賀状作成や社内研修カリキュラムの作成を担当。<br>
                                会社業務のほか、個人で飲食店のLP制作もおこなっている。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="innerBlock sp">
            <div class="list">
                <ul>
                    <li>
                        <ul>
                            <li class="title">2015</li>
                            <li>高校を卒業後、Web制作を学ぶため専門学校入学</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li class="title">2017</li>
                            <li>現在の会社に新卒入社</li>
                            <li>研修後、バックエンドエンジニアとしてツアー予約サイトの新規開発案件に参画</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li class="title">2018</li>
                            <li>ネイルサロンポータルサイト制作を担当</li>
                            <li>BtoC向けECサイトの保守運用案件に参画</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li class="title">2019</li>
                            <li>BtoB向けECサイト商品再配達申請サイト制作を担当</li>
                            <li>自社内勤に戻る</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li class="title">現在</li>
                            <li>フロントエンドエンジニア兼PLとして社内インフラシステムの開発やマネジメント業務、中途新卒社員の研修やワークショップなども担当</li>
                            <li>飲食店のランディングページを制作</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>