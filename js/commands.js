/**
 * Commands — registry of all terminal commands.
 * Each command is a function that receives (terminal, args).
 */
import { Terminal } from './terminal.js';

const esc = Terminal.escapeHtml;
const SEP = '<span class="t-dim">───────────────────────────────────────</span>';

/* ── service block builder ── */

function serviceBlock({ name, category, main, sub, description }) {
  const lines = [
    { html: '' },
    { html: SEP },
    { html: `<span class="t-head">${esc(name)}</span>  <span class="t-dim">${esc(category)}</span>` },
    { html: SEP },
    { html: '' },
    { html: `<span class="t-main">${esc(main)}</span>` },
  ];
  if (sub) {
    lines.push({ html: `<span class="t-sub">${esc(sub)}</span>` });
  }
  lines.push(
    { html: '' },
    { html: `<span class="t-body">${esc(description)}</span>` },
    { html: '' },
  );
  return lines;
}

/* ── command definitions ── */

const commands = {};

commands.help = (term) => {
  term.typeLines([
    { html: '<span class="t-teal2 t-bold">Available commands:</span>' },
    { html: '' },
    { html: '  <span class="t-teal">about</span>      会社概要・ビジョン' },
    { html: '  <span class="t-teal">services</span>   事業一覧（ls でも可）' },
    { html: '  <span class="t-teal">ran2</span>       💡 RAN\u00B2 BooTH — Next-Generation Exhibition Booth Design & Build' },
    { html: '  <span class="t-teal">bmh</span>        🧙 BMH — Backstage Magical Hour — Event Production Solutions' },
    { html: '  <span class="t-teal">dev</span>        💻 アプリ開発支援' },
    { html: '  <span class="t-teal">sukipi</span>     🩷 すきぴチェッカー' },
    { html: '  <span class="t-teal">oniden</span>     👹 鬼電ﾁｬﾝ — 鬼電の自動化ツール' },
    { html: '  <span class="t-teal">floppy</span>     👁️ スーパーフロッピー' },
    { html: '  <span class="t-teal">contact</span>    お問い合わせ・リンク' },
    { html: '  <span class="t-teal">spec</span>       会社スペック' },
    { html: '  <span class="t-teal">clear</span>      画面クリア' },
    { html: '  <span class="t-teal">demo</span>       自動デモを再生' },
    { html: '' },
  ]);
};

commands.about = (term) => {
  term.typeLines([
    { html: '' },
    { html: '<span class="ascii-logo"><span class="ascii-cyan">██████╗ ██╗     ██╗   ██╗███████╗</span>  <span class="ascii-white">  ██╗  ██╗</span></span>' },
    { html: '<span class="ascii-logo"><span class="ascii-cyan">██╔══██╗██║     ██║   ██║██╔════╝</span>  <span class="ascii-white">  ██║  ██║</span></span>' },
    { html: '<span class="ascii-logo"><span class="ascii-cyan">██████╔╝██║     ██║   ██║█████╗  </span>  <span class="ascii-white">╔═██████═╗</span></span>' },
    { html: '<span class="ascii-logo"><span class="ascii-cyan">██╔══██╗██║     ██║   ██║██╔══╝  </span>  <span class="ascii-white">║  ●══●  ║</span></span>' },
    { html: '<span class="ascii-logo"><span class="ascii-cyan">██████╔╝███████╗╚██████╔╝███████╗</span>  <span class="ascii-white">║   ▽    ║</span></span>' },
    { html: '<span class="ascii-logo"><span class="ascii-cyan">╚═════╝ ╚══════╝ ╚═════╝ ╚══════╝</span>  <span class="ascii-white">╚════════╝</span></span>' },
    { html: '' },
    { html: '<span class="ascii-logo ascii-pink">███╗   ███╗███████╗███╗   ██╗██╗  ██╗███████╗██████╗  █████╗ </span>' },
    { html: '<span class="ascii-logo ascii-pink">████╗ ████║██╔════╝████╗  ██║██║  ██║██╔════╝██╔══██╗██╔══██╗</span>' },
    { html: '<span class="ascii-logo ascii-pink">██╔████╔██║█████╗  ██╔██╗ ██║███████║█████╗  ██████╔╝███████║</span>' },
    { html: '<span class="ascii-logo ascii-pink">██║╚██╔╝██║██╔══╝  ██║╚██╗██║██╔══██║██╔══╝  ██╔══██╗██╔══██║</span>' },
    { html: '<span class="ascii-logo ascii-pink">██║ ╚═╝ ██║███████╗██║ ╚████║██║  ██║███████╗██║  ██║██║  ██║</span>' },
    { html: '<span class="ascii-logo ascii-pink">╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝</span>' },
    { html: '' },
    { pause: 200 },
    { html: '<span class="t-catch">ゆがみを、愛す。</span>' },
    { html: '' },
    { html: '<span class="t-poetry">完璧な人なんていない。</span>' },
    { html: '<span class="t-poetry">みんな、心のどこかにゆがみを抱えて生きている。</span>' },
    { html: '<span class="t-poetry">平気なふりをして笑ったり、独りになって不安になったり、</span>' },
    { html: '<span class="t-poetry">本当はいいねと思っていないのに「いいね」と言ったり。</span>' },
    { html: '' },
    { html: '<span class="t-poetry">"こうあるべき"が強すぎる社会で、</span>' },
    { html: '<span class="t-poetry">私たちは自分の輪郭を削って、うまく生きる練習ばかりしてきた。</span>' },
    { html: '' },
    { html: '<span class="t-poetry">でも、そんなゆがみがあるからこそ人間らしくて、</span>' },
    { html: '<span class="t-poetry">そのゆがみこそ、実は愛すべき存在なのかもしれない。</span>' },
    { html: '' },
    { html: '<span class="t-poetry">これまでにないサービスは、これまで言えなかった気持ちから始まる。</span>' },
    { html: '<span class="t-poetry">ゆがみは、新しい可能性のカタチだ。</span>' },
    { html: '<span class="t-poetry">一人ひとりのゆがみを、新しい未来へのひろがりに。</span>' },
    { html: '<span class="t-poetry">押し殺していた声で、"正しさの独裁"をほどいていこう。</span>' },
    { html: '<span class="t-poetry">何かをずっと抱えてきた人こそ、新しい何かをつくっていける。</span>' },
    { html: '' },
  ]);
};

commands.services = commands.ls = (term) => {
  term.typeLines([
    { html: '' },
    { html: '<span class="t-teal2 t-bold">C:\\BlueMenhera\\Services\\</span>' },
    { html: SEP },
    { html: '  <span class="t-teal">ran2</span>     💡 RAN\u00B2 BooTH       <span class="t-dim">Next-Generation Exhibition Booth Design & Build</span>' },
    { html: '  <span class="t-teal">bmh</span>      🧙 BMH              <span class="t-dim">Backstage Magical Hour — Event Production Solutions</span>' },
    { html: '  <span class="t-teal">dev</span>      💻 アプリ開発支援    <span class="t-dim">App Dev Support</span>' },
    { html: '  <span class="t-teal">sukipi</span>   🩷 すきぴチェッカー  <span class="t-dim">our mobile app Coming Soon</span>' },
    { html: '  <span class="t-teal">oniden</span>   👹 鬼電ﾁｬﾝ          <span class="t-dim">our web app</span>' },
    { html: '  <span class="t-teal">floppy</span>   👁️ スーパーフロッピー <span class="t-dim">our web app</span>' },
    { html: SEP },
    { html: '<span class="t-dim">6 items. Type command name for details.</span>' },
    { html: '' },
  ]);
};

/* ── service commands ── */

commands.ran2 = commands.booth = commands.ran = (term) => {
  term.typeLines(serviceBlock({
    name: '💡 RAN\u00B2 BooTH',
    category: 'Next-Generation Exhibition Booth Design & Build',
    main: '木工造作に負けないクオリティを、半額以下の価格で。',
    sub: '布×LEDで、壁面を「発光する表示面」として構成する展示会ブース。再利用前提で、廃棄物ゼロ運用・CO2排出75%削減にもつながります。',
    description:
      '[ Overview ]\n' +
      '展示会ブースを、都度つくり捨てるものから、再利用可能な構成に置き換える。\n' +
      '\n' +
      '[ Spec ]\n' +
      '\u2022 壁面：布（グラフィック）＋LEDライトボックスで壁全体が発光\n' +
      '\u2022 見栄え：木工造作に負けない"壁の強さ"を、光と面で演出\n' +
      '\u2022 コスト設計：システムブース水準（ex：2小間27万円〜／2回目以降）\n' +
      '\u2022 対応範囲：デザイン／設計、製作、施工、搬入出までまとめて対応\n' +
      '\u2022 運用：再利用を前提に、回数が増えるほど総コストが下がりやすい構成\n' +
      '\n' +
      '[ Non-goals ]\n' +
      '\u2022 その場限りの使い捨て前提の展示会ブースをつくらない\n' +
      '\u2022 施工費を膨らませて、出展のコンバージョン単価を不必要に押し上げる設計にしない',
  }));
};

commands.bmh = commands.event = (term) => {
  term.typeLines(serviceBlock({
    name: '🧙 BMH',
    category: 'Backstage Magical Hour — Event Production Solutions',
    main: '舞台裏で「魔法の時間」をつくる、イベント制作ソリューション',
    sub: '役割と予算の分断を減らし、品質とコストのブレを抑えます。',
    description:
      '[ Overview ]\n' +
      'イベントの体験品質は、表舞台だけではなく舞台裏の設計が重要\n' +
      '\n' +
      '[ Problem ]\n' +
      '多重下請け構造で、予算と役割が分かれやすい。結果として、現場品質やクリエイティブに必要なリソースが届きにくい。\n' +
      '\n' +
      '[ Spec ]\n' +
      '\u2022 提供体制：制作／運営／施工／クリエイティブ／IT を統合的に提供\n' +
      '\u2022 目的：分断による手戻り・伝達ロス・品質差を減らす\n' +
      '\u2022 人材：イベントスタッフ／AD／ディレクターが1,600名超在籍\n' +
      '\u2022 組成：案件の規模と要件に合わせて、必要な体制を設計\n' +
      '\u2022 対応範囲：企画〜当日運営〜施工まで一括対応\n' +
      '\n' +
      '[ Non-goals ]\n' +
      '\u2022 誰が何をするか曖昧な状態で進めない\n' +
      '\u2022 価値のない部分にリソースを割かない',
  }));
};

commands.dev = commands.app = (term) => {
  term.typeLines(serviceBlock({
    name: '💻 アプリ開発支援',
    category: 'App Development Support',
    main: '予算内で最大限を引き出すアプリ開発パートナー',
    sub: '予算内で「できること」「できないこと」を明確にし、こだわる部分と省略する部分を一緒に検討します。',
    description:
      '[ Overview ]\n' +
      '限られた予算の中で、成果に直結する要件だけを選び、動く形まで持っていく。\n' +
      '\n' +
      '[ Spec ]\n' +
      '\u2022 方針：予算の増額交渉はしない。予算内で設計を最適化する\n' +
      '\u2022 要件整理：「できること／できないこと」を最初に明確化\n' +
      '\u2022 対象：Webアプリ／ネイティブアプリ\n' +
      '\u2022 得意領域：toCアプリ、UI/UX（体験）の設計\n' +
      '\u2022 実装選択肢：React Native / PWA などでクロスプラットフォーム構成も可能\n' +
      '\n' +
      '[ Non-goals ]\n' +
      '\u2022 最初から「全部入り」を目指さない\n' +
      '\u2022 目的が曖昧な機能を惰性で積まない',
  }));
};

commands.sukipi = (term) => {
  term.typeLines(serviceBlock({
    name: '🩷 すきぴチェッカー',
    category: 'our mobile app',
    main: 'あなたの片想い、実は両想いかも？',
    sub: 'InstagramのIDを登録するだけで、あなたと"すきぴ"の関係性を確認できます。',
    description:
      '[ Overview ]\n' +
      '気になる相手との距離感を、密かにチェックするためのアプリ。\n' +
      '\n' +
      '[ Spec ]\n' +
      '\u2022 入力：Instagram ID（あなた／相手）\n' +
      '\u2022 出力：両想いかどうかの判定（結果表示）\n' +
      '\u2022 運用：両想いになるまでは、こっそり使える設計\n' +
      '\n' +
      '[ Non-goals ]\n' +
      '\u2022 結果がわからないまま、勢いで告白させない\n' +
      '\u2022 両想いなのに、気持ちが伝わらない状態を長引かせない',
  }));
};

commands.oniden = (term) => {
  term.typeLines(serviceBlock({
    name: '👹 鬼電ﾁｬﾝ',
    category: 'our web app',
    main: '電話に出るまで、かけ続けます。',
    sub: '電話の自動発信を起点に、通知・確認・エスカレーションを最小構成で組めるツール。',
    description:
      '[ Overview ]\n' +
      '「電話をかける」をトリガーにして、シンプルな自動化フローを組む。\n' +
      '\n' +
      '[ Spec ]\n' +
      '\u2022 トリガー：電話の自動発信\n' +
      '\u2022 ループ：条件を満たすまでリトライ（例：応答／入力／確認）\n' +
      '\u2022 分岐：未達時のエスカレーション（例：担当者へ通知）\n' +
      '\u2022 設計：用途を固定せず、同じ仕組みを別ユースケースへ流用できる\n' +
      '\n' +
      '[ Non-goals ]\n' +
      '\u2022 手動で電話をかける／かけ直す運用にしない\n' +
      '\u2022 不在・未達のたびに、人間に確認させる仕様にしない',
  }));
};

commands.floppy = commands.sf = (term) => {
  term.typeLines(serviceBlock({
    name: '👁️ スーパーフロッピー',
    category: 'our web app',
    main: '月末の稼働管理集計を、シンプルに。',
    sub: '時間単価メンバーの工数を、リアルタイムで可視化します。',
    description:
      '[ Overview ]\n' +
      'フリーランス／業務委託メンバーが多数所属する企業向けの超シンプル稼働管理アプリ。\n' +
      '\n' +
      '[ Spec ]\n' +
      '\u2022 対象：時間単価（時給／日給／工数）で動くチーム\n' +
      '\u2022 入力：日々の作業時間を記録するだけ\n' +
      '\u2022 出力：稼働状況をリアルタイムに可視化\n' +
      '\u2022 目的：月末請求の不安を減らす\n' +
      '\u2022 設計思想：複雑な管理を捨て、「今どれだけ動いているか」だけに集中\n' +
      '\n' +
      '[ Non-goals ]\n' +
      '\u2022 月末に請求書を見て青ざめる状態をつくらない\n' +
      '\u2022 非生産的な工数管理に時間を溶かさない',
  }));
};

commands.contact = (term) => {
  term.typeLines([
    { html: '' },
    { html: '<span class="t-teal2 t-bold">Contact / Links</span>' },
    { html: SEP },
    { html: '  <a class="t-link" href="https://tally.so/r/MezNLg" target="_blank">お問い合わせフォーム</a>' },
    { html: '  <a class="t-link" href="https://jp.indeed.com/cmp/株式会社ブルーメンヘラ/jobs" target="_blank">採用情報</a>' },
    { html: SEP },
    { html: '' },
  ]);
};

commands.spec = commands.info = (term) => {
  term.typeLines([
    { html: '' },
    { html: '<span class="t-teal2 t-bold">Company Spec</span>' },
    { html: SEP },
    { html: '  <span class="t-dim">company:</span>  株式会社ブルーメンヘラ' },
    { html: '  <span class="t-dim">former:</span>   <span class="t-strike">REIGETSU</span> <span class="t-red">[deprecated]</span>' },
    { html: '  <span class="t-dim">address:</span>  東京都豊島区南池袋3丁目13-5 KJ南池袋ビル3F' },
    { html: '  <span class="t-dim">tel:</span>      03-6804-5891' },
    { html: '  <span class="t-dim">ceo:</span>      高桑蘭佳（CEO）' },
    { html: '  <span class="t-dim">coo:</span>      向山口冬威（COO）' },
    { html: '  <span class="t-dim">founded:</span>  2018' },
    { html: '  <span class="t-dim">team:</span>     社員7名／業務委託20名／アルバイト1600名' },
    { html: '  <span class="t-dim">biz:</span>      展示会ブース施工 / イベント制作運営 / アプリ開発' },
    { html: '  <span class="t-dim">mission:</span>  <span class="t-teal">"ゆがみを、愛す。"</span>' },
    { html: SEP },
    { html: '' },
  ]);
};

commands.clear = commands.cls = (term) => {
  term.clear();
};

/* ── easter eggs ── */

commands.sudo = (term) => {
  term.typeLines([
    { html: '<span class="t-red">Permission denied: ゆがんでるので root 権限はありません。</span>' },
    { html: '<span class="t-dim">（そもそも root が必要なほど "まっすぐ" じゃない）</span>' },
    { html: '' },
  ]);
};

commands.rm = (term, args) => {
  if (args && args.toLowerCase().includes('reigetsu')) {
    term.typeLines([
      { html: '<span class="t-green">rm: \'REIGETSU\' を完全に削除しました。</span>' },
      { html: '<span class="t-dim">もう戻れません。前に進むだけ。</span>' },
      { html: '' },
    ]);
  } else {
    term.typeLines([
      { html: '<span class="t-red">rm: missing operand</span>' },
      { html: '' },
    ]);
  }
};

commands.exit = commands.quit = (term) => {
  term.typeLines([
    { html: '<span class="t-dim">logout</span>' },
    { html: '<span class="t-teal">ゆがんだまま、またどこかで。</span>' },
    { html: '' },
  ]);
};

commands.whoami = (term) => {
  term.typeLines([
    { html: '<span class="t-teal">you are someone with ゆがみ. and that\'s beautiful.</span>' },
    { html: '' },
  ]);
};

commands.pwd = (term) => {
  term.typeLines([
    { html: '/home/yugami/blue-menhera' },
    { html: '' },
  ]);
};

commands.cat = (term, args) => {
  if (!args) {
    term.typeLines([
      { html: '<span class="t-red">cat: missing filename</span>' },
      { html: '' },
    ]);
    return;
  }
  const file = args.trim().toLowerCase();
  if (file === 'about.md' || file === 'readme.md' || file === 'about') {
    commands.about(term);
  } else if (file === 'services' || file === 'services.yml') {
    commands.services(term);
  } else {
    term.typeLines([
      { html: `<span class="t-red">cat: ${esc(args)}: No such file</span>` },
      { html: '' },
    ]);
  }
};

export default commands;
