/* Jison generated parser */
var cojo_lang = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"starter":3,"cojo_zone":4,"EOF":5,"cojo_code":6,"flip_to_coffee":7,"flip_to_cojo_comment":8,"START_COJO_COMMENT":9,"code":10,"END_COJO_COMMENT":11,"START_COFFEE":12,"coffee_zone":13,"END_COFFEE":14,"coffee_code":15,"flip_to_cojo":16,"START_COJO":17,"END_COJO":18,"START_INDENTED_COJO":19,"CODE":20,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"START_COJO_COMMENT",11:"END_COJO_COMMENT",12:"START_COFFEE",14:"END_COFFEE",17:"START_COJO",18:"END_COJO",19:"START_INDENTED_COJO",20:"CODE"},
productions_: [0,[3,2],[4,1],[4,3],[4,2],[4,3],[4,2],[4,0],[8,3],[7,3],[13,1],[13,3],[13,2],[13,0],[16,3],[16,3],[6,1],[15,1],[10,1],[10,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: this.$ = ["COJO_ZONE", $$[$0-1]]; return this.$;
break;
case 2: this.$ = [$$[$0]]; 
break;
case 3: this.$ = $$[$0]; $$[$0].splice(0,0,$$[$0-2],$$[$0-1]); 
break;
case 4: this.$ = $$[$0]; $$[$0].splice(0,0,$$[$0-1]); 
break;
case 5: this.$ = $$[$0]; $$[$0].splice(0,0,$$[$0-2]); 
break;
case 6: this.$ = $$[$0]; $$[$0].splice(0,0,$$[$0-1]); 
break;
case 7: this.$ = []; 
break;
case 9: this.$ = ["COFFEE_ZONE", $$[$0-1]]; 
break;
case 10: this.$ = [$$[$0]]; 
break;
case 11: this.$ = $$[$0]; $$[$0].splice(0,0,$$[$0-2],$$[$0-1]); 
break;
case 12: this.$ = $$[$0]; $$[$0].splice(0,0,$$[$0-1]); 
break;
case 13: this.$ = []; 
break;
case 14: this.$ = ["COJO_ZONE", $$[$0-1]]; 
break;
case 15: this.$ = ["INDENTED_COJO_ZONE", $$[$0-1]]; 
break;
case 16: this.$ = ["COJO", $$[$0]]; 
break;
case 17: this.$ = ["COFFEE", $$[$0]]; 
break;
case 18: this.$ = $$[$0]; 
break;
case 19: this.$ = $$[$0-1] + $$[$0]; 
break;
}
},
table: [{3:1,4:2,5:[2,7],6:3,7:4,8:5,9:[1,8],10:6,12:[1,7],20:[1,9]},{1:[3]},{5:[1,10]},{5:[2,2],7:11,8:12,9:[1,8],12:[1,7],18:[2,2]},{4:13,5:[2,7],6:3,7:4,8:5,9:[1,8],10:6,12:[1,7],18:[2,7],20:[1,9]},{4:14,5:[2,7],6:3,7:4,8:5,9:[1,8],10:6,12:[1,7],18:[2,7],20:[1,9]},{5:[2,16],9:[2,16],12:[2,16],18:[2,16],20:[1,15]},{10:19,13:16,14:[2,13],15:17,16:18,17:[1,20],19:[1,21],20:[1,9]},{10:22,20:[1,9]},{5:[2,18],9:[2,18],11:[2,18],12:[2,18],14:[2,18],17:[2,18],18:[2,18],19:[2,18],20:[2,18]},{1:[2,1]},{4:23,5:[2,7],6:3,7:4,8:5,9:[1,8],10:6,12:[1,7],18:[2,7],20:[1,9]},{4:24,5:[2,7],6:3,7:4,8:5,9:[1,8],10:6,12:[1,7],18:[2,7],20:[1,9]},{5:[2,4],18:[2,4]},{5:[2,6],18:[2,6]},{5:[2,19],9:[2,19],11:[2,19],12:[2,19],14:[2,19],17:[2,19],18:[2,19],19:[2,19],20:[2,19]},{14:[1,25]},{14:[2,10],16:26,17:[1,20],19:[1,21]},{10:19,13:27,14:[2,13],15:17,16:18,17:[1,20],19:[1,21],20:[1,9]},{14:[2,17],17:[2,17],19:[2,17],20:[1,15]},{4:28,6:3,7:4,8:5,9:[1,8],10:6,12:[1,7],18:[2,7],20:[1,9]},{4:29,6:3,7:4,8:5,9:[1,8],10:6,12:[1,7],18:[2,7],20:[1,9]},{11:[1,30],20:[1,15]},{5:[2,3],18:[2,3]},{5:[2,5],18:[2,5]},{5:[2,9],9:[2,9],12:[2,9],18:[2,9],20:[2,9]},{10:19,13:31,14:[2,13],15:17,16:18,17:[1,20],19:[1,21],20:[1,9]},{14:[2,12]},{18:[1,32]},{18:[1,33]},{5:[2,8],9:[2,8],12:[2,8],18:[2,8],20:[2,8]},{14:[2,11]},{14:[2,14],17:[2,14],19:[2,14],20:[2,14]},{14:[2,15],17:[2,15],19:[2,15],20:[2,15]}],
defaultActions: {10:[2,1],27:[2,12],31:[2,11]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:return 9;
break;
case 1:return 11;
break;
case 2:return 12;
break;
case 3:return 14;
break;
case 4:return 19
break;
case 5:return 17;
break;
case 6:return 18;
break;
case 7:return 20;
break;
case 8:return 5;
break;
}
};
lexer.rules = [/^(?:\{##)/,/^(?:##\})/,/^(?:\{#)/,/^(?:#\})/,/^(?::[\t\r\n ]*\{:)/,/^(?:\{:)/,/^(?::\})/,/^(?:[^{}#\\:]+|[\\{}#:])/,/^(?:$)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = cojo_lang;
exports.Parser = cojo_lang.Parser;
exports.parse = function () { return cojo_lang.parse.apply(cojo_lang, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}