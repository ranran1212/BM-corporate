/**
 * Commands — registry of all terminal commands.
 * Each command is a function that receives (terminal, args).
 */
import { Terminal } from './terminal.js';

const esc = Terminal.escapeHtml;
const SEP = '<span class="t-dim">───────────────────────────────────────</span>';

/* ── service block builder ── */

function serviceBlock({ name, category, main, sub, description }) {
  return [
    { html: '' },
    { html: SEP },
    { html: `<span class="t-head">${esc(name)}</span>  <span class="t-dim">${esc(category)}</span>` },
    { html: SEP },
    { html: '' },
    { html: `<span class="t-main">${esc(main)}</span>` },
    { html: `<span class="t-sub">${esc(sub)}</span>` },
    { html: '' },
    { html: `<span class="t-body">${esc(description)}</span>` },
    { html: '' },
  ];
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
    { html: '  <span class="t-teal">bmh</span>        BMH — イベント制作運営' },
    { html: '  <span class="t-teal">dev</span>        アプリ開発支援' },
    { html: '  <span class="t-teal">sukipi</span>     すきぴチェッカー' },
    { html: '  <span class="t-teal">oniden</span>     鬼電ちゃん' },
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
    { html: '<span class="t-poetry">でも、そんなゆがみがあるからこそ人間らしくて、</span>' },
    { html: '<span class="t-poetry">そのゆがみこそ、実は愛すべき存在なのかもしれない。</span>' },
    { html: '' },
    { html: '<span class="t-poetry">これまでにないサービスは、これまで言えなかった気持ちから始まる。</span>' },
    { html: '<span class="t-poetry">ゆがみは、新しい可能性のカタチだ。</span>' },
    { html: '<span class="t-poetry">さぁ、一人一人のゆがみを、新しい未来へのひろがりに。</span>' },
    { html: '<span class="t-poetry">押し殺していた声を、新しい時代の産声に。</span>' },
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
    { html: '  <span class="t-teal">bmh</span>      BMH           <span class="t-dim">イベント制作運営</span>' },
    { html: '  <span class="t-teal">dev</span>      アプリ開発支援  <span class="t-dim">App Dev Support</span>' },
    { html: '  <span class="t-teal">sukipi</span>   すきぴチェッカー <span class="t-dim">自社アプリ</span>' },
    { html: '  <span class="t-teal">oniden</span>   鬼電ちゃん     <span class="t-dim">自社アプリ</span>' },
    { html: '  <span class="t-teal">floppy</span>   super floppy  <span class="t-dim">自社アプリ β</span>' },
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
    main: '木工に負けない。価格はシステムブース並み。',
    sub: '2コマ27万円〜。中小企業のための高品質SEGブース施工。',
    description:
      '内照式SEGライトボックスを活用し、視認性とデザイン性を両立。\n' +
      '再利用可能な構造によりコストを抑えつつ、木工同等の世界観を実現します。\n' +
      '設計〜施工〜撤収まで一貫対応。\n' +
      '限られた予算で成果を出したい企業のための合理的な選択肢です。',
  }));
};

commands.bmh = commands.event = (term) => {
  term.typeLines(serviceBlock({
    name: 'BMH',
    category: 'イベント制作運営',
    main: '企画で終わらせない。',
    sub: '設計から当日運営まで実装するイベントプロデュース。',
    description:
      '企業イベント・展示会・プロモーション施策を企画段階から構造設計。\n' +
      '演出、導線設計、スタッフ運営まで統合し、"崩れない現場"を実現します。\n' +
      '100名規模以上の運営設計にも対応。\n' +
      '成果につながる体験設計を提供します。',
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
  term.typeLines(serviceBlock({
    name: 'すきぴチェッカー',
    category: '自社アプリ',
    main: '恋を、可視化する。',
    sub: '感情をエンタメに変える診断アプリ。',
    description:
      '会話や行動傾向から"すきぴ度"を数値化。\n' +
      '友達同士でも楽しめるシェア前提設計で拡散性を重視。\n' +
      '感情整理とエンタメを両立する自社開発コンテンツです。',
  }));
};

commands.oniden = (term) => {
  term.typeLines(serviceBlock({
    name: '鬼電ちゃん',
    category: '自社アプリ',
    main: '通知は、エンタメだ。',
    sub: '着信体験をアップデートするコミュニケーションアプリ。',
    description:
      '連続通知や独自演出で存在感を最大化。\n' +
      '日常のコミュニケーションを"イベント化"します。\n' +
      '話題化とIP展開を視野に入れた実験的プロダクトです。',
  }));
};

commands.floppy = commands.sf = (term) => {
  term.typeLines(serviceBlock({
    name: 'super floppy',
    category: '自社アプリ β',
    main: '月末を、シンプルに。',
    sub: '時間単価メンバーの工数をリアルタイム可視化。',
    description:
      'フリーランスや制作会社向けの超シンプル稼働管理アプリ。\n' +
      '日々の作業時間を記録するだけで月末請求の不安を回避。\n' +
      'βテスター企業募集中。\n' +
      '複雑な管理は不要、必要なのは"今どれだけ動いているか"だけです。',
  }));
};

commands.contact = (term) => {
  term.typeLines([
    { html: '' },
    { html: '<span class="t-teal2 t-bold">Contact / Links</span>' },
    { html: SEP },
    { html: '  <a class="t-link" href="https://forms.gle/f5Y7dhLjiE4YWpxQ8" target="_blank">お問い合わせフォーム</a>' },
    { html: '  <a class="t-link" href="https://menherasenpai.notion.site/1e90ec5d9fc1410985a8e24014a93c8a" target="_blank">採用情報</a>' },
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
    { html: '  <span class="t-dim">ceo:</span>      Ranka' },
    { html: '  <span class="t-dim">founded:</span>  2018' },
    { html: '  <span class="t-dim">location:</span> Tokyo, JP' },
    { html: '  <span class="t-dim">team:</span>     正社員 10名' },
    { html: '  <span class="t-dim">staff:</span>    登録約 1,500名' },
    { html: '  <span class="t-dim">revenue:</span>  ¥300,000,000 / year' },
    { html: '  <span class="t-dim">supply:</span>   中国製造 × 国内施工' },
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
