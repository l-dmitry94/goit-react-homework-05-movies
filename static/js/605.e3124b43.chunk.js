"use strict";(self.webpackChunkgoit_react_homework_05_movies=self.webpackChunkgoit_react_homework_05_movies||[]).push([[605],{8340:function(e,t,r){r.r(t),r.d(t,{default:function(){return J}});var n,a,c,i,s,o=r(5861),u=r(9439),p=r(4687),f=r.n(p),h=r(7694),v=(r(7213),r(2791)),m=r(7689),d=r(1207),l=r(168),x=r(7686),Z={Item:x.Z.li(n||(n=(0,l.Z)(["\n        flex-basis: calc((100% - 36px) / 4);\n    "]))),ActorImage:x.Z.img(a||(a=(0,l.Z)(["\n        max-height: 211px;\n        min-height: 211px;\n    "]))),ActorName:x.Z.h4(c||(c=(0,l.Z)(["\n        font-size: 14px;\n    "]))),ActorCharacter:x.Z.p(i||(i=(0,l.Z)(["\n        font-weight: 500;\n        font-size: 14px;\n        color: #777777;\n    "])))},g=r.p+"static/media/no-cast-image.12e64bc7efc49e58e460.png",w=r(184),y=Z.Item,I=Z.ActorImage,j=Z.ActorName,k=Z.ActorCharacter,b=function(e){var t=e.name,r=e.photo,n=e.character;return(0,w.jsxs)(y,{children:[(0,w.jsx)(I,{src:r?"https://image.tmdb.org/t/p/original".concat(r):g,alt:t}),(0,w.jsx)(j,{children:t}),(0,w.jsx)(k,{children:n})]})},N={CastList:x.Z.ul(s||(s=(0,l.Z)(["\n        display: flex;\n        flex-wrap: wrap;\n        gap: 12px;\n    "])))}.CastList,J=function(){var e=(0,v.useState)([]),t=(0,u.Z)(e,2),r=t[0],n=t[1],a=(0,m.UO)().movieId;(0,v.useEffect)((function(){var e=function(){var e=(0,o.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.Loading.standard(),e.prev=1,e.next=4,d.Z.fetchMovieCast(a);case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,h.Loading.remove(),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var c=r.map((function(e){var t=e.id,r=e.name,n=e.profile_path,a=e.character;return(0,w.jsx)(b,{name:r,photo:n,character:a},t)}));return(0,w.jsx)(w.Fragment,{children:r&&(0,w.jsx)(N,{children:c})})}},1207:function(e,t,r){var n=r(5861),a=r(4687),c=r.n(a),i=r(340).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzQxZjA4MDA4NmRkZjBkNThjNGJkYzA3ZWY0YTAzNiIsInN1YiI6IjY1YTYzZjQxOWJjZDBmMDEyM2JhNzNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9KEtiGYN_3JrU51Sf_c_is4ZEHWjNunRsBdl0i-lHic"}}),s={fetchTrendingMovies:function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchMovieById:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchMovieCast:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchMovieReviews:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchMovieByQuery:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.Z=s}}]);
//# sourceMappingURL=605.e3124b43.chunk.js.map