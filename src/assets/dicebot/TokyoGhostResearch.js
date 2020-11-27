/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$upcase', '$===', '$getCheckResult', '$tgr_opening_table', '$tgr_common_trouble_table', '$=~', '$to_i', '$last_match', '$>', '$+', '$roll', '$to_s', '$getCheckResultText', '$>=', '$get_1d10_table_result', '$get_table_by_number', '$get_table_result']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'TokyoGhostResearch');

    var $nesting = [self].concat($parent_nesting), $TokyoGhostResearch_rollDiceCommand$1, $TokyoGhostResearch_getCheckResult$2, $TokyoGhostResearch_getCheckResultText$3, $TokyoGhostResearch_tgr_opening_table$4, $TokyoGhostResearch_tgr_common_trouble_table$5, $TokyoGhostResearch_get_1d10_table_result$6, $TokyoGhostResearch_get_table_result$7;

    
    Opal.const_set($nesting[0], 'ID', "TokyoGhostResearch");
    Opal.const_set($nesting[0], 'NAME', "東京ゴーストリサーチ");
    Opal.const_set($nesting[0], 'SORT_KEY', "とうきようこおすとりさあち");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "判定\n" + "・タスク処理は目標値以上の値で成功となります。\n" + "  1d10>={目標値}\n" + "  例：目標値「5」の場合、5～0で成功\n" + "各種表\n" + "  ・導入表  OP\n" + "  ・一般トラブル表  TB\n");
    self.$setPrefixes(["OP", "TB", "TK?\\(\\d+\\)"]);
    
    Opal.def(self, '$rollDiceCommand', $TokyoGhostResearch_rollDiceCommand$1 = function $$rollDiceCommand(command) {
      var self = this, output = nil, $case = nil;

      
      output = (function() {$case = command.$upcase();
      if (/TK/i['$===']($case)) {return self.$getCheckResult(command)}
      else if ("OP"['$===']($case)) {return self.$tgr_opening_table()}
      else if ("TB"['$===']($case)) {return self.$tgr_common_trouble_table()}
      else { return nil }})();
      return output;
    }, $TokyoGhostResearch_rollDiceCommand$1.$$arity = 1);
    
    Opal.def(self, '$getCheckResult', $TokyoGhostResearch_getCheckResult$2 = function $$getCheckResult(command) {
      var $a, $b, self = this, output = nil, diff = nil, total_n = nil;

      
      output = "";
      diff = 0;
      if ($truthy(/TK?<=(\d+)/i['$=~'](command))) {
        diff = $$($nesting, 'Regexp').$last_match(2).$to_i()};
      if ($truthy($rb_gt(diff, 0))) {
        
        output = $rb_plus(output, "" + "(1D10<=" + (diff) + ")");
        $b = self.$roll(1, 10), $a = Opal.to_ary($b), (total_n = ($a[0] == null ? nil : $a[0])), $b;
        output = $rb_plus(output, $rb_plus(" ＞ ", total_n.$to_s()));
        output = $rb_plus(output, $rb_plus(" ＞ ", self.$getCheckResultText(total_n, diff)));};
      return output;
    }, $TokyoGhostResearch_getCheckResult$2.$$arity = 1);
    
    Opal.def(self, '$getCheckResultText', $TokyoGhostResearch_getCheckResultText$3 = function $$getCheckResultText(total_n, diff) {
      var self = this, result = nil;

      
      if ($truthy($rb_ge(total_n, diff))) {
        result = "成功"
      } else {
        result = "失敗"
      };
      return result;
    }, $TokyoGhostResearch_getCheckResultText$3.$$arity = 2);
    
    Opal.def(self, '$tgr_opening_table', $TokyoGhostResearch_tgr_opening_table$4 = function $$tgr_opening_table() {
      var self = this, name = nil, table = nil;

      
      name = "導入表";
      table = [[1, "【病休中断】体調不良または怪我で療養中だったが強制召喚された。"], [2, "【忙殺中】別の業務で忙殺中であった。"], [3, "【出張帰り】遠方での仕事から戻ったばかり。"], [4, "【休暇取り消し】休暇中だったが呼び戻された。"], [5, "【平常運転】いつもどおりの仕事中だった。"], [6, "【休暇明け】十分に休養をとったあとで、心身ともに充実している。"], [7, "【人生の岐路】人生の岐路にまさに差し掛かったところであった。"], [8, "【同窓会】かつての同級生に会い、差を実感したばかりだった。"], [9, "【転職活動中】転職を考えて求人サイトを見ているところだった。"], [10, "【サボリ中】仕事をサボっているところに呼び出しがあった。"]];
      return self.$get_1d10_table_result(name, table);
    }, $TokyoGhostResearch_tgr_opening_table$4.$$arity = 0);
    
    Opal.def(self, '$tgr_common_trouble_table', $TokyoGhostResearch_tgr_common_trouble_table$5 = function $$tgr_common_trouble_table() {
      var self = this, name = nil, table = nil;

      
      name = "一般トラブル表";
      table = [[1, "トラブルが生じたが、間一髪、危機を脱した。【ダメージなし】"], [2, "どうにかタスクを処理したが、非常に疲労してしまった。【肉体ダメージ1点】"], [3, "タスク処理の過程で負傷してしまった。【肉体ダメージ1点】"], [4, "恐怖や混乱、ストレスなどで精神の均衡を崩してしまった。【精神ダメージ1点】"], [5, "過去のトラウマなどを思い出し、気分が沈んでしまった。【精神ダメージ1点】"], [6, "自身の信用をキズつけたり、汚名を背負ってしまった。【環境ダメージ1点】"], [7, "会社や上司の不興を買ってしまった。【環境ダメージ1点】"], [8, "疲労困憊で動くこともままならない。【肉体ダメージ1点＋精神ダメージ1点】"], [9, "負傷したうえ、会社に損害を与えてしまった。【肉体ダメージ1点＋環境ダメージ1点】"], [10, "上司から厳しく叱責され、まずい立場になった。【精神ダメージ1点＋環境ダメージ1点】"]];
      return self.$get_1d10_table_result(name, table);
    }, $TokyoGhostResearch_tgr_common_trouble_table$5.$$arity = 0);
    
    Opal.def(self, '$get_1d10_table_result', $TokyoGhostResearch_get_1d10_table_result$6 = function $$get_1d10_table_result(name, table) {
      var $a, $b, self = this, dice = nil, output = nil;

      
      $b = self.$roll(1, 10), $a = Opal.to_ary($b), (dice = ($a[0] == null ? nil : $a[0])), $b;
      output = self.$get_table_by_number(dice, table);
      return self.$get_table_result(name, dice, output);
    }, $TokyoGhostResearch_get_1d10_table_result$6.$$arity = 2);
    return (Opal.def(self, '$get_table_result', $TokyoGhostResearch_get_table_result$7 = function $$get_table_result(name, dice, output) {
      var self = this;

      return "" + (name) + "(" + (dice) + ") ＞ " + (output)
    }, $TokyoGhostResearch_get_table_result$7.$$arity = 3), nil) && 'get_table_result';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);