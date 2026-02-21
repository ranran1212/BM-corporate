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
    { html: '  <span class="t-teal">ran2</span>       RAN\u00B2 BooTH — 展示会ブース施工' },
    { html: '  <span class="t-teal">bmh</span>        BMH — 統合型イベントソリューション' },
    { html: '  <span class="t-teal">dev</span>        アプリ開発支援' },
    { html: '  <span class="t-teal">sukipi</span>     すきぴチェッカー' },
    { html: '  <span class="t-teal">oniden</span>     鬼電ちゃん — 鬼電の自動化ツール' },
    { html: '  <span class="t-teal">floppy</span>     super floppy' },
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
    { html: '<span class="ascii-logo">  ____  _             __  __            _                   </span>' },
    { html: '<span class="ascii-logo"> | __ )| |_   _  ___ |  \\/  | ___ _ __ | |__   ___ _ __ __ _ </span>' },
    { html: '<span class="ascii-logo"> |  _ \\| | | | |/ _ \\| |\\/| |/ _ \\ \'_ \\| \'_ \\ / _ \\ \'__/ _` |</span>' },
    { html: '<span class="ascii-logo"> | |_) | | |_| |  __/| |  | |  __/ | | | | | |  __/ | | (_| |</span>' },
    { html: '<span class="ascii-logo"> |____/|_|\\__,_|\\___||_|  |_|\\___|_| |_|_| |_|\\___|_|  \\__,_|</span>' },
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
    { html: '  <span class="t-teal">ran2</span>     RAN\u00B2 BooTH    <span class="t-dim">展示会ブース施工</span>' },
    { html: '  <span class="t-teal">bmh</span>      BMH           <span class="t-dim">統合型イベントソリューション</span>' },
    { html: '  <span class="t-teal">dev</span>      アプリ開発支援  <span class="t-dim">App Dev Support</span>' },
    { html: '  <span class="t-teal">sukipi</span>   すきぴチェッカー <span class="t-dim">自社アプリ Coming Soon</span>' },
    { html: '  <span class="t-teal">oniden</span>   鬼電ちゃん     <span class="t-dim">鬼電の自動化ツール</span>' },
    { html: '  <span class="t-teal">floppy</span>   super floppy  <span class="t-dim">自社アプリ</span>' },
    { html: SEP },
    { html: '<span class="t-dim">6 items. Type command name for details.</span>' },
    { html: '' },
  ]);
};

/* ── service commands ── */

commands.ran2 = commands.booth = commands.ran = (term) => {
  term.typeLines(serviceBlock({
    name: 'RAN\u00B2 BooTH',
    category: '展示会ブース施工',
    main: '木工造作に負けないクオリティを、半額以下の価格で。',
    sub: '布とLEDライトで壁面全体が光る、次世代の展示会ブースです。',
    description:
      '木工造作並みの見栄えを、半額以下のコストで実現。\n' +
      '廃棄物ゼロ・CO2排出75%削減で、SDGs推進にも貢献します。',
  }));
};

commands.bmh = commands.event = (term) => {
  term.typeLines(serviceBlock({
    name: 'BMH',
    category: '統合型イベントソリューション',
    main: 'イベントを、構造から再設計する。',
    sub: '多重下請け構造を解体する、統合型イベントソリューション。',
    description:
      'イベント業界では、\n' +
      '多重下請け構造により予算が分断され、\n' +
      '本来必要なクリエイティブや現場品質に資源が届かないという課題があります。\n' +
      '\n' +
      '私たちは、その構造自体を再設計します。\n' +
      '\n' +
      'イベント制作、運営、施工、クリエイティブ、ITの5部門を統合的に提供。\n' +
      '分断をなくし、コストと品質を最適化。\n' +
      '\n' +
      'さらに、データドリブン採用基盤により、\n' +
      '約800名のイベントスタッフ、AD、ディレクターが在籍。\n' +
      '\n' +
      '企画から当日運営、施工まで一貫提供する\n' +
      '統合型イベントソリューションです。',
  }));
};

commands.dev = commands.app = (term) => {
  term.typeLines(serviceBlock({
    name: 'アプリ開発支援',
    category: 'App Development Support',
    main: '事業視点で、プロダクトをつくる。',
    sub: '企画設計から伴走する開発支援。',
    description:
      'アイデア整理、要件定義、UI/UX設計、開発ディレクションまで一貫対応。\n' +
      '最小構成で市場検証できるプロダクトを設計します。\n' +
      '単なる受託ではなく、事業構造まで踏み込む伴走型支援。\n' +
      'スタートアップ・新規事業開発に最適です。',
  }));
};

commands.sukipi = (term) => {
  term.typeLines([
    { html: '' },
    { html: SEP },
    { html: `<span class="t-head">${esc('すきぴチェッカー')}</span>  <span class="t-dim">${esc('自社アプリ')}</span>  <span class="t-accent">Coming Soon</span>` },
    { html: SEP },
    { html: '' },
    { html: `<span class="t-main">${esc('あなたの片想い、実は両想いかも？')}</span>` },
    { html: '' },
    { html: `<span class="t-body">${esc('すきぴチェッカーは InstagramのIDを登録するだけで')}</span>` },
    { html: `<span class="t-body">${esc('あなたと"すきぴ"が両想いかどうかを確認できるアプリです。')}</span>` },
    { html: '' },
    { html: `<span class="t-body">${esc('両想いになるまでは、こっそり使えます。')}</span>` },
    { html: '' },
  ]);
};

commands.oniden = (term) => {
  term.typeLines(serviceBlock({
    name: '鬼電ちゃん',
    category: '鬼電の自動化ツール',
    main: '起きるまで、かけ続けます。',
    sub: '',
    description:
      '現在、企業向けにアルバイトの起床確認や出発確認向けに展開中。\n' +
      'アルバイトが起きるまで電話をかけ続けます。\n' +
      '起きていないアルバイトがいたら、担当者に電話がかかります。\n' +
      '\n' +
      'C向けの鬼電自動化アプリもリリース予定。',
  }));
};

commands.floppy = commands.sf = (term) => {
  term.typeLines(serviceBlock({
    name: 'super floppy',
    category: '自社アプリ',
    main: '月末を、シンプルに。',
    sub: '時間単価メンバーの工数をリアルタイム可視化。',
    description:
      'フリーランスや制作会社向けの超シンプル稼働管理アプリ。\n' +
      '日々の作業時間を記録するだけで月末請求の不安を回避。\n' +
      '複雑な管理は不要、必要なのは"今どれだけ動いているか"だけです。',
  }));
};

commands.contact = (term) => {
  term.typeLines([
    { html: '' },
    { html: '<span class="t-teal2 t-bold">Contact / Links</span>' },
    { html: SEP },
    { html: '  <a class="t-link" href="https://tally.so/r/MezNLg" target="_blank">お問い合わせフォーム</a>' },
    { html: '  <a class="t-link" href="https://jp.indeed.com/cmp/株式会社ブルーメンヘラ/jobs" target="_blank">採用情報</a>' },
    { html: '  <a class="t-link" href="https://www.notion.so/menherasenpai/70a4f795950846b6aa3cb0d5ac47e005" target="_blank">会社概要（Notion）</a>' },
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
    { html: '  <span class="t-dim">team:</span>     正社員 10名' },
    { html: '  <span class="t-dim">staff:</span>    登録約 1,500名' },
    { html: '  <span class="t-dim">revenue:</span>  ¥300,000,000 / year' },
    { html: '  <span class="t-dim">biz:</span>      展示会ブース施工 / イベント制作運営 / アプリ開発' },
    { html: '  <span class="t-dim">motto:</span>    <span class="t-teal">"ゆがみを、愛す。"</span>' },
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
