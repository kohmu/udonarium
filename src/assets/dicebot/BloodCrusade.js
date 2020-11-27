/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $hash2 = Opal.hash2;

  Opal.add_stubs(['$==', '$<=', '$>=', '$upcase', '$debug', '$===', '$getRelationTable', '$getSceneTable', '$getInitiativeSkillTable', '$getBodyRegionTable', '$getConfidenceHappyTable', '$getStatusHappyTable', '$getDailyHappyTable', '$getLinkHappyTable', '$getEvacuationHappyTable', '$getAllSkillTable', '$getMildInsanityTable', '$getSevereInsanityTable', '$getTableCommandResult', '$get_table_by_1d6', '$get_table_by_2d6', '$roll', '$freeze', '$setPrefixes', '$+', '$keys']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'BloodCrusade');

    var $nesting = [self].concat($parent_nesting), $BloodCrusade_initialize$1, $BloodCrusade_check_2D6$2, $BloodCrusade_rollDiceCommand$3, $BloodCrusade_getRelationTable$4, $BloodCrusade_getSceneTable$5, $BloodCrusade_getInitiativeSkillTable$6, $BloodCrusade_getBodyRegionTable$7, $BloodCrusade_getConfidenceHappyTable$8, $BloodCrusade_getStatusHappyTable$9, $BloodCrusade_getDailyHappyTable$10, $BloodCrusade_getLinkHappyTable$11, $BloodCrusade_getEvacuationHappyTable$12, $BloodCrusade_getAllSkillTable$13, $BloodCrusade_getMildInsanityTable$14, $BloodCrusade_getSevereInsanityTable$15;

    
    Opal.const_set($nesting[0], 'ID', "BloodCrusade");
    Opal.const_set($nesting[0], 'NAME', "ブラッド・クルセイド");
    Opal.const_set($nesting[0], 'SORT_KEY', "ふらつとくるせいと");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・各種表\n" + "　・関係属性表         RT\n" + "　・シーン表           ST\n" + "　・先制判定指定特技表 IST\n" + "　・身体部位決定表　　 BRT\n" + "　・自信幸福表　　　　 CHT\n" + "　・地位幸福表　　　　 SHT\n" + "　・日常幸福表　　　　 DHT\n" + "　・人脈幸福表　　　　 LHT\n" + "　・退路幸福表　　　　 EHT\n" + "　・ランダム全特技表　 AST\n" + "　・軽度狂気表　　　　 MIT\n" + "　・重度狂気表　　　　 SIT\n" + "　・戦場シーン表　　　 BDST\n" + "　・夢シーン表　　　　 DMST\n" + "　・田舎シーン表　　　 CYST\n" + "　・学校シーン表　　　 SLST\n" + "　・館シーン表　　　　 MNST\n" + "　・時間経過表（10代～60代、半吸血鬼）TD1T～TD6T、TDHT\n" + "・D66ダイスあり\n");
    
    Opal.def(self, '$initialize', $BloodCrusade_initialize$1 = function $$initialize() {
      var $iter = $BloodCrusade_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $BloodCrusade_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', $BloodCrusade_initialize$1, false), $zuper, $iter);
      self.sendMode = 2;
      self.sortType = 1;
      self.d66Type = 2;
      return (self.fractionType = "roundUp");
    }, $BloodCrusade_initialize$1.$$arity = 0);
    
    Opal.def(self, '$check_2D6', $BloodCrusade_check_2D6$2 = function $$check_2D6(total, dice_total, _dice_list, cmp_op, target) {
      var self = this;

      
      if (target['$==']("?")) {
        return ""};
      if (cmp_op['$=='](">=")) {
      } else {
        return ""
      };
      if ($truthy($rb_le(dice_total, 2))) {
        return " ＞ ファンブル(【モラル】-3。追跡フェイズなら吸血シーンを追加。戦闘フェイズなら吸血鬼は追加行動を一回得る)"
      } else if ($truthy($rb_ge(dice_total, 12))) {
        return " ＞ スペシャル(【モラル】+3。追跡フェイズならあなたに関係を持つPCの【モラル】+2。攻撃判定ならダメージ+1D6）"
      } else if ($truthy($rb_ge(total, target))) {
        return " ＞ 成功"
      } else {
        return " ＞ 失敗"
      };
    }, $BloodCrusade_check_2D6$2.$$arity = 5);
    
    Opal.def(self, '$rollDiceCommand', $BloodCrusade_rollDiceCommand$3 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, output = nil, type = nil, total_n = nil, $case = nil;

      
      command = command.$upcase();
      output = "1";
      type = "";
      total_n = "";
      self.$debug("getTableResult command", command);
      $case = command;
      if ("RT"['$===']($case)) {
      type = "関係属性表";
      $b = self.$getRelationTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if ("ST"['$===']($case)) {
      type = "シーン表";
      $b = self.$getSceneTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if ("IST"['$===']($case)) {
      type = "先制判定指定特技表";
      $b = self.$getInitiativeSkillTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if ("BRT"['$===']($case)) {
      type = "身体部位決定表";
      $b = self.$getBodyRegionTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if ("CHT"['$===']($case)) {
      type = "自信幸福表";
      $b = self.$getConfidenceHappyTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if ("SHT"['$===']($case)) {
      type = "地位幸福表";
      $b = self.$getStatusHappyTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if ("DHT"['$===']($case)) {
      type = "日常幸福表";
      $b = self.$getDailyHappyTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if ("LHT"['$===']($case)) {
      type = "人脈幸福表";
      $b = self.$getLinkHappyTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if ("EHT"['$===']($case)) {
      type = "退路幸福表";
      $b = self.$getEvacuationHappyTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if ("AST"['$===']($case)) {
      type = "ランダム全特技表";
      $b = self.$getAllSkillTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if ("MIT"['$===']($case)) {
      type = "軽度狂気表";
      $b = self.$getMildInsanityTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else if ("SIT"['$===']($case)) {
      type = "重度狂気表";
      $b = self.$getSevereInsanityTable(), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (total_n = ($a[1] == null ? nil : $a[1])), $b;}
      else {return self.$getTableCommandResult(command, $$($nesting, 'TABLES'))};
      if (output['$==']("1")) {
        return output};
      output = "" + (type) + "(" + (total_n) + ") ＞ " + (output);
      return output;
    }, $BloodCrusade_rollDiceCommand$3.$$arity = 1);
    
    Opal.def(self, '$getRelationTable', $BloodCrusade_getRelationTable$4 = function $$getRelationTable() {
      var self = this, table = nil;

      
      table = ["共感/不信", "友情/忌避", "愛情/嫌悪", "忠義/侮蔑", "憧憬/引け目", "保護欲/殺意"];
      return self.$get_table_by_1d6(table);
    }, $BloodCrusade_getRelationTable$4.$$arity = 0);
    
    Opal.def(self, '$getSceneTable', $BloodCrusade_getSceneTable$5 = function $$getSceneTable() {
      var self = this, table = nil;

      
      table = ["どこまでも広がる荒野。風が吹き抜けていく。", "血まみれの惨劇の跡。いったい誰がこんなことを？", "都市の地下。かぼそい明かりがコンクリートを照らす。", "豪華な調度が揃えられた室内。くつろぎの空間を演出。", "普通の道端。様々な人が道を行き交う。", "明るく浮かぶ月の下。暴力の気配が満ちていく。", "打ち捨てられた廃墟。荒れ果てた景色に心も荒む。", "生活の様子が色濃く残る部屋の中。誰の部屋だろう？", "喧しい飲食店。騒ぐ人々に紛れつつ自体は進行する。", "ざわめく木立。踊る影。", "高い塔の上。都市を一望できる。"];
      return self.$get_table_by_2d6(table);
    }, $BloodCrusade_getSceneTable$5.$$arity = 0);
    
    Opal.def(self, '$getInitiativeSkillTable', $BloodCrusade_getInitiativeSkillTable$6 = function $$getInitiativeSkillTable() {
      var self = this, table = nil;

      
      table = ["《自信/社会5》", "《地位/社会9》", "《日常/環境3》", "《人脈/環境9》", "《退路/環境11》", "《心臓/胴部7》"];
      return self.$get_table_by_1d6(table);
    }, $BloodCrusade_getInitiativeSkillTable$6.$$arity = 0);
    
    Opal.def(self, '$getBodyRegionTable', $BloodCrusade_getBodyRegionTable$7 = function $$getBodyRegionTable() {
      var self = this, table = nil;

      
      table = ["《脳》", "《利き腕》", "《利き脚》", "《消化器》", "《感覚器》", "《攻撃したキャラクターの任意》", "《口》", "《呼吸器》", "《逆脚》", "《逆腕》", "《心臓》"];
      return self.$get_table_by_2d6(table);
    }, $BloodCrusade_getBodyRegionTable$7.$$arity = 0);
    
    Opal.def(self, '$getConfidenceHappyTable', $BloodCrusade_getConfidenceHappyTable$8 = function $$getConfidenceHappyTable() {
      var self = this, table = nil;

      
      table = ["【戦闘能力】あなたは吸血鬼狩人としての自分の戦闘能力に自信を持っています。たとえ負けようとも、それは運か相手か仲間が悪かったので、あなたの戦闘能力が低いわけではありません。", "【美貌】あなたは自分が美しいことを知っています。他人もあなたを美しいと思っているはず。鏡を見るたびに、あなたは自分の美しさに惚れ惚れしてしまいます。", "【血筋】あなたは名家の血を引く者です。祖先の栄光を背負い、家門の名誉を更に増すために、偉業をなす運命にあります。または、普通にいい家族に恵まれているのかもしれません。", "【趣味の技量】あなたは趣味の分野では第一人者です。必ずしも名前が知れ渡っているわけではありませんが、どんな相手にも負けない自信があります。どんな趣味かは自由です。", "【仕事の技量】職場で最も有能なもの、それがあなたです。誰もあなたの仕事の量とクオリティを超えられません。どんな仕事をしているかは自由に決めて構いません。", "【長生き】あなたは吸血鬼狩人としてかなりの年月を過ごしてきたが、まだ死んでいません。これは誇るべきことです。そこらの若造には、まだまだ負けていません。"];
      return self.$get_table_by_1d6(table);
    }, $BloodCrusade_getConfidenceHappyTable$8.$$arity = 0);
    
    Opal.def(self, '$getStatusHappyTable', $BloodCrusade_getStatusHappyTable$9 = function $$getStatusHappyTable() {
      var self = this, table = nil;

      
      table = ["【役職】あなたは職場、あるいは吸血鬼狩人の組織のなかで高い階級についています。そのため、下にいるものには命令でき、相応の敬意を払われます。", "【英雄】あなたはかつて偉業を成し遂げたことがあり、誰でもそれを知っています。少々くすぐったい気もしますが、英雄として扱われるのは悪くありません。", "【お金持ち】あなたには財産があります。それも生半可な財産ではなく、人が敬意を払うだけの財産です。あなたはお金に困ることはなく、その幸せを知っています", "【特権階級】あなたは国が定める特権階級の一員です。王族や貴族をイメージするとわかりやすいでしょう。あなたは、どこに行っても、それ相応の扱いを受けることになります。", "【人格者】誰もが認める人格者としての評判を持っているため、あなたのところには悩みを抱えた人々が引きも切らずに押しかけてきます。大変ですが、ちょっと楽しい", "【リーダー】あなたは所属している何らかの組織を率いる立場にあります。会社の社長や、部活動の部長などです。あなたは求められてその地位にあります"];
      return self.$get_table_by_1d6(table);
    }, $BloodCrusade_getStatusHappyTable$9.$$arity = 0);
    
    Opal.def(self, '$getDailyHappyTable', $BloodCrusade_getDailyHappyTable$10 = function $$getDailyHappyTable() {
      var self = this, table = nil;

      
      table = ["【家】あなたの家はとても快適な空間です。コストと時間をかけて作り上げられた、あなたが居住するための空間。それはあなたの幸せの源なのです。", "【職場】あなたは仕事が楽しくて仕方ありません。意義ある仕事で払いも悪くなく、チームの仲間はみんないい奴ばかりです。残業は……ちょっとあるかもしれません。", "【行きつけの店】あなたには休みの日や職場帰りに立ち寄る行きつけの店があり、そこにいる時間は安らぎを感じることができます。店員とも顔見知りです。", "【ベッド】あなたは動物を飼っています。よく懐いた可愛い、またはかっこいい動物です。一緒に過ごす時間はあなたに幸せを感じさせてくれます", "【親しい隣人】おとなりさんやお向かいさん。よくお土産を渡したり、小さな子供を預かったりするような仲です。風邪を引いたときには、家事を手伝ってくれることも。", "【思い出】あなたは昔の思い出を心の支えにしています。何らかの幸せな記憶……それがあれば、この先にどんなつらいことが待っていても大丈夫でしょう。"];
      return self.$get_table_by_1d6(table);
    }, $BloodCrusade_getDailyHappyTable$10.$$arity = 0);
    
    Opal.def(self, '$getLinkHappyTable', $BloodCrusade_getLinkHappyTable$11 = function $$getLinkHappyTable() {
      var self = this, table = nil;

      
      table = ["【理解ある家族】あなたの家族は、あなたが吸血鬼狩人であることを知ったうえで協力してくれます。これがどれほど稀なことかは、仲間に聞けば分かるでしょう。", "【有能な友人】あなたの友人は、吸血鬼の存在とあなたの本当の仕事を知っています。そして、直接戦うだけの技量はないものの、あなたの探索をサポートしてくれます。", "【愛する恋人】あなたには愛する人がいます。見つめあうだけで、あなたの心は舞い上がり……帰ってきません。この恋人を失うなんて、考えるだけでも恐ろしいことです。", "【同志の権力者】あなたには吸血鬼の存在を知りながら、奴らに屈していない権力者との繋がりがあります。様々な違法行為をはたらく際に、役に立つでしょう。", "【得がたい師匠】あなたは使う武器を学んだ師匠がいて、それを通して兄弟弟子とも繋がりがあります。過酷な訓練を経て、彼らとあなたには強い絆ができています。", "【可愛い子供】あなたには子供がいます。聡明で魅力的、しかも健康な……将来を嘱望される子供です。子供が掴む幸せな未来を思う時、あなたの顔には笑みが広がります。"];
      return self.$get_table_by_1d6(table);
    }, $BloodCrusade_getLinkHappyTable$11.$$arity = 0);
    
    Opal.def(self, '$getEvacuationHappyTable', $BloodCrusade_getEvacuationHappyTable$12 = function $$getEvacuationHappyTable() {
      var self = this, table = nil;

      
      table = ["【故郷の町】あなたは生まれ育った街を離れて吸血鬼狩人として活動しています。いつの日かあの町へ帰る……その思いがあなたを戦いのなかで支えています。", "【待っている人】あなたが吸血鬼狩人をやめて、普通の暮らしに戻ることを待ちわびている人がいます。そして、あなたはその思いに応えたいと思っています。", "【就職先】あなたは吸血鬼狩りの報酬がなくなっても、すぐに入ることができる就職先があるので安心です。有能なのか過疎地域なのかは分かりませんが。", "【配偶者】あなたは吸血鬼狩人をやめたあとに家庭に入ろうと考えています。暮らしの設計はすでに済み、あとは実行するだけなのですが、なかなかそうはいきません。", "【大志】あなたが吸血鬼狩人として活動しているのは、やむにやまれぬ事情があるからです。あなたには「本当にやりたかったこと」があり、いつかその夢をかなえる気でいます。", "【空想の王国】あなたには辛いことがあると白昼夢にふける、あるいは物語に没入する癖があり、そのときには非常に幸せな気分になることができます。"];
      return self.$get_table_by_1d6(table);
    }, $BloodCrusade_getEvacuationHappyTable$12.$$arity = 0);
    
    Opal.def(self, '$getAllSkillTable', $BloodCrusade_getAllSkillTable$13 = function $$getAllSkillTable() {
      var $a, $b, self = this, tableCSKT = nil, tableHSKT = nil, tableASKT = nil, tableBSKT = nil, tableLSKT = nil, tableESKT = nil, categoryNum = nil, detailText = nil, detailNum = nil;

      
      tableCSKT = ["社会2：怯える", "社会3：脅す", "社会4：考えない", "社会5：自信", "社会6：黙る", "社会7：伝える", "社会8：だます", "社会9：地位", "社会10：笑う", "社会11：話す", "社会12：怒る"];
      tableHSKT = ["頭部2：聴く", "頭部3：感覚器", "頭部4：見る", "頭部5：反応", "頭部6：考える", "頭部7：脳", "頭部8：閃く", "頭部9：予感", "頭部10：叫ぶ", "頭部11：口", "頭部12：噛む"];
      tableASKT = ["腕部2：締める", "腕部3：殴る", "腕部4：斬る", "腕部5：利き腕", "腕部6：撃つ", "腕部7：操作", "腕部8：刺す", "腕部9：逆腕", "腕部10：振る", "腕部11：掴む", "腕部12：投げる"];
      tableBSKT = ["胴部2：塞ぐ", "胴部3：呼吸器", "胴部4：止める", "胴部5：受ける", "胴部6：測る", "胴部7：心臓", "胴部8：逸らす", "胴部9：かわす", "胴部10：耐える", "胴部11：消化器", "胴部12：落ちる"];
      tableLSKT = ["脚部2：走る", "脚部3：迫る", "脚部4：蹴る", "脚部5：利き脚", "脚部6：跳ぶ", "脚部7：仕掛ける", "脚部8：踏む", "脚部9：逆脚", "脚部10：這う", "脚部11：伏せる", "脚部12：歩く"];
      tableESKT = ["環境2：休む", "環境3：日常", "環境4：隠れる", "環境5：待つ", "環境6：現れる", "環境7：人脈", "環境8：捕らえる", "環境9：開ける", "環境10：逃げる", "環境11：退路", "環境12：休まない"];
      $b = self.$roll(1, 6), $a = Opal.to_ary($b), (categoryNum = ($a[0] == null ? nil : $a[0])), $b;
      detailText = nil;
      detailNum = 0;
      if (categoryNum['$=='](1)) {
        $b = self.$get_table_by_2d6(tableCSKT), $a = Opal.to_ary($b), (detailText = ($a[0] == null ? nil : $a[0])), (detailNum = ($a[1] == null ? nil : $a[1])), $b
      } else if (categoryNum['$=='](2)) {
        $b = self.$get_table_by_2d6(tableHSKT), $a = Opal.to_ary($b), (detailText = ($a[0] == null ? nil : $a[0])), (detailNum = ($a[1] == null ? nil : $a[1])), $b
      } else if (categoryNum['$=='](3)) {
        $b = self.$get_table_by_2d6(tableBSKT), $a = Opal.to_ary($b), (detailText = ($a[0] == null ? nil : $a[0])), (detailNum = ($a[1] == null ? nil : $a[1])), $b
      } else if (categoryNum['$=='](4)) {
        $b = self.$get_table_by_2d6(tableASKT), $a = Opal.to_ary($b), (detailText = ($a[0] == null ? nil : $a[0])), (detailNum = ($a[1] == null ? nil : $a[1])), $b
      } else if (categoryNum['$=='](5)) {
        $b = self.$get_table_by_2d6(tableLSKT), $a = Opal.to_ary($b), (detailText = ($a[0] == null ? nil : $a[0])), (detailNum = ($a[1] == null ? nil : $a[1])), $b
      } else if (categoryNum['$=='](6)) {
        $b = self.$get_table_by_2d6(tableESKT), $a = Opal.to_ary($b), (detailText = ($a[0] == null ? nil : $a[0])), (detailNum = ($a[1] == null ? nil : $a[1])), $b};
      return [detailText, "" + (categoryNum) + "," + (detailNum)];
    }, $BloodCrusade_getAllSkillTable$13.$$arity = 0);
    
    Opal.def(self, '$getMildInsanityTable', $BloodCrusade_getMildInsanityTable$14 = function $$getMildInsanityTable() {
      var self = this, table = nil;

      
      table = ["【誇大妄想】（判定に失敗するたびに【感情】が１増加する。）", "【記憶喪失】（【幸福】の修復判定にマイナス２の修正。）", "【こだわり】（戦闘中の行動を「パス」以外で一つ選択し、その行動をすると【感情】が６増加する。）", "【お守り中毒】（「幸運のお守り」を装備していない場合、全ての2d6判定にマイナス１の修正。）", "【不死幻想】（自分が受けるダメージが全て１増加する。）", "【血の飢え】（戦闘中に最低１体でも死亡させないと、戦闘終了時に【感情】１０増加。【激情】は獲得できない。）"];
      return self.$get_table_by_1d6(table);
    }, $BloodCrusade_getMildInsanityTable$14.$$arity = 0);
    
    Opal.def(self, '$getSevereInsanityTable', $BloodCrusade_getSevereInsanityTable$15 = function $$getSevereInsanityTable() {
      var self = this, table = nil;

      
      table = ["【幸福依存】（【幸福】を一つ選択し、その【幸福】が結果フェイズに失われたとき、死亡する。）", "【見えない友達】（自分の関わる「関係を深める」判定にマイナス３の修正がつく。）", "【臆病】（自分の行う妨害判定にマイナス２の修正がつく。）", "【陰謀論】（「幸福を味わう」判定にマイナス３の修正がつく。）", "【指令受信】（追跡フェイズＢでの自分の行動は、可能な範囲でGMが決定する。）", "【猜疑心】（自分が「連携攻撃」を行うとき、関係の【深度】をダメージに加えられない。）"];
      return self.$get_table_by_1d6(table);
    }, $BloodCrusade_getSevereInsanityTable$15.$$arity = 0);
    Opal.const_set($nesting[0], 'TABLES', $hash2(["BDST", "CYST", "DMST", "MNST", "SLST", "TD1T", "TD2T", "TD3T", "TD4T", "TD5T", "TD6T", "TDHT"], {"BDST": $hash2(["name", "type", "table"], {"name": "戦場シーン表", "type": "2d6", "table": "" + "塹壕。迫撃砲が唸りを上げ、兵士たちの悲鳴が響き渡る。\n" + "港の堤防。遠ざかっていく貨物船と、ゆっくりと揺れる鉛色の水面。\n" + "一面の草に覆われた野原。膝から下は見えない。\n" + "ドーム競技場。中のフィールドよりも外の通路が使われることが多い。\n" + "建物と建物の間に、いつの間にかできた空き地。入る道は狭い。\n" + "採石場。背景を爆破するのに向いた場所だ。\n" + "工場。用途の分からない巨大機械が放置され、雰囲気を盛り上げる。\n" + "暗いトンネル。停められた車のヘッドライトだけが頼りだ。\n" + "競馬場。人のいない観客席を広告板が見下ろしている。\n" + "河川敷。土手の補強用ブロックの規則的な並びが目眩を引き起こす。\n" + "司令室。壁の巨大スクリーンでは、何かのカウントダウンが進行中。\n"}), "CYST": $hash2(["name", "type", "table"], {"name": "田舎シーン表", "type": "2d6", "table": "" + "誰かの家。庭付き二階建て。部屋は余っている。\n" + "山。周囲は木に囲まれ、その向こうの景色は全く見えない。\n" + "さびれたバス停。時刻表は錆に覆われていて読むのが難しい。\n" + "国道沿いのファミレス。巨大な駐車場にトラックが並ぶ。\n" + "大型量販店。服や靴、電化製品などの大きな店。\n" + "あぜ道。周りには季節によって違う姿を見せる水田が広がる。\n" + "大型ショッピングモール。何でも揃う。\n" + "コンビニ。11時で閉まるので夜は開いていないこともある。\n" + "野菜の無人販売所。木の棚に人参やジャガイモが置いてある。\n" + "廃屋。近所の学生がよく忍び込んで悪さをしているとか。\n" + "駅。ホームには屋根がなく、周りには山と森が広がっている。\n"}), "DMST": $hash2(["name", "type", "table"], {"name": "夢シーン表", "type": "2d6", "table": "" + "愛しい人を抱きしめていると、いつのまにか別人に変わっていて驚く。\n" + "もらった種を鉢に植えて待っていると、人が生えてきた。\n" + "ひたすら落下し続けている。一緒に堕ちている人が何か叫んでいる。\n" + "誰かをひどく殴りつけている。一発ごとに周りの観客から喝采が上がる。\n" + "知らない人ばかりのパーティのなか、必死に知り合いを探している。\n" + "何かに追いかけられて暗い道を走っている。そして追いつかれた。\n" + "列車に乗って、通り過ぎていく景色を見ている。向かいの客席に誰かがいる。\n" + "朝起きて冷蔵庫を開けにいくと、ありえない人物が朝食を作っていた。\n" + "なぜか分からないが捕まって留置された。入れられた房には意外な人が。\n" + "道端にいた散歩の犬が「これは夢だ」と事情を語り始めた。\n" + "みんな死んでしまった。墓の前で座っていると、近づいてくる人影がある。\n"}), "MNST": $hash2(["name", "type", "table"], {"name": "館シーン表", "type": "2d6", "table": "" + "地下牢。朽ち果てた骸の手首には鉄枷がはまったままだ。\n" + "礼拝堂。何千本もの蝋燭が祭壇を照らす。\n" + "厨房。得体の知れない鍋の中で何かが煮えたぎっている。\n" + "客間。天蓋付きの寝台は分厚く暖かそうだ。\n" + "中庭。ガゼボが配置されているが斬りかかってはいけない。\n" + "天井の高い廊下。あちこちに風景画が飾られている。\n" + "植木の迷路。動物型の植木が沈黙の咆哮をあげている。\n" + "玄関ホール。もちろん二階まで吹き抜けで階段がある。\n" + "食堂。果てしなく長いテーブルに椅子がセットされている。\n" + "時計塔。巨大な歯車とシャフトの組み合わせが回る。\n" + "領主の部屋。重厚なデスクと背後の本棚が威圧的だ。\n"}), "SLST": $hash2(["name", "type", "table"], {"name": "学校シーン表", "type": "2d6", "table": "" + "廊下。消防ホースの箱がやたらと赤く目立つ\n" + "運動場。石灰と混ざり合った白っぽい砂が積もっている。\n" + "保健室。白いカーテンが揺れ、同じく白いベッドで影がおどる。\n" + "講堂。ワックスのかかった床が、靴とこすれて甲高い音で鳴る。\n" + "人でいっぱいの教室。みな座ってはいるがやかましい。\n" + "誰もいない教室。時計の音がやけに大きく響く。\n" + "昇降口。いくつも並んだ大きな下駄箱に名前が書かれている。\n" + "音楽室。作曲家の肖像画がピアノを見下ろしている。\n" + "理科室。薬品と埃の臭いが鼻をつく。\n" + "工作室。机の大きな傷には木くずが詰まっている。\n" + "開かずの教室。ここは真っ暗だ……出口も入り口もない。\n"}), "TD1T": $hash2(["name", "type", "table"], {"name": "時間経過表十代", "type": "1d6", "table": "" + "自分探しの旅に出た。旅先で見つけた新しい自分は、なかなか好きになれるやつだった。\\n狩人は主武装のうち一つを変更してもかまわない。変更したらキャラクターの再構築を行う。\n" + "吸血鬼狩りを通して、仲間との絆が深まる。\\n仲間の狩人から一人を目標として選び、その狩人に対する関係【震度】を２増加させる。\\nその状態でセッションを開始する。\n" + "自分の将来に不安を覚え、吸血鬼狩り以外のことにチャレンジしてみるものの、どれも中途半端でうまくいかない。\\n狩人は「動転」の変調を発動した状態でセッションを開始する。\n" + "最近イヤなことがあって、相当不機嫌な状態になっている。\\n【モラル】の現在値を０にし、その状態でセッションを開始する。\n" + "新しい友達が出来る。\\n狩人と同じ年齢の協力者を、狩人のプレイヤーが作成する。レベルは１とすること。\\nこの協力者はセッションに登場し、獲得すれば使用できる。\n" + "ちょっと見ないうちに協力者が成長する。\\n協力者を獲得している場合、その中から一人を選ぶ。\\nその協力者のレベルが１上昇する。\\n協力者を獲得していない場合、効果はない。\n"}), "TD2T": $hash2(["name", "type", "table"], {"name": "時間経過表二十代", "type": "1d6", "table": "" + "表の仕事や学業で大抜擢され、若き天才として大いに名をはせる。\\n【モラル】が３増加し、その状態でセッションを開始する。\n" + "人生の新たな楽しみを発見する。\\n【幸福】を一つ新たに設定し、獲得できる。\\n【人間力】が足りない場合は、入れ替えるか無視すること。\n" + "恋人との関係がシリアスなトラブルに変化する。\\nまだ解決してはいないが、かなりのストレスだ。\\n【感情】が3増加した状態でセッションを開始する。\n" + "休暇中に無茶をして大怪我を負ってしまう。\\n吸血鬼狩りはタイミングが命なので、怪我をおして参加することになる。\\n狩人は｢重症｣の変調を発動した状態でセッションを開始する。\n" + "新しい友達が出来た。\\n狩人と五歳差までで任意の年齢の協力者を、狩人のプレイヤーが作成する。\\nレベルは1とすること。この協力者はセッションに登場し、獲得すれば使用できる。\n" + "協力者を獲得している場合、そのうち一人に絡んだイベントが発生していた。\\n「転職」「結婚」「挫折」「失恋」「出産」「その他」などから一つを任意に選び、その協力者のレベルを1上げる。\\n協力者を獲得していない場合、狩人のイベントとなり効果はない。\n"}), "TD3T": $hash2(["name", "type", "table"], {"name": "時間経過表三十代", "type": "1d6", "table": "" + "ある種の慎重さを身につけ、常に狩りの準備を怠らないようになる。\\n再殺武装から一つを選び、それをすでに獲得した状態でセッションを開始する。\n" + "拠点の運営に協力し、管理を最適化して簡単に利用できるようにした。\\n狩人側の拠点を一つ選び、その必要レベルを1減少させる。\\nただし1未満にはならない。\n" + "だんだんと責任のある立場になるにつれ、それに縛られているような感慨を覚えるようになる。\\n「捕縛｣の変調を発動した状態でセッションを開始する。\n" + "狩人の噂を聞きつけた協力者が現れ、知己を得る。\\n狩人と十歳差までで任意の年齢の協力者を、狩人のプレイヤーが作成する。\\nレベルは1とすること。\\nこの協力者はセッションに登場し、獲得すれば使用できる。\n" + "軽い生活習慣病を発症する。特に狩りに影響はしない。\n" + "協力者を獲得している場合、そのうち一人に絡んだイベントが発生していた。\\n「転職」「結婚」「挫折」「失恋」「出産」「その他」などから一つを任意に選び、その協力者のレベルを1上げる。\\n協力者を獲得していない場合、狩人のイベントとなり効果はない。\n"}), "TD4T": $hash2(["name", "type", "table"], {"name": "時間経過表四十代", "type": "1d6", "table": "" + "だんだんと物事に動じず、迷わなくなってきた自分に気づく。\\nこのセッションの遭遇シーンでは感情属性を任意に設定できる。\n" + "重厚さを増す大人のオーラによって、他の狩人からの尊敬を勝ち取ることに成功する。\\n仲間の狩人から目標を一人選び、目標から狩人への関係【深度】を1増加する。\n" + "後進の育成に熱心になる。\\nこのセッションの間、自分の追跡シーンに自分より若い味方キャラクターが登場している場合、判定にプラス1の修正がつく。\\nこの修正は累積しない。\n" + "大病発覚。\\n狩人に後継者がいる場合、結果フェイズで狩人は死亡する。\\n後継者がいない場合、またはセッション中に決別したり裏切られた場合には、奇跡的に回復する。\n" + "幅広い人脈の中から吸血鬼の実在に耐えられる人物を見つけ出す。\\n狩人と二十歳差までで任意の年齢の協力者を、狩人のプレイヤーが作成する。\\nレベル1とすること。\\nこの協力者はセッションに登場し、獲得すれば使用できる。\n" + "協力者を獲得している場合、そのうち一人に絡んだイベントが発生していた。\\n「転職」「結婚」「挫折」「失恋」「出産」「その他」などから一つを任意に選び、その協力者のレベルを1上げる。\\n協力者を獲得していない場合、狩人のイベントとなり効果はない。\n"}), "TD5T": $hash2(["name", "type", "table"], {"name": "時間経過表五十代", "type": "1d6", "table": "" + "長年の経験によって【人間力】がこのセッションの間だけ１増加し、【幸福】も一つ獲得する。\\nこの効果は累積せず、すでに【人間力】が５の場合は効果なし。\n" + "武器の扱いにトリックを付け加える。\\n【ダメージ修正】がこのセッションの間だけ1増加する。この効果は累積しない。\n" + "長年酷使されてきた体が、そろそろ狩りについていけなくなる。\\n「捕縛｣の変調を発動した状態でセッションを開始する。\n" + "大病発覚。狩人に後継者がいる場合、結果フェイズで狩人は死亡する。\\n後継者がいない場合、またはセッション中に決別したり裏切られた場合には、奇跡的に回復する。\n" + "協力者を獲得している場合、そのうち一人が爆発的な成長を見せる。\\nその協力者のレベルを２上げる。協力者を獲得していない場合、効果はなし。\n" + "協力者を獲得している場合、そのうち一人に絡んだイベントが発生していた。\\n「転職」「結婚」「挫折」「失恋」「出産」「その他」などから一つを任意に選び、その協力者のレベルを1上げる。\\n協力者を獲得していない場合、狩人のイベントとなり効果はない。\n"}), "TD6T": $hash2(["name", "type", "table"], {"name": "時間経過表六十代", "type": "1d6", "table": "" + "偉大な狩人の風格を漂わせることに成功。\\n狩人のことを慕い、狩人に対して【深度】５の関係があるレベル７の協力者を獲得する。\\n望むなら即座に後継者にしてもよい。\n" + "吸血鬼の永遠の命に対する憧れが膨れあがってくる。\\nセッションの間、｢誘惑｣に対する抵抗判定にマイナス２の修正がつく。\\nこの効果は累積しない。\n" + "隠退生活に思いをはせ始める。\\nもはや狩りにあまり積極的にはなれず、【モラル】の現在値を０にし、その状態でセッションを開始する。\n" + "大病発覚。\\n狩人に後継者がいる場合、結果フェイズで狩人は死亡する。\\n後継者がいない場合、またはセッション中に決別したり裏切られた場合には、奇跡的に回復する。\n" + "ふと死期を悟る。次の狩りが最後になるだろう。\\nセッションの間、暴走のたびに【激情】を二つ獲得できる。\\n結果フェイズで狩人は死亡する。\n" + "協力者を獲得している場合、その指導に一年をかける。\\n協力者のなかから一人を選び、その協力者のレベルを２上げる。\\n協力者を獲得していない場合、のんびりした一年だった。\n"}), "TDHT": $hash2(["name", "type", "table"], {"name": "時間経過表半吸血鬼", "type": "1d6", "table": "" + "じっくりと時間をかけて、敵吸血鬼の個性を研究する。\\nこのセッションの間、吸血鬼を目標とした｢前哨戦｣の判定にプラス１の修正がつく。\\nこの効果は累積しない。\n" + "自分の血の力について考慮を深め、より自由に使いこなせるようになる。\\n修得している血戒グループのアビリティから一つを選び、その名前に「＋」をつけること。\\nそのアビリティの反動はやはり二倍だが、【感情】の増加にすることができる。\n" + "吸血鬼の強大な力に対する憧れが膨れあがってくる。\\nセッションの間、｢誘惑｣に対する抵抗判定にマイナス２の修正がつく。\\nこの効果は累積しない。\n" + "種族がらみのイヤなイベントが起こった。\\n【モラル】の現在値を０にし、その状態でセッションを開始する。\n" + "吸血鬼に転成を持ちかけられる。\\n敵の吸血鬼に対する関係【深度】が１増加し、その状態でセッションを開始する。\n" + "新しい友達が出来る。\\n任意の年齢の協力者を、狩人のプレイヤーが作成する。\\nレベルは１とすること。\\nこの協力者はセッションに登場し、獲得すれば使用できる。\n"})}).$freeze());
    return self.$setPrefixes($rb_plus(["RT", "ST", "IST", "BRT", "CHT", "SHT", "DHT", "LHT", "EHT", "AST", "MIT", "SIT"], $$($nesting, 'TABLES').$keys()));
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
