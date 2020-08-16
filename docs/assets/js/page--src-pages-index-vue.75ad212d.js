(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{aK7f:function(n,a,s){},gEGz:function(n,a,s){"use strict";var e=s("aK7f");s.n(e).a},iyQ6:function(n,a,s){"use strict";s.r(a);s("TeQF"),s("2B1R"),s("rB9j"),s("hByQ"),s("LKBx");var e=s("VTBJ"),t=s("YGJC"),o=s("L2JU"),i=(s("1vvp"),{data:function(){return{searchTerm:"",documentations:[],documentationsMatchingSearch:[],fuse:null}},created:function(){this.fillDocumentations()},mounted:function(){this.setFuzzySearch()},computed:Object(e.a)(Object(e.a)({},Object(o.c)(["language"])),{},{hasMatchingResults:function(){return this.documentationsMatchingSearch.length>0},searchedSomething:function(){return this.searchTerm.length>0}}),methods:{search:function(){var n=this;this.documentationsMatchingSearch=this.fuse.search(this.searchTerm).map((function(n){return n.item})).filter((function(a){return a.path.startsWith("/documentation/".concat(n.language))}))},fillDocumentations:function(){this.documentations=this.$static.allDocumentation.edges.map((function(n){return n.node}))},setFuzzySearch:function(){this.fuse=new t.a(this.documentations,{keys:["title","content"]})}},metaInfo:{title:"Home",meta:[{name:"description",content:"Community driven documentation for developpers around the world."}]}}),p=(s("gEGz"),s("KHd+")),l=s("Kw5r"),r=l.a.config.optionMergeStrategies.computed,c={allDocumentation:{edges:[{node:{id:"714b1f94d1ae730ae87ca9e8f2f06aca",title:"Array.isArray()",content:'<h1 id="arrayisarray"><a href="#arrayisarray" aria-hidden="true"><span class="icon icon-link"></span></a>Array.isArray()</h1>\n<p>Check if an element is of type <code class="language-text">Array</code>.</p>\n<h2 id="summary"><a href="#summary" aria-hidden="true"><span class="icon icon-link"></span></a>Summary</h2>\n<ul>\n<li><a href="#prototype">Prototype</a></li>\n<li><a href="#arguments">Arguments</a></li>\n<li><a href="#return-value">Return value</a></li>\n<li><a href="#examples">Examples</a></li>\n<li><a href="#browser-support">Browser support</a></li>\n</ul>\n<h2 id="prototype"><a href="#prototype" aria-hidden="true"><span class="icon icon-link"></span></a>Prototype</h2>\n<div class="gridsome-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>element<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> Boolean</code></pre></div>\n<h2 id="arguments"><a href="#arguments" aria-hidden="true"><span class="icon icon-link"></span></a>Arguments</h2>\n<ul>\n<li><a href="#element">element</a></li>\n</ul>\n<h3 id="element"><a href="#element" aria-hidden="true"><span class="icon icon-link"></span></a>element</h3>\n<p>Any kind of variable.</p>\n<h2 id="return-value"><a href="#return-value" aria-hidden="true"><span class="icon icon-link"></span></a>Return value</h2>\n<p>Returns a <code class="language-text">Boolean</code>.</p>\n<h2 id="examples"><a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a>Examples</h2>\n<ul>\n<li><a href="#checking-if-an-iterable-is-an-array">Checking if an iterable is an array</a></li>\n<li><a href="#checking-if-undefined-is-an-array">Checking if undefined is an array</a></li>\n</ul>\n<h3 id="checking-if-an-iterable-is-an-array"><a href="#checking-if-an-iterable-is-an-array" aria-hidden="true"><span class="icon icon-link"></span></a>Checking if an iterable is an array</h3>\n<p>In this example, we will check if an array of numbers is an <code class="language-text">Array</code>.</p>\n<div class="gridsome-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"This is an array."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"This is not an array."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>\n<div class="gridsome-highlight" data-language="text"><pre class="language-text"><code class="language-text">This is an array.</code></pre></div>\n<h3 id="checking-if-undefined-is-an-array"><a href="#checking-if-undefined-is-an-array" aria-hidden="true"><span class="icon icon-link"></span></a>Checking if undefined is an array</h3>\n<p>In this example, we will check if <code class="language-text">undefined</code> is an <code class="language-text">Array</code>.</p>\n<div class="gridsome-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> variable <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>variable<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"This is an array."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"This is not an array."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>\n<div class="gridsome-highlight" data-language="text"><pre class="language-text"><code class="language-text">This is not an array.</code></pre></div>\n<h2 id="browser-support"><a href="#browser-support" aria-hidden="true"><span class="icon icon-link"></span></a>Browser support</h2>\n<ul>\n<li><a href="#desktop">Desktop</a></li>\n<li><a href="#mobile">Mobile</a></li>\n</ul>\n<h3 id="desktop"><a href="#desktop" aria-hidden="true"><span class="icon icon-link"></span></a>Desktop</h3>\n<ul>\n<li>Internet Explorer : 9</li>\n<li>Edge : 12</li>\n<li>Firefox : 4</li>\n<li>Chome : 5</li>\n<li>Safari : 5</li>\n<li>Opera : 11.5</li>\n<li>Opera Mini : all</li>\n</ul>\n<h3 id="mobile"><a href="#mobile" aria-hidden="true"><span class="icon icon-link"></span></a>Mobile</h3>\n<ul>\n<li>iOS Safari : 5</li>\n<li>Opera mobile : 46</li>\n<li>Android Browser : 2.1</li>\n<li>Chrome for Android : 84</li>\n<li>Firefox for Android : 68</li>\n<li>UC Browser for Android : 12.12</li>\n<li>Samsung Internet : 4</li>\n<li>QQ Browser : 10.4</li>\n<li>Baidu Browser : 7.12</li>\n<li>KaiOS Browser : 2.5</li>\n</ul>\n',path:"/documentation/en/javascript/native-object/array/method/is-array/"}},{node:{id:"2c4fe8fc11d520e621156335fb00675f",title:"Array.isArray()",content:'<h1 id="arrayisarray"><a href="#arrayisarray" aria-hidden="true"><span class="icon icon-link"></span></a>Array.isArray()</h1>\n<p>Vérifie si un élément est de type <code class="language-text">Array</code>.</p>\n<h2 id="summary"><a href="#summary" aria-hidden="true"><span class="icon icon-link"></span></a>Summary</h2>\n<ul>\n<li><a href="#prototype">Prototype</a></li>\n<li><a href="#arguments">Arguments</a></li>\n<li><a href="#valeur-de-retour">Valeur de retour</a></li>\n<li><a href="#exemples">Exemples</a></li>\n<li><a href="#support-navigateur">Support navigateur</a></li>\n</ul>\n<h2 id="prototype"><a href="#prototype" aria-hidden="true"><span class="icon icon-link"></span></a>Prototype</h2>\n<div class="gridsome-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>element<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> Boolean</code></pre></div>\n<h2 id="arguments"><a href="#arguments" aria-hidden="true"><span class="icon icon-link"></span></a>Arguments</h2>\n<ul>\n<li><a href="#element">element</a></li>\n</ul>\n<h3 id="element"><a href="#element" aria-hidden="true"><span class="icon icon-link"></span></a>element</h3>\n<p>N\'importe quel type de variable.</p>\n<h2 id="valeur-de-retour"><a href="#valeur-de-retour" aria-hidden="true"><span class="icon icon-link"></span></a>Valeur de retour</h2>\n<p>Retourne un <code class="language-text">Boolean</code>.</p>\n<h2 id="exemples"><a href="#exemples" aria-hidden="true"><span class="icon icon-link"></span></a>Exemples</h2>\n<ul>\n<li><a href="#v%C3%A9rifier-si-un-it%C3%A9rable-est-un-tableau">Vérifier si un itérable est un tableau</a></li>\n<li><a href="#v%C3%A9rifier-si-undefined-est-un-tableau">Vérifier si undefined est un tableau</a></li>\n</ul>\n<h3 id="vérifier-si-un-itérable-est-un-tableau"><a href="#v%C3%A9rifier-si-un-it%C3%A9rable-est-un-tableau" aria-hidden="true"><span class="icon icon-link"></span></a>Vérifier si un itérable est un tableau</h3>\n<p>Dans cet exemple, nous allons vérifier si un tableau de nombres est un <code class="language-text">Array</code>.</p>\n<div class="gridsome-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"C\'est un tableau."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Ce n\'est pas un tableau."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>\n<div class="gridsome-highlight" data-language="text"><pre class="language-text"><code class="language-text">C&#39;est un tableau.</code></pre></div>\n<h3 id="vérifier-si-undefined-est-un-tableau"><a href="#v%C3%A9rifier-si-undefined-est-un-tableau" aria-hidden="true"><span class="icon icon-link"></span></a>Vérifier si undefined est un tableau</h3>\n<p>Dans cet exemple, nous allons vérifier si <code class="language-text">undefined</code> est un <code class="language-text">Array</code>.</p>\n<div class="gridsome-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> variable <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>variable<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"C\'est un tableau."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Ce n\'est pas un tableau."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>\n<div class="gridsome-highlight" data-language="text"><pre class="language-text"><code class="language-text">Ce n&#39;est pas un tableau.</code></pre></div>\n<h2 id="support-navigateur"><a href="#support-navigateur" aria-hidden="true"><span class="icon icon-link"></span></a>Support navigateur</h2>\n<ul>\n<li><a href="#ordinateur">Ordinateur</a></li>\n<li><a href="#mobile">Mobile</a></li>\n</ul>\n<h3 id="ordinateur"><a href="#ordinateur" aria-hidden="true"><span class="icon icon-link"></span></a>Ordinateur</h3>\n<ul>\n<li>Internet Explorer: 9</li>\n<li>Edge: 12</li>\n<li>Firefox: 4</li>\n<li>Chome: 5</li>\n<li>Safari: 5</li>\n<li>Opera: 11.5</li>\n<li>Opera Mini: all</li>\n</ul>\n<h3 id="mobile"><a href="#mobile" aria-hidden="true"><span class="icon icon-link"></span></a>Mobile</h3>\n<ul>\n<li>iOS Safari: 5</li>\n<li>Opera mobile: 46</li>\n<li>Android Browser: 2.1</li>\n<li>Chrome pour Android: 84</li>\n<li>Firefox pour Android: 68</li>\n<li>UC Browser pour Android: 12.12</li>\n<li>Samsung Internet: 4</li>\n<li>QQ Browser: 10.4</li>\n<li>Baidu Browser: 7.12</li>\n<li>KaiOS Browser: 2.5</li>\n</ul>\n',path:"/documentation/fr/javascript/native-object/array/method/is-array/"}},{node:{id:"89258fc948228153eb18d7a10452829b",title:"For...of loop - Javascript",content:'<h1 id="forof-loop"><a href="#forof-loop" aria-hidden="true"><span class="icon icon-link"></span></a>For...of loop</h1>\n<p><code class="language-text">for...of</code> loops make it easy to loop through an <code class="language-text">Array</code> or an iterable object.</p>\n<h2 id="summary"><a href="#summary" aria-hidden="true"><span class="icon icon-link"></span></a>Summary</h2>\n<ul>\n<li><a href="#examples">Examples</a></li>\n<li><a href="#points-of-attention">Points of attention</a></li>\n<li><a href="#browser-support">Browser support</a></li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a>Examples</h2>\n<ul>\n<li><a href="#iterating-through-an-array-of-numbers">Iterating through an array of numbers</a></li>\n<li><a href="#iterating-through-an-array-of-objects">Iterating through an array of objects</a></li>\n</ul>\n<h3 id="iterating-through-an-array-of-numbers"><a href="#iterating-through-an-array-of-numbers" aria-hidden="true"><span class="icon icon-link"></span></a>Iterating through an array of numbers</h3>\n<p>In this example, we will display numbers of an array.</p>\n<div class="gridsome-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> number <span class="token keyword">of</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">number is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>\n<div class="gridsome-highlight" data-language="text"><pre class="language-text"><code class="language-text">number is: 1\nnumber is: 2\nnumber is: 3\nnumber is: 4\nnumber is: 5</code></pre></div>\n<h3 id="iterating-through-an-array-of-objects"><a href="#iterating-through-an-array-of-objects" aria-hidden="true"><span class="icon icon-link"></span></a>Iterating through an array of objects</h3>\n<p>In this examples, we will display users in an array.</p>\n<div class="gridsome-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">"Marie"</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">"Diana"</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> user <span class="token keyword">of</span> users<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">user </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>\n<div class="gridsome-highlight" data-language="text"><pre class="language-text"><code class="language-text">user Marie is 31 years old\nuser John is 23 years old\nuser Diana is 37 years old</code></pre></div>\n<h2 id="browser-support"><a href="#browser-support" aria-hidden="true"><span class="icon icon-link"></span></a>Browser support</h2>\n<ul>\n<li><a href="#desktop">Desktop</a></li>\n<li><a href="#mobile">Mobile</a></li>\n</ul>\n<h3 id="desktop"><a href="#desktop" aria-hidden="true"><span class="icon icon-link"></span></a>Desktop</h3>\n<ul>\n<li>Chrome: 38</li>\n<li>Edge: 12</li>\n<li>Firefox: 13</li>\n<li>Internet explorer: <strong>no</strong></li>\n<li>Opera: 25</li>\n<li>Safari: 7</li>\n</ul>\n<h3 id="mobile"><a href="#mobile" aria-hidden="true"><span class="icon icon-link"></span></a>Mobile</h3>\n<ul>\n<li>UC Browser for Android: 38</li>\n<li>Chrome for Android: 38</li>\n<li>Firefox for Android: 14</li>\n<li>Opera for Android: 25</li>\n<li>iOS Safari: 7</li>\n<li>Samsung Internet: 3</li>\n</ul>\n',path:"/documentation/en/javascript/for-of/"}},{node:{id:"3b59b0252f73633de41ea56fe3313a82",title:"Boucles For...of - Javascript",content:'<h1 id="boules-forof"><a href="#boules-forof" aria-hidden="true"><span class="icon icon-link"></span></a>Boules For...of</h1>\n<p>Les boucles <code class="language-text">for...of</code> permettent d\'itérer sur un <code class="language-text">Array</code> ou un object itérable.</p>\n<h2 id="sommaire"><a href="#sommaire" aria-hidden="true"><span class="icon icon-link"></span></a>Sommaire</h2>\n<ul>\n<li><a href="#exemples">Exemples</a></li>\n<li><a href="#points-de-vigilences">Points de vigilences</a></li>\n<li><a href="#support-navigateurs">Support navigateurs</a></li>\n</ul>\n<h2 id="exemples"><a href="#exemples" aria-hidden="true"><span class="icon icon-link"></span></a>Exemples</h2>\n<ul>\n<li><a href="#it%C3%A9rer-sur-un-tableau-de-nombres">Itérer sur un tableau de nombres</a></li>\n<li><a href="#it%C3%A9rer-sur-un-tableau-d-objets">Itérer sur un tableau d\'objets</a></li>\n</ul>\n<h3 id="itérer-sur-un-tableau-de-nombres"><a href="#it%C3%A9rer-sur-un-tableau-de-nombres" aria-hidden="true"><span class="icon icon-link"></span></a>Itérer sur un tableau de nombres</h3>\n<p>Dans cet exemple, nous allons afficher les nombres d\'un tableau.</p>\n<div class="gridsome-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> number <span class="token keyword">of</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">le nombre est: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>\n<div class="gridsome-highlight" data-language="text"><pre class="language-text"><code class="language-text">le nombre est: 1\nle nombre est: 2\nle nombre est: 3\nle nombre est: 4\nle nombre est: 5</code></pre></div>\n<h3 id="itérer-sur-un-tableau-dobjets"><a href="#it%C3%A9rer-sur-un-tableau-dobjets" aria-hidden="true"><span class="icon icon-link"></span></a>Itérer sur un tableau d\'objets</h3>\n<p>Dans cet exemple, nous allons afficher les utilisateurs d\'un tableau.</p>\n<div class="gridsome-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">"Marie"</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">"Diana"</span><span class="token punctuation">,</span>\n    age<span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> user <span class="token keyword">of</span> users<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">l\'utilisateur </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> a </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ans</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>\n<div class="gridsome-highlight" data-language="text"><pre class="language-text"><code class="language-text">l&#39;utilisateur Marie a 31 ans\nl&#39;utilisateur John a 23 ans\nl&#39;utilisateur Diana a 37 ans</code></pre></div>\n<h2 id="support-navigateurs"><a href="#support-navigateurs" aria-hidden="true"><span class="icon icon-link"></span></a>Support navigateurs</h2>\n<ul>\n<li><a href="#ordinateur">Ordinateur</a></li>\n<li><a href="#mobile">Mobile</a></li>\n</ul>\n<h3 id="ordinateur"><a href="#ordinateur" aria-hidden="true"><span class="icon icon-link"></span></a>Ordinateur</h3>\n<ul>\n<li>Chrome : 38</li>\n<li>Edge : 12</li>\n<li>Firefox : 13</li>\n<li>Internet explorer : <strong>no</strong></li>\n<li>Opera : 25</li>\n<li>Safari : 7</li>\n</ul>\n<h3 id="mobile"><a href="#mobile" aria-hidden="true"><span class="icon icon-link"></span></a>Mobile</h3>\n<ul>\n<li>UC Browser for Android : 38</li>\n<li>Chrome for Android : 38</li>\n<li>Firefox for Android : 14</li>\n<li>Opera for Android : 25</li>\n<li>Safari iOS : 7</li>\n<li>Samsung Internet : 3</li>\n</ul>\n',path:"/documentation/fr/javascript/for-of/"}}]}},u=function(n){var a=n.options;a.__staticData?a.__staticData.data=c:(a.__staticData=l.a.observable({data:c}),a.computed=r({$static:function(){return a.__staticData.data}},a.computed))},d=Object(p.a)(i,(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("Layout",[s("h1",{staticClass:"title"},[n._v(n._s(n.$t("Community driven documentation for the web developpers around the world.")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:n.searchTerm,expression:"searchTerm"}],staticClass:"search",attrs:{type:"search","aria-label":n.$t("search"),placeholder:n.$t("search")},domProps:{value:n.searchTerm},on:{input:[function(a){a.target.composing||(n.searchTerm=a.target.value)},n.search]}}),n.searchedSomething?s("div",[s("br")]):n._e(),n._l(n.documentationsMatchingSearch,(function(a){return s("div",{key:a.id},[s("g-link",{attrs:{to:a.path}},[n._v(n._s(a.title))])],1)})),n.searchedSomething&&!n.hasMatchingResults?s("div",[n._v(n._s(n.$t("No results found.")))]):n._e()],2)}),[],!1,null,null,null);"function"==typeof u&&u(d);a.default=d.exports}}]);