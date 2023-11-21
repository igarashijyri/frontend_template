// エントリーポイントファイル(プログラムが実行を開始するための特定の場所やファイル)
// 通常プログラムが始動するときに最初に実行されるコードやファイル
import './assets/main.css'

import { createApp } from 'vue'
// 多分こいつを見ているんだけど、何故かdocker再起動しないと変更が適用されない。
// .vueファイルに色とか何もつかなくて見づらくて仕方ないのでvscodeで良い設定ないか探してみる。
// 1つのファイル(.vue)にhtmlとcssとjsが記述されてて地獄でしかないんだけど、切り分ける手段はないものか。
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
