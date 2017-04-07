// Compiled by ClojureScript 1.9.473 {}
goog.provide('hello.core');
goog.require('cljs.core');
goog.require('hello.foo.bar');
goog.require('cljs.reader');
hello.core.greet = (function hello$core$greet(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Hello "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
});
goog.exportSymbol('greet', hello.core.greet);
hello.core.sum = (function hello$core$sum(xs){
return hello.foo.bar.sum.call(null,xs);
});
goog.exportSymbol('hello.core.sum', hello.core.sum);
hello.core.let_works_QMARK_ = (function hello$core$let_works_QMARK_(day,month,year){
var hour = cljs.core.first.call(null,day);
var minutes = cljs.core.first.call(null,hour);
var seconds = cljs.core.last.call(null,hour);
console.log("Date: ",year,month,day);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),cljs.core.str.cljs$core$IFn$_invoke$arity$1(minutes),cljs.core.str.cljs$core$IFn$_invoke$arity$1(seconds)].join('');
});
goog.exportSymbol('hello.core.let_works_QMARK_', hello.core.let_works_QMARK_);
hello.core.bailey = (function hello$core$bailey(var_args){
var args__3987__auto__ = [];
var len__3984__auto___4512 = arguments.length;
var i__3985__auto___4513 = (0);
while(true){
if((i__3985__auto___4513 < len__3984__auto___4512)){
args__3987__auto__.push((arguments[i__3985__auto___4513]));

var G__4514 = (i__3985__auto___4513 + (1));
i__3985__auto___4513 = G__4514;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((3) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((3)),(0),null)):null);
return hello.core.bailey.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__3988__auto__);
});

hello.core.bailey.cljs$core$IFn$_invoke$arity$variadic = (function (proton,neutron,electron,comedies){
cljs.core.apply.call(null,cljs.core._PLUS_,proton,neutron,electron);

return cljs.core.map.call(null,cljs.core.identity,comedies);
});

hello.core.bailey.cljs$lang$maxFixedArity = (3);

hello.core.bailey.cljs$lang$applyTo = (function (seq4508){
var G__4509 = cljs.core.first.call(null,seq4508);
var seq4508__$1 = cljs.core.next.call(null,seq4508);
var G__4510 = cljs.core.first.call(null,seq4508__$1);
var seq4508__$2 = cljs.core.next.call(null,seq4508__$1);
var G__4511 = cljs.core.first.call(null,seq4508__$2);
var seq4508__$3 = cljs.core.next.call(null,seq4508__$2);
return hello.core.bailey.cljs$core$IFn$_invoke$arity$variadic(G__4509,G__4510,G__4511,seq4508__$3);
});

hello.core.videotape = (function hello$core$videotape(var_args){
var args__3987__auto__ = [];
var len__3984__auto___4516 = arguments.length;
var i__3985__auto___4517 = (0);
while(true){
if((i__3985__auto___4517 < len__3984__auto___4516)){
args__3987__auto__.push((arguments[i__3985__auto___4517]));

var G__4518 = (i__3985__auto___4517 + (1));
i__3985__auto___4517 = G__4518;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return hello.core.videotape.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});

hello.core.videotape.cljs$core$IFn$_invoke$arity$variadic = (function (rainbows){
return cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),rainbows);
});

hello.core.videotape.cljs$lang$maxFixedArity = (0);

hello.core.videotape.cljs$lang$applyTo = (function (seq4515){
return hello.core.videotape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4515));
});

