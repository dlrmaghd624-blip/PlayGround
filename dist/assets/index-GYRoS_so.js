(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ac(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Or={exports:{}},wc=Or.exports,lo;function Sl(){return lo||(lo=1,(function(i){(function(){var e,t,n,r,s,a,o,c,l,u,h,f,p,g,v,m,d,T,S,A,I,w,U,W,E,M,D,$,Q,ie,se,te,ve;[S,T,g,s,d,e]=[0,1,2,3,4,5],[D,U,E,I,l,h,o,p]=[0,1,2,3,4,5,6,7],[M,w,W,A,f,c,u,a,m,v,t,n]=[0,1,2,3,4,5,6,7,8,9,10,11],[Q,se,ve]=(function(){var Y,fe,pe,xe,Be,ue;return ue=function(ce){return ce-1},Be=function(ce){return ue(9)+ce},pe=function(ce){return Be(9)+ce},fe=function(ce){return pe(9)+ce},xe=function(ce){return fe(9)+ce},Y=function(ce){return xe(9)+ce},[[4,13,22,31,40,49],[[ue(9),Be(1),pe(3)],[ue(7),pe(1),xe(3)],[ue(1),xe(1),Y(3)],[ue(3),Y(1),Be(3)],[fe(3),pe(9),Be(7)],[fe(1),xe(9),pe(7)],[fe(7),Y(9),xe(7)],[fe(9),Be(9),Y(7)]],[[ue(6),Be(2)],[ue(8),pe(2)],[ue(4),xe(2)],[ue(2),Y(2)],[fe(6),Be(8)],[fe(2),pe(8)],[fe(4),xe(8)],[fe(8),Y(8)],[pe(6),Be(4)],[pe(4),xe(6)],[Y(6),xe(4)],[Y(4),Be(6)]]]})(),$=["U","R","F","D","L","B"],ie=[["U","R","F"],["U","F","L"],["U","L","B"],["U","B","R"],["D","F","R"],["D","L","F"],["D","B","L"],["D","R","B"]],te=[["U","R"],["U","F"],["U","L"],["U","B"],["D","R"],["D","F"],["D","L"],["D","B"],["F","R"],["F","L"],["B","L"],["B","R"]],r=(function(){var Y,fe,pe;class xe{constructor(ue){ue!=null?this.init(ue):this.identity(),this.newCenter=(function(){var ce,le;for(le=[],ce=0;ce<=5;++ce)le.push(0);return le})(),this.newCp=(function(){var ce,le;for(le=[],ce=0;ce<=7;++ce)le.push(0);return le})(),this.newEp=(function(){var ce,le;for(le=[],ce=0;ce<=11;++ce)le.push(0);return le})(),this.newCo=(function(){var ce,le;for(le=[],ce=0;ce<=7;++ce)le.push(0);return le})(),this.newEo=(function(){var ce,le;for(le=[],ce=0;ce<=11;++ce)le.push(0);return le})()}init(ue){return this.center=ue.center.slice(0),this.co=ue.co.slice(0),this.ep=ue.ep.slice(0),this.cp=ue.cp.slice(0),this.eo=ue.eo.slice(0)}identity(){return this.center=[0,1,2,3,4,5],this.cp=[0,1,2,3,4,5,6,7],this.co=(function(){var ue,ce;for(ce=[],ue=0;ue<=7;++ue)ce.push(0);return ce})(),this.ep=[0,1,2,3,4,5,6,7,8,9,10,11],this.eo=(function(){var ue,ce;for(ce=[],ue=0;ue<=11;++ue)ce.push(0);return ce})()}toJSON(){return{center:this.center,cp:this.cp,co:this.co,ep:this.ep,eo:this.eo}}asString(){var ue,ce,le,F,k,ee,Ee,_e,ge,Ue,we;for(we=[],le=F=0;F<=5;le=++F)we[9*le+4]=$[this.center[le]];for(le=k=0;k<=7;le=++k)for(ue=this.cp[le],ge=this.co[le],Ee=ee=0;ee<=2;Ee=++ee)we[se[le][(Ee+ge)%3]]=ie[ue][Ee];for(le=_e=0;_e<=11;le=++_e)for(ce=this.ep[le],ge=this.eo[le],Ee=Ue=0;Ue<=1;Ee=++Ue)we[ve[le][(Ee+ge)%2]]=te[ce][Ee];return we.join("")}static fromString(ue){var ce,le,F,k,ee,Ee,_e,ge,Ue,we,We,R,ke,G;for(F=new xe,k=Ee=0;Ee<=5;k=++Ee)for(ee=_e=0;_e<=5;ee=++_e)ue[9*k+4]===$[ee]&&(F.center[k]=ee);for(k=ge=0;ge<=7;k=++ge){for(we=Ue=0;Ue<=2&&!((G=ue[se[k][we]])==="U"||G==="D");we=++Ue);for(ce=ue[se[k][(we+1)%3]],le=ue[se[k][(we+2)%3]],ee=We=0;We<=7;ee=++We)ce===ie[ee][1]&&le===ie[ee][2]&&(F.cp[k]=ee,F.co[k]=we%3)}for(k=R=0;R<=11;k=++R)for(ee=ke=0;ke<=11;ee=++ke){if(ue[ve[k][0]]===te[ee][0]&&ue[ve[k][1]]===te[ee][1]){F.ep[k]=ee,F.eo[k]=0;break}if(ue[ve[k][0]]===te[ee][1]&&ue[ve[k][1]]===te[ee][0]){F.ep[k]=ee,F.eo[k]=1;break}}return F}clone(){return new xe(this.toJSON())}static random(){return new xe().randomize()}isSolved(){var ue,ce,le,F,k,ee,Ee;for(le=this.clone(),le.move(le.upright()),ce=k=0;k<=5;ce=++k)if(le.center[ce]!==ce)return!1;for(ue=ee=0;ee<=7;ue=++ee)if(le.cp[ue]!==ue||le.co[ue]!==0)return!1;for(F=Ee=0;Ee<=11;F=++Ee)if(le.ep[F]!==F||le.eo[F]!==0)return!1;return!0}centerMultiply(ue){var ce,le,F;for(F=le=0;le<=5;F=++le)ce=ue.center[F],this.newCenter[F]=this.center[ce];return[this.center,this.newCenter]=[this.newCenter,this.center],this}cornerMultiply(ue){var ce,le,F;for(F=le=0;le<=7;F=++le)ce=ue.cp[F],this.newCp[F]=this.cp[ce],this.newCo[F]=(this.co[ce]+ue.co[F])%3;return[this.cp,this.newCp]=[this.newCp,this.cp],[this.co,this.newCo]=[this.newCo,this.co],this}edgeMultiply(ue){var ce,le,F;for(F=le=0;le<=11;F=++le)ce=ue.ep[F],this.newEp[F]=this.ep[ce],this.newEo[F]=(this.eo[ce]+ue.eo[F])%2;return[this.ep,this.newEp]=[this.newEp,this.ep],[this.eo,this.newEo]=[this.newEo,this.eo],this}multiply(ue){return this.centerMultiply(ue),this.cornerMultiply(ue),this.edgeMultiply(ue),this}move(ue){var ce,le,F,k,ee,Ee,_e,ge;for(_e=pe(ue),le=0,k=_e.length;le<k;le++)for(ee=_e[le],ce=ee/3|0,Ee=ee%3,F=0,ge=Ee;0<=ge?F<=ge:F>=ge;0<=ge?++F:--F)this.multiply(xe.moves[ce]);return this}upright(){var ue,ce,le,F,k,ee;for(ue=this.clone(),ee=[],ce=F=0;F<=5&&ue.center[ce]!==g;ce=++F);switch(ce){case s:ee.push("x");break;case S:ee.push("x'");break;case e:ee.push("x2");break;case T:ee.push("y");break;case d:ee.push("y'")}for(ee.length&&ue.move(ee[0]),le=k=0;k<=5&&ue.center[le]!==S;le=++k);switch(le){case d:ee.push("z");break;case T:ee.push("z'");break;case s:ee.push("z2")}return ee.join(" ")}static inverse(ue){var ce,le,F,k,ee,Ee,_e;if(Ee=(function(){var ge,Ue,we,We;for(we=pe(ue),We=[],ge=0,Ue=we.length;ge<Ue;ge++)k=we[ge],ce=k/3|0,ee=k%3,We.push(ce*3+-(ee-1)+1);return We})(),Ee.reverse(),typeof ue=="string"){for(_e="",le=0,F=Ee.length;le<F;le++)k=Ee[le],ce=k/3|0,ee=k%3,_e+=Y[ce],ee===1?_e+="2":ee===2&&(_e+="'"),_e+=" ";return _e.substring(0,_e.length-1)}else return ue.length!=null?Ee:Ee[0]}}return xe.prototype.randomize=(function(){var Be,ue,ce,le,F,k,ee,Ee,_e;return k=function(ge,Ue){return ge+Math.floor(Math.random()*(Ue-ge+1))},_e=function(ge){var Ue,we;for(Ue=ge.length;Ue!==0;)we=k(0,Ue-1),Ue-=1,ge[Ue],[ge[Ue],ge[we]]=[ge[we],ge[Ue]]},le=function(ge){var Ue,we,We,R,ke,G,j;for(ke=0,j=(function(){var V,ae,z;for(z=[],V=0,ae=ge.length-1;0<=ae?V<=ae:V>=ae;0<=ae?++V:--V)z.push(!1);return z})();;){for(Ue=-1,We=R=0,G=ge.length-1;0<=G?R<=G:R>=G;We=0<=G?++R:--R)if(!j[We]){Ue=We;break}if(Ue===-1)break;for(we=0;!j[Ue];)j[Ue]=!0,we++,Ue=ge[Ue];ke+=we+1}return ke},Be=function(ge,Ue){var we;return we=le(Ue)+le(ge),we%2===0},ce=function(ge,Ue){for(_e(Ue),_e(ge);!Be(ge,Ue);)_e(Ue),_e(ge)},ee=function(ge,Ue){var we,We,R,ke;for(R=0,we=We=0,ke=ge.length-1;0<=ke?We<=ke:We>=ke;we=0<=ke?++We:--We)R+=ge[we]=k(0,Ue-1)},F=function(ge,Ue){return ge.reduce(function(we,We){return we+We})%Ue===0},ue=function(ge,Ue){for(ee(ge,3);!F(ge,3);)ee(ge,3);for(ee(Ue,2);!F(Ue,2);)ee(Ue,2)},Ee=function(){return ce(this.cp,this.ep),ue(this.co,this.eo),this},Ee})(),xe.moves=[{center:[0,1,2,3,4,5],cp:[I,D,U,E,l,h,o,p],co:[0,0,0,0,0,0,0,0],ep:[A,M,w,W,f,c,u,a,m,v,t,n],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[l,U,E,D,p,h,o,I],co:[2,0,0,1,1,0,0,2],ep:[m,w,W,A,n,c,u,a,f,v,t,M],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[U,h,E,I,D,l,o,p],co:[1,2,0,0,2,1,0,0],ep:[M,v,W,A,f,m,u,a,w,c,t,n],eo:[0,1,0,0,0,1,0,0,1,1,0,0]},{center:[0,1,2,3,4,5],cp:[D,U,E,I,h,o,p,l],co:[0,0,0,0,0,0,0,0],ep:[M,w,W,A,c,u,a,f,m,v,t,n],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[D,E,o,I,l,U,h,p],co:[0,1,2,0,0,2,1,0],ep:[M,w,t,A,f,c,v,a,m,W,u,n],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[D,U,I,p,l,h,E,o],co:[0,0,1,2,0,0,2,1],ep:[M,w,W,n,f,c,u,t,m,v,A,a],eo:[0,0,0,1,0,0,0,1,0,0,1,1]},{center:[S,g,d,s,e,T],cp:[D,U,E,I,l,h,o,p],co:[0,0,0,0,0,0,0,0],ep:[M,w,W,A,f,c,u,a,v,t,n,m],eo:[0,0,0,0,0,0,0,0,1,1,1,1]},{center:[e,T,S,g,d,s],cp:[D,U,E,I,l,h,o,p],co:[0,0,0,0,0,0,0,0],ep:[M,A,W,a,f,w,u,c,m,v,t,n],eo:[0,1,0,1,0,1,0,1,0,0,0,0]},{center:[d,S,g,T,s,e],cp:[D,U,E,I,l,h,o,p],co:[0,0,0,0,0,0,0,0],ep:[W,w,u,A,M,c,f,a,m,v,t,n],eo:[1,0,1,0,1,0,1,0,0,0,0,0]}],fe={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},Y={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B",6:"E",7:"M",8:"S",9:"x",10:"y",11:"z",12:"u",13:"r",14:"f",15:"d",16:"l",17:"b"},pe=function(Be){var ue,ce,le,F,k,ee,Ee;if(typeof Be=="string"){for(ee=Be.split(/\s+/),Ee=[],ue=0,ce=ee.length;ue<ce;ue++)if(F=ee[ue],F.length!==0){if(F.length>2)throw new Error(`Invalid move: ${F}`);if(le=fe[F[0]],le===void 0)throw new Error(`Invalid move: ${F}`);if(F.length===1)k=0;else if(F[1]==="2")k=1;else if(F[1]==="'")k=2;else throw new Error(`Invalid move: ${F}`);Ee.push(le*3+k)}return Ee}else return Be.length!=null?Be:[Be]},xe.moves.push(new xe().move("R M' L'").toJSON()),xe.moves.push(new xe().move("U E' D'").toJSON()),xe.moves.push(new xe().move("F S B'").toJSON()),xe.moves.push(new xe().move("U E'").toJSON()),xe.moves.push(new xe().move("R M'").toJSON()),xe.moves.push(new xe().move("F S").toJSON()),xe.moves.push(new xe().move("D E").toJSON()),xe.moves.push(new xe().move("L M").toJSON()),xe.moves.push(new xe().move("B S'").toJSON()),xe}).call(this),i!==null?i.exports=r:this.Cube=r}).call(wc)})(Or)),Or.exports}var rs={},co;function Rc(){return co||(co=1,(function(){var i,e,t,n,r,s,a,o,c,l,u,h,f,p,g,v,m,d,T,S,A,I,w,U,W,E,M,D,$,Q,ie,se,te,ve,Y,fe,pe,xe,Be,ue,ce,le,F,k,ee,Ee,_e,ge,Ue,we,We,R,ke=[].indexOf;n=this.Cube||Sl(),[te,$,ie,M,o,l,s,h]=[0,1,2,3,4,5,6,7],[se,D,Q,E,u,a,c,r,p,f,i,e]=[0,1,2,3,4,5,6,7,8,9,10,11],t=function(G,j){var V,ae,z;if(G<j)return 0;for(j>G/2&&(j=G-j),z=1,V=G,ae=1;V!==G-j;)z*=V,z/=ae,V--,ae++;return z},ue=function(G){var j,V,ae,z;for(j=1,V=ae=2,z=G;2<=z?ae<=z:ae>=z;V=2<=z?++ae:--ae)j*=V;return j},le=function(G,j){return G>j?G:j},we=function(G,j,V){var ae,z,K,_,x;for(x=G[j],ae=z=K=j,_=V-1;K<=_?z<=_:z>=_;ae=K<=_?++z:--z)G[ae]=G[ae+1];return G[V]=x},We=function(G,j,V){var ae,z,K,_,x;for(x=G[V],ae=z=K=V,_=j+1;K<=_?z<=_:z>=_;ae=K<=_?++z:--z)G[ae]=G[ae-1];return G[j]=x},_e=function(G,j,V,ae=!1){var z,K,_,x,L,X;return x=V-j,_=ue(x+1),G==="corners"?(K=7,X="cp"):(K=11,X="ep"),L=(function(){var H,C,J;for(J=[],z=H=0,C=x;0<=C?H<=C:H>=C;z=0<=C?++H:--H)J.push(0);return J})(),function(H){var C,J,ne,he,ye,re,de,Ie,Ne,Re,Ve,P,Te,be,Me,me,oe,Pe,Xe,rt,st,Et,Mt,Nn,St,Sn,It;if(H!=null){for(z=re=0,Ve=x;0<=Ve?re<=Ve:re>=Ve;z=0<=Ve?++re:--re)L[z]=z+j;for(J=H%_,C=H/_|0,Ne=this[X],z=de=0,P=K;0<=P?de<=P:de>=P;z=0<=P?++de:--de)Ne[z]=-1;for(he=Ie=1,be=x;1<=be?Ie<=be:Ie>=be;he=1<=be?++Ie:--Ie)for(ye=J%(he+1),J=J/(he+1)|0;ye>0;)We(L,0,he),ye--;if(St=x,ae)for(he=Re=0,Me=K;0<=Me?Re<=Me:Re>=Me;he=0<=Me?++Re:--Re)ne=t(K-he,St+1),C-ne>=0&&(Ne[he]=L[x-St],C-=ne,St--);else for(he=Et=me=K;me<=0?Et<=0:Et>=0;he=me<=0?++Et:--Et)ne=t(he,St+1),C-ne>=0&&(Ne[he]=L[St],C-=ne,St--);return this}else{for(Ne=this[X],z=Mt=0,oe=x;0<=oe?Mt<=oe:Mt>=oe;z=0<=oe?++Mt:--Mt)L[z]=-1;if(C=J=St=0,ae)for(he=Nn=Pe=K;Pe<=0?Nn<=0:Nn>=0;he=Pe<=0?++Nn:--Nn)j<=(Xe=Ne[he])&&Xe<=V&&(C+=t(K-he,St+1),L[x-St]=Ne[he],St++);else for(he=Sn=0,rt=K;0<=rt?Sn<=rt:Sn>=rt;he=0<=rt?++Sn:--Sn)j<=(st=Ne[he])&&st<=V&&(C+=t(he,St+1),L[St]=Ne[he],St++);for(he=It=Te=x;Te<=0?It<=0:It>=0;he=Te<=0?++It:--It){for(ye=0;L[he]!==j+he;)we(L,0,he),ye++;J=(he+1)*J+ye}return C*_+J}}},g={twist:function(G){var j,V,ae,z,K,_;if(G!=null){for(K=0,j=V=6;V>=0;j=--V)z=G%3,G=G/3|0,this.co[j]=z,K+=z;return this.co[7]=(3-K%3)%3,this}else{for(_=0,j=ae=0;ae<=6;j=++ae)_=3*_+this.co[j];return _}},flip:function(G){var j,V,ae,z,K,_;if(G!=null){for(K=0,j=V=10;V>=0;j=--V)z=G%2,G=G/2|0,this.eo[j]=z,K+=z;return this.eo[11]=(2-K%2)%2,this}else{for(_=0,j=ae=0;ae<=10;j=++ae)_=2*_+this.eo[j];return _}},cornerParity:function(){var G,j,V,ae,z,K,_,x,L;for(L=0,G=V=z=h,K=te+1;z<=K?V<=K:V>=K;G=z<=K?++V:--V)for(j=ae=_=G-1,x=te;_<=x?ae<=x:ae>=x;j=_<=x?++ae:--ae)this.cp[j]>this.cp[G]&&L++;return L%2},edgeParity:function(){var G,j,V,ae,z,K,_,x,L;for(L=0,G=V=z=e,K=se+1;z<=K?V<=K:V>=K;G=z<=K?++V:--V)for(j=ae=_=G-1,x=se;_<=x?ae<=x:ae>=x;j=_<=x?++ae:--ae)this.ep[j]>this.ep[G]&&L++;return L%2},URFtoDLF:_e("corners",te,l),URtoUL:_e("edges",se,Q),UBtoDF:_e("edges",E,a),URtoDF:_e("edges",se,a),FRtoBR:_e("edges",p,e,!0)};for(ce in g)R=g[ce],n.prototype[ce]=R;fe=function(G,j,V){var ae,z,K,_,x,L,X,H,C,J,ne;for(ae=G==="corners"?"cornerMultiply":"edgeMultiply",z=new n,ne=[],K=L=0,J=V-1;0<=J?L<=J:L>=J;K=0<=J?++L:--L){for(z[j](K),_=[],x=H=0;H<=5;x=++H){for(X=n.moves[x],C=0;C<=2;++C)z[ae](X),_.push(z[j]());z[ae](X)}ne.push(_)}return ne},F=(function(){var G,j;return G=new n,j=new n,function(V,ae){var z,K;for(G.URtoUL(V),j.UBtoDF(ae),z=K=0;K<=7;z=++K)if(G.ep[z]!==-1){if(j.ep[z]!==-1)return-1;j.ep[z]=G.ep[z]}return j.URtoDF()}})(),A=2187,v=2048,d=2,m=11880,T=495,S=24,w=20160,U=20160,W=1320,I=1320,n.moveTables={parity:[[1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]],twist:null,flip:null,FRtoBR:null,URFtoDLF:null,URtoDF:null,URtoUL:null,UBtoDF:null,mergeURtoDF:null},k={twist:["corners",A],flip:["edges",v],FRtoBR:["edges",m],URFtoDLF:["corners",w],URtoDF:["edges",U],URtoUL:["edges",W],UBtoDF:["edges",I],mergeURtoDF:[]},n.computeMoveTables=function(...G){var j,V,ae,z,K,_;for(G.length===0&&(G=(function(){var x;x=[];for(ae in k)x.push(ae);return x})()),V=0,j=G.length;V<j;V++)_=G[V],this.moveTables[_]===null&&(_==="mergeURtoDF"?this.moveTables.mergeURtoDF=(function(){var x,L,X,H;for(H=[],L=X=0;X<=335;L=++X)H.push((function(){var C,J;for(J=[],x=C=0;C<=335;x=++C)J.push(F(L,x));return J})());return H})():([z,K]=k[_],this.moveTables[_]=fe(z,_,K)));return this},ve=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],ee=(function(){var G,j,V,ae,z,K,_,x;for(x=[],j=V=0;V<=5;j=++V){for(ae=[],G=z=0;z<=5;G=++z)if(G!==j&&G!==j-3)for(_=K=0;K<=2;_=++K)ae.push(G*3+_);x.push(ae)}return x})(),Y=[0,1,2,4,7,9,10,11,13,16],Ee=(function(){var G,j,V,ae,z,K,_,x,L,X;for(X=[],j=ae=0;ae<=5;j=++ae){for(z=[],G=K=0;K<=5;G=++K)if(G!==j&&G!==j-3)for(L=G===0||G===3?[0,1,2]:[1],_=0,V=L.length;_<V;_++)x=L[_],z.push(G*3+x);X.push(z)}return X})(),ge=function(G,j,V){var ae,z,K;return ae=j%8,K=j>>3,z=ae<<2,V!=null?(G[K]&=~(15<<z),G[K]|=V<<z,V):(G[K]&15<<z)>>>z},pe=function(G,j,V,ae){var z,K,_,x,L,X,H,C,J,ne,he,ye;for(ye=(function(){var re,de,Ie;for(Ie=[],re=0,de=Math.ceil(j/8)-1;0<=de?re<=de:re>=de;0<=de?++re:--re)Ie.push(4294967295);return Ie})(),G===1?C=ve:C=Y,K=0,ge(ye,0,K),_=1;_!==j;){for(x=X=0,he=j-1;0<=he?X<=he:X>=he;x=0<=he?++X:--X)if(ge(ye,x)===K)for(z=V(x),ne=0,L=C.length;ne<L;ne++)H=C[ne],J=ae(z,H),ge(ye,J)===15&&(ge(ye,J,K+1),_++);K++}return ye},n.pruningTables={sliceTwist:null,sliceFlip:null,sliceURFtoDLFParity:null,sliceURtoDFParity:null},Ue={sliceTwist:[1,T*A,function(G){return[G%T,G/T|0]},function(G,j){var V,ae,z,K;return[z,K]=G,V=n.moveTables.FRtoBR[z*24][j]/24|0,ae=n.moveTables.twist[K][j],ae*T+V}],sliceFlip:[1,T*v,function(G){return[G%T,G/T|0]},function(G,j){var V,ae,z,K;return[K,V]=G,z=n.moveTables.FRtoBR[K*24][j]/24|0,ae=n.moveTables.flip[V][j],ae*T+z}],sliceURFtoDLFParity:[2,S*w*d,function(G){return[G%2,(G/2|0)%S,(G/2|0)/S|0]},function(G,j){var V,ae,z,K,_,x;return[_,x,V]=G,ae=n.moveTables.parity[_][j],z=n.moveTables.FRtoBR[x][j],K=n.moveTables.URFtoDLF[V][j],(K*S+z)*2+ae}],sliceURtoDFParity:[2,S*U*d,function(G){return[G%2,(G/2|0)%S,(G/2|0)/S|0]},function(G,j){var V,ae,z,K,_,x;return[_,x,V]=G,ae=n.moveTables.parity[_][j],z=n.moveTables.FRtoBR[x][j],K=n.moveTables.URtoDF[V][j],(K*S+z)*2+ae}]},n.computePruningTables=function(...G){var j,V,ae,z,K;for(G.length===0&&(G=(function(){var _;_=[];for(ae in Ue)_.push(ae);return _})()),V=0,j=G.length;V<j;V++)K=G[V],this.pruningTables[K]===null&&(z=Ue[K],this.pruningTables[K]=pe(...z));return this},n.initSolver=function(){return n.computeMoveTables(),n.computePruningTables()},n.prototype.solveUpright=function(G=22){var j,V,ae,z,K,_,x,L,X;return ae=(function(){var H,C,J,ne,he,ye,re;for(C=["U","R","F","D","L","B"],ye=["","2","'"],re=[],H=J=0;J<=5;H=++J)for(he=ne=0;ne<=2;he=++ne)re.push(C[H]+ye[he]);return re})(),j=class{constructor(C){this.parent=null,this.lastMove=null,this.depth=0,C&&this.init(C)}init(C){return this.flip=C.flip(),this.twist=C.twist(),this.slice=C.FRtoBR()/S|0,this.parity=C.cornerParity(),this.URFtoDLF=C.URFtoDLF(),this.FRtoBR=C.FRtoBR(),this.URtoUL=C.URtoUL(),this.UBtoDF=C.UBtoDF(),this}solution(){return this.parent?this.parent.solution()+ae[this.lastMove]+" ":""}move(C,J,ne){return n.moveTables[C][J][ne]}pruning(C,J){return ge(n.pruningTables[C],J)}moves1(){return this.lastMove!==null?ee[this.lastMove/3|0]:ve}minDist1(){var C,J;return C=this.pruning("sliceFlip",T*this.flip+this.slice),J=this.pruning("sliceTwist",T*this.twist+this.slice),le(C,J)}next1(C){var J;return J=V.pop(),J.parent=this,J.lastMove=C,J.depth=this.depth+1,J.flip=this.move("flip",this.flip,C),J.twist=this.move("twist",this.twist,C),J.slice=this.move("FRtoBR",this.slice*24,C)/24|0,J}moves2(){return this.lastMove!==null?Ee[this.lastMove/3|0]:Y}minDist2(){var C,J,ne,he;return ne=(S*this.URtoDF+this.FRtoBR)*d+this.parity,C=this.pruning("sliceURtoDFParity",ne),he=(S*this.URFtoDLF+this.FRtoBR)*d+this.parity,J=this.pruning("sliceURFtoDLFParity",he),le(C,J)}init2(C=!0){if(this.parent!==null&&(this.parent.init2(!1),this.URFtoDLF=this.move("URFtoDLF",this.parent.URFtoDLF,this.lastMove),this.FRtoBR=this.move("FRtoBR",this.parent.FRtoBR,this.lastMove),this.parity=this.move("parity",this.parent.parity,this.lastMove),this.URtoUL=this.move("URtoUL",this.parent.URtoUL,this.lastMove),this.UBtoDF=this.move("UBtoDF",this.parent.UBtoDF,this.lastMove),C))return this.URtoDF=this.move("mergeURtoDF",this.URtoUL,this.UBtoDF)}next2(C){var J;return J=V.pop(),J.parent=this,J.lastMove=C,J.depth=this.depth+1,J.URFtoDLF=this.move("URFtoDLF",this.URFtoDLF,C),J.FRtoBR=this.move("FRtoBR",this.FRtoBR,C),J.parity=this.move("parity",this.parity,C),J.URtoDF=this.move("URtoDF",this.URtoDF,C),J}},L=null,K=function(H){var C,J,ne,he;for(C=0,he=[],C=J=1,ne=G;(1<=ne?J<=ne:J>=ne)&&(z(H,C),L===null);C=1<=ne?++J:--J)he.push(C++);return he},z=function(H,C){var J,ne,he,ye,re,de,Ie;if(C===0){if(H.minDist1()===0&&(H.lastMove===null||(re=H.lastMove,ke.call(Y,re)<0)))return x(H)}else if(C>0&&H.minDist1()<=C){for(de=H.moves1(),Ie=[],ne=0,J=de.length;ne<J&&(he=de[ne],ye=H.next1(he),z(ye,C-1),V.push(ye),L===null);ne++)Ie.push(void 0);return Ie}},x=function(H){var C,J,ne,he;for(H.init2(),he=[],C=J=1,ne=G-H.depth;(1<=ne?J<=ne:J>=ne)&&(_(H,C),L===null);C=1<=ne?++J:--J)he.push(C++);return he},_=function(H,C){var J,ne,he,ye,re,de;if(C===0){if(H.minDist2()===0)return L=H.solution()}else if(C>0&&H.minDist2()<=C){for(re=H.moves2(),de=[],ne=0,J=re.length;ne<J&&(he=re[ne],ye=H.next2(he),_(ye,C-1),V.push(ye),L===null);ne++)de.push(void 0);return de}},V=(function(){var H,C,J;for(J=[],H=0,C=G+1;0<=C?H<=C:H>=C;0<=C?++H:--H)J.push(new j);return J})(),X=V.pop().init(this),K(X),V.push(X),L.length>0&&(L=L.substring(0,L.length-1)),L},Be={U:0,R:1,F:2,D:3,L:4,B:5},xe={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B"},n.prototype.solve=function(G=22){var j,V,ae,z,K,_,x,L,X;for(j=this.clone(),L=j.upright(),j.move(L),_=new n().move(L).center,X=j.solveUpright(G),x=[],K=X.split(" "),ae=0,V=K.length;ae<V;ae++)z=K[ae],x.push(xe[_[Be[z[0]]]]),z.length>1&&(x[x.length-1]+=z[1]);return x.join(" ")},n.scramble=function(){return n.inverse(n.random().solve())}}).call(rs)),rs}var ss,uo;function Cc(){return uo||(uo=1,ss=Sl(),Rc()),ss}var Pc=Cc();const Kn=Ac(Pc);const Da="181",Lc=0,ho=1,Uc=2,yl=1,Dc=2,pn=3,Fn=0,Dt=1,mn=2,vn=0,gi=1,fo=2,po=3,mo=4,Ic=5,Xn=100,Fc=101,Nc=102,Oc=103,Bc=104,zc=200,kc=201,Vc=202,Gc=203,zs=204,ks=205,Hc=206,Wc=207,Xc=208,$c=209,qc=210,Yc=211,Zc=212,Jc=213,Kc=214,Vs=0,Gs=1,Hs=2,_i=3,Ws=4,Xs=5,$s=6,qs=7,El=0,jc=1,Qc=2,Un=0,eu=1,tu=2,nu=3,Tl=4,iu=5,ru=6,su=7,Al=300,bi=301,Mi=302,Ys=303,Zs=304,Zr=306,Js=1e3,xn=1001,Ks=1002,Vt=1003,au=1004,fr=1005,Xt=1006,as=1007,qn=1008,rn=1009,wl=1010,Rl=1011,Yi=1012,Ia=1013,Yn=1014,gn=1015,wi=1016,Fa=1017,Na=1018,Zi=1020,Cl=35902,Pl=35899,Ll=1021,Ul=1022,Kt=1023,Ji=1026,Ki=1027,Dl=1028,Oa=1029,Ba=1030,za=1031,ka=1033,Br=33776,zr=33777,kr=33778,Vr=33779,js=35840,Qs=35841,ea=35842,ta=35843,na=36196,ia=37492,ra=37496,sa=37808,aa=37809,oa=37810,la=37811,ca=37812,ua=37813,ha=37814,da=37815,fa=37816,pa=37817,ma=37818,xa=37819,ga=37820,va=37821,_a=36492,ba=36494,Ma=36495,Sa=36283,ya=36284,Ea=36285,Ta=36286,ou=3200,lu=3201,Il=0,cu=1,Cn="",zt="srgb",Si="srgb-linear",Wr="linear",ot="srgb",ti=7680,xo=519,uu=512,hu=513,du=514,Fl=515,fu=516,pu=517,mu=518,xu=519,go=35044,vo="300 es",en=2e3,Xr=2001;function Nl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gu(){const i=$r("canvas");return i.style.display="block",i}const _o={};function bo(...i){const e="THREE."+i.shift();console.log(e,...i)}function qe(...i){const e="THREE."+i.shift();console.warn(e,...i)}function xt(...i){const e="THREE."+i.shift();console.error(e,...i)}function ji(...i){const e=i.join(" ");e in _o||(_o[e]=!0,qe(...i))}function vu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mo=1234567;const Hi=Math.PI/180,Qi=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Va(i,e){return(i%e+e)%e}function _u(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function bu(i,e,t){return i!==e?(t-i)/(e-i):0}function Wi(i,e,t){return(1-t)*i+t*e}function Mu(i,e,t,n){return Wi(i,e,1-Math.exp(-t*n))}function Su(i,e=1){return e-Math.abs(Va(i,e*2)-e)}function yu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Eu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Au(i,e){return i+Math.random()*(e-i)}function wu(i){return i*(.5-Math.random())}function Ru(i){i!==void 0&&(Mo=i);let e=Mo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cu(i){return i*Hi}function Pu(i){return i*Qi}function Lu(i){return(i&i-1)===0&&i!==0}function Uu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Du(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*u,o*l);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pr={DEG2RAD:Hi,RAD2DEG:Qi,generateUUID:jn,clamp:Je,euclideanModulo:Va,mapLinear:_u,inverseLerp:bu,lerp:Wi,damp:Mu,pingpong:Su,smoothstep:yu,smootherstep:Eu,randInt:Tu,randFloat:Au,randFloatSpread:wu,seededRandom:Ru,degToRad:Cu,radToDeg:Pu,isPowerOfTwo:Lu,ceilPowerOfTwo:Uu,floorPowerOfTwo:Du,setQuaternionFromProperEuler:Iu,normalize:Ct,denormalize:mi};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],f=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==f||l!==p||u!==g){let m=c*f+l*p+u*g+h*v;m<0&&(f=-f,p=-p,g=-g,v=-v,m=-m);let d=1-o;if(m<.9995){const T=Math.acos(m),S=Math.sin(T);d=Math.sin(d*T)/S,o=Math.sin(o*T)/S,c=c*d+f*o,l=l*d+p*o,u=u*d+g*o,h=h*d+v*o}else{c=c*d+f*o,l=l*d+p*o,u=u*d+g*o,h=h*d+v*o;const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*p-l*f,e[t+1]=c*g+u*f+l*h-o*p,e[t+2]=l*g+u*p+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(So.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(So.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return os.copy(this).projectOnVector(e),this.sub(os)}reflect(e){return this.sub(os.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const os=new O,So=new rr;class Ye{constructor(e,t,n,r,s,a,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=r[0],m=r[3],d=r[6],T=r[1],S=r[4],A=r[7],I=r[2],w=r[5],U=r[8];return s[0]=a*v+o*T+c*I,s[3]=a*m+o*S+c*w,s[6]=a*d+o*A+c*U,s[1]=l*v+u*T+h*I,s[4]=l*m+u*S+h*w,s[7]=l*d+u*A+h*U,s[2]=f*v+p*T+g*I,s[5]=f*m+p*S+g*w,s[8]=f*d+p*A+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,p=l*s-a*c,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*l-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ls.makeScale(e,t)),this}rotate(e){return this.premultiply(ls.makeRotation(-e)),this}translate(e,t){return this.premultiply(ls.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ls=new Ye,yo=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eo=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fu(){const i={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=_n(r.r),r.g=_n(r.g),r.b=_n(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=vi(r.r),r.g=vi(r.g),r.b=vi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cn?Wr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Si]:{primaries:e,whitePoint:n,transfer:Wr,toXYZ:yo,fromXYZ:Eo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:yo,fromXYZ:Eo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const it=Fu();function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class Nu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ni===void 0&&(ni=$r("canvas")),ni.width=e.width,ni.height=e.height;const r=ni.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_n(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ou=0;class Ga{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(cs(r[a].image)):s.push(cs(r[a]))}else s=cs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function cs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Bu=0;const us=new O;class wt extends Ri{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=xn,r=xn,s=Xt,a=qn,o=Kt,c=rn,l=wt.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=jn(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(us).x}get height(){return this.source.getSize(us).y}get depth(){return this.source.getSize(us).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Al;wt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,A=(p+1)/2,I=(d+1)/2,w=(u+f)/4,U=(h+v)/4,W=(g+m)/4;return S>A&&S>I?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=w/n,s=U/n):A>I?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=w/r,s=W/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=U/s,r=W/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(f-u)/T,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zu extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new wt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ga(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends zu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ol extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),xr.subVectors(this.max,Ii),ii.subVectors(e.a,Ii),ri.subVectors(e.b,Ii),si.subVectors(e.c,Ii),yn.subVectors(ri,ii),En.subVectors(si,ri),Bn.subVectors(ii,si);let t=[0,-yn.z,yn.y,0,-En.z,En.y,0,-Bn.z,Bn.y,yn.z,0,-yn.x,En.z,0,-En.x,Bn.z,0,-Bn.x,-yn.y,yn.x,0,-En.y,En.x,0,-Bn.y,Bn.x,0];return!hs(t,ii,ri,si,xr)||(t=[1,0,0,0,1,0,0,0,1],!hs(t,ii,ri,si,xr))?!1:(gr.crossVectors(yn,En),t=[gr.x,gr.y,gr.z],hs(t,ii,ri,si,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ln=[new O,new O,new O,new O,new O,new O,new O,new O],$t=new O,mr=new sr,ii=new O,ri=new O,si=new O,yn=new O,En=new O,Bn=new O,Ii=new O,xr=new O,gr=new O,zn=new O;function hs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){zn.fromArray(i,s);const o=r.x*Math.abs(zn.x)+r.y*Math.abs(zn.y)+r.z*Math.abs(zn.z),c=e.dot(zn),l=t.dot(zn),u=n.dot(zn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Vu=new sr,Fi=new O,ds=new O;class Ha{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fi.subVectors(e,this.center);const t=Fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Fi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fi.copy(e.center).add(ds)),this.expandByPoint(Fi.copy(e.center).sub(ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const cn=new O,fs=new O,vr=new O,Tn=new O,ps=new O,_r=new O,ms=new O;class Gu{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fs.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(fs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(vr),o=Tn.dot(this.direction),c=-Tn.dot(vr),l=Tn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fs).addScaledVector(vr,f),p}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),r=cn.dot(cn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,r,s){ps.subVectors(t,e),_r.subVectors(n,e),ms.crossVectors(ps,_r);let a=this.direction.dot(ms),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const c=o*this.direction.dot(_r.crossVectors(Tn,_r));if(c<0)return null;const l=o*this.direction.dot(ps.cross(Tn));if(l<0||c+l>a)return null;const u=-o*Tn.dot(ms);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,r,s,a,o,c,l,u,h,f,p,g,v,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,f,p,g,v,m)}set(e,t,n,r,s,a,o,c,l,u,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ai.setFromMatrixColumn(e,0).length(),s=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*h,g=l*u,v=l*h;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*h,g=l*u,v=l*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hu,e,Wu)}lookAt(e,t,n){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),An.crossVectors(n,Ot),An.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),An.crossVectors(n,Ot)),An.normalize(),br.crossVectors(Ot,An),r[0]=An.x,r[4]=br.x,r[8]=Ot.x,r[1]=An.y,r[5]=br.y,r[9]=Ot.y,r[2]=An.z,r[6]=br.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],T=n[3],S=n[7],A=n[11],I=n[15],w=r[0],U=r[4],W=r[8],E=r[12],M=r[1],D=r[5],$=r[9],Q=r[13],ie=r[2],se=r[6],te=r[10],ve=r[14],Y=r[3],fe=r[7],pe=r[11],xe=r[15];return s[0]=a*w+o*M+c*ie+l*Y,s[4]=a*U+o*D+c*se+l*fe,s[8]=a*W+o*$+c*te+l*pe,s[12]=a*E+o*Q+c*ve+l*xe,s[1]=u*w+h*M+f*ie+p*Y,s[5]=u*U+h*D+f*se+p*fe,s[9]=u*W+h*$+f*te+p*pe,s[13]=u*E+h*Q+f*ve+p*xe,s[2]=g*w+v*M+m*ie+d*Y,s[6]=g*U+v*D+m*se+d*fe,s[10]=g*W+v*$+m*te+d*pe,s[14]=g*E+v*Q+m*ve+d*xe,s[3]=T*w+S*M+A*ie+I*Y,s[7]=T*U+S*D+A*se+I*fe,s[11]=T*W+S*$+A*te+I*pe,s[15]=T*E+S*Q+A*ve+I*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*c*h-r*l*h-s*o*f+n*l*f+r*o*p-n*c*p)+v*(+t*c*p-t*l*f+s*a*f-r*a*p+r*l*u-s*c*u)+m*(+t*l*h-t*o*p-s*a*h+n*a*p+s*o*u-n*l*u)+d*(-r*o*u-t*c*h+t*o*f+r*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],T=h*m*l-v*f*l+v*c*p-o*m*p-h*c*d+o*f*d,S=g*f*l-u*m*l-g*c*p+a*m*p+u*c*d-a*f*d,A=u*v*l-g*h*l+g*o*p-a*v*p-u*o*d+a*h*d,I=g*h*c-u*v*c-g*o*f+a*v*f+u*o*m-a*h*m,w=t*T+n*S+r*A+s*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/w;return e[0]=T*U,e[1]=(v*f*s-h*m*s-v*r*p+n*m*p+h*r*d-n*f*d)*U,e[2]=(o*m*s-v*c*s+v*r*l-n*m*l-o*r*d+n*c*d)*U,e[3]=(h*c*s-o*f*s-h*r*l+n*f*l+o*r*p-n*c*p)*U,e[4]=S*U,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*d+t*f*d)*U,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*d-t*c*d)*U,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*p+t*c*p)*U,e[8]=A*U,e[9]=(g*h*s-u*v*s-g*n*p+t*v*p+u*n*d-t*h*d)*U,e[10]=(a*v*s-g*o*s+g*n*l-t*v*l-a*n*d+t*o*d)*U,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*p-t*o*p)*U,e[12]=I*U,e[13]=(u*v*r-g*h*r+g*n*f-t*v*f-u*n*m+t*h*m)*U,e[14]=(g*o*r-a*v*r-g*n*c+t*v*c+a*n*m-t*o*m)*U,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*f+t*o*f)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,p=s*u,g=s*h,v=a*u,m=a*h,d=o*h,T=c*l,S=c*u,A=c*h,I=n.x,w=n.y,U=n.z;return r[0]=(1-(v+d))*I,r[1]=(p+A)*I,r[2]=(g-S)*I,r[3]=0,r[4]=(p-A)*w,r[5]=(1-(f+d))*w,r[6]=(m+T)*w,r[7]=0,r[8]=(g+S)*U,r[9]=(m-T)*U,r[10]=(1-(f+v))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ai.set(r[0],r[1],r[2]).length();const a=ai.set(r[4],r[5],r[6]).length(),o=ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const l=1/s,u=1/a,h=1/o;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=en,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===en)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Xr)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=en,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===en)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Xr)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new O,qt=new ft,Hu=new O(0,0,0),Wu=new O(1,1,1),An=new O,br=new O,Ot=new O,To=new ft,Ao=new rr;class sn{constructor(e=0,t=0,n=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return To.makeRotationFromQuaternion(e),this.setFromRotationMatrix(To,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ao.setFromEuler(this),this.setFromQuaternion(Ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xu=0;const wo=new O,oi=new rr,un=new ft,Mr=new O,Ni=new O,$u=new O,qu=new rr,Ro=new O(1,0,0),Co=new O(0,1,0),Po=new O(0,0,1),Lo={type:"added"},Yu={type:"removed"},li={type:"childadded",child:null},xs={type:"childremoved",child:null};class yt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new O,t=new sn,n=new rr,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ye}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Ro,e)}rotateY(e){return this.rotateOnAxis(Co,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return wo.copy(e).applyQuaternion(this.quaternion),this.position.add(wo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ro,e)}translateY(e){return this.translateOnAxis(Co,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Ni,Mr,this.up):un.lookAt(Mr,Ni,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),oi.setFromRotationMatrix(un),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lo),li.child=e,this.dispatchEvent(li),li.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yu),xs.child=e,this.dispatchEvent(xs),xs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lo),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,$u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new O(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new O,hn=new O,gs=new O,dn=new O,ci=new O,ui=new O,Uo=new O,vs=new O,_s=new O,bs=new O,Ms=new lt,Ss=new lt,ys=new lt;class Zt{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yt.subVectors(r,t),hn.subVectors(n,t),gs.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(hn),c=Yt.dot(gs),l=hn.dot(hn),u=hn.dot(gs),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ms.setScalar(0),Ss.setScalar(0),ys.setScalar(0),Ms.fromBufferAttribute(e,t),Ss.fromBufferAttribute(e,n),ys.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ms,s.x),a.addScaledVector(Ss,s.y),a.addScaledVector(ys,s.z),a}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),hn.subVectors(e,t),Yt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Yt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ci.subVectors(r,n),ui.subVectors(s,n),vs.subVectors(e,n);const c=ci.dot(vs),l=ui.dot(vs);if(c<=0&&l<=0)return t.copy(n);_s.subVectors(e,r);const u=ci.dot(_s),h=ui.dot(_s);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ci,a);bs.subVectors(e,s);const p=ci.dot(bs),g=ui.dot(bs);if(g>=0&&p<=g)return t.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ui,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Uo.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Uo,o);const d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(ci,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Es(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=Va(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Es(a,s,e+1/3),this.g=Es(a,s,e),this.b=Es(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=zl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return it.workingToColorSpace(At.copy(this),e),Math.round(Je(At.r*255,0,255))*65536+Math.round(Je(At.g*255,0,255))*256+Math.round(Je(At.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(At.copy(this),t);const n=At.r,r=At.g,s=At.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=zt){it.workingToColorSpace(At.copy(this),e);const t=At.r,n=At.g,r=At.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Sr);const n=Wi(wn.h,Sr.h,t),r=Wi(wn.s,Sr.s,t),s=Wi(wn.l,Sr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new et;et.NAMES=zl;let Zu=0;class ar extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=gi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zs,this.blendDst=ks,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zs&&(n.blendSrc=this.blendSrc),this.blendDst!==ks&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wa extends ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new O,yr=new Oe;let Ju=0;class tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ju++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=go,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==go&&(e.usage=this.usage),e}}class kl extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vl extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ku=0;const Ht=new ft,Ts=new yt,hi=new O,Bt=new sr,Oi=new sr,bt=new O;class Mn extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nl(e)?Vl:kl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return Ts.lookAt(e),Ts.updateMatrix(),this.applyMatrix4(Ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Oi.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Bt.min,Oi.min),Bt.expandByPoint(bt),bt.addVectors(Bt.max,Oi.max),Bt.expandByPoint(bt)):(Bt.expandByPoint(Oi.min),Bt.expandByPoint(Oi.max))}Bt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)bt.fromBufferAttribute(o,l),c&&(hi.fromBufferAttribute(e,l),bt.add(hi)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let W=0;W<n.count;W++)o[W]=new O,c[W]=new O;const l=new O,u=new O,h=new O,f=new Oe,p=new Oe,g=new Oe,v=new O,m=new O;function d(W,E,M){l.fromBufferAttribute(n,W),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,W),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),u.sub(l),h.sub(l),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[W].add(v),o[E].add(v),o[M].add(v),c[W].add(m),c[E].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let W=0,E=T.length;W<E;++W){const M=T[W],D=M.start,$=M.count;for(let Q=D,ie=D+$;Q<ie;Q+=3)d(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const S=new O,A=new O,I=new O,w=new O;function U(W){I.fromBufferAttribute(r,W),w.copy(I);const E=o[W];S.copy(E),S.sub(I.multiplyScalar(I.dot(E))).normalize(),A.crossVectors(w,E);const D=A.dot(c[W])<0?-1:1;a.setXYZW(W,S.x,S.y,S.z,D)}for(let W=0,E=T.length;W<E;++W){const M=T[W],D=M.start,$=M.count;for(let Q=D,ie=D+$;Q<ie;Q+=3)U(e.getX(Q+0)),U(e.getX(Q+1)),U(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new tn(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new ft,kn=new Gu,Er=new Ha,Io=new O,Tr=new O,Ar=new O,wr=new O,As=new O,Rr=new O,Fo=new O,Cr=new O;class jt extends yt{constructor(e=new Mn,t=new Wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Rr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(As.fromBufferAttribute(h,e),a?Rr.addScaledVector(As,u):Rr.addScaledVector(As.sub(t),u))}t.add(Rr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),kn.copy(e.ray).recast(e.near),!(Er.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Er,Io)===null||kn.origin.distanceToSquared(Io)>(e.far-e.near)**2))&&(Do.copy(s).invert(),kn.copy(e.ray).applyMatrix4(Do),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let A=T,I=S;A<I;A+=3){const w=o.getX(A),U=o.getX(A+1),W=o.getX(A+2);r=Pr(this,d,e,n,l,u,h,w,U,W),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const T=o.getX(m),S=o.getX(m+1),A=o.getX(m+2);r=Pr(this,a,e,n,l,u,h,T,S,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let A=T,I=S;A<I;A+=3){const w=A,U=A+1,W=A+2;r=Pr(this,d,e,n,l,u,h,w,U,W),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const T=m,S=m+1,A=m+2;r=Pr(this,a,e,n,l,u,h,T,S,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ju(i,e,t,n,r,s,a,o){let c;if(e.side===Dt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Fn,o),c===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Cr);return l<t.near||l>t.far?null:{distance:l,point:Cr.clone(),object:i}}function Pr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Tr),i.getVertexPosition(c,Ar),i.getVertexPosition(l,wr);const u=ju(i,e,t,n,Tr,Ar,wr,Fo);if(u){const h=new O;Zt.getBarycoord(Fo,Tr,Ar,wr,h),r&&(u.uv=Zt.getInterpolatedAttribute(r,o,c,l,h,new Oe)),s&&(u.uv1=Zt.getInterpolatedAttribute(s,o,c,l,h,new Oe)),a&&(u.normal=Zt.getInterpolatedAttribute(a,o,c,l,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new O,materialIndex:0};Zt.getNormal(Tr,Ar,wr,f.normal),u.face=f,u.barycoord=h}return u}class Ci extends Mn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new nn(l,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(h,2));function g(v,m,d,T,S,A,I,w,U,W,E){const M=A/U,D=I/W,$=A/2,Q=I/2,ie=w/2,se=U+1,te=W+1;let ve=0,Y=0;const fe=new O;for(let pe=0;pe<te;pe++){const xe=pe*D-Q;for(let Be=0;Be<se;Be++){const ue=Be*M-$;fe[v]=ue*T,fe[m]=xe*S,fe[d]=ie,l.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[d]=w>0?1:-1,u.push(fe.x,fe.y,fe.z),h.push(Be/U),h.push(1-pe/W),ve+=1}}for(let pe=0;pe<W;pe++)for(let xe=0;xe<U;xe++){const Be=f+xe+se*pe,ue=f+xe+se*(pe+1),ce=f+(xe+1)+se*(pe+1),le=f+(xe+1)+se*pe;c.push(Be,ue,le),c.push(ue,ce,le),Y+=6}o.addGroup(p,Y,E),p+=Y,f+=ve}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=yi(i[t]);for(const r in n)e[r]=n[r]}return e}function Qu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const eh={clone:yi,merge:Pt};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=Qu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hl extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=en,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new O,No=new Oe,Oo=new Oe;class kt extends Hl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,No,Oo),t.subVectors(Oo,No)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,fi=1;class ih extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(di,fi,e,t);r.layers=this.layers,this.add(r);const s=new kt(di,fi,e,t);s.layers=this.layers,this.add(s);const a=new kt(di,fi,e,t);a.layers=this.layers,this.add(a);const o=new kt(di,fi,e,t);o.layers=this.layers,this.add(o);const c=new kt(di,fi,e,t);c.layers=this.layers,this.add(c);const l=new kt(di,fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===en)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wl extends wt{constructor(e=[],t=bi,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rh extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Wl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ci(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:vn});s.uniforms.tEquirect.value=t;const a=new jt(r,s),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=Xt),new ih(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Pn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sh={type:"move"};class ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sh)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ah extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class oh extends wt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Vt,u=Vt,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rs=new O,lh=new O,ch=new Ye;class Wn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Rs.subVectors(n,t).cross(lh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ch.getNormalMatrix(e),r=this.coplanarPoint(Rs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Ha,uh=new Oe(.5,.5),Lr=new O;class Xa{constructor(e=new Wn,t=new Wn,n=new Wn,r=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=en,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],v=s[9],m=s[10],d=s[11],T=s[12],S=s[13],A=s[14],I=s[15];if(r[0].setComponents(l-a,p-u,d-g,I-T).normalize(),r[1].setComponents(l+a,p+u,d+g,I+T).normalize(),r[2].setComponents(l+o,p+h,d+v,I+S).normalize(),r[3].setComponents(l-o,p-h,d-v,I-S).normalize(),n)r[4].setComponents(c,f,m,A).normalize(),r[5].setComponents(l-c,p-f,d-m,I-A).normalize();else if(r[4].setComponents(l-c,p-f,d-m,I-A).normalize(),t===en)r[5].setComponents(l+c,p+f,d+m,I+A).normalize();else if(t===Xr)r[5].setComponents(c,f,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){Vn.center.set(0,0,0);const t=uh.distanceTo(e.center);return Vn.radius=.7071067811865476+t,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Lr.x=r.normal.x>0?e.max.x:e.min.x,Lr.y=r.normal.y>0?e.max.y:e.min.y,Lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hh extends wt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xl extends wt{constructor(e,t,n=Yn,r,s,a,o=Vt,c=Vt,l,u=Ji,h=1){if(u!==Ji&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $l extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(a-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new Oe:new O);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,r=[],s=[],a=[],o=new O,c=new ft;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new O)}s[0]=new O,a[0]=new O;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Je(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Je(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $a extends on{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Oe){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dh extends $a{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function qa(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let f=(a-s)/l-(o-s)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,p*=u,r(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Ur=new O,Cs=new qa,Ps=new qa,Ls=new qa;class fh extends on{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new O){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(Ur.subVectors(r[0],r[1]).add(r[0]),l=Ur);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Ur.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Cs.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,v,m),Ps.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,v,m),Ls.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Cs.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ps.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ls.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Cs.calc(c),Ps.calc(c),Ls.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bo(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function ph(i,e){const t=1-i;return t*t*e}function mh(i,e){return 2*(1-i)*i*e}function xh(i,e){return i*i*e}function Xi(i,e,t,n){return ph(i,e)+mh(i,t)+xh(i,n)}function gh(i,e){const t=1-i;return t*t*t*e}function vh(i,e){const t=1-i;return 3*t*t*i*e}function _h(i,e){return 3*(1-i)*i*i*e}function bh(i,e){return i*i*i*e}function $i(i,e,t,n,r){return gh(i,e)+vh(i,t)+_h(i,n)+bh(i,r)}class ql extends on{constructor(e=new Oe,t=new Oe,n=new Oe,r=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Oe){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set($i(e,r.x,s.x,a.x,o.x),$i(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mh extends on{constructor(e=new O,t=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set($i(e,r.x,s.x,a.x,o.x),$i(e,r.y,s.y,a.y,o.y),$i(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yl extends on{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sh extends on{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zl extends on{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Xi(e,r.x,s.x,a.x),Xi(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yh extends on{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Xi(e,r.x,s.x,a.x),Xi(e,r.y,s.y,a.y),Xi(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jl extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Bo(o,c.x,l.x,u.x,h.x),Bo(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Oe().fromArray(r))}return this}}var zo=Object.freeze({__proto__:null,ArcCurve:dh,CatmullRomCurve3:fh,CubicBezierCurve:ql,CubicBezierCurve3:Mh,EllipseCurve:$a,LineCurve:Yl,LineCurve3:Sh,QuadraticBezierCurve:Zl,QuadraticBezierCurve3:yh,SplineCurve:Jl});class Eh extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new zo[r.type]().fromJSON(r))}return this}}class ko extends Eh{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Yl(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Zl(this.currentPoint.clone(),new Oe(e,t),new Oe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new ql(this.currentPoint.clone(),new Oe(e,t),new Oe(n,r),new Oe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Jl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const l=new $a(e,t,n,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Kl extends ko{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ko().fromJSON(r))}return this}}function Th(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=jl(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=Ph(i,e,s,t)),i.length>80*t){o=i[0],c=i[1];let u=o,h=c;for(let f=t;f<r;f+=t){const p=i[f],g=i[f+1];p<o&&(o=p),g<c&&(c=g),p>u&&(u=p),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return er(s,a,t,o,c,l,0),a}function jl(i,e,t,n,r){let s;if(r===Vh(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Vo(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Vo(a/n|0,i[a],i[a+1],s);return s&&Ei(s,s.next)&&(nr(s),s=s.next),s}function Jn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ei(t,t.next)||dt(t.prev,t,t.next)===0)){if(nr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function er(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Fh(i,n,r,s);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?wh(i,n,r,s):Ah(i)){e.push(c.i,i.i,l.i),nr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Rh(Jn(i),e),er(i,e,t,n,r,s,2)):a===2&&Ch(i,e,t,n,r,s):er(Jn(i),e,t,n,r,s,1);break}}}function Ah(i){const e=i.prev,t=i,n=i.next;if(dt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(r,s,a),h=Math.min(o,c,l),f=Math.max(r,s,a),p=Math.max(o,c,l);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Vi(r,o,s,c,a,l,g.x,g.y)&&dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wh(i,e,t,n){const r=i.prev,s=i,a=i.next;if(dt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,f=a.y,p=Math.min(o,c,l),g=Math.min(u,h,f),v=Math.max(o,c,l),m=Math.max(u,h,f),d=Aa(p,g,e,t,n),T=Aa(v,m,e,t,n);let S=i.prevZ,A=i.nextZ;for(;S&&S.z>=d&&A&&A.z<=T;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&Vi(o,u,c,h,l,f,S.x,S.y)&&dt(S.prev,S,S.next)>=0||(S=S.prevZ,A.x>=p&&A.x<=v&&A.y>=g&&A.y<=m&&A!==r&&A!==a&&Vi(o,u,c,h,l,f,A.x,A.y)&&dt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;S&&S.z>=d;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==a&&Vi(o,u,c,h,l,f,S.x,S.y)&&dt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;A&&A.z<=T;){if(A.x>=p&&A.x<=v&&A.y>=g&&A.y<=m&&A!==r&&A!==a&&Vi(o,u,c,h,l,f,A.x,A.y)&&dt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Rh(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Ei(n,r)&&ec(n,t,t.next,r)&&tr(n,r)&&tr(r,n)&&(e.push(n.i,t.i,r.i),nr(t),nr(t.next),t=i=r),t=t.next}while(t!==i);return Jn(t)}function Ch(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bh(a,o)){let c=tc(a,o);a=Jn(a,a.next),c=Jn(c,c.next),er(a,e,t,n,r,s,0),er(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Ph(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=jl(i,o,c,n,!1);l===l.next&&(l.steiner=!0),r.push(Oh(l))}r.sort(Lh);for(let s=0;s<r.length;s++)t=Uh(r[s],t);return t}function Lh(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Uh(i,e){const t=Dh(i,e);if(!t)return e;const n=tc(t,i);return Jn(n,n.next),Jn(t,t.next)}function Dh(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(Ei(i,t))return t;do{if(Ei(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Ql(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){const h=Math.abs(r-t.y)/(n-t.x);tr(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Ih(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Ih(i,e){return dt(i.prev,i,e.prev)<0&&dt(e.next,i,i.next)<0}function Fh(i,e,t,n){let r=i;do r.z===0&&(r.z=Aa(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Nh(r)}function Nh(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function Aa(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Oh(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ql(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Vi(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Ql(i,e,t,n,r,s,a,o)}function Bh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!zh(i,e)&&(tr(i,e)&&tr(e,i)&&kh(i,e)&&(dt(i.prev,i,e.prev)||dt(i,e.prev,e))||Ei(i,e)&&dt(i.prev,i,i.next)>0&&dt(e.prev,e,e.next)>0)}function dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ei(i,e){return i.x===e.x&&i.y===e.y}function ec(i,e,t,n){const r=Ir(dt(i,e,t)),s=Ir(dt(i,e,n)),a=Ir(dt(t,n,i)),o=Ir(dt(t,n,e));return!!(r!==s&&a!==o||r===0&&Dr(i,t,e)||s===0&&Dr(i,n,e)||a===0&&Dr(t,i,n)||o===0&&Dr(t,e,n))}function Dr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ir(i){return i>0?1:i<0?-1:0}function zh(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ec(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function tr(i,e){return dt(i.prev,i,i.next)<0?dt(i,e,i.next)>=0&&dt(i,i.prev,e)>=0:dt(i,e,i.prev)<0||dt(i,i.next,e)<0}function kh(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function tc(i,e){const t=wa(i.i,i.x,i.y),n=wa(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Vo(i,e,t,n){const r=wa(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wa(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vh(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Gh{static triangulate(e,t,n=2){return Th(e,t,n)}}class qi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return qi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Go(e),Ho(n,e);let a=e.length;t.forEach(Go);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Ho(n,t[c]);const o=Gh.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Go(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ho(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class or extends Mn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const T=d*f-a;for(let S=0;S<l;S++){const A=S*h-s;g.push(A,-T,0),v.push(0,0,1),m.push(S/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let T=0;T<o;T++){const S=T+l*d,A=T+l*(d+1),I=T+1+l*(d+1),w=T+1+l*d;p.push(S,A,w),p.push(A,I,w)}this.setIndex(p),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ya extends Mn{constructor(e=new Kl([new Oe(0,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new nn(r,3)),this.setAttribute("normal",new nn(s,3)),this.setAttribute("uv",new nn(a,2));function l(u){const h=r.length/3,f=u.extractPoints(t);let p=f.shape;const g=f.holes;qi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const T=g[m];qi.isClockWise(T)===!0&&(g[m]=T.reverse())}const v=qi.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const T=g[m];p=p.concat(T)}for(let m=0,d=p.length;m<d;m++){const T=p[m];r.push(T.x,T.y,0),s.push(0,0,1),a.push(T.x,T.y)}for(let m=0,d=v.length;m<d;m++){const T=v[m],S=T[0]+h,A=T[1]+h,I=T[2]+h;n.push(S,A,I),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Hh(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new Ya(n,e.curveSegments)}}function Hh(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class nc extends ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wh extends ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xh extends ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jr extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $h extends Jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Us=new ft,Wo=new O,Xo=new O;class ic{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wo),Xo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xo),t.updateMatrixWorld(),Us.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Us,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Us)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $o=new ft,Bi=new O,Ds=new O;class qh extends ic{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Bi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bi),Ds.copy(n.position),Ds.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ds),n.updateMatrixWorld(),r.makeTranslation(-Bi.x,-Bi.y,-Bi.z),$o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o,n.coordinateSystem,n.reversedDepth)}}class qo extends Jr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rc extends Hl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yh extends ic{constructor(){super(new rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yo extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zh extends Jr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jh extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Kh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zo(i,e,t,n){const r=jh(n);switch(t){case Ll:return i*e;case Dl:return i*e/r.components*r.byteLength;case Oa:return i*e/r.components*r.byteLength;case Ba:return i*e*2/r.components*r.byteLength;case za:return i*e*2/r.components*r.byteLength;case Ul:return i*e*3/r.components*r.byteLength;case Kt:return i*e*4/r.components*r.byteLength;case ka:return i*e*4/r.components*r.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qs:case ta:return Math.max(i,16)*Math.max(e,8)/4;case js:case ea:return Math.max(i,8)*Math.max(e,8)/2;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _a:case ba:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sa:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ea:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jh(i){switch(i){case rn:case wl:return{byteLength:1,components:1};case Yi:case Rl:case wi:return{byteLength:2,components:1};case Fa:case Na:return{byteLength:2,components:4};case Yn:case Ia:case gn:return{byteLength:4,components:1};case Cl:case Pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);function sc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Qh(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Td=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$d=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_f=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:ed,alphahash_pars_fragment:td,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:rd,alphatest_pars_fragment:sd,aomap_fragment:ad,aomap_pars_fragment:od,batching_pars_vertex:ld,batching_vertex:cd,begin_vertex:ud,beginnormal_vertex:hd,bsdfs:dd,iridescence_fragment:fd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:gd,clipping_planes_vertex:vd,color_fragment:_d,color_pars_fragment:bd,color_pars_vertex:Md,color_vertex:Sd,common:yd,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:Td,displacementmap_pars_vertex:Ad,displacementmap_vertex:wd,emissivemap_fragment:Rd,emissivemap_pars_fragment:Cd,colorspace_fragment:Pd,colorspace_pars_fragment:Ld,envmap_fragment:Ud,envmap_common_pars_fragment:Dd,envmap_pars_fragment:Id,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:$d,envmap_vertex:Nd,fog_vertex:Od,fog_pars_vertex:Bd,fog_fragment:zd,fog_pars_fragment:kd,gradientmap_pars_fragment:Vd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:Zd,lights_phong_pars_fragment:Jd,lights_physical_fragment:Kd,lights_physical_pars_fragment:jd,lights_fragment_begin:Qd,lights_fragment_maps:ef,lights_fragment_end:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:uf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:df,morphinstance_vertex:ff,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:xf,morphtarget_vertex:gf,normal_fragment_begin:vf,normal_fragment_maps:_f,normal_pars_fragment:bf,normal_pars_vertex:Mf,normal_vertex:Sf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:Af,iridescence_pars_fragment:wf,opaque_fragment:Rf,packing:Cf,premultiplied_alpha_fragment:Pf,project_vertex:Lf,dithering_fragment:Uf,dithering_pars_fragment:Df,roughnessmap_fragment:If,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Of,shadowmap_vertex:Bf,shadowmask_pars_fragment:zf,skinbase_vertex:kf,skinning_pars_vertex:Vf,skinning_vertex:Gf,skinnormal_vertex:Hf,specularmap_fragment:Wf,specularmap_pars_fragment:Xf,tonemapping_fragment:$f,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:Zf,uv_pars_fragment:Jf,uv_pars_vertex:Kf,uv_vertex:jf,worldpos_vertex:Qf,background_vert:ep,background_frag:tp,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:rp,cube_frag:sp,depth_vert:ap,depth_frag:op,distanceRGBA_vert:lp,distanceRGBA_frag:cp,equirect_vert:up,equirect_frag:hp,linedashed_vert:dp,linedashed_frag:fp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:xp,meshlambert_frag:gp,meshmatcap_vert:vp,meshmatcap_frag:_p,meshnormal_vert:bp,meshnormal_frag:Mp,meshphong_vert:Sp,meshphong_frag:yp,meshphysical_vert:Ep,meshphysical_frag:Tp,meshtoon_vert:Ap,meshtoon_frag:wp,points_vert:Rp,points_frag:Cp,shadow_vert:Pp,shadow_frag:Lp,sprite_vert:Up,sprite_frag:Dp},Ae={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Qt={basic:{uniforms:Pt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Pt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Pt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Pt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Pt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new et(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Pt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Pt([Ae.points,Ae.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Pt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Pt([Ae.common,Ae.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Pt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Pt([Ae.sprite,Ae.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Pt([Ae.common,Ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Pt([Ae.lights,Ae.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Qt.physical={uniforms:Pt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Fr={r:0,b:0,g:0},Gn=new sn,Ip=new ft;function Fp(i,e,t,n,r,s,a){const o=new et(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function g(S){let A=S.isScene===!0?S.background:null;return A&&A.isTexture&&(A=(S.backgroundBlurriness>0?t:e).get(A)),A}function v(S){let A=!1;const I=g(S);I===null?d(o,c):I&&I.isColor&&(d(I,1),A=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,A){const I=g(A);I&&(I.isCubeTexture||I.mapping===Zr)?(u===void 0&&(u=new jt(new Ci(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:yi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,U,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Gn.copy(A.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(Gn)),u.material.toneMapped=it.getTransfer(I.colorSpace)!==ot,(h!==I||f!==I.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,f=I.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new jt(new or(2,2),new bn({name:"BackgroundMaterial",uniforms:yi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=it.getTransfer(I.colorSpace)!==ot,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||f!==I.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=I,f=I.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function d(S,A){S.getRGB(Fr,Gl(i)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,A,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),c=A,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,d(o,c)},render:v,addToRenderList:m,dispose:T}}function Np(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,D,$,Q,ie){let se=!1;const te=h(Q,$,D);s!==te&&(s=te,l(s.object)),se=p(M,Q,$,ie),se&&g(M,Q,$,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,A(M,D,$,Q),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,D,$){const Q=$.wireframe===!0;let ie=n[M.id];ie===void 0&&(ie={},n[M.id]=ie);let se=ie[D.id];se===void 0&&(se={},ie[D.id]=se);let te=se[Q];return te===void 0&&(te=f(c()),se[Q]=te),te}function f(M){const D=[],$=[],Q=[];for(let ie=0;ie<t;ie++)D[ie]=0,$[ie]=0,Q[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:$,attributeDivisors:Q,object:M,attributes:{},index:null}}function p(M,D,$,Q){const ie=s.attributes,se=D.attributes;let te=0;const ve=$.getAttributes();for(const Y in ve)if(ve[Y].location>=0){const pe=ie[Y];let xe=se[Y];if(xe===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),pe===void 0||pe.attribute!==xe||xe&&pe.data!==xe.data)return!0;te++}return s.attributesNum!==te||s.index!==Q}function g(M,D,$,Q){const ie={},se=D.attributes;let te=0;const ve=$.getAttributes();for(const Y in ve)if(ve[Y].location>=0){let pe=se[Y];pe===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const xe={};xe.attribute=pe,pe&&pe.data&&(xe.data=pe.data),ie[Y]=xe,te++}s.attributes=ie,s.attributesNum=te,s.index=Q}function v(){const M=s.newAttributes;for(let D=0,$=M.length;D<$;D++)M[D]=0}function m(M){d(M,0)}function d(M,D){const $=s.newAttributes,Q=s.enabledAttributes,ie=s.attributeDivisors;$[M]=1,Q[M]===0&&(i.enableVertexAttribArray(M),Q[M]=1),ie[M]!==D&&(i.vertexAttribDivisor(M,D),ie[M]=D)}function T(){const M=s.newAttributes,D=s.enabledAttributes;for(let $=0,Q=D.length;$<Q;$++)D[$]!==M[$]&&(i.disableVertexAttribArray($),D[$]=0)}function S(M,D,$,Q,ie,se,te){te===!0?i.vertexAttribIPointer(M,D,$,ie,se):i.vertexAttribPointer(M,D,$,Q,ie,se)}function A(M,D,$,Q){v();const ie=Q.attributes,se=$.getAttributes(),te=D.defaultAttributeValues;for(const ve in se){const Y=se[ve];if(Y.location>=0){let fe=ie[ve];if(fe===void 0&&(ve==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),ve==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){const pe=fe.normalized,xe=fe.itemSize,Be=e.get(fe);if(Be===void 0)continue;const ue=Be.buffer,ce=Be.type,le=Be.bytesPerElement,F=ce===i.INT||ce===i.UNSIGNED_INT||fe.gpuType===Ia;if(fe.isInterleavedBufferAttribute){const k=fe.data,ee=k.stride,Ee=fe.offset;if(k.isInstancedInterleavedBuffer){for(let _e=0;_e<Y.locationSize;_e++)d(Y.location+_e,k.meshPerAttribute);M.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let _e=0;_e<Y.locationSize;_e++)m(Y.location+_e);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let _e=0;_e<Y.locationSize;_e++)S(Y.location+_e,xe/Y.locationSize,ce,pe,ee*le,(Ee+xe/Y.locationSize*_e)*le,F)}else{if(fe.isInstancedBufferAttribute){for(let k=0;k<Y.locationSize;k++)d(Y.location+k,fe.meshPerAttribute);M.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let k=0;k<Y.locationSize;k++)m(Y.location+k);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let k=0;k<Y.locationSize;k++)S(Y.location+k,xe/Y.locationSize,ce,pe,xe*le,xe/Y.locationSize*k*le,F)}}else if(te!==void 0){const pe=te[ve];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(Y.location,pe);break;case 3:i.vertexAttrib3fv(Y.location,pe);break;case 4:i.vertexAttrib4fv(Y.location,pe);break;default:i.vertexAttrib1fv(Y.location,pe)}}}}T()}function I(){W();for(const M in n){const D=n[M];for(const $ in D){const Q=D[$];for(const ie in Q)u(Q[ie].object),delete Q[ie];delete D[$]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const $ in D){const Q=D[$];for(const ie in Q)u(Q[ie].object),delete Q[ie];delete D[$]}delete n[M.id]}function U(M){for(const D in n){const $=n[D];if($[M.id]===void 0)continue;const Q=$[M.id];for(const ie in Q)u(Q[ie].object),delete Q[ie];delete $[M.id]}}function W(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:W,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Op(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function c(l,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Bp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==Kt&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const W=U===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==rn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==gn&&!W)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(qe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:I,maxSamples:w}}function zp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Wn,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:n,S=T*4;let A=d.clippingState||null;c.value=A,A=u(g,f,S,p);for(let I=0;I!==S;++I)A[I]=t[I];d.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const d=p+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,A=p;S!==v;++S,A+=4)a.copy(h[S]).applyMatrix4(T,o),a.normal.toArray(m,A),m[A+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function kp(i){let e=new WeakMap;function t(a,o){return o===Ys?a.mapping=bi:o===Zs&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ys||o===Zs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new rh(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ln=4,Jo=[.125,.215,.35,.446,.526,.582],$n=20,Vp=256,zi=new rc,Ko=new et;let Is=null,Fs=0,Ns=0,Os=!1;const Gp=new O;class jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Gp}=s;Is=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Ns=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Is,Fs,Ns),this._renderer.xr.enabled=Os,e.scissorTest=!1,pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Is=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Ns=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:wi,format:Kt,colorSpace:Si,depthBuffer:!1},r=Qo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hp(s)),this._blurMaterial=Xp(s,e,t),this._ggxMaterial=Wp(s,e,t)}return r}_compileMaterial(e){const t=new jt(new Mn,e);this._renderer.compile(t,zi)}_sceneToCubeUV(e,t,n,r,s){const c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ko),h.toneMapping=Un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new Ci,new Wa({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,d=!0):(m.color.copy(Ko),d=!0);for(let S=0;S<6;S++){const A=S%3;A===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[S],s.y,s.z)):A===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[S]));const I=this._cubeSize;pi(r,A*I,S>2?I:0,I,I),h.setRenderTarget(r),d&&h.render(v,c),h.render(e,c)}h.toneMapping=p,h.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===bi||e.mapping===Mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;pi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=.05+l*.95,p=h*f,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Ln?n-g+Ln:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,pi(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(o,zi),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,pi(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(o,zi)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&xt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$n-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):$n;m>$n&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const d=[];let T=0;for(let U=0;U<$n;++U){const W=U/v,E=Math.exp(-W*W/2);d.push(E),U===0?T+=E:U<m&&(T+=2*E)}for(let U=0;U<d.length;U++)d[U]=d[U]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const A=this._sizeLods[r],I=3*A*(r>S-Ln?r-S+Ln:0),w=4*(this._cubeSize-A);pi(t,I,w,3*A,2*A),c.setRenderTarget(t),c.render(h,zi)}}function Hp(i){const e=[],t=[],n=[];let r=i;const s=i-Ln+1+Jo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Ln?c=Jo[a-i+Ln-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,T=new Float32Array(v*g*p),S=new Float32Array(m*g*p),A=new Float32Array(d*g*p);for(let w=0;w<p;w++){const U=w%3*2/3-1,W=w>2?0:-1,E=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];T.set(E,v*g*w),S.set(f,m*g*w);const M=[w,w,w,w,w,w];A.set(M,d*g*w)}const I=new Mn;I.setAttribute("position",new tn(T,v)),I.setAttribute("uv",new tn(S,m)),I.setAttribute("faceIndex",new tn(A,d)),n.push(new jt(I,null)),r>Ln&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Qo(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Wp(i,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Xp(i,e,t){const n=new Float32Array($n),r=new O(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function el(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function tl(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Kr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $p(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ys||c===Zs,u=c===bi||c===Mi;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new jo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new jo(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function qp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ji("WebGLRenderer: "+n+" extension not supported."),r}}}function Yp(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let S=0,A=T.length;S<A;S+=3){const I=T[S+0],w=T[S+1],U=T[S+2];f.push(I,w,w,U,U,I)}}else if(g!==void 0){const T=g.array;v=g.version;for(let S=0,A=T.length/3-1;S<A;S+=3){const I=S+0,w=S+1,U=S+2;f.push(I,w,w,U,U,I)}}else return;const m=new(Nl(f)?Vl:kl)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Zp(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,s,f*a),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*v[T];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Jp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:xt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Kp(i,e,t){const n=new WeakMap,r=new lt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let E=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let A=o.attributes.position.count*S,I=1;A>e.maxTextureSize&&(I=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*I*4*h),U=new Ol(w,A,I,h);U.type=gn,U.needsUpdate=!0;const W=S*4;for(let M=0;M<h;M++){const D=m[M],$=d[M],Q=T[M],ie=A*I*4*M;for(let se=0;se<D.count;se++){const te=se*W;p===!0&&(r.fromBufferAttribute(D,se),w[ie+te+0]=r.x,w[ie+te+1]=r.y,w[ie+te+2]=r.z,w[ie+te+3]=0),g===!0&&(r.fromBufferAttribute($,se),w[ie+te+4]=r.x,w[ie+te+5]=r.y,w[ie+te+6]=r.z,w[ie+te+7]=0),v===!0&&(r.fromBufferAttribute(Q,se),w[ie+te+8]=r.x,w[ie+te+9]=r.y,w[ie+te+10]=r.z,w[ie+te+11]=Q.itemSize===4?r.w:1)}}f={count:h,texture:U,size:new Oe(A,I)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function jp(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const ac=new wt,nl=new Xl(1,1),oc=new Ol,lc=new ku,cc=new Wl,il=[],rl=[],sl=new Float32Array(16),al=new Float32Array(9),ol=new Float32Array(4);function Pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=il[r];if(s===void 0&&(s=new Float32Array(r),il[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jr(i,e){let t=rl[e];t===void 0&&(t=new Int32Array(e),rl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function i0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;ol.set(n),i.uniformMatrix2fv(this.addr,!1,ol),_t(t,n)}}function r0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;al.set(n),i.uniformMatrix3fv(this.addr,!1,al),_t(t,n)}}function s0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;sl.set(n),i.uniformMatrix4fv(this.addr,!1,sl),_t(t,n)}}function a0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function u0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function p0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(nl.compareFunction=Fl,s=nl):s=ac,t.setTexture2D(e||s,r)}function m0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lc,r)}function x0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cc,r)}function g0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||oc,r)}function v0(i){switch(i){case 5126:return Qp;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return r0;case 35676:return s0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return u0;case 36294:return h0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return g0}}function _0(i,e){i.uniform1fv(this.addr,e)}function b0(i,e){const t=Pi(e,this.size,2);i.uniform2fv(this.addr,t)}function M0(i,e){const t=Pi(e,this.size,3);i.uniform3fv(this.addr,t)}function S0(i,e){const t=Pi(e,this.size,4);i.uniform4fv(this.addr,t)}function y0(i,e){const t=Pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function E0(i,e){const t=Pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function T0(i,e){const t=Pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function A0(i,e){i.uniform1iv(this.addr,e)}function w0(i,e){i.uniform2iv(this.addr,e)}function R0(i,e){i.uniform3iv(this.addr,e)}function C0(i,e){i.uniform4iv(this.addr,e)}function P0(i,e){i.uniform1uiv(this.addr,e)}function L0(i,e){i.uniform2uiv(this.addr,e)}function U0(i,e){i.uniform3uiv(this.addr,e)}function D0(i,e){i.uniform4uiv(this.addr,e)}function I0(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ac,s[a])}function F0(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||lc,s[a])}function N0(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||cc,s[a])}function O0(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||oc,s[a])}function B0(i){switch(i){case 5126:return _0;case 35664:return b0;case 35665:return M0;case 35666:return S0;case 35674:return y0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return A0;case 35667:case 35671:return w0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return L0;case 36295:return U0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return O0}}class z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=v0(t.type)}}class k0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B0(t.type)}}class V0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function ll(i,e){i.seq.push(e),i.map[e.id]=e}function G0(i,e,t){const n=i.name,r=n.length;for(Bs.lastIndex=0;;){const s=Bs.exec(n),a=Bs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ll(t,l===void 0?new z0(o,i,e):new k0(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new V0(o),ll(t,h)),t=h}}}class Gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);G0(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function cl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const H0=37297;let W0=0;function X0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ul=new Ye;function $0(i){it._getMatrix(ul,it.workingColorSpace,i);const e=`mat3( ${ul.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Wr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+X0(i.getShaderSource(e),o)}else return s}function q0(i,e){const t=$0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Y0(i,e){let t;switch(e){case eu:t="Linear";break;case tu:t="Reinhard";break;case nu:t="Cineon";break;case Tl:t="ACESFilmic";break;case ru:t="AgX";break;case su:t="Neutral";break;case iu:t="Custom";break;default:qe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nr=new O;function Z0(){it.getLuminanceCoefficients(Nr);const i=Nr.x.toFixed(4),e=Nr.y.toFixed(4),t=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function K0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gi(i){return i!==""}function dl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(Q0,tm)}const em=new Map;function tm(i,e){let t=Ze[e];if(t===void 0){const n=em.get(e);if(n!==void 0)t=Ze[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ra(t)}const nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(i){return i.replace(nm,im)}function im(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ml(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function sm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case Mi:e="ENVMAP_TYPE_CUBE";break;case Zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function am(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Mi&&(e="ENVMAP_MODE_REFRACTION"),e}function om(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case El:e="ENVMAP_BLENDING_MULTIPLY";break;case jc:e="ENVMAP_BLENDING_MIX";break;case Qc:e="ENVMAP_BLENDING_ADD";break}return e}function lm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=rm(t),l=sm(t),u=am(t),h=om(t),f=lm(t),p=J0(t),g=K0(s),v=r.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gi).join(`
`),d.length>0&&(d+=`
`)):(m=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),d=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Un?Y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,q0("linearToOutputTexel",t.outputColorSpace),Z0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gi).join(`
`)),a=Ra(a),a=dl(a,t),a=fl(a,t),o=Ra(o),o=dl(o,t),o=fl(o,t),a=pl(a),o=pl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=T+m+a,A=T+d+o,I=cl(r,r.VERTEX_SHADER,S),w=cl(r,r.FRAGMENT_SHADER,A);r.attachShader(v,I),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function U(D){if(i.debug.checkShaderErrors){const $=r.getProgramInfoLog(v)||"",Q=r.getShaderInfoLog(I)||"",ie=r.getShaderInfoLog(w)||"",se=$.trim(),te=Q.trim(),ve=ie.trim();let Y=!0,fe=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,I,w);else{const pe=hl(r,I,"vertex"),xe=hl(r,w,"fragment");xt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+se+`
`+pe+`
`+xe)}else se!==""?qe("WebGLProgram: Program Info Log:",se):(te===""||ve==="")&&(fe=!1);fe&&(D.diagnostics={runnable:Y,programLog:se,vertexShader:{log:te,prefix:m},fragmentShader:{log:ve,prefix:d}})}r.deleteShader(I),r.deleteShader(w),W=new Gr(r,v),E=j0(r,v)}let W;this.getUniforms=function(){return W===void 0&&U(this),W};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,H0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=w,this}let um=0;class hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dm(e),t.set(e,n)),n}}class dm{constructor(e){this.id=um++,this.code=e,this.usedTimes=0}}function fm(i,e,t,n,r,s,a){const o=new Bl,c=new hm,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,D,$,Q){const ie=$.fog,se=Q.geometry,te=E.isMeshStandardMaterial?$.environment:null,ve=(E.isMeshStandardMaterial?t:e).get(E.envMap||te),Y=ve&&ve.mapping===Zr?ve.image.height:null,fe=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&qe("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const pe=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,xe=pe!==void 0?pe.length:0;let Be=0;se.morphAttributes.position!==void 0&&(Be=1),se.morphAttributes.normal!==void 0&&(Be=2),se.morphAttributes.color!==void 0&&(Be=3);let ue,ce,le,F;if(fe){const st=Qt[fe];ue=st.vertexShader,ce=st.fragmentShader}else ue=E.vertexShader,ce=E.fragmentShader,c.update(E),le=c.getVertexShaderID(E),F=c.getFragmentShaderID(E);const k=i.getRenderTarget(),ee=i.state.buffers.depth.getReversed(),Ee=Q.isInstancedMesh===!0,_e=Q.isBatchedMesh===!0,ge=!!E.map,Ue=!!E.matcap,we=!!ve,We=!!E.aoMap,R=!!E.lightMap,ke=!!E.bumpMap,G=!!E.normalMap,j=!!E.displacementMap,V=!!E.emissiveMap,ae=!!E.metalnessMap,z=!!E.roughnessMap,K=E.anisotropy>0,_=E.clearcoat>0,x=E.dispersion>0,L=E.iridescence>0,X=E.sheen>0,H=E.transmission>0,C=K&&!!E.anisotropyMap,J=_&&!!E.clearcoatMap,ne=_&&!!E.clearcoatNormalMap,he=_&&!!E.clearcoatRoughnessMap,ye=L&&!!E.iridescenceMap,re=L&&!!E.iridescenceThicknessMap,de=X&&!!E.sheenColorMap,Ie=X&&!!E.sheenRoughnessMap,Ne=!!E.specularMap,Re=!!E.specularColorMap,Ve=!!E.specularIntensityMap,P=H&&!!E.transmissionMap,Te=H&&!!E.thicknessMap,be=!!E.gradientMap,Me=!!E.alphaMap,me=E.alphaTest>0,oe=!!E.alphaHash,Pe=!!E.extensions;let Xe=Un;E.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Xe=i.toneMapping);const rt={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:ue,fragmentShader:ce,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:F,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:_e,batchingColor:_e&&Q._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Q.instanceColor!==null,instancingMorph:Ee&&Q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Si,alphaToCoverage:!!E.alphaToCoverage,map:ge,matcap:Ue,envMap:we,envMapMode:we&&ve.mapping,envMapCubeUVHeight:Y,aoMap:We,lightMap:R,bumpMap:ke,normalMap:G,displacementMap:f&&j,emissiveMap:V,normalMapObjectSpace:G&&E.normalMapType===cu,normalMapTangentSpace:G&&E.normalMapType===Il,metalnessMap:ae,roughnessMap:z,anisotropy:K,anisotropyMap:C,clearcoat:_,clearcoatMap:J,clearcoatNormalMap:ne,clearcoatRoughnessMap:he,dispersion:x,iridescence:L,iridescenceMap:ye,iridescenceThicknessMap:re,sheen:X,sheenColorMap:de,sheenRoughnessMap:Ie,specularMap:Ne,specularColorMap:Re,specularIntensityMap:Ve,transmission:H,transmissionMap:P,thicknessMap:Te,gradientMap:be,opaque:E.transparent===!1&&E.blending===gi&&E.alphaToCoverage===!1,alphaMap:Me,alphaTest:me,alphaHash:oe,combine:E.combine,mapUv:ge&&v(E.map.channel),aoMapUv:We&&v(E.aoMap.channel),lightMapUv:R&&v(E.lightMap.channel),bumpMapUv:ke&&v(E.bumpMap.channel),normalMapUv:G&&v(E.normalMap.channel),displacementMapUv:j&&v(E.displacementMap.channel),emissiveMapUv:V&&v(E.emissiveMap.channel),metalnessMapUv:ae&&v(E.metalnessMap.channel),roughnessMapUv:z&&v(E.roughnessMap.channel),anisotropyMapUv:C&&v(E.anisotropyMap.channel),clearcoatMapUv:J&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(E.sheenRoughnessMap.channel),specularMapUv:Ne&&v(E.specularMap.channel),specularColorMapUv:Re&&v(E.specularColorMap.channel),specularIntensityMapUv:Ve&&v(E.specularIntensityMap.channel),transmissionMapUv:P&&v(E.transmissionMap.channel),thicknessMapUv:Te&&v(E.thicknessMap.channel),alphaMapUv:Me&&v(E.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(G||K),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!se.attributes.uv&&(ge||Me),fog:!!ie,useFog:E.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ee,skinning:Q.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ge&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===ot,decodeVideoTextureEmissive:V&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mn,flipSided:E.side===Dt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&E.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(T(M,E),S(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function T(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function A(E){const M=g[E.type];let D;if(M){const $=Qt[M];D=eh.clone($.uniforms)}else D=E.uniforms;return D}function I(E,M){let D;for(let $=0,Q=u.length;$<Q;$++){const ie=u[$];if(ie.cacheKey===M){D=ie,++D.usedTimes;break}}return D===void 0&&(D=new cm(i,M,E,s),u.push(D)),D}function w(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function U(E){c.remove(E)}function W(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:A,acquireProgram:I,releaseProgram:w,releaseShaderCache:U,programs:u,dispose:W}}function pm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function mm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function o(h,f,p,g,v,m){const d=a(h,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(h,f,p,g,v,m){const d=a(h,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||mm),n.length>1&&n.sort(f||xl),r.length>1&&r.sort(f||xl)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function xm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new gl,i.set(n,[a])):r>=s.length?(a=new gl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function gm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new et};break;case"SpotLight":t={position:new O,direction:new O,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function vm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _m=0;function bm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mm(i){const e=new gm,t=vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const r=new O,s=new ft,a=new ft;function o(l){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,T=0,S=0,A=0,I=0,w=0,U=0;l.sort(bm);for(let E=0,M=l.length;E<M;E++){const D=l[E],$=D.color,Q=D.intensity,ie=D.distance,se=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=$.r*Q,h+=$.g*Q,f+=$.b*Q;else if(D.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(D.sh.coefficients[te],Q);U++}else if(D.isDirectionalLight){const te=e.get(D);if(te.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ve=D.shadow,Y=t.get(D);Y.shadowIntensity=ve.intensity,Y.shadowBias=ve.bias,Y.shadowNormalBias=ve.normalBias,Y.shadowRadius=ve.radius,Y.shadowMapSize=ve.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=se,n.directionalShadowMatrix[p]=D.shadow.matrix,T++}n.directional[p]=te,p++}else if(D.isSpotLight){const te=e.get(D);te.position.setFromMatrixPosition(D.matrixWorld),te.color.copy($).multiplyScalar(Q),te.distance=ie,te.coneCos=Math.cos(D.angle),te.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),te.decay=D.decay,n.spot[v]=te;const ve=D.shadow;if(D.map&&(n.spotLightMap[I]=D.map,I++,ve.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[v]=ve.matrix,D.castShadow){const Y=t.get(D);Y.shadowIntensity=ve.intensity,Y.shadowBias=ve.bias,Y.shadowNormalBias=ve.normalBias,Y.shadowRadius=ve.radius,Y.shadowMapSize=ve.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=se,A++}v++}else if(D.isRectAreaLight){const te=e.get(D);te.color.copy($).multiplyScalar(Q),te.halfWidth.set(D.width*.5,0,0),te.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=te,m++}else if(D.isPointLight){const te=e.get(D);if(te.color.copy(D.color).multiplyScalar(D.intensity),te.distance=D.distance,te.decay=D.decay,D.castShadow){const ve=D.shadow,Y=t.get(D);Y.shadowIntensity=ve.intensity,Y.shadowBias=ve.bias,Y.shadowNormalBias=ve.normalBias,Y.shadowRadius=ve.radius,Y.shadowMapSize=ve.mapSize,Y.shadowCameraNear=ve.camera.near,Y.shadowCameraFar=ve.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=te,g++}else if(D.isHemisphereLight){const te=e.get(D);te.skyColor.copy(D.color).multiplyScalar(Q),te.groundColor.copy(D.groundColor).multiplyScalar(Q),n.hemi[d]=te,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const W=n.hash;(W.directionalLength!==p||W.pointLength!==g||W.spotLength!==v||W.rectAreaLength!==m||W.hemiLength!==d||W.numDirectionalShadows!==T||W.numPointShadows!==S||W.numSpotShadows!==A||W.numSpotMaps!==I||W.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=A+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=U,W.directionalLength=p,W.pointLength=g,W.spotLength=v,W.rectAreaLength=m,W.hemiLength=d,W.numDirectionalShadows=T,W.numPointShadows=S,W.numSpotShadows=A,W.numSpotMaps=I,W.numLightProbes=U,n.version=_m++)}function c(l,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,T=l.length;d<T;d++){const S=l[d];if(S.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),h++}else if(S.isSpotLight){const A=n.spot[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const A=n.rectArea[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const A=n.hemi[v];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function vl(i){const e=new Mm(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Sm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vl(i),e.set(r,[o])):s>=a.length?(o=new vl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tm(i,e,t){let n=new Xa;const r=new Oe,s=new Oe,a=new lt,o=new Wh({depthPacking:lu}),c=new Xh,l={},u=t.maxTextureSize,h={[Fn]:Dt,[Dt]:Fn,[mn]:mn},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:ym,fragmentShader:Em}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let d=this.type;this.render=function(w,U,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),$=i.state;$.setBlending(vn),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Q=d!==pn&&this.type===pn,ie=d===pn&&this.type!==pn;for(let se=0,te=w.length;se<te;se++){const ve=w[se],Y=ve.shadow;if(Y===void 0){qe("WebGLShadowMap:",ve,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const fe=Y.getFrameExtents();if(r.multiply(fe),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,Y.mapSize.y=s.y)),Y.map===null||Q===!0||ie===!0){const xe=this.type!==pn?{minFilter:Vt,magFilter:Vt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Zn(r.x,r.y,xe),Y.map.texture.name=ve.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const pe=Y.getViewportCount();for(let xe=0;xe<pe;xe++){const Be=Y.getViewport(xe);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),$.viewport(a),Y.updateMatrices(ve,xe),n=Y.getFrustum(),A(U,W,Y.camera,ve,this.type)}Y.isPointLightShadow!==!0&&this.type===pn&&T(Y,W),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,D)};function T(w,U){const W=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(U,null,W,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(U,null,W,p,v,null)}function S(w,U,W,E){let M=null;const D=W.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=W.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const $=M.uuid,Q=U.uuid;let ie=l[$];ie===void 0&&(ie={},l[$]=ie);let se=ie[Q];se===void 0&&(se=M.clone(),ie[Q]=se,U.addEventListener("dispose",I)),M=se}if(M.visible=U.visible,M.wireframe=U.wireframe,E===pn?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:h[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,W.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=i.properties.get(M);$.light=W}return M}function A(w,U,W,E,M){if(w.visible===!1)return;if(w.layers.test(U.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===pn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld);const Q=e.update(w),ie=w.material;if(Array.isArray(ie)){const se=Q.groups;for(let te=0,ve=se.length;te<ve;te++){const Y=se[te],fe=ie[Y.materialIndex];if(fe&&fe.visible){const pe=S(w,fe,E,M);w.onBeforeShadow(i,w,U,W,Q,pe,Y),i.renderBufferDirect(W,null,Q,pe,w,Y),w.onAfterShadow(i,w,U,W,Q,pe,Y)}}}else if(ie.visible){const se=S(w,ie,E,M);w.onBeforeShadow(i,w,U,W,Q,se,null),i.renderBufferDirect(W,null,Q,se,w,null),w.onAfterShadow(i,w,U,W,Q,se,null)}}const $=w.children;for(let Q=0,ie=$.length;Q<ie;Q++)A($[Q],U,W,E,M)}function I(w){w.target.removeEventListener("dispose",I);for(const W in l){const E=l[W],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Am={[Vs]:Gs,[Hs]:$s,[Ws]:qs,[_i]:Xs,[Gs]:Vs,[$s]:Hs,[qs]:Ws,[Xs]:_i};function wm(i,e){function t(){let P=!1;const Te=new lt;let be=null;const Me=new lt(0,0,0,0);return{setMask:function(me){be!==me&&!P&&(i.colorMask(me,me,me,me),be=me)},setLocked:function(me){P=me},setClear:function(me,oe,Pe,Xe,rt){rt===!0&&(me*=Xe,oe*=Xe,Pe*=Xe),Te.set(me,oe,Pe,Xe),Me.equals(Te)===!1&&(i.clearColor(me,oe,Pe,Xe),Me.copy(Te))},reset:function(){P=!1,be=null,Me.set(-1,0,0,0)}}}function n(){let P=!1,Te=!1,be=null,Me=null,me=null;return{setReversed:function(oe){if(Te!==oe){const Pe=e.get("EXT_clip_control");oe?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Te=oe;const Xe=me;me=null,this.setClear(Xe)}},getReversed:function(){return Te},setTest:function(oe){oe?k(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(oe){be!==oe&&!P&&(i.depthMask(oe),be=oe)},setFunc:function(oe){if(Te&&(oe=Am[oe]),Me!==oe){switch(oe){case Vs:i.depthFunc(i.NEVER);break;case Gs:i.depthFunc(i.ALWAYS);break;case Hs:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case Ws:i.depthFunc(i.EQUAL);break;case Xs:i.depthFunc(i.GEQUAL);break;case $s:i.depthFunc(i.GREATER);break;case qs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=oe}},setLocked:function(oe){P=oe},setClear:function(oe){me!==oe&&(Te&&(oe=1-oe),i.clearDepth(oe),me=oe)},reset:function(){P=!1,be=null,Me=null,me=null,Te=!1}}}function r(){let P=!1,Te=null,be=null,Me=null,me=null,oe=null,Pe=null,Xe=null,rt=null;return{setTest:function(st){P||(st?k(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(st){Te!==st&&!P&&(i.stencilMask(st),Te=st)},setFunc:function(st,Et,Mt){(be!==st||Me!==Et||me!==Mt)&&(i.stencilFunc(st,Et,Mt),be=st,Me=Et,me=Mt)},setOp:function(st,Et,Mt){(oe!==st||Pe!==Et||Xe!==Mt)&&(i.stencilOp(st,Et,Mt),oe=st,Pe=Et,Xe=Mt)},setLocked:function(st){P=st},setClear:function(st){rt!==st&&(i.clearStencil(st),rt=st)},reset:function(){P=!1,Te=null,be=null,Me=null,me=null,oe=null,Pe=null,Xe=null,rt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,T=null,S=null,A=null,I=null,w=null,U=new et(0,0,0),W=0,E=!1,M=null,D=null,$=null,Q=null,ie=null;const se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ve=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ve=parseFloat(/^WebGL (\d)/.exec(Y)[1]),te=ve>=1):Y.indexOf("OpenGL ES")!==-1&&(ve=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),te=ve>=2);let fe=null,pe={};const xe=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),ue=new lt().fromArray(xe),ce=new lt().fromArray(Be);function le(P,Te,be,Me){const me=new Uint8Array(4),oe=i.createTexture();i.bindTexture(P,oe),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<be;Pe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(Te+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return oe}const F={};F[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),k(i.DEPTH_TEST),a.setFunc(_i),ke(!1),G(ho),k(i.CULL_FACE),We(vn);function k(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function ee(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Ee(P,Te){return h[P]!==Te?(i.bindFramebuffer(P,Te),h[P]=Te,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Te),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function _e(P,Te){let be=p,Me=!1;if(P){be=f.get(Te),be===void 0&&(be=[],f.set(Te,be));const me=P.textures;if(be.length!==me.length||be[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Pe=me.length;oe<Pe;oe++)be[oe]=i.COLOR_ATTACHMENT0+oe;be.length=me.length,Me=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,Me=!0);Me&&i.drawBuffers(be)}function ge(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const Ue={[Xn]:i.FUNC_ADD,[Fc]:i.FUNC_SUBTRACT,[Nc]:i.FUNC_REVERSE_SUBTRACT};Ue[Oc]=i.MIN,Ue[Bc]=i.MAX;const we={[zc]:i.ZERO,[kc]:i.ONE,[Vc]:i.SRC_COLOR,[zs]:i.SRC_ALPHA,[qc]:i.SRC_ALPHA_SATURATE,[Xc]:i.DST_COLOR,[Hc]:i.DST_ALPHA,[Gc]:i.ONE_MINUS_SRC_COLOR,[ks]:i.ONE_MINUS_SRC_ALPHA,[$c]:i.ONE_MINUS_DST_COLOR,[Wc]:i.ONE_MINUS_DST_ALPHA,[Yc]:i.CONSTANT_COLOR,[Zc]:i.ONE_MINUS_CONSTANT_COLOR,[Jc]:i.CONSTANT_ALPHA,[Kc]:i.ONE_MINUS_CONSTANT_ALPHA};function We(P,Te,be,Me,me,oe,Pe,Xe,rt,st){if(P===vn){v===!0&&(ee(i.BLEND),v=!1);return}if(v===!1&&(k(i.BLEND),v=!0),P!==Ic){if(P!==m||st!==E){if((d!==Xn||A!==Xn)&&(i.blendEquation(i.FUNC_ADD),d=Xn,A=Xn),st)switch(P){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFunc(i.ONE,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:xt("WebGLState: Invalid blending: ",P);break}else switch(P){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case po:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mo:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",P);break}T=null,S=null,I=null,w=null,U.set(0,0,0),W=0,m=P,E=st}return}me=me||Te,oe=oe||be,Pe=Pe||Me,(Te!==d||me!==A)&&(i.blendEquationSeparate(Ue[Te],Ue[me]),d=Te,A=me),(be!==T||Me!==S||oe!==I||Pe!==w)&&(i.blendFuncSeparate(we[be],we[Me],we[oe],we[Pe]),T=be,S=Me,I=oe,w=Pe),(Xe.equals(U)===!1||rt!==W)&&(i.blendColor(Xe.r,Xe.g,Xe.b,rt),U.copy(Xe),W=rt),m=P,E=!1}function R(P,Te){P.side===mn?ee(i.CULL_FACE):k(i.CULL_FACE);let be=P.side===Dt;Te&&(be=!be),ke(be),P.blending===gi&&P.transparent===!1?We(vn):We(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const Me=P.stencilWrite;o.setTest(Me),Me&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),V(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function G(P){P!==Lc?(k(i.CULL_FACE),P!==D&&(P===ho?i.cullFace(i.BACK):P===Uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),D=P}function j(P){P!==$&&(te&&i.lineWidth(P),$=P)}function V(P,Te,be){P?(k(i.POLYGON_OFFSET_FILL),(Q!==Te||ie!==be)&&(i.polygonOffset(Te,be),Q=Te,ie=be)):ee(i.POLYGON_OFFSET_FILL)}function ae(P){P?k(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function z(P){P===void 0&&(P=i.TEXTURE0+se-1),fe!==P&&(i.activeTexture(P),fe=P)}function K(P,Te,be){be===void 0&&(fe===null?be=i.TEXTURE0+se-1:be=fe);let Me=pe[be];Me===void 0&&(Me={type:void 0,texture:void 0},pe[be]=Me),(Me.type!==P||Me.texture!==Te)&&(fe!==be&&(i.activeTexture(be),fe=be),i.bindTexture(P,Te||F[P]),Me.type=P,Me.texture=Te)}function _(){const P=pe[fe];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function X(){try{i.texSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function H(){try{i.texSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function C(){try{i.compressedTexSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ne(){try{i.texStorage2D(...arguments)}catch(P){P("WebGLState:",P)}}function he(){try{i.texStorage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ye(){try{i.texImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function re(){try{i.texImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function de(P){ue.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ue.copy(P))}function Ie(P){ce.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ce.copy(P))}function Ne(P,Te){let be=l.get(Te);be===void 0&&(be=new WeakMap,l.set(Te,be));let Me=be.get(P);Me===void 0&&(Me=i.getUniformBlockIndex(Te,P.name),be.set(P,Me))}function Re(P,Te){const Me=l.get(Te).get(P);c.get(Te)!==Me&&(i.uniformBlockBinding(Te,Me,P.__bindingPointIndex),c.set(Te,Me))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},fe=null,pe={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,T=null,S=null,A=null,I=null,w=null,U=new et(0,0,0),W=0,E=!1,M=null,D=null,$=null,Q=null,ie=null,ue.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:k,disable:ee,bindFramebuffer:Ee,drawBuffers:_e,useProgram:ge,setBlending:We,setMaterial:R,setFlipSided:ke,setCullFace:G,setLineWidth:j,setPolygonOffset:V,setScissorTest:ae,activeTexture:z,bindTexture:K,unbindTexture:_,compressedTexImage2D:x,compressedTexImage3D:L,texImage2D:ye,texImage3D:re,updateUBOMapping:Ne,uniformBlockBinding:Re,texStorage2D:ne,texStorage3D:he,texSubImage2D:X,texSubImage3D:H,compressedTexSubImage2D:C,compressedTexSubImage3D:J,scissor:de,viewport:Ie,reset:Ve}}function Rm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(_,x){return p?new OffscreenCanvas(_,x):$r("canvas")}function v(_,x,L){let X=1;const H=K(_);if((H.width>L||H.height>L)&&(X=L/Math.max(H.width,H.height)),X<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const C=Math.floor(X*H.width),J=Math.floor(X*H.height);h===void 0&&(h=g(C,J));const ne=x?g(C,J):h;return ne.width=C,ne.height=J,ne.getContext("2d").drawImage(_,0,0,C,J),qe("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+C+"x"+J+")."),ne}else return"data"in _&&qe("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),_;return _}function m(_){return _.generateMipmaps}function d(_){i.generateMipmap(_)}function T(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(_,x,L,X,H=!1){if(_!==null){if(i[_]!==void 0)return i[_];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let C=x;if(x===i.RED&&(L===i.FLOAT&&(C=i.R32F),L===i.HALF_FLOAT&&(C=i.R16F),L===i.UNSIGNED_BYTE&&(C=i.R8)),x===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(C=i.R8UI),L===i.UNSIGNED_SHORT&&(C=i.R16UI),L===i.UNSIGNED_INT&&(C=i.R32UI),L===i.BYTE&&(C=i.R8I),L===i.SHORT&&(C=i.R16I),L===i.INT&&(C=i.R32I)),x===i.RG&&(L===i.FLOAT&&(C=i.RG32F),L===i.HALF_FLOAT&&(C=i.RG16F),L===i.UNSIGNED_BYTE&&(C=i.RG8)),x===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(C=i.RG8UI),L===i.UNSIGNED_SHORT&&(C=i.RG16UI),L===i.UNSIGNED_INT&&(C=i.RG32UI),L===i.BYTE&&(C=i.RG8I),L===i.SHORT&&(C=i.RG16I),L===i.INT&&(C=i.RG32I)),x===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(C=i.RGB8UI),L===i.UNSIGNED_SHORT&&(C=i.RGB16UI),L===i.UNSIGNED_INT&&(C=i.RGB32UI),L===i.BYTE&&(C=i.RGB8I),L===i.SHORT&&(C=i.RGB16I),L===i.INT&&(C=i.RGB32I)),x===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(C=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(C=i.RGBA16UI),L===i.UNSIGNED_INT&&(C=i.RGBA32UI),L===i.BYTE&&(C=i.RGBA8I),L===i.SHORT&&(C=i.RGBA16I),L===i.INT&&(C=i.RGBA32I)),x===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(C=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(C=i.R11F_G11F_B10F)),x===i.RGBA){const J=H?Wr:it.getTransfer(X);L===i.FLOAT&&(C=i.RGBA32F),L===i.HALF_FLOAT&&(C=i.RGBA16F),L===i.UNSIGNED_BYTE&&(C=J===ot?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(C=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(C=i.RGB5_A1)}return(C===i.R16F||C===i.R32F||C===i.RG16F||C===i.RG32F||C===i.RGBA16F||C===i.RGBA32F)&&e.get("EXT_color_buffer_float"),C}function A(_,x){let L;return _?x===null||x===Yn||x===Zi?L=i.DEPTH24_STENCIL8:x===gn?L=i.DEPTH32F_STENCIL8:x===Yi&&(L=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yn||x===Zi?L=i.DEPTH_COMPONENT24:x===gn?L=i.DEPTH_COMPONENT32F:x===Yi&&(L=i.DEPTH_COMPONENT16),L}function I(_,x){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==Vt&&_.minFilter!==Xt?Math.log2(Math.max(x.width,x.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?x.mipmaps.length:1}function w(_){const x=_.target;x.removeEventListener("dispose",w),W(x),x.isVideoTexture&&u.delete(x)}function U(_){const x=_.target;x.removeEventListener("dispose",U),M(x)}function W(_){const x=n.get(_);if(x.__webglInit===void 0)return;const L=_.source,X=f.get(L);if(X){const H=X[x.__cacheKey];H.usedTimes--,H.usedTimes===0&&E(_),Object.keys(X).length===0&&f.delete(L)}n.remove(_)}function E(_){const x=n.get(_);i.deleteTexture(x.__webglTexture);const L=_.source,X=f.get(L);delete X[x.__cacheKey],a.memory.textures--}function M(_){const x=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let H=0;H<x.__webglFramebuffer[X].length;H++)i.deleteFramebuffer(x.__webglFramebuffer[X][H]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const L=_.textures;for(let X=0,H=L.length;X<H;X++){const C=n.get(L[X]);C.__webglTexture&&(i.deleteTexture(C.__webglTexture),a.memory.textures--),n.remove(L[X])}n.remove(_)}let D=0;function $(){D=0}function Q(){const _=D;return _>=r.maxTextures&&qe("WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+r.maxTextures),D+=1,_}function ie(_){const x=[];return x.push(_.wrapS),x.push(_.wrapT),x.push(_.wrapR||0),x.push(_.magFilter),x.push(_.minFilter),x.push(_.anisotropy),x.push(_.internalFormat),x.push(_.format),x.push(_.type),x.push(_.generateMipmaps),x.push(_.premultiplyAlpha),x.push(_.flipY),x.push(_.unpackAlignment),x.push(_.colorSpace),x.join()}function se(_,x){const L=n.get(_);if(_.isVideoTexture&&ae(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&L.__version!==_.version){const X=_.image;if(X===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{F(L,_,x);return}}else _.isExternalTexture&&(L.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+x)}function te(_,x){const L=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&L.__version!==_.version){F(L,_,x);return}else _.isExternalTexture&&(L.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+x)}function ve(_,x){const L=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&L.__version!==_.version){F(L,_,x);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+x)}function Y(_,x){const L=n.get(_);if(_.version>0&&L.__version!==_.version){k(L,_,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+x)}const fe={[Js]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[Ks]:i.MIRRORED_REPEAT},pe={[Vt]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[as]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},xe={[uu]:i.NEVER,[xu]:i.ALWAYS,[hu]:i.LESS,[Fl]:i.LEQUAL,[du]:i.EQUAL,[mu]:i.GEQUAL,[fu]:i.GREATER,[pu]:i.NOTEQUAL};function Be(_,x){if(x.type===gn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Xt||x.magFilter===as||x.magFilter===fr||x.magFilter===qn||x.minFilter===Xt||x.minFilter===as||x.minFilter===fr||x.minFilter===qn)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,fe[x.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,fe[x.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,fe[x.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,pe[x.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==fr&&x.minFilter!==qn||x.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ue(_,x){let L=!1;_.__webglInit===void 0&&(_.__webglInit=!0,x.addEventListener("dispose",w));const X=x.source;let H=f.get(X);H===void 0&&(H={},f.set(X,H));const C=ie(x);if(C!==_.__cacheKey){H[C]===void 0&&(H[C]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),H[C].usedTimes++;const J=H[_.__cacheKey];J!==void 0&&(H[_.__cacheKey].usedTimes--,J.usedTimes===0&&E(x)),_.__cacheKey=C,_.__webglTexture=H[C].texture}return L}function ce(_,x,L){return Math.floor(Math.floor(_/L)/x)}function le(_,x,L,X){const C=_.updateRanges;if(C.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,L,X,x.data);else{C.sort((re,de)=>re.start-de.start);let J=0;for(let re=1;re<C.length;re++){const de=C[J],Ie=C[re],Ne=de.start+de.count,Re=ce(Ie.start,x.width,4),Ve=ce(de.start,x.width,4);Ie.start<=Ne+1&&Re===Ve&&ce(Ie.start+Ie.count-1,x.width,4)===Re?de.count=Math.max(de.count,Ie.start+Ie.count-de.start):(++J,C[J]=Ie)}C.length=J+1;const ne=i.getParameter(i.UNPACK_ROW_LENGTH),he=i.getParameter(i.UNPACK_SKIP_PIXELS),ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let re=0,de=C.length;re<de;re++){const Ie=C[re],Ne=Math.floor(Ie.start/4),Re=Math.ceil(Ie.count/4),Ve=Ne%x.width,P=Math.floor(Ne/x.width),Te=Re,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Ve,P,Te,be,L,X,x.data)}_.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,he),i.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function F(_,x,L){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);const H=ue(_,x),C=x.source;t.bindTexture(X,_.__webglTexture,i.TEXTURE0+L);const J=n.get(C);if(C.version!==J.__version||H===!0){t.activeTexture(i.TEXTURE0+L);const ne=it.getPrimaries(it.workingColorSpace),he=x.colorSpace===Cn?null:it.getPrimaries(x.colorSpace),ye=x.colorSpace===Cn||ne===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let re=v(x.image,!1,r.maxTextureSize);re=z(x,re);const de=s.convert(x.format,x.colorSpace),Ie=s.convert(x.type);let Ne=S(x.internalFormat,de,Ie,x.colorSpace,x.isVideoTexture);Be(X,x);let Re;const Ve=x.mipmaps,P=x.isVideoTexture!==!0,Te=J.__version===void 0||H===!0,be=C.dataReady,Me=I(x,re);if(x.isDepthTexture)Ne=A(x.format===Ki,x.type),Te&&(P?t.texStorage2D(i.TEXTURE_2D,1,Ne,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ne,re.width,re.height,0,de,Ie,null));else if(x.isDataTexture)if(Ve.length>0){P&&Te&&t.texStorage2D(i.TEXTURE_2D,Me,Ne,Ve[0].width,Ve[0].height);for(let me=0,oe=Ve.length;me<oe;me++)Re=Ve[me],P?be&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Re.width,Re.height,de,Ie,Re.data):t.texImage2D(i.TEXTURE_2D,me,Ne,Re.width,Re.height,0,de,Ie,Re.data);x.generateMipmaps=!1}else P?(Te&&t.texStorage2D(i.TEXTURE_2D,Me,Ne,re.width,re.height),be&&le(x,re,de,Ie)):t.texImage2D(i.TEXTURE_2D,0,Ne,re.width,re.height,0,de,Ie,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){P&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ne,Ve[0].width,Ve[0].height,re.depth);for(let me=0,oe=Ve.length;me<oe;me++)if(Re=Ve[me],x.format!==Kt)if(de!==null)if(P){if(be)if(x.layerUpdates.size>0){const Pe=Zo(Re.width,Re.height,x.format,x.type);for(const Xe of x.layerUpdates){const rt=Re.data.subarray(Xe*Pe/Re.data.BYTES_PER_ELEMENT,(Xe+1)*Pe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Xe,Re.width,Re.height,1,de,rt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Re.width,Re.height,re.depth,de,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Ne,Re.width,Re.height,re.depth,0,Re.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Re.width,Re.height,re.depth,de,Ie,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Ne,Re.width,Re.height,re.depth,0,de,Ie,Re.data)}else{P&&Te&&t.texStorage2D(i.TEXTURE_2D,Me,Ne,Ve[0].width,Ve[0].height);for(let me=0,oe=Ve.length;me<oe;me++)Re=Ve[me],x.format!==Kt?de!==null?P?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Re.width,Re.height,de,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Ne,Re.width,Re.height,0,Re.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?be&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Re.width,Re.height,de,Ie,Re.data):t.texImage2D(i.TEXTURE_2D,me,Ne,Re.width,Re.height,0,de,Ie,Re.data)}else if(x.isDataArrayTexture)if(P){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ne,re.width,re.height,re.depth),be)if(x.layerUpdates.size>0){const me=Zo(re.width,re.height,x.format,x.type);for(const oe of x.layerUpdates){const Pe=re.data.subarray(oe*me/re.data.BYTES_PER_ELEMENT,(oe+1)*me/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,re.width,re.height,1,de,Ie,Pe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,de,Ie,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,de,Ie,re.data);else if(x.isData3DTexture)P?(Te&&t.texStorage3D(i.TEXTURE_3D,Me,Ne,re.width,re.height,re.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,de,Ie,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,de,Ie,re.data);else if(x.isFramebufferTexture){if(Te)if(P)t.texStorage2D(i.TEXTURE_2D,Me,Ne,re.width,re.height);else{let me=re.width,oe=re.height;for(let Pe=0;Pe<Me;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Ne,me,oe,0,de,Ie,null),me>>=1,oe>>=1}}else if(Ve.length>0){if(P&&Te){const me=K(Ve[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ne,me.width,me.height)}for(let me=0,oe=Ve.length;me<oe;me++)Re=Ve[me],P?be&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,de,Ie,Re):t.texImage2D(i.TEXTURE_2D,me,Ne,de,Ie,Re);x.generateMipmaps=!1}else if(P){if(Te){const me=K(re);t.texStorage2D(i.TEXTURE_2D,Me,Ne,me.width,me.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ie,re)}else t.texImage2D(i.TEXTURE_2D,0,Ne,de,Ie,re);m(x)&&d(X),J.__version=C.version,x.onUpdate&&x.onUpdate(x)}_.__version=x.version}function k(_,x,L){if(x.image.length!==6)return;const X=ue(_,x),H=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+L);const C=n.get(H);if(H.version!==C.__version||X===!0){t.activeTexture(i.TEXTURE0+L);const J=it.getPrimaries(it.workingColorSpace),ne=x.colorSpace===Cn?null:it.getPrimaries(x.colorSpace),he=x.colorSpace===Cn||J===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,de=[];for(let oe=0;oe<6;oe++)!ye&&!re?de[oe]=v(x.image[oe],!0,r.maxCubemapSize):de[oe]=re?x.image[oe].image:x.image[oe],de[oe]=z(x,de[oe]);const Ie=de[0],Ne=s.convert(x.format,x.colorSpace),Re=s.convert(x.type),Ve=S(x.internalFormat,Ne,Re,x.colorSpace),P=x.isVideoTexture!==!0,Te=C.__version===void 0||X===!0,be=H.dataReady;let Me=I(x,Ie);Be(i.TEXTURE_CUBE_MAP,x);let me;if(ye){P&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ve,Ie.width,Ie.height);for(let oe=0;oe<6;oe++){me=de[oe].mipmaps;for(let Pe=0;Pe<me.length;Pe++){const Xe=me[Pe];x.format!==Kt?Ne!==null?P?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Pe,0,0,Xe.width,Xe.height,Ne,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Pe,Ve,Xe.width,Xe.height,0,Xe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Pe,0,0,Xe.width,Xe.height,Ne,Re,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Pe,Ve,Xe.width,Xe.height,0,Ne,Re,Xe.data)}}}else{if(me=x.mipmaps,P&&Te){me.length>0&&Me++;const oe=K(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ve,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(re){P?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,de[oe].width,de[oe].height,Ne,Re,de[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,de[oe].width,de[oe].height,0,Ne,Re,de[oe].data);for(let Pe=0;Pe<me.length;Pe++){const rt=me[Pe].image[oe].image;P?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Pe+1,0,0,rt.width,rt.height,Ne,Re,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Pe+1,Ve,rt.width,rt.height,0,Ne,Re,rt.data)}}else{P?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ne,Re,de[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,Ne,Re,de[oe]);for(let Pe=0;Pe<me.length;Pe++){const Xe=me[Pe];P?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Pe+1,0,0,Ne,Re,Xe.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Pe+1,Ve,Ne,Re,Xe.image[oe])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),C.__version=H.version,x.onUpdate&&x.onUpdate(x)}_.__version=x.version}function ee(_,x,L,X,H,C){const J=s.convert(L.format,L.colorSpace),ne=s.convert(L.type),he=S(L.internalFormat,J,ne,L.colorSpace),ye=n.get(x),re=n.get(L);if(re.__renderTarget=x,!ye.__hasExternalTextures){const de=Math.max(1,x.width>>C),Ie=Math.max(1,x.height>>C);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,C,he,de,Ie,x.depth,0,J,ne,null):t.texImage2D(H,C,he,de,Ie,0,J,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),V(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,H,re.__webglTexture,0,j(x)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,H,re.__webglTexture,C),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(_,x,L){if(i.bindRenderbuffer(i.RENDERBUFFER,_),x.depthBuffer){const X=x.depthTexture,H=X&&X.isDepthTexture?X.type:null,C=A(x.stencilBuffer,H),J=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=j(x);V(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,C,x.width,x.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,C,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,C,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,_)}else{const X=x.textures;for(let H=0;H<X.length;H++){const C=X[H],J=s.convert(C.format,C.colorSpace),ne=s.convert(C.type),he=S(C.internalFormat,J,ne,C.colorSpace),ye=j(x);L&&V(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,he,x.width,x.height):V(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(_,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),se(x.depthTexture,0);const H=X.__webglTexture,C=j(x);if(x.depthTexture.format===Ji)V(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(x.depthTexture.format===Ki)V(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,C):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function ge(_){const x=n.get(_),L=_.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==_.depthTexture){const X=_.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const H=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",H)};X.addEventListener("dispose",H),x.__depthDisposeCallback=H}x.__boundDepthTexture=X}if(_.depthTexture&&!x.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const X=_.texture.mipmaps;X&&X.length>0?_e(x.__webglFramebuffer[0],_):_e(x.__webglFramebuffer,_)}else if(L){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Ee(x.__webglDepthbuffer[X],_,!1);else{const H=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,C)}}else{const X=_.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ee(x.__webglDepthbuffer,_,!1);else{const H=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,C)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(_,x,L){const X=n.get(_);x!==void 0&&ee(X.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&ge(_)}function we(_){const x=_.texture,L=n.get(_),X=n.get(x);_.addEventListener("dispose",U);const H=_.textures,C=_.isWebGLCubeRenderTarget===!0,J=H.length>1;if(J||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),C){L.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[ne]=[];for(let he=0;he<x.mipmaps.length;he++)L.__webglFramebuffer[ne][he]=i.createFramebuffer()}else L.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)L.__webglFramebuffer[ne]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(J)for(let ne=0,he=H.length;ne<he;ne++){const ye=n.get(H[ne]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(_.samples>0&&V(_)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ne=0;ne<H.length;ne++){const he=H[ne];L.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[ne]);const ye=s.convert(he.format,he.colorSpace),re=s.convert(he.type),de=S(he.internalFormat,ye,re,he.colorSpace,_.isXRRenderTarget===!0),Ie=j(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,de,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,L.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(L.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(C){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Be(i.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)ee(L.__webglFramebuffer[ne][he],_,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else ee(L.__webglFramebuffer[ne],_,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){for(let ne=0,he=H.length;ne<he;ne++){const ye=H[ne],re=n.get(ye);let de=i.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(de=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,re.__webglTexture),Be(de,ye),ee(L.__webglFramebuffer,_,ye,i.COLOR_ATTACHMENT0+ne,de,0),m(ye)&&d(de)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(ne=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,X.__webglTexture),Be(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)ee(L.__webglFramebuffer[he],_,x,i.COLOR_ATTACHMENT0,ne,he);else ee(L.__webglFramebuffer,_,x,i.COLOR_ATTACHMENT0,ne,0);m(x)&&d(ne),t.unbindTexture()}_.depthBuffer&&ge(_)}function We(_){const x=_.textures;for(let L=0,X=x.length;L<X;L++){const H=x[L];if(m(H)){const C=T(_),J=n.get(H).__webglTexture;t.bindTexture(C,J),d(C),t.unbindTexture()}}}const R=[],ke=[];function G(_){if(_.samples>0){if(V(_)===!1){const x=_.textures,L=_.width,X=_.height;let H=i.COLOR_BUFFER_BIT;const C=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=n.get(_),ne=x.length>1;if(ne)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer);const he=_.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,J.__webglColorRenderbuffer[ye]);const re=n.get(x[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,L,X,0,0,L,X,H,i.NEAREST),c===!0&&(R.length=0,ke.length=0,R.push(i.COLOR_ATTACHMENT0+ye),_.depthBuffer&&_.resolveDepthBuffer===!1&&(R.push(C),ke.push(C),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,J.__webglColorRenderbuffer[ye]);const re=n.get(x[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&c){const x=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function j(_){return Math.min(r.maxSamples,_.samples)}function V(_){const x=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(_){const x=a.render.frame;u.get(_)!==x&&(u.set(_,x),_.update())}function z(_,x){const L=_.colorSpace,X=_.format,H=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||L!==Si&&L!==Cn&&(it.getTransfer(L)===ot?(X!==Kt||H!==rn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",L)),x}function K(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(l.width=_.naturalWidth||_.width,l.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(l.width=_.displayWidth,l.height=_.displayHeight):(l.width=_.width,l.height=_.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=$,this.setTexture2D=se,this.setTexture2DArray=te,this.setTexture3D=ve,this.setTextureCube=Y,this.rebindTextures=Ue,this.setupRenderTarget=we,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=V}function Cm(i,e){function t(n,r=Cn){let s;const a=it.getTransfer(r);if(n===rn)return i.UNSIGNED_BYTE;if(n===Fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wl)return i.BYTE;if(n===Rl)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===Ia)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===wi)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Ul)return i.RGB;if(n===Kt)return i.RGBA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Dl)return i.RED;if(n===Oa)return i.RED_INTEGER;if(n===Ba)return i.RG;if(n===za)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===Br||n===zr||n===kr||n===Vr)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===js||n===Qs||n===ea||n===ta)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===js)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===ra)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===na||n===ia)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ra)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===aa||n===oa||n===la||n===ca||n===ua||n===ha||n===da||n===fa||n===pa||n===ma||n===xa||n===ga||n===va)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sa)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===da)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xa)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===ba||n===Ma)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===_a)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sa||n===ya||n===Ea||n===Ta)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ta)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new $l(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:Pm,fragmentShader:Lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dm extends Ri{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Um,d={},T=t.getContextAttributes();let S=null,A=null;const I=[],w=[],U=new Oe;let W=null;const E=new kt;E.viewport=new lt;const M=new kt;M.viewport=new lt;const D=[E,M],$=new Jh;let Q=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let k=I[F];return k===void 0&&(k=new ws,I[F]=k),k.getTargetRaySpace()},this.getControllerGrip=function(F){let k=I[F];return k===void 0&&(k=new ws,I[F]=k),k.getGripSpace()},this.getHand=function(F){let k=I[F];return k===void 0&&(k=new ws,I[F]=k),k.getHandSpace()};function se(F){const k=w.indexOf(F.inputSource);if(k===-1)return;const ee=I[k];ee!==void 0&&(ee.update(F.inputSource,F.frame,l||a),ee.dispatchEvent({type:F.type,data:F.inputSource}))}function te(){r.removeEventListener("select",se),r.removeEventListener("selectstart",se),r.removeEventListener("selectend",se),r.removeEventListener("squeeze",se),r.removeEventListener("squeezestart",se),r.removeEventListener("squeezeend",se),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",ve);for(let F=0;F<I.length;F++){const k=w[F];k!==null&&(w[F]=null,I[F].disconnect(k))}Q=null,ie=null,m.reset();for(const F in d)delete d[F];e.setRenderTarget(S),p=null,f=null,h=null,r=null,A=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(W),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",se),r.addEventListener("selectstart",se),r.addEventListener("selectend",se),r.addEventListener("squeeze",se),r.addEventListener("squeezestart",se),r.addEventListener("squeezeend",se),r.addEventListener("end",te),r.addEventListener("inputsourceschange",ve),T.xrCompatible!==!0&&await t.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(U),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Ee=null,_e=null;T.depth&&(_e=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=T.stencil?Ki:Ji,Ee=T.stencil?Zi:Yn);const ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Zn(f.textureWidth,f.textureHeight,{format:Kt,type:rn,depthTexture:new Xl(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ee={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ve(F){for(let k=0;k<F.removed.length;k++){const ee=F.removed[k],Ee=w.indexOf(ee);Ee>=0&&(w[Ee]=null,I[Ee].disconnect(ee))}for(let k=0;k<F.added.length;k++){const ee=F.added[k];let Ee=w.indexOf(ee);if(Ee===-1){for(let ge=0;ge<I.length;ge++)if(ge>=w.length){w.push(ee),Ee=ge;break}else if(w[ge]===null){w[ge]=ee,Ee=ge;break}if(Ee===-1)break}const _e=I[Ee];_e&&_e.connect(ee)}}const Y=new O,fe=new O;function pe(F,k,ee){Y.setFromMatrixPosition(k.matrixWorld),fe.setFromMatrixPosition(ee.matrixWorld);const Ee=Y.distanceTo(fe),_e=k.projectionMatrix.elements,ge=ee.projectionMatrix.elements,Ue=_e[14]/(_e[10]-1),we=_e[14]/(_e[10]+1),We=(_e[9]+1)/_e[5],R=(_e[9]-1)/_e[5],ke=(_e[8]-1)/_e[0],G=(ge[8]+1)/ge[0],j=Ue*ke,V=Ue*G,ae=Ee/(-ke+G),z=ae*-ke;if(k.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(z),F.translateZ(ae),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),_e[10]===-1)F.projectionMatrix.copy(k.projectionMatrix),F.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const K=Ue+ae,_=we+ae,x=j-z,L=V+(Ee-z),X=We*we/_*K,H=R*we/_*K;F.projectionMatrix.makePerspective(x,L,X,H,K,_),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function xe(F,k){k===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(k.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let k=F.near,ee=F.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),$.near=M.near=E.near=k,$.far=M.far=E.far=ee,(Q!==$.near||ie!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),Q=$.near,ie=$.far),$.layers.mask=F.layers.mask|6,E.layers.mask=$.layers.mask&3,M.layers.mask=$.layers.mask&5;const Ee=F.parent,_e=$.cameras;xe($,Ee);for(let ge=0;ge<_e.length;ge++)xe(_e[ge],Ee);_e.length===2?pe($,E,M):$.projectionMatrix.copy(E.projectionMatrix),Be(F,$,Ee)};function Be(F,k,ee){ee===null?F.matrix.copy(k.matrixWorld):(F.matrix.copy(ee.matrixWorld),F.matrix.invert(),F.matrix.multiply(k.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(k.projectionMatrix),F.projectionMatrixInverse.copy(k.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Qi*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(F){c=F,f!==null&&(f.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh($)},this.getCameraTexture=function(F){return d[F]};let ue=null;function ce(F,k){if(u=k.getViewerPose(l||a),g=k,u!==null){const ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let Ee=!1;ee.length!==$.cameras.length&&($.cameras.length=0,Ee=!0);for(let we=0;we<ee.length;we++){const We=ee[we];let R=null;if(p!==null)R=p.getViewport(We);else{const G=h.getViewSubImage(f,We);R=G.viewport,we===0&&(e.setRenderTargetTextures(A,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(A))}let ke=D[we];ke===void 0&&(ke=new kt,ke.layers.enable(we),ke.viewport=new lt,D[we]=ke),ke.matrix.fromArray(We.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(We.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(R.x,R.y,R.width,R.height),we===0&&($.matrix.copy(ke.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ee===!0&&$.cameras.push(ke)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const we=h.getDepthInformation(ee[0]);we&&we.isValid&&we.texture&&m.init(we,r.renderState)}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let we=0;we<ee.length;we++){const We=ee[we].camera;if(We){let R=d[We];R||(R=new $l,d[We]=R);const ke=h.getCameraImage(We);R.sourceTexture=ke}}}}for(let ee=0;ee<I.length;ee++){const Ee=w[ee],_e=I[ee];Ee!==null&&_e!==void 0&&_e.update(Ee,k,l||a)}ue&&ue(F,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}const le=new sc;le.setAnimationLoop(ce),this.setAnimationLoop=function(F){ue=F},this.dispose=function(){}}}const Hn=new sn,Im=new ft;function Fm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Gl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,S,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,A)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,T,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),S=T.envMap,A=T.envMapRotation;S&&(m.envMap.value=S,Hn.copy(A),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),m.envMapRotation.value.setFromMatrix4(Im.makeRotationFromEuler(Hn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,T,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Nm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const A=S.program;n.uniformBlockBinding(T,A)}function l(T,S){let A=r[T.id];A===void 0&&(g(T),A=u(T),r[T.id]=A,T.addEventListener("dispose",m));const I=S.program;n.updateUBOMapping(T,I);const w=e.render.frame;s[T.id]!==w&&(f(T),s[T.id]=w)}function u(T){const S=h();T.__bindingPointIndex=S;const A=i.createBuffer(),I=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,A),A}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=r[T.id],A=T.uniforms,I=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,U=A.length;w<U;w++){const W=Array.isArray(A[w])?A[w]:[A[w]];for(let E=0,M=W.length;E<M;E++){const D=W[E];if(p(D,w,E,I)===!0){const $=D.__offset,Q=Array.isArray(D.value)?D.value:[D.value];let ie=0;for(let se=0;se<Q.length;se++){const te=Q[se],ve=v(te);typeof te=="number"||typeof te=="boolean"?(D.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,$+ie,D.__data)):te.isMatrix3?(D.__data[0]=te.elements[0],D.__data[1]=te.elements[1],D.__data[2]=te.elements[2],D.__data[3]=0,D.__data[4]=te.elements[3],D.__data[5]=te.elements[4],D.__data[6]=te.elements[5],D.__data[7]=0,D.__data[8]=te.elements[6],D.__data[9]=te.elements[7],D.__data[10]=te.elements[8],D.__data[11]=0):(te.toArray(D.__data,ie),ie+=ve.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,S,A,I){const w=T.value,U=S+"_"+A;if(I[U]===void 0)return typeof w=="number"||typeof w=="boolean"?I[U]=w:I[U]=w.clone(),!0;{const W=I[U];if(typeof w=="number"||typeof w=="boolean"){if(W!==w)return I[U]=w,!0}else if(W.equals(w)===!1)return W.copy(w),!0}return!1}function g(T){const S=T.uniforms;let A=0;const I=16;for(let U=0,W=S.length;U<W;U++){const E=Array.isArray(S[U])?S[U]:[S[U]];for(let M=0,D=E.length;M<D;M++){const $=E[M],Q=Array.isArray($.value)?$.value:[$.value];for(let ie=0,se=Q.length;ie<se;ie++){const te=Q[ie],ve=v(te),Y=A%I,fe=Y%ve.boundary,pe=Y+fe;A+=fe,pe!==0&&I-pe<ve.storage&&(A+=I-pe),$.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=ve.storage}}}const w=A%I;return w>0&&(A+=I-w),T.__size=A,T.__cache={},this}function v(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const A=a.indexOf(S.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}const Om=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let fn=null;function Bm(){return fn===null&&(fn=new oh(Om,32,32,Ba,wi),fn.minFilter=Xt,fn.magFilter=Xt,fn.wrapS=xn,fn.wrapT=xn,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class zm{constructor(e={}){const{canvas:t=gu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Set([ka,za,Oa]),v=new Set([rn,Yn,Yi,Zi,Fa,Na]),m=new Uint32Array(4),d=new Int32Array(4);let T=null,S=null;const A=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let U=!1;this._outputColorSpace=zt;let W=0,E=0,M=null,D=-1,$=null;const Q=new lt,ie=new lt;let se=null;const te=new et(0);let ve=0,Y=t.width,fe=t.height,pe=1,xe=null,Be=null;const ue=new lt(0,0,Y,fe),ce=new lt(0,0,Y,fe);let le=!1;const F=new Xa;let k=!1,ee=!1;const Ee=new ft,_e=new O,ge=new lt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function We(){return M===null?pe:1}let R=n;function ke(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),R===null){const N="webgl2";if(R=ke(N,b),R===null)throw ke(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b("WebGLRenderer: "+b.message),b}let G,j,V,ae,z,K,_,x,L,X,H,C,J,ne,he,ye,re,de,Ie,Ne,Re,Ve,P,Te;function be(){G=new qp(R),G.init(),Ve=new Cm(R,G),j=new Bp(R,G,e,Ve),V=new wm(R,G),j.reversedDepthBuffer&&f&&V.buffers.depth.setReversed(!0),ae=new Jp(R),z=new pm,K=new Rm(R,G,V,z,j,Ve,ae),_=new kp(w),x=new $p(w),L=new Qh(R),P=new Np(R,L),X=new Yp(R,L,ae,P),H=new jp(R,X,L,ae),Ie=new Kp(R,j,K),ye=new zp(z),C=new fm(w,_,x,G,j,P,ye),J=new Fm(w,z),ne=new xm,he=new Sm(G),de=new Fp(w,_,x,V,H,p,c),re=new Tm(w,H,j),Te=new Nm(R,ae,j,V),Ne=new Op(R,G,ae),Re=new Zp(R,G,ae),ae.programs=C.programs,w.capabilities=j,w.extensions=G,w.properties=z,w.renderLists=ne,w.shadowMap=re,w.state=V,w.info=ae}be();const Me=new Dm(w,R);this.xr=Me,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=G.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=G.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(b){b!==void 0&&(pe=b,this.setSize(Y,fe,!1))},this.getSize=function(b){return b.set(Y,fe)},this.setSize=function(b,N,q=!0){if(Me.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,fe=N,t.width=Math.floor(b*pe),t.height=Math.floor(N*pe),q===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Y*pe,fe*pe).floor()},this.setDrawingBufferSize=function(b,N,q){Y=b,fe=N,pe=q,t.width=Math.floor(b*q),t.height=Math.floor(N*q),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(ue)},this.setViewport=function(b,N,q,Z){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,N,q,Z),V.viewport(Q.copy(ue).multiplyScalar(pe).round())},this.getScissor=function(b){return b.copy(ce)},this.setScissor=function(b,N,q,Z){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,N,q,Z),V.scissor(ie.copy(ce).multiplyScalar(pe).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){V.setScissorTest(le=b)},this.setOpaqueSort=function(b){xe=b},this.setTransparentSort=function(b){Be=b},this.getClearColor=function(b){return b.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,q=!0){let Z=0;if(b){let B=!1;if(M!==null){const Se=M.texture.format;B=g.has(Se)}if(B){const Se=M.texture.type,Ce=v.has(Se),Fe=de.getClearColor(),Le=de.getClearAlpha(),He=Fe.r,$e=Fe.g,ze=Fe.b;Ce?(m[0]=He,m[1]=$e,m[2]=ze,m[3]=Le,R.clearBufferuiv(R.COLOR,0,m)):(d[0]=He,d[1]=$e,d[2]=ze,d[3]=Le,R.clearBufferiv(R.COLOR,0,d))}else Z|=R.COLOR_BUFFER_BIT}N&&(Z|=R.DEPTH_BUFFER_BIT),q&&(Z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),de.dispose(),ne.dispose(),he.dispose(),z.dispose(),_.dispose(),x.dispose(),H.dispose(),P.dispose(),Te.dispose(),C.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",St),Me.removeEventListener("sessionend",Sn),It.stop()};function me(b){b.preventDefault(),bo("WebGLRenderer: Context Lost."),U=!0}function oe(){bo("WebGLRenderer: Context Restored."),U=!1;const b=ae.autoReset,N=re.enabled,q=re.autoUpdate,Z=re.needsUpdate,B=re.type;be(),ae.autoReset=b,re.enabled=N,re.autoUpdate=q,re.needsUpdate=Z,re.type=B}function Pe(b){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xe(b){const N=b.target;N.removeEventListener("dispose",Xe),rt(N)}function rt(b){st(b),z.remove(b)}function st(b){const N=z.get(b).programs;N!==void 0&&(N.forEach(function(q){C.releaseProgram(q)}),b.isShaderMaterial&&C.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,q,Z,B,Se){N===null&&(N=Ue);const Ce=B.isMesh&&B.matrixWorld.determinant()<0,Fe=bc(b,N,q,Z,B);V.setMaterial(Z,Ce);let Le=q.index,He=1;if(Z.wireframe===!0){if(Le=X.getWireframeAttribute(q),Le===void 0)return;He=2}const $e=q.drawRange,ze=q.attributes.position;let je=$e.start*He,at=($e.start+$e.count)*He;Se!==null&&(je=Math.max(je,Se.start*He),at=Math.min(at,(Se.start+Se.count)*He)),Le!==null?(je=Math.max(je,0),at=Math.min(at,Le.count)):ze!=null&&(je=Math.max(je,0),at=Math.min(at,ze.count));const pt=at-je;if(pt<0||pt===1/0)return;P.setup(B,Z,Fe,q,Le);let mt,ct=Ne;if(Le!==null&&(mt=L.get(Le),ct=Re,ct.setIndex(mt)),B.isMesh)Z.wireframe===!0?(V.setLineWidth(Z.wireframeLinewidth*We()),ct.setMode(R.LINES)):ct.setMode(R.TRIANGLES);else if(B.isLine){let Ge=Z.linewidth;Ge===void 0&&(Ge=1),V.setLineWidth(Ge*We()),B.isLineSegments?ct.setMode(R.LINES):B.isLineLoop?ct.setMode(R.LINE_LOOP):ct.setMode(R.LINE_STRIP)}else B.isPoints?ct.setMode(R.POINTS):B.isSprite&&ct.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ji("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))ct.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ge=B._multiDrawStarts,ut=B._multiDrawCounts,nt=B._multiDrawCount,Ft=Le?L.get(Le).bytesPerElement:1,ei=z.get(Z).currentProgram.getUniforms();for(let Nt=0;Nt<nt;Nt++)ei.setValue(R,"_gl_DrawID",Nt),ct.render(Ge[Nt]/Ft,ut[Nt])}else if(B.isInstancedMesh)ct.renderInstances(je,pt,B.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ut=Math.min(q.instanceCount,Ge);ct.renderInstances(je,pt,ut)}else ct.render(je,pt)};function Et(b,N,q){b.transparent===!0&&b.side===mn&&b.forceSinglePass===!1?(b.side=Dt,b.needsUpdate=!0,dr(b,N,q),b.side=Fn,b.needsUpdate=!0,dr(b,N,q),b.side=mn):dr(b,N,q)}this.compile=function(b,N,q=null){q===null&&(q=b),S=he.get(q),S.init(N),I.push(S),q.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(S.pushLight(B),B.castShadow&&S.pushShadow(B))}),b!==q&&b.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(S.pushLight(B),B.castShadow&&S.pushShadow(B))}),S.setupLights();const Z=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const Se=B.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Fe=Se[Ce];Et(Fe,q,B),Z.add(Fe)}else Et(Se,q,B),Z.add(Se)}),S=I.pop(),Z},this.compileAsync=function(b,N,q=null){const Z=this.compile(b,N,q);return new Promise(B=>{function Se(){if(Z.forEach(function(Ce){z.get(Ce).currentProgram.isReady()&&Z.delete(Ce)}),Z.size===0){B(b);return}setTimeout(Se,10)}G.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Mt=null;function Nn(b){Mt&&Mt(b)}function St(){It.stop()}function Sn(){It.start()}const It=new sc;It.setAnimationLoop(Nn),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(b){Mt=b,Me.setAnimationLoop(b),b===null?It.stop():It.start()},Me.addEventListener("sessionstart",St),Me.addEventListener("sessionend",Sn),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(N),N=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,N,M),S=he.get(b,I.length),S.init(N),I.push(S),Ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),F.setFromProjectionMatrix(Ee,en,N.reversedDepth),ee=this.localClippingEnabled,k=ye.init(this.clippingPlanes,ee),T=ne.get(b,A.length),T.init(),A.push(T),Me.enabled===!0&&Me.isPresenting===!0){const Se=w.xr.getDepthSensingMesh();Se!==null&&ns(Se,N,-1/0,w.sortObjects)}ns(b,N,0,w.sortObjects),T.finish(),w.sortObjects===!0&&T.sort(xe,Be),we=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,we&&de.addToRenderList(T,b),this.info.render.frame++,k===!0&&ye.beginShadows();const q=S.state.shadowsArray;re.render(q,b,N),k===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=T.opaque,B=T.transmissive;if(S.setupLights(),N.isArrayCamera){const Se=N.cameras;if(B.length>0)for(let Ce=0,Fe=Se.length;Ce<Fe;Ce++){const Le=Se[Ce];ro(Z,B,b,Le)}we&&de.render(b);for(let Ce=0,Fe=Se.length;Ce<Fe;Ce++){const Le=Se[Ce];io(T,b,Le,Le.viewport)}}else B.length>0&&ro(Z,B,b,N),we&&de.render(b),io(T,b,N);M!==null&&E===0&&(K.updateMultisampleRenderTarget(M),K.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(w,b,N),P.resetDefaultState(),D=-1,$=null,I.pop(),I.length>0?(S=I[I.length-1],k===!0&&ye.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?T=A[A.length-1]:T=null};function ns(b,N,q,Z){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||F.intersectsSprite(b)){Z&&ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);const Ce=H.update(b),Fe=b.material;Fe.visible&&T.push(b,Ce,Fe,q,ge.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||F.intersectsObject(b))){const Ce=H.update(b),Fe=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ge.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ge.copy(Ce.boundingSphere.center)),ge.applyMatrix4(b.matrixWorld).applyMatrix4(Ee)),Array.isArray(Fe)){const Le=Ce.groups;for(let He=0,$e=Le.length;He<$e;He++){const ze=Le[He],je=Fe[ze.materialIndex];je&&je.visible&&T.push(b,Ce,je,q,ge.z,ze)}}else Fe.visible&&T.push(b,Ce,Fe,q,ge.z,null)}}const Se=b.children;for(let Ce=0,Fe=Se.length;Ce<Fe;Ce++)ns(Se[Ce],N,q,Z)}function io(b,N,q,Z){const{opaque:B,transmissive:Se,transparent:Ce}=b;S.setupLightsView(q),k===!0&&ye.setGlobalState(w.clippingPlanes,q),Z&&V.viewport(Q.copy(Z)),B.length>0&&hr(B,N,q),Se.length>0&&hr(Se,N,q),Ce.length>0&&hr(Ce,N,q),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function ro(b,N,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[Z.id]===void 0&&(S.state.transmissionRenderTarget[Z.id]=new Zn(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?wi:rn,minFilter:qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const Se=S.state.transmissionRenderTarget[Z.id],Ce=Z.viewport||Q;Se.setSize(Ce.z*w.transmissionResolutionScale,Ce.w*w.transmissionResolutionScale);const Fe=w.getRenderTarget(),Le=w.getActiveCubeFace(),He=w.getActiveMipmapLevel();w.setRenderTarget(Se),w.getClearColor(te),ve=w.getClearAlpha(),ve<1&&w.setClearColor(16777215,.5),w.clear(),we&&de.render(q);const $e=w.toneMapping;w.toneMapping=Un;const ze=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),k===!0&&ye.setGlobalState(w.clippingPlanes,Z),hr(b,q,Z),K.updateMultisampleRenderTarget(Se),K.updateRenderTargetMipmap(Se),G.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let at=0,pt=N.length;at<pt;at++){const mt=N[at],{object:ct,geometry:Ge,material:ut,group:nt}=mt;if(ut.side===mn&&ct.layers.test(Z.layers)){const Ft=ut.side;ut.side=Dt,ut.needsUpdate=!0,so(ct,q,Z,Ge,ut,nt),ut.side=Ft,ut.needsUpdate=!0,je=!0}}je===!0&&(K.updateMultisampleRenderTarget(Se),K.updateRenderTargetMipmap(Se))}w.setRenderTarget(Fe,Le,He),w.setClearColor(te,ve),ze!==void 0&&(Z.viewport=ze),w.toneMapping=$e}function hr(b,N,q){const Z=N.isScene===!0?N.overrideMaterial:null;for(let B=0,Se=b.length;B<Se;B++){const Ce=b[B],{object:Fe,geometry:Le,group:He}=Ce;let $e=Ce.material;$e.allowOverride===!0&&Z!==null&&($e=Z),Fe.layers.test(q.layers)&&so(Fe,N,q,Le,$e,He)}}function so(b,N,q,Z,B,Se){b.onBeforeRender(w,N,q,Z,B,Se),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(w,N,q,Z,b,Se),B.transparent===!0&&B.side===mn&&B.forceSinglePass===!1?(B.side=Dt,B.needsUpdate=!0,w.renderBufferDirect(q,N,Z,B,b,Se),B.side=Fn,B.needsUpdate=!0,w.renderBufferDirect(q,N,Z,B,b,Se),B.side=mn):w.renderBufferDirect(q,N,Z,B,b,Se),b.onAfterRender(w,N,q,Z,B,Se)}function dr(b,N,q){N.isScene!==!0&&(N=Ue);const Z=z.get(b),B=S.state.lights,Se=S.state.shadowsArray,Ce=B.state.version,Fe=C.getParameters(b,B.state,Se,N,q),Le=C.getProgramCacheKey(Fe);let He=Z.programs;Z.environment=b.isMeshStandardMaterial?N.environment:null,Z.fog=N.fog,Z.envMap=(b.isMeshStandardMaterial?x:_).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,He===void 0&&(b.addEventListener("dispose",Xe),He=new Map,Z.programs=He);let $e=He.get(Le);if($e!==void 0){if(Z.currentProgram===$e&&Z.lightsStateVersion===Ce)return oo(b,Fe),$e}else Fe.uniforms=C.getUniforms(b),b.onBeforeCompile(Fe,w),$e=C.acquireProgram(Fe,Le),He.set(Le,$e),Z.uniforms=Fe.uniforms;const ze=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=ye.uniform),oo(b,Fe),Z.needsLights=Sc(b),Z.lightsStateVersion=Ce,Z.needsLights&&(ze.ambientLightColor.value=B.state.ambient,ze.lightProbe.value=B.state.probe,ze.directionalLights.value=B.state.directional,ze.directionalLightShadows.value=B.state.directionalShadow,ze.spotLights.value=B.state.spot,ze.spotLightShadows.value=B.state.spotShadow,ze.rectAreaLights.value=B.state.rectArea,ze.ltc_1.value=B.state.rectAreaLTC1,ze.ltc_2.value=B.state.rectAreaLTC2,ze.pointLights.value=B.state.point,ze.pointLightShadows.value=B.state.pointShadow,ze.hemisphereLights.value=B.state.hemi,ze.directionalShadowMap.value=B.state.directionalShadowMap,ze.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ze.spotShadowMap.value=B.state.spotShadowMap,ze.spotLightMatrix.value=B.state.spotLightMatrix,ze.spotLightMap.value=B.state.spotLightMap,ze.pointShadowMap.value=B.state.pointShadowMap,ze.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=$e,Z.uniformsList=null,$e}function ao(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Gr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function oo(b,N){const q=z.get(b);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function bc(b,N,q,Z,B){N.isScene!==!0&&(N=Ue),K.resetTextureUnits();const Se=N.fog,Ce=Z.isMeshStandardMaterial?N.environment:null,Fe=M===null?w.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Si,Le=(Z.isMeshStandardMaterial?x:_).get(Z.envMap||Ce),He=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ze=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,at=!!q.morphAttributes.color;let pt=Un;Z.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(pt=w.toneMapping);const mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ct=mt!==void 0?mt.length:0,Ge=z.get(Z),ut=S.state.lights;if(k===!0&&(ee===!0||b!==$)){const Rt=b===$&&Z.id===D;ye.setState(Z,b,Rt)}let nt=!1;Z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ut.state.version||Ge.outputColorSpace!==Fe||B.isBatchedMesh&&Ge.batching===!1||!B.isBatchedMesh&&Ge.batching===!0||B.isBatchedMesh&&Ge.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ge.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ge.instancing===!1||!B.isInstancedMesh&&Ge.instancing===!0||B.isSkinnedMesh&&Ge.skinning===!1||!B.isSkinnedMesh&&Ge.skinning===!0||B.isInstancedMesh&&Ge.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ge.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ge.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ge.instancingMorph===!1&&B.morphTexture!==null||Ge.envMap!==Le||Z.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ye.numPlanes||Ge.numIntersection!==ye.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==$e||Ge.morphTargets!==ze||Ge.morphNormals!==je||Ge.morphColors!==at||Ge.toneMapping!==pt||Ge.morphTargetsCount!==ct)&&(nt=!0):(nt=!0,Ge.__version=Z.version);let Ft=Ge.currentProgram;nt===!0&&(Ft=dr(Z,N,B));let ei=!1,Nt=!1,Di=!1;const ht=Ft.getUniforms(),Lt=Ge.uniforms;if(V.useProgram(Ft.program)&&(ei=!0,Nt=!0,Di=!0),Z.id!==D&&(D=Z.id,Nt=!0),ei||$!==b){V.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ht.setValue(R,"projectionMatrix",b.projectionMatrix),ht.setValue(R,"viewMatrix",b.matrixWorldInverse);const Ut=ht.map.cameraPosition;Ut!==void 0&&Ut.setValue(R,_e.setFromMatrixPosition(b.matrixWorld)),j.logarithmicDepthBuffer&&ht.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ht.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,Nt=!0,Di=!0)}if(B.isSkinnedMesh){ht.setOptional(R,B,"bindMatrix"),ht.setOptional(R,B,"bindMatrixInverse");const Rt=B.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ht.setValue(R,"boneTexture",Rt.boneTexture,K))}B.isBatchedMesh&&(ht.setOptional(R,B,"batchingTexture"),ht.setValue(R,"batchingTexture",B._matricesTexture,K),ht.setOptional(R,B,"batchingIdTexture"),ht.setValue(R,"batchingIdTexture",B._indirectTexture,K),ht.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&ht.setValue(R,"batchingColorTexture",B._colorsTexture,K));const Gt=q.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&Ie.update(B,q,Ft),(Nt||Ge.receiveShadow!==B.receiveShadow)&&(Ge.receiveShadow=B.receiveShadow,ht.setValue(R,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Lt.envMap.value=Le,Lt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&N.environment!==null&&(Lt.envMapIntensity.value=N.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=Bm()),Nt&&(ht.setValue(R,"toneMappingExposure",w.toneMappingExposure),Ge.needsLights&&Mc(Lt,Di),Se&&Z.fog===!0&&J.refreshFogUniforms(Lt,Se),J.refreshMaterialUniforms(Lt,Z,pe,fe,S.state.transmissionRenderTarget[b.id]),Gr.upload(R,ao(Ge),Lt,K)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Gr.upload(R,ao(Ge),Lt,K),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ht.setValue(R,"center",B.center),ht.setValue(R,"modelViewMatrix",B.modelViewMatrix),ht.setValue(R,"normalMatrix",B.normalMatrix),ht.setValue(R,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Rt=Z.uniformsGroups;for(let Ut=0,is=Rt.length;Ut<is;Ut++){const On=Rt[Ut];Te.update(On,Ft),Te.bind(On,Ft)}}return Ft}function Mc(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Sc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,N,q){const Z=z.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),z.get(b.texture).__webglTexture=N,z.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const q=z.get(b);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0};const yc=R.createFramebuffer();this.setRenderTarget=function(b,N=0,q=0){M=b,W=N,E=q;let Z=!0,B=null,Se=!1,Ce=!1;if(b){const Le=z.get(b);if(Le.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(R.FRAMEBUFFER,null),Z=!1;else if(Le.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(Le.__hasExternalTextures)K.rebindTextures(b,z.get(b.texture).__webglTexture,z.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ze=b.depthTexture;if(Le.__boundDepthTexture!==ze){if(ze!==null&&z.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ce=!0);const $e=z.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($e[N])?B=$e[N][q]:B=$e[N],Se=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?B=z.get(b).__webglMultisampledFramebuffer:Array.isArray($e)?B=$e[q]:B=$e,Q.copy(b.viewport),ie.copy(b.scissor),se=b.scissorTest}else Q.copy(ue).multiplyScalar(pe).floor(),ie.copy(ce).multiplyScalar(pe).floor(),se=le;if(q!==0&&(B=yc),V.bindFramebuffer(R.FRAMEBUFFER,B)&&Z&&V.drawBuffers(b,B),V.viewport(Q),V.scissor(ie),V.setScissorTest(se),Se){const Le=z.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Le.__webglTexture,q)}else if(Ce){const Le=N;for(let He=0;He<b.textures.length;He++){const $e=z.get(b.textures[He]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+He,$e.__webglTexture,q,Le)}}else if(b!==null&&q!==0){const Le=z.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Le.__webglTexture,q)}D=-1},this.readRenderTargetPixels=function(b,N,q,Z,B,Se,Ce,Fe=0){if(!(b&&b.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){V.bindFramebuffer(R.FRAMEBUFFER,Le);try{const He=b.textures[Fe],$e=He.format,ze=He.type;if(!j.textureFormatReadable($e)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(ze)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-Z&&q>=0&&q<=b.height-B&&(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe),R.readPixels(N,q,Z,B,Ve.convert($e),Ve.convert(ze),Se))}finally{const He=M!==null?z.get(M).__webglFramebuffer:null;V.bindFramebuffer(R.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(b,N,q,Z,B,Se,Ce,Fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(N>=0&&N<=b.width-Z&&q>=0&&q<=b.height-B){V.bindFramebuffer(R.FRAMEBUFFER,Le);const He=b.textures[Fe],$e=He.format,ze=He.type;if(!j.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.bufferData(R.PIXEL_PACK_BUFFER,Se.byteLength,R.STREAM_READ),b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Fe),R.readPixels(N,q,Z,B,Ve.convert($e),Ve.convert(ze),0);const at=M!==null?z.get(M).__webglFramebuffer:null;V.bindFramebuffer(R.FRAMEBUFFER,at);const pt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await vu(R,pt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,je),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Se),R.deleteBuffer(je),R.deleteSync(pt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,q=0){const Z=Math.pow(2,-q),B=Math.floor(b.image.width*Z),Se=Math.floor(b.image.height*Z),Ce=N!==null?N.x:0,Fe=N!==null?N.y:0;K.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,Ce,Fe,B,Se),V.unbindTexture()};const Ec=R.createFramebuffer(),Tc=R.createFramebuffer();this.copyTextureToTexture=function(b,N,q=null,Z=null,B=0,Se=null){Se===null&&(B!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=B,B=0):Se=0);let Ce,Fe,Le,He,$e,ze,je,at,pt;const mt=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(q!==null)Ce=q.max.x-q.min.x,Fe=q.max.y-q.min.y,Le=q.isBox3?q.max.z-q.min.z:1,He=q.min.x,$e=q.min.y,ze=q.isBox3?q.min.z:0;else{const Gt=Math.pow(2,-B);Ce=Math.floor(mt.width*Gt),Fe=Math.floor(mt.height*Gt),b.isDataArrayTexture?Le=mt.depth:b.isData3DTexture?Le=Math.floor(mt.depth*Gt):Le=1,He=0,$e=0,ze=0}Z!==null?(je=Z.x,at=Z.y,pt=Z.z):(je=0,at=0,pt=0);const ct=Ve.convert(N.format),Ge=Ve.convert(N.type);let ut;N.isData3DTexture?(K.setTexture3D(N,0),ut=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(K.setTexture2DArray(N,0),ut=R.TEXTURE_2D_ARRAY):(K.setTexture2D(N,0),ut=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const nt=R.getParameter(R.UNPACK_ROW_LENGTH),Ft=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ei=R.getParameter(R.UNPACK_SKIP_PIXELS),Nt=R.getParameter(R.UNPACK_SKIP_ROWS),Di=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,mt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,mt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,He),R.pixelStorei(R.UNPACK_SKIP_ROWS,$e),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ze);const ht=b.isDataArrayTexture||b.isData3DTexture,Lt=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const Gt=z.get(b),Rt=z.get(N),Ut=z.get(Gt.__renderTarget),is=z.get(Rt.__renderTarget);V.bindFramebuffer(R.READ_FRAMEBUFFER,Ut.__webglFramebuffer),V.bindFramebuffer(R.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let On=0;On<Le;On++)ht&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,z.get(b).__webglTexture,B,ze+On),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,z.get(N).__webglTexture,Se,pt+On)),R.blitFramebuffer(He,$e,Ce,Fe,je,at,Ce,Fe,R.DEPTH_BUFFER_BIT,R.NEAREST);V.bindFramebuffer(R.READ_FRAMEBUFFER,null),V.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||z.has(b)){const Gt=z.get(b),Rt=z.get(N);V.bindFramebuffer(R.READ_FRAMEBUFFER,Ec),V.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tc);for(let Ut=0;Ut<Le;Ut++)ht?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Gt.__webglTexture,B,ze+Ut):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Gt.__webglTexture,B),Lt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Rt.__webglTexture,Se,pt+Ut):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Rt.__webglTexture,Se),B!==0?R.blitFramebuffer(He,$e,Ce,Fe,je,at,Ce,Fe,R.COLOR_BUFFER_BIT,R.NEAREST):Lt?R.copyTexSubImage3D(ut,Se,je,at,pt+Ut,He,$e,Ce,Fe):R.copyTexSubImage2D(ut,Se,je,at,He,$e,Ce,Fe);V.bindFramebuffer(R.READ_FRAMEBUFFER,null),V.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Lt?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(ut,Se,je,at,pt,Ce,Fe,Le,ct,Ge,mt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(ut,Se,je,at,pt,Ce,Fe,Le,ct,mt.data):R.texSubImage3D(ut,Se,je,at,pt,Ce,Fe,Le,ct,Ge,mt):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Se,je,at,Ce,Fe,ct,Ge,mt.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Se,je,at,mt.width,mt.height,ct,mt.data):R.texSubImage2D(R.TEXTURE_2D,Se,je,at,Ce,Fe,ct,Ge,mt);R.pixelStorei(R.UNPACK_ROW_LENGTH,nt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ft),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ei),R.pixelStorei(R.UNPACK_SKIP_ROWS,Nt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Di),Se===0&&N.generateMipmaps&&R.generateMipmap(ut),V.unbindTexture()},this.initRenderTarget=function(b){z.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),V.unbindTexture()},this.resetState=function(){W=0,E=0,M=null,V.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const ki=new O;function Wt(i,e,t,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;ki.copy(e),ki[n]=0,ki.normalize();const l=.5*a/(a+o),u=1-ki.angleTo(i)/c;return Math.sign(ki[t])===1?u*l:o/(a+o)+l+l*(1-u)}class Za extends Ci{constructor(e=1,t=1,n=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new O,l=new O,u=new O(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,v=new O,m=.5/a;for(let d=0,T=0;d<h.length;d+=3,T+=2)switch(c.fromArray(h,d),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[d+0]=u.x*Math.sign(c.x)+l.x*s,h[d+1]=u.y*Math.sign(c.y)+l.y*s,h[d+2]=u.z*Math.sign(c.z)+l.z*s,f[d+0]=l.x,f[d+1]=l.y,f[d+2]=l.z,Math.floor(d/g)){case 0:v.set(1,0,0),p[T+0]=Wt(v,l,"z","y",s,n),p[T+1]=1-Wt(v,l,"y","z",s,t);break;case 1:v.set(-1,0,0),p[T+0]=1-Wt(v,l,"z","y",s,n),p[T+1]=1-Wt(v,l,"y","z",s,t);break;case 2:v.set(0,1,0),p[T+0]=1-Wt(v,l,"x","z",s,e),p[T+1]=Wt(v,l,"z","x",s,n);break;case 3:v.set(0,-1,0),p[T+0]=1-Wt(v,l,"x","z",s,e),p[T+1]=1-Wt(v,l,"z","x",s,n);break;case 4:v.set(0,0,1),p[T+0]=1-Wt(v,l,"x","y",s,e),p[T+1]=1-Wt(v,l,"y","x",s,t);break;case 5:v.set(0,0,-1),p[T+0]=Wt(v,l,"x","y",s,e),p[T+1]=1-Wt(v,l,"y","x",s,t);break}}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.segments,e.radius)}}const Dn={U:{letter:"U",name:"흰색",hex:"#f4f5f1",dark:"#d8dad2"},R:{letter:"R",name:"빨강",hex:"#ff5a64",dark:"#d53b47"},F:{letter:"F",name:"초록",hex:"#43dc9a",dark:"#20b877"},D:{letter:"D",name:"노랑",hex:"#ffd84d",dark:"#d9ad13"},L:{letter:"L",name:"주황",hex:"#ff9b4a",dark:"#e27624"},B:{letter:"B",name:"파랑",hex:"#6c95ff",dark:"#436dda"}},lr=["U","R","F","D","L","B"],Ca=[{id:"3x3",label:"3×3",accent:"#c9ff45",soft:"rgba(201,255,69,.1)",text:"#d9ff82"},{id:"2x2",label:"2×2",accent:"#6fe7ff",soft:"rgba(111,231,255,.1)",text:"#a9f2ff"},{id:"4x4",label:"4×4",accent:"#6c95ff",soft:"rgba(108,149,255,.1)",text:"#a9c0ff"},{id:"pyraminx",label:"Pyraminx",accent:"#ff9b4a",soft:"rgba(255,155,74,.1)",text:"#ffc08e"},{id:"megaminx",label:"Megaminx",accent:"#ff6b73",soft:"rgba(255,107,115,.1)",text:"#ffb1b6"}],Ja=[{id:"trigger-right",cube:"3x3",title:"오른쪽 트리거",subtitle:"R U R′ U′",moves:"R U R' U'",level:"입문",tag:"기본기",description:"큐브 공식의 리듬을 만드는 가장 기본 손놀림. F2L, OLL, PLL 어디에나 등장합니다.",steps:["오른쪽 면을 시계 방향으로 돌립니다.","윗면을 시계 방향으로 돌립니다.","오른쪽 면을 반시계 방향으로 되돌립니다.","윗면을 반시계 방향으로 되돌립니다."],videoId:"7Ron6MN45LY"},{id:"trigger-left",cube:"3x3",title:"왼쪽 트리거",subtitle:"L′ U′ L U",moves:"L' U' L U",level:"입문",tag:"기본기",description:"왼손으로 만드는 대칭 트리거. 오른쪽 트리거와 함께 쓰면 공식 암기가 훨씬 쉬워집니다.",steps:["왼쪽 면을 반시계 방향으로 돌립니다.","윗면을 반시계 방향으로 돌립니다.","왼쪽 면을 시계 방향으로 되돌립니다.","윗면을 시계 방향으로 되돌립니다."],videoId:"7Ron6MN45LY"},{id:"yellow-cross",cube:"3x3",title:"노란 십자",subtitle:"F R U R′ U′ F′",moves:"F R U R' U' F'",level:"입문",tag:"OLL",description:"윗면의 노란 엣지를 십자로 만드는 기본 OLL. 십자가 아닐 때 이 공식을 반복합니다.",steps:["앞면을 시계 방향으로 돌립니다.","오른쪽 트리거를 실행합니다.","앞면을 반시계 방향으로 되돌립니다.","노란 십자가 만들어질 때까지 반복합니다."],videoId:"GhmYBgLoQQg"},{id:"sune",cube:"3x3",title:"Sune · 선우",subtitle:"R U R′ U R U2 R′",moves:"R U R' U R U2 R'",level:"입문",tag:"OLL",description:"윗면 코너 하나를 제자리에 돌리는 대표 공식. 2-Look OLL의 코너 단계에서 사용합니다.",steps:["오른쪽 면을 올립니다.","윗면을 돌리고 오른쪽 면을 내립니다.","한 번 더 반복합니다.","마지막에 윗면을 두 칸 돌려 마무리합니다."],videoId:"GhmYBgLoQQg"},{id:"anti-sune",cube:"3x3",title:"Anti-Sune",subtitle:"R U2 R′ U′ R U′ R′",moves:"R U2 R' U' R U' R'",level:"입문",tag:"OLL",description:"선우의 거울 공식. 노란 코너의 방향이 반대로 틀어졌을 때 사용합니다.",steps:["오른쪽 면을 두 칸 돌립니다.","윗면과 오른쪽 면을 차례로 되돌립니다.","남은 코너 방향을 확인합니다.","필요하면 선우와 함께 사용합니다."],videoId:"GhmYBgLoQQg"},{id:"a-perm",cube:"3x3",title:"A-Perm · 코너 3순환",subtitle:"R′ F R′ B2 R F′ R′ B2 R2",moves:"R' F R' B2 R F' R' B2 R2",level:"중급",tag:"PLL",description:"세 개의 코너를 순환시키는 PLL. 2-Look PLL에서 코너 위치를 먼저 맞출 때 씁니다.",steps:["코너의 목표 위치를 먼저 확인합니다.","공식을 한 번 실행합니다.","윗면을 돌려 코너를 정렬합니다.","엣지는 U-Perm으로 마무리합니다."],videoId:"f_Yor-ydZjs"},{id:"u-perm",cube:"3x3",title:"U-Perm · 엣지 3순환",subtitle:"R U′ R U R U R U′ R′ U′ R2",moves:"R U' R U R U R U' R' U' R2",level:"중급",tag:"PLL",description:"마지막 층의 엣지 세 개를 순환시키는 공식. 코너가 모두 맞은 뒤 사용합니다.",steps:["맞춰진 엣지를 뒤쪽에 둡니다.","공식을 실행합니다.","윗면을 정렬합니다.","필요하면 반대 방향 U-Perm을 사용합니다."],videoId:"f_Yor-ydZjs"},{id:"t-perm",cube:"3x3",title:"T-Perm",subtitle:"R U R′ U′ R′ F R2 U′ R′ U′ R U R′ F′",moves:"R U R' U' R' F R2 U' R' U' R U R' F'",level:"중급",tag:"PLL",description:"두 코너와 두 엣지를 동시에 교환하는 가장 유명한 PLL. 손에 익히면 마지막 층이 빨라집니다.",steps:["T자 모양의 마지막 층 패턴을 찾습니다.","오른쪽 트리거로 시작합니다.","F면을 이용해 엣지를 교환합니다.","마지막 트리거로 정렬합니다."],videoId:"f_Yor-ydZjs"},{id:"f2l-basic",cube:"3x3",title:"F2L 기본 삽입",subtitle:"U R U′ R′",moves:"U R U' R'",level:"중급",tag:"F2L",description:"첫 두 층을 한 쌍씩 맞추는 CFOP의 핵심. 공식을 외우기보다 빈 슬롯으로 빼내는 감각이 중요합니다.",steps:["엣지와 코너를 한 쌍으로 묶습니다.","빈 슬롯 위로 쌍을 가져옵니다.","U R U′ R′로 슬롯에 넣습니다.","네 개의 슬롯을 모두 채웁니다."],videoId:"Ar_Zit1VLG0"},{id:"2x2-trigger",cube:"2x2",title:"2×2 기본 트리거",subtitle:"R U R′ U′",moves:"R U R' U'",level:"입문",tag:"기본기",description:"2×2에서도 3×3과 같은 트리거를 씁니다. 작은 큐브로 손놀림을 먼저 익혀 보세요.",steps:["오른쪽 면을 시계 방향으로 돌립니다.","윗면을 시계 방향으로 돌립니다.","오른쪽 면을 되돌립니다.","윗면을 되돌려 리듬을 만듭니다."],videoId:"GANnG5a19kg"},{id:"2x2-sune",cube:"2x2",title:"2×2 윗면 코너",subtitle:"R U R′ U R U2 R′",moves:"R U R' U R U2 R'",level:"입문",tag:"OLL",description:"2×2의 윗면 색을 한 방향으로 모으는 공식. 3×3 선우와 같은 움직임입니다.",steps:["윗면에 노란색이 몇 개인지 확인합니다.","선우를 실행합니다.","윗면이 모두 맞을 때까지 반복합니다.","마지막 층 코너를 정렬합니다."],videoId:"GANnG5a19kg"},{id:"2x2-pbl",cube:"2x2",title:"2×2 PBL 코너 스왑",subtitle:"R U′ R′ U′ R U R′ F′ …",moves:"R U' R' U' R U R' F' R U R' U' R' F R",level:"중급",tag:"PBL",description:"마지막 층의 두 코너를 교환하는 PBL. 2×2는 코너만 남기 때문에 PBL 하나로 완성되는 경우가 많습니다.",steps:["같은 색 코너가 있는 면을 찾습니다.","그 면을 뒤쪽에 둡니다.","코너 스왑 공식을 실행합니다.","윗면을 돌려 큐브를 완성합니다."],videoId:"GANnG5a19kg"},{id:"4x4-centers",cube:"4x4",title:"4×4 센터 맞추기",subtitle:"Rw U Rw′",moves:"Rw U Rw'",level:"입문",tag:"센터",description:"4×4는 고정된 센터가 없습니다. 2×2 블록 네 개를 모아 각 면의 센터를 완성합니다.",steps:["마주 보는 센터 색을 먼저 정합니다.","2×2 센터 블록을 만듭니다.","Rw U Rw′로 센터를 이동합니다.","여섯 면의 센터를 모두 완성합니다."],videoId:"KWOZHbDdOeo"},{id:"4x4-edges",cube:"4x4",title:"4×4 엣지 페어링",subtitle:"Uw′ R U R′ F R′ F′ R Uw",moves:"Uw' R U R' F R' F' R Uw",level:"중급",tag:"페어링",description:"흩어진 엣지 조각 두 개를 한 쌍으로 묶는 리덕션 단계. 12개의 엣지를 모두 페어링합니다.",steps:["같은 색 엣지 두 조각을 찾습니다.","한 조각을 위층에 준비합니다.","공식으로 두 조각을 결합합니다.","나머지 엣지도 같은 방식으로 맞춥니다."],videoId:"KWOZHbDdOeo"},{id:"4x4-oll-parity",cube:"4x4",title:"4×4 OLL 패리티",subtitle:"Rw U2 x Rw U2 Rw U2 …",moves:"Rw U2 x Rw U2 Rw U2 Rw' U2 Lw U2 Rw' U2 Rw U2 Rw' U2 Rw'",level:"고급",tag:"패리티",description:"4×4에서만 나타나는 홀수 엣지 패리티를 해결하는 긴 공식. 리덕션 후 OLL 단계에서 사용합니다.",steps:["엣지 하나만 뒤집힌 상태를 확인합니다.","큐브를 x축으로 회전합니다.","긴 패리티 공식을 끝까지 실행합니다.","OLL을 이어서 진행합니다."],videoId:"NlVCP2ld9mQ"},{id:"4x4-pll-parity",cube:"4x4",title:"4×4 PLL 패리티",subtitle:"r2 U2 r2 Uw2 r2 Uw2",moves:"r2 U2 r2 Uw2 r2 Uw2",level:"고급",tag:"패리티",description:"마지막 층의 두 엣지가 서로 바뀐 PLL 패리티. 3×3에는 없는 4×4 전용 상황입니다.",steps:["두 엣지만 교환된 상태를 확인합니다.","얇은 r 층을 두 칸 돌립니다.","Uw2로 전체 층을 정렬합니다.","마지막 PLL을 마무리합니다."],videoId:"N7VQs8gEh54"},{id:"pyra-trigger",cube:"pyraminx",title:"피라밍크스 트리거",subtitle:"R U R′ U′",moves:"R U R' U'",level:"입문",tag:"기본기",description:"피라밍크스의 가장 기본적인 두 손가락 리듬. 3×3 트리거와 이름은 같지만 축이 다릅니다.",steps:["오른쪽 축을 시계 방향으로 돌립니다.","윗면 축을 시계 방향으로 돌립니다.","오른쪽 축을 되돌립니다.","윗면 축을 되돌립니다."],videoId:"sCJcd6FKWAc"},{id:"pyra-edges",cube:"pyraminx",title:"마지막 층 엣지 순환",subtitle:"R U R′ U R U2 R′",moves:"R U R' U R U2 R'",level:"중급",tag:"Last Layer",description:"피라밍크스 마지막 층의 엣지 세 개를 순환시키는 공식. 선우와 같은 리듬으로 실행합니다.",steps:["마지막 층의 엣지 위치를 확인합니다.","맞춰진 엣지를 뒤쪽에 둡니다.","공식을 실행합니다.","팁을 정렬해 완성합니다."],videoId:"sCJcd6FKWAc"},{id:"mega-trigger",cube:"megaminx",title:"메가밍크스 트리거",subtitle:"R U R′ U′",moves:"R U R' U'",level:"입문",tag:"기본기",description:"12개의 면을 가진 메가밍크스도 3×3 트리거로 시작합니다. 축이 많아 손목을 부드럽게 쓰는 것이 중요합니다.",steps:["R 축을 시계 방향으로 돌립니다.","U 축을 시계 방향으로 돌립니다.","R 축을 되돌립니다.","U 축을 되돌립니다."],videoId:"oVRooYDvRqg"},{id:"mega-corners",cube:"megaminx",title:"메가밍크스 코너 인서트",subtitle:"R′ D′ R D",moves:"R' D' R D",level:"중급",tag:"코너",description:"마지막 층 코너의 방향을 맞추는 기본 시퀀스. 한 코너씩 반복해서 사용합니다.",steps:["방향이 틀어진 코너를 오른쪽 위로 가져옵니다.","R′ D′ R D를 반복합니다.","코너가 맞으면 다음 코너로 이동합니다.","마지막에 아래층을 정렬합니다."],videoId:"oVRooYDvRqg"}],xi=[{id:"7Ron6MN45LY",title:"10분 만에 배우는 3×3 큐브",author:"J Perm",category:"3×3",description:"처음 큐브를 잡는 사람을 위한 가장 친절한 입문 강의. 십자부터 마지막 층까지 한 번에 따라갑니다.",tag:"입문"},{id:"GANnG5a19kg",title:"2×2 큐브 완전 입문",author:"J Perm",category:"2×2",description:"3×3보다 작지만 원리는 같습니다. 2×2의 코너와 마지막 층을 빠르게 익혀 보세요.",tag:"입문"},{id:"KWOZHbDdOeo",title:"4×4 Yau Method 풀 튜토리얼",author:"J Perm",category:"4×4",description:"4×4의 센터, 엣지 페어링, 3×3 리덕션까지. 가장 널리 쓰이는 Yau 방법을 차근차근 설명합니다.",tag:"중급"},{id:"sCJcd6FKWAc",title:"피라밍크스 이지 튜토리얼",author:"ParadoxCubing",category:"Pyraminx",description:"피라밍크스의 축과 표기법부터 마지막 층까지. 손이 작아도 따라 할 수 있는 쉬운 설명.",tag:"입문"},{id:"oVRooYDvRqg",title:"메가밍크스 비기너 튜토리얼",author:"J Perm",category:"Megaminx",description:"12면체 큐브를 처음 시작하는 분을 위한 긴 호흡의 입문 강의. 층별로 차근차근 완성합니다.",tag:"입문"},{id:"Ar_Zit1VLG0",title:"6분 만에 배우는 F2L",author:"J Perm",category:"3×3",description:"공식을 외우지 않고 첫 두 층을 맞추는 직관적 F2L. CFOP로 넘어가는 첫 단계입니다.",tag:"CFOP"},{id:"GhmYBgLoQQg",title:"2-Look OLL 완전 정복",author:"J Perm",category:"3×3",description:"OLL 57개를 외우기 전에, 두 단계로 윗면을 완성하는 실전적인 방법.",tag:"CFOP"},{id:"f_Yor-ydZjs",title:"2-Look PLL 완전 정복",author:"J Perm",category:"3×3",description:"마지막 층을 두 번의 공식으로 정리하는 2-Look PLL. T-Perm과 U-Perm을 중심으로 설명합니다.",tag:"CFOP"},{id:"NlVCP2ld9mQ",title:"4×4 OLL 패리티 예측",author:"J Perm",category:"4×4",description:"4×4에서만 나타나는 OLL 패리티를 이해하고 예측하는 방법. 리덕션 이후 시간을 줄여 줍니다.",tag:"고급"},{id:"N7VQs8gEh54",title:"4×4 PLL 패리티 베스트",author:"J Perm",category:"4×4",description:"마지막 층에서 두 엣지가 바뀌는 PLL 패리티를 가장 빠르게 처리하는 방법.",tag:"고급"}],km=["7Ron6MN45LY","GANnG5a19kg","KWOZHbDdOeo","sCJcd6FKWAc"];function uc(i){return Ja.find(e=>e.id===i)}function hc(i){return xi.find(e=>e.id===i)}function Pa(i){return Ca.find(e=>e.id===i)||Ca[0]}function Hr(i,e="hqdefault"){return`https://i.ytimg.com/vi/${i}/${e}.jpg`}function dc(i,e=!1){const t=new URLSearchParams({rel:"0",modestbranding:"1",playsinline:"1"});return e&&t.set("autoplay","1"),`https://www.youtube-nocookie.com/embed/${i}?${t.toString()}`}const Vm=new Za(.97,.97,.97,5,.085),Gm=new nc({color:724243,roughness:.32,metalness:.18}),Hm=Jm(.835,.835,.12),Wm={U:0,R:9,F:18,D:27,L:36,B:45},Xm={U:[0,1,0],D:[0,-1,0],R:[1,0,0],L:[-1,0,0],F:[0,0,1],B:[0,0,-1]},$m={U:[-Math.PI/2,0,0],D:[Math.PI/2,0,0],R:[0,Math.PI/2,0],L:[0,-Math.PI/2,0],F:[0,0,0],B:[0,Math.PI,0]},qm={U:"y",D:"y",R:"x",L:"x",F:"z",B:"z"},Ym={U:1,D:-1,R:1,L:-1,F:1,B:-1},Zm={U:-1,D:1,R:-1,L:1,F:-1,B:1};function Jm(i,e,t){const n=-i/2,r=-e/2,s=new Kl;return s.moveTo(n+t,r),s.lineTo(n+i-t,r),s.quadraticCurveTo(n+i,r,n+i,r+t),s.lineTo(n+i,r+e-t),s.quadraticCurveTo(n+i,r+e,n+i-t,r+e),s.lineTo(n+t,r+e),s.quadraticCurveTo(n,r+e,n,r+e-t),s.lineTo(n,r+t),s.quadraticCurveTo(n,r,n+t,r),new Ya(s,8)}function Km(i,e,t,n){let r,s;return i==="U"?(r=n+1,s=e+1):i==="D"?(r=1-n,s=e+1):i==="F"?(r=1-t,s=e+1):i==="R"?(r=1-t,s=1-n):i==="L"?(r=1-t,s=n+1):(r=1-t,s=1-e),Wm[i]+r*3+s}function jm(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Qm(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,4,256/2,256/2,256/2);return n.addColorStop(0,"rgba(0,0,0,0.55)"),n.addColorStop(.35,"rgba(0,0,0,0.32)"),n.addColorStop(.7,"rgba(0,0,0,0.08)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,256,256),new hh(e)}class fc{constructor(e,t={}){this.container=e,this.options=t,this.facelets=t.facelets||"U".repeat(9)+"R".repeat(9)+"F".repeat(9)+"D".repeat(9)+"L".repeat(9)+"B".repeat(9),this.cubies=[],this.active=!0,this.destroyed=!1,this.animating=!1,this.animationToken=0,this.tiltEnabled=!1,this.tiltYaw=0,this.tiltPitch=0,this.targetYaw=t.yaw??-.6,this.targetPitch=t.pitch??-.02,this.dragging=!1,this.lastPointer=null,this.velocity={x:0,y:0},this.clock=new Kh,this.scene=new ah,this.camera=new kt(34,1,.1,100),this.camera.position.set(0,3.5,8.45),this.camera.lookAt(0,0,0),this.renderer=new zm({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=zt,this.renderer.toneMapping=Tl,this.renderer.toneMappingExposure=1.12,this.renderer.setClearColor(0,0),this.renderer.domElement.setAttribute("aria-label","인터랙티브 3D 큐브"),this.container.appendChild(this.renderer.domElement),this.world=new Pn,this.world.rotation.order="YXZ",this.world.rotation.set(this.targetPitch,this.targetYaw,0),this.scene.add(this.world),this.cubeGroup=new Pn,this.world.add(this.cubeGroup),this.addLights(),this.addShadow(),this.build(this.facelets),this.bindPointer(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize(),this.animate=this.animate.bind(this),this.frame=requestAnimationFrame(this.animate)}addLights(){const e=new $h(16119807,1119002,1.55);this.scene.add(e);const t=new Yo(16777215,3.1);t.position.set(5,8,7),this.scene.add(t);const n=new Yo(8382975,1.5);n.position.set(-6,2,-5),this.scene.add(n);const r=new qo(16758891,15,16,2);r.position.set(4,-3,4),this.scene.add(r);const s=new qo(13238085,10,15,2);s.position.set(-4,4,2),this.scene.add(s),this.scene.add(new Zh(16777215,.26))}addShadow(){const e=new Wa({map:Qm(),transparent:!0,depthWrite:!1,opacity:.7}),t=new jt(new or(4.8,4.8),e);t.rotation.x=-Math.PI/2,t.position.y=-2.38,this.shadow=t,this.scene.add(t)}resize(){if(this.destroyed)return;const e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.shadow&&(this.shadow.position.y=e<420?-2.05:-2.32)}clear(){for(const e of[...this.cubeGroup.children])this.cubeGroup.remove(e);this.cubies=[]}disposeStickers(){for(const e of this.cubies)for(const t of e.stickers)t.material.dispose()}build(e){this.disposeStickers(),this.clear(),this.facelets=e;const t=[-1,0,1];for(const n of t)for(const r of t)for(const s of t){if(n===0&&r===0&&s===0)continue;const a=new Pn;a.position.set(n*1.015,r*1.015,s*1.015);const o=new jt(Vm,Gm);o.castShadow=!1,a.add(o);const c=[];for(const[l,u]of Object.entries(Xm)){const[h,f,p]=u;if(h!==0&&n!==h||f!==0&&r!==f||p!==0&&s!==p)continue;const g=Km(l,n,r,s),v=e[g]||"X",m=Dn[v],d=new nc({color:m?m.hex:"#687083",roughness:.43,metalness:.04,emissive:m?new et(m.hex):new et("#262c38"),emissiveIntensity:v==="X"?.05:.028}),T=new jt(Hm,d);T.position.set(h*.492,f*.492,p*.492),T.rotation.set(...$m[l]),a.add(T),c.push(T)}this.cubeGroup.add(a),this.cubies.push({group:a,x:n,y:r,z:s,stickers:c})}}setState(e){e!==this.facelets&&this.build(e)}setActive(e){this.active=e}bindPointer(){const e=this.renderer.domElement;this.onPointerDown=t=>{t.button!==void 0&&t.button!==0||(this.dragging=!0,this.lastPointer={x:t.clientX,y:t.clientY},this.velocity={x:0,y:0},e.setPointerCapture?.(t.pointerId),this.options.onInteract?.())},this.onPointerMove=t=>{if(!this.dragging||!this.lastPointer)return;const n=t.clientX-this.lastPointer.x,r=t.clientY-this.lastPointer.y;this.lastPointer={x:t.clientX,y:t.clientY},this.targetYaw+=n*.008,this.targetPitch=pr.clamp(this.targetPitch+r*.006,-.72,.72),this.velocity={x:n*8e-4,y:r*6e-4}},this.onPointerUp=()=>{this.dragging=!1,this.lastPointer=null},e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("pointerup",this.onPointerUp),e.addEventListener("pointercancel",this.onPointerUp),e.addEventListener("pointerleave",this.onPointerUp)}resetView(){this.targetYaw=this.options.yaw??-.6,this.targetPitch=this.options.pitch??-.02,this.velocity={x:0,y:0}}setTiltEnabled(e){this.tiltEnabled=e,e||(this.tiltYaw=0,this.tiltPitch=0)}applyOrientation(e=0,t=0){this.tiltEnabled&&(this.tiltYaw=pr.clamp(e*.014,-.5,.5),this.tiltPitch=pr.clamp((t-38)*.007,-.35,.35))}async animateMove(e,t,n=260){if(this.destroyed)return;const r=e[0],s=qm[r],a=Ym[r];if(!s){this.setState(t);return}const o=e.includes("2")?2:1,c=e.includes("'"),l=Zm[r]*(Math.PI/2)*o*(c?-1:1),u=++this.animationToken;this.animating=!0;const h=new Pn;this.cubeGroup.add(h);const f=s==="x"?0:s==="y"?1:2;for(const g of this.cubies)[g.x,g.y,g.z][f]===a&&h.attach(g.group);const p=performance.now();await new Promise(g=>{const v=m=>{if(this.destroyed){g();return}const d=Math.min(1,(m-p)/n);h.rotation[s]=l*jm(d),d<1?requestAnimationFrame(v):g()};requestAnimationFrame(v)}),this.animating=!1,!(u!==this.animationToken||this.destroyed)&&this.build(t)}cancelAnimations(){this.animationToken+=1,this.animating=!1,this.build(this.facelets)}animate(){if(this.destroyed||(this.frame=requestAnimationFrame(this.animate),!this.active))return;const e=Math.min(this.clock.getDelta(),.05);!this.dragging&&Math.abs(this.velocity.x)+Math.abs(this.velocity.y)>2e-5&&(this.targetYaw+=this.velocity.x*16,this.targetPitch=pr.clamp(this.targetPitch+this.velocity.y*16,-.72,.72),this.velocity.x*=.93,this.velocity.y*=.93);const t=this.targetYaw+this.tiltYaw,n=this.targetPitch+this.tiltPitch;this.world.rotation.y+=(t-this.world.rotation.y)*Math.min(1,e*11),this.world.rotation.x+=(n-this.world.rotation.x)*Math.min(1,e*11);const r=this.options.float?Math.sin(performance.now()*.0012)*.035:0;this.cubeGroup.position.y=r,this.renderer.render(this.scene,this.camera)}destroy(){this.destroyed=!0,cancelAnimationFrame(this.frame),this.resizeObserver?.disconnect();const e=this.renderer.domElement;e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointercancel",this.onPointerUp),e.removeEventListener("pointerleave",this.onPointerUp),this.disposeStickers(),this.shadow?.material.map?.dispose(),this.shadow?.material.dispose(),this.shadow?.geometry.dispose(),this.renderer.dispose(),e.remove()}}class ex{constructor(){this.ready=!1,this.failed=!1,this.pending=new Map,this.nextId=1,this.statusListeners=new Set,this.readyPromise=new Promise((e,t)=>{this.resolveReady=e,this.rejectReady=t}),this.readyPromise.catch(()=>{});try{this.worker=new Worker(new URL("/assets/solver.worker-BowtimFz.js",import.meta.url),{type:"module"}),this.worker.onmessage=e=>this.handleMessage(e.data),this.worker.onerror=e=>{this.failed=!0,this.emitStatus("error");const t=new Error(e.message||"솔버 워커를 시작할 수 없습니다.");this.rejectReady?.(t);for(const n of this.pending.values())n.reject(t);this.pending.clear()},this.worker.postMessage({type:"init"})}catch(e){this.failed=!0,this.emitStatus("error"),this.rejectReady?.(e)}}handleMessage(e){if(e.type==="ready"){this.ready=!0,this.emitStatus("ready"),this.resolveReady?.();return}if(e.type==="init-error"){this.failed=!0,this.emitStatus("error"),this.rejectReady?.(new Error(e.message));return}const t=this.pending.get(e.id);t&&(this.pending.delete(e.id),clearTimeout(t.timer),e.type==="solution"?t.resolve(e.solution):t.reject(new Error(e.message||"풀이를 계산하지 못했습니다.")))}onStatus(e){return this.statusListeners.add(e),this.ready?e("ready"):this.failed?e("error"):e("loading"),()=>this.statusListeners.delete(e)}emitStatus(e){for(const t of this.statusListeners)t(e)}async solve(e){if(await this.readyPromise,this.failed)throw new Error("솔버를 사용할 수 없습니다.");const t=this.nextId++;return this.emitStatus("solving"),new Promise((n,r)=>{const s=setTimeout(()=>{this.pending.delete(t),this.emitStatus("ready"),r(new Error("풀이 계산 시간이 초과되었습니다."))},3e4);this.pending.set(t,{resolve:a=>{this.emitStatus("ready"),n(a)},reject:a=>{this.emitStatus("ready"),r(a)},timer:s}),this.worker.postMessage({type:"solve",id:t,facelets:e})})}destroy(){this.worker?.terminate()}}const _l={arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',arrowUpRight:'<path d="M7 17 17 7M8 7h9v9"/>',play:'<path d="m8 5 11 7-11 7Z"/>',pause:'<path d="M9 5v14M15 5v14"/>',shuffle:'<path d="M3 7h3c4 0 5 10 9 10h6M18 4l3 3-3 3M3 17h3c1.7 0 2.8-1.8 4-4M18 14l3 3-3 3"/>',reset:'<path d="M3 11a9 9 0 1 0 3-6.7L3 7"/><path d="M3 3v4h4"/>',cube:'<path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2Z"/><path d="m4 6.5 8 4.5 8-4.5M12 11v9"/>',grid:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 4v16M15 4v16M4 9h16M4 15h16"/>',book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M4 5.5v16M8 7h8M8 11h6"/>',video:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3Z"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',check:'<path d="m5 12 4 4L19 6"/>',copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"/>',sparkles:'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8Z"/>',tilt:'<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 7h4M10 17h4"/>',drag:'<path d="M8 12h8M12 8v8"/><path d="m5 12 2-2M5 12l2 2M19 12l-2-2M19 12l-2 2M12 5l-2 2M12 5l2 2M12 19l-2-2M12 19l2-2"/>',rotate:'<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',scan:'<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M8 12h8M12 8v8"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',layers:'<path d="m12 2 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',warning:'<path d="M12 3 2.7 19h18.6Z"/><path d="M12 9v4M12 17h.01"/>',next:'<path d="m6 5 9 7-9 7ZM19 5v14"/>',lock:'<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>',target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>',flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',hand:'<path d="M8 12V6a2 2 0 1 1 4 0v5-7a2 2 0 1 1 4 0v7-5a2 2 0 1 1 4 0v8c0 4-3 7-7 7h-1a7 7 0 0 1-5-2l-3-4a2 2 0 0 1 3-3l2 2"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',chevronRight:'<path d="m9 6 6 6-6 6"/>',eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',camera:'<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="4"/>',keyboard:'<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h.01M11 10h.01M15 10h.01M18 10h.01M7 14h.01M11 14h.01M15 14h3"/>',trash:'<path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13h10l1-13M10 11v5M14 11v5"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-.8.6-1.5 1-1.5 2M12 17h.01"/>'};function De(i,e=18,t=""){const n=_l[i]||_l.info;return`<svg viewBox="0 0 24 24" width="${e}" height="${e}" class="${t}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${n}</svg>`}const Ke=(i,e=document)=>e.querySelector(i),Ti=(i,e=document)=>[...e.querySelectorAll(i)],Ai=new Kn().asString(),Qr=["U","R","F","D","L","B"],tx={U:4,R:13,F:22,D:31,L:40,B:49},nx={U:"위",R:"오른쪽",F:"앞",D:"아래",L:"왼쪽",B:"뒤"};function pc(){const i={};for(const e of Qr)i[e]=Array(9).fill(null),i[e][4]=e;return i}function es(i){return Qr.map(e=>i[e].map(t=>t||"X").join("")).join("")}function ix(i){const e={};return Qr.forEach((t,n)=>{e[t]=i.slice(n*9,n*9+9).split("")}),e}function cr(i){return String(i||"").trim().split(/\s+/).filter(Boolean)}function rx(i){return i?i.endsWith("'")?i.slice(0,-1):i.endsWith("2")?i:`${i}'`:""}function tt(i){return String(i).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ur(i){return i===Ai}function sx(i){return Dn[i]?.hex||"#687083"}function ax(i){return new Promise(e=>setTimeout(e,i))}function ox(){const i=[[210,48],[338,120],[210,192],[82,120]],e=[[82,120],[210,192],[210,336],[82,264]],t=[[210,192],[338,120],[338,264],[210,336]],n=(o,c,l)=>[o[0]+(c[0]-o[0])*l,o[1]+(c[1]-o[1])*l],r=(o,c,l)=>{const u=n(o[0],o[1],c),h=n(o[3],o[2],c);return n(u,h,l)},s=(o,c,l="")=>`<polygon points="${o.map(u=>`${u[0].toFixed(1)},${u[1].toFixed(1)}`).join(" ")}" fill="${c}" ${l}/>`,a=(o,c,l)=>{let u="";for(let f=0;f<3;f+=1)for(let p=0;p<3;p+=1){const g=(p+.055)/3,v=(p+1-.055)/3,m=(f+.055)/3,d=(f+1-.055)/3,T=[r(o,g,m),r(o,v,m),r(o,v,d),r(o,g,d)],S=l+f*.018+p*.012;u+=s(T,c,`opacity="${Math.min(1,S)}"`)}return u};return`
    <svg class="cube-art" viewBox="0 0 420 420" role="img" aria-label="CUBE LAB 3D 큐브 일러스트">
      <defs>
        <linearGradient id="topShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#efffc9" stop-opacity=".35"/>
          <stop offset=".5" stop-color="#c9ff45" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="cubeShadow">
          <stop offset="0" stop-color="#000" stop-opacity=".55"/>
          <stop offset="1" stop-color="#000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="210" cy="350" rx="142" ry="25" fill="url(#cubeShadow)"/>
      ${s(i,"#080a0f")}
      ${s(e,"#080a0f")}
      ${s(t,"#080a0f")}
      ${a(i,"#c9ff45",.92)}
      ${a(e,"#4edfc7",.8)}
      ${a(t,"#ff6b73",.87)}
      ${s(i,"url(#topShine)")}
      <polyline points="82,120 210,48 338,120 338,264 210,336 82,264 82,120" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1.4"/>
      <path d="M210 192v144M82 120l128 72 128-72" fill="none" stroke="rgba(0,0,0,.55)" stroke-width="2"/>
    </svg>
  `}const y={view:"home",solverStatus:"loading",cube:new Kn,facelets:Ai,moveHistory:[],prime:!1,solution:null,solutionPlaying:!1,playToken:0,turning:!1,queue:[],queueEpoch:0,generation:0,solveInitialized:!1,solveCube3D:null,myCubeInitialized:!1,myCube3D:null,myCube:{faces:pc(),selected:"U",solving:!1,solution:null,status:"idle",error:""},learnInitialized:!1,learnFilter:"all",learnQuery:"",selectedVideo:xi[0].id,videoPlaying:!1,tiltEnabled:!1,tiltAvailable:typeof DeviceOrientationEvent<"u",tiltHandler:null},Ka=new ex;Ka.onStatus(i=>{y.solverStatus=i,an()});function Li(i,{push:e=!0,scroll:t=!0}={}){const r=["home","solve","mycube","learn","videos"].includes(i)?i:"home";y.view==="solve"&&r!=="solve"&&(y.playToken+=1,y.solutionPlaying=!1,y.solveCube3D?.setActive(!1)),y.view==="mycube"&&r!=="mycube"&&y.myCube3D?.setActive(!1),y.view==="videos"&&r!=="videos"&&(y.videoPlaying=!1),y.view=r,Ti(".view").forEach(s=>{s.hidden=s.dataset.view!==r}),Ti(".desktop-nav [data-nav], .mobile-nav [data-nav]").forEach(s=>{s.classList.toggle("active",s.dataset.nav===r)}),r==="solve"?y.solveInitialized?(y.solveCube3D?.setActive(!0),Qn()):hx():r==="mycube"?y.myCubeInitialized?(y.myCube3D?.setActive(!0),ir(),In()):vx():r==="learn"?y.learnInitialized?Yr():Tx():r==="videos"&&Ua(),e&&history.pushState({view:r},"",`#${r}`),t&&window.scrollTo({top:0,behavior:"auto"})}window.addEventListener("popstate",i=>{Li(i.state?.view||location.hash.replace("#","")||"home",{push:!1,scroll:!1})});window.addEventListener("scroll",()=>{Ke("#topbar")?.classList.toggle("scrolled",window.scrollY>8)});function lx(i){return i==="ready"?{label:"솔버 준비 완료",title:"Kociemba 솔버 준비 완료",sub:"어떤 상태든 22수 이내의 해를 찾을 수 있어요."}:i==="solving"?{label:"최적 해 계산 중",title:"최적 해를 계산하고 있어요",sub:"잠시만 기다리면 가장 짧은 풀이를 보여드릴게요."}:i==="error"?{label:"솔버 오프라인",title:"솔버를 시작하지 못했어요",sub:"페이지를 새로고침하면 다시 시도합니다."}:{label:"솔버 준비 중",title:"솔버를 준비하고 있어요",sub:"처음 한 번만 계산 테이블을 만듭니다."}}function an(){const i=lx(y.solverStatus),e=Ke("#solverPill");if(e){e.classList.toggle("ready",y.solverStatus==="ready"),e.classList.toggle("busy",y.solverStatus==="solving"||y.solverStatus==="loading");const s=Ke("#solverLabel");s&&(s.textContent=i.label)}const t=Ke("#solverStatus");t&&(t.className=`status-hero ${y.solverStatus==="ready"?"ready":y.solverStatus==="solving"?"solving":""}`,t.innerHTML=`
      <div class="status-orb">${De(y.solverStatus==="ready"?"check":y.solverStatus==="solving"?"rotate":"bolt",24)}</div>
      <div><b>${i.title}</b><span>${i.sub}</span></div>
    `);const n=Ke("#solveCurrentButton");n&&(n.disabled=y.solverStatus==="loading"||y.solverStatus==="solving"||y.solverStatus==="error",n.innerHTML=y.solverStatus==="loading"?`${De("clock",17)} 솔버 준비 중`:y.solverStatus==="solving"?`${De("rotate",17)} 계산 중…`:`${De("sparkles",17)} 최적 풀이 찾기`);const r=Ke("#solveMyCubeButton");r&&(r.disabled=y.myCube.solving||y.solverStatus==="loading"||y.solverStatus==="error",r.innerHTML=y.myCube.solving?`${De("rotate",17)} 풀이 계산 중…`:y.solverStatus==="loading"?`${De("clock",17)} 솔버 준비 중`:`${De("sparkles",17)} 내 큐브 풀기`)}function cx(){const i=Ke("#view-home"),e=km.map(t=>hc(t)).filter(Boolean);i.innerHTML=`
    <div class="hero">
      <div class="hero-copy">
        <div class="hero-badge"><b>NEW</b> 3D 솔버 · 내 큐브 입력 · 유튜브 강의</div>
        <h1>큐브는<br/><span class="accent">공식</span>보다<br/><span class="outline">순서</span>입니다.</h1>
        <p>가상 큐브를 직접 돌려보고, 내 큐브 색을 입력해 풀이를 받고, 검증된 유튜브 강의로 원리를 익히세요. 3×3부터 메가밍크스까지 한곳에서.</p>
        <div class="hero-cta">
          <button class="btn btn-primary" data-nav="solve">${De("cube",18)} 3D 큐브 풀기</button>
          <button class="btn btn-ghost" data-nav="mycube">${De("grid",18)} 내 큐브 입력</button>
        </div>
        <div class="hero-meta">
          <span>${De("check",14)} Kociemba 솔버</span>
          <span>${De("check",14)} 터치 무브 패드</span>
          <span>${De("check",14)} 기울기 시점</span>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-glow"></div>
        <div class="hero-ring"></div>
        <div class="hero-ring hero-ring-2"></div>
        ${ox()}
        <div class="hero-chip hero-chip-a">
          <span class="chip-icon">${De("sparkles",16)}</span>
          <div><b>22수 이내</b>최적 해 계산</div>
        </div>
        <div class="hero-chip hero-chip-b">
          <span class="chip-icon">${De("video",16)}</span>
          <div><b>10개 강의</b>유튜브 연동</div>
        </div>
      </div>
    </div>

    <div class="stat-strip">
      <div class="stat"><b>22<span>수</span></b><small>최대 풀이 길이</small></div>
      <div class="stat"><b>20<span>+</span></b><small>큐브 공식</small></div>
      <div class="stat"><b>5<span>종</span></b><small>큐브 타입</small></div>
      <div class="stat"><b>10<span>개</span></b><small>유튜브 강의</small></div>
    </div>

    <div class="section-head">
      <div>
        <h2>어디서 시작할까요?</h2>
        <p>풀고 싶다면 솔버, 원리가 궁금하다면 공식과 강의.</p>
      </div>
    </div>
    <div class="quick-grid">
      <button class="quick-card" data-nav="solve" style="--card-accent:#c9ff45;--card-glow:rgba(201,255,69,.12)">
        <span class="quick-icon">${De("cube",21)}</span>
        <span class="quick-arrow">${De("arrowUpRight",18)}</span>
        <h3>가상 큐브 풀기</h3>
        <p>3D 큐브를 스크램블하고 Kociemba 솔버의 최적 해를 한 수씩 재생합니다.</p>
      </button>
      <button class="quick-card" data-nav="mycube" style="--card-accent:#6fe7ff;--card-glow:rgba(111,231,255,.12)">
        <span class="quick-icon">${De("grid",21)}</span>
        <span class="quick-arrow">${De("arrowUpRight",18)}</span>
        <h3>내 큐브 풀기</h3>
        <p>실제 큐브의 여섯 면 색을 입력하면 풀이 순서를 알려드립니다.</p>
      </button>
      <button class="quick-card" data-nav="learn" style="--card-accent:#ff9b4a;--card-glow:rgba(255,155,74,.12)">
        <span class="quick-icon">${De("book",21)}</span>
        <span class="quick-arrow">${De("arrowUpRight",18)}</span>
        <h3>공식 사전</h3>
        <p>3×3, 2×2, 4×4, 피라밍크스, 메가밍크스 공식을 난이도별로.</p>
      </button>
    </div>

    <div class="section-head">
      <div>
        <h2>지금 보기 좋은 강의</h2>
        <p>유튜브 원본으로 연결되는 검증된 튜토리얼.</p>
      </div>
      <button class="text-link" data-nav="videos">전체 강의 ${De("arrow",15)}</button>
    </div>
    <div class="video-rail">
      ${e.map(t=>`
        <button class="video-mini" data-action="open-video" data-id="${t.id}">
          <div class="video-thumb">
            <img src="${Hr(t.id)}" alt="" loading="lazy" />
            <span class="play-dot">${De("play",14)}</span>
          </div>
          <div class="video-mini-body">
            <b>${tt(t.title)}</b>
            <span>${tt(t.author)} · ${tt(t.tag)}</span>
          </div>
        </button>
      `).join("")}
    </div>
  `}const ux=[{face:"U",label:"윗면"},{face:"R",label:"오른쪽"},{face:"F",label:"앞면"},{face:"D",label:"아랫면"},{face:"L",label:"왼쪽"},{face:"B",label:"뒷면"}];function hx(){const i=Ke("#view-solve");i.innerHTML=`
    <div class="page-head">
      <div>
        <span class="eyebrow">3D SOLVER</span>
        <h1>가상 큐브 풀기</h1>
        <p>큐브를 스크램블하거나 직접 돌려보세요. 솔버가 현재 상태에서 가장 짧은 풀이를 찾아 한 수씩 재생합니다.</p>
      </div>
      <div class="page-head-side">
        <span class="meta-chip">${De("sparkles",12)} <strong>Kociemba</strong> two-phase</span>
      </div>
    </div>

    <div class="solve-layout">
      <div class="stage-card">
        <div class="stage-top">
          <div class="stage-meta">
            <span class="meta-chip"><span class="live-dot"></span> 3×3</span>
            <span class="meta-chip">무브 <strong id="moveCount">0</strong></span>
            <span class="meta-chip" id="cubeStateChip"><strong>완성</strong></span>
          </div>
          <div class="stage-actions">
            <button class="stage-icon" data-action="toggle-tilt" aria-label="기울기 시점" aria-pressed="false" title="기울여서 보기">${De("tilt",16)}</button>
            <button class="stage-icon" data-action="reset-view" aria-label="시점 초기화" title="시점 초기화">${De("target",16)}</button>
            <button class="stage-icon" data-action="toggle-fullscreen" aria-label="큐브 크게 보기" title="큐브 크게 보기">${De("eye",16)}</button>
          </div>
        </div>

        <div class="cube-canvas" id="solveCanvas"></div>
        <div class="canvas-hint">${De("drag",12)} 드래그해서 큐브를 돌려보세요</div>

        <div class="stage-tools">
          <div class="tool-row">
            <button class="pill-btn accent" data-action="scramble">${De("shuffle",14)} 스크램블</button>
            <button class="pill-btn" data-action="undo">${De("rotate",14)} 되돌리기</button>
            <button class="pill-btn" data-action="reset-cube">${De("reset",14)} 초기화</button>
          </div>
          <span class="solve-badge"><span class="dot"></span> 터치로 돌리기</span>
        </div>

        <div class="movepad">
          <div class="movepad-head">
            <span class="movepad-title">${De("hand",14)} 무브 패드</span>
            <button class="prime-toggle" data-action="toggle-prime" aria-pressed="false">
              <span>역방향</span><span class="toggle-track"></span>
            </button>
          </div>
          <div class="move-grid">
            ${ux.map(({face:e,label:t})=>`
              <button class="move-btn" data-action="turn" data-face="${e}" aria-label="${t} ${e} 회전">
                <b data-face-letter>${e}</b><span>${t}</span>
              </button>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="side-stack">
        <div class="panel">
          <div class="panel-head">
            <h2 class="panel-title">${De("sparkles",16)} 솔버</h2>
            <span class="panel-sub">최대 22수</span>
          </div>
          <div id="solverStatus"></div>
          <button class="btn btn-primary btn-block" id="solveCurrentButton" data-action="solve-current" style="margin-top:12px">${De("sparkles",17)} 최적 풀이 찾기</button>
          <div id="solutionPanel" style="margin-top:16px"></div>
        </div>
        <div class="panel">
          <div class="panel-head">
            <h2 class="panel-title">${De("clock",16)} 무브 기록</h2>
            <span class="panel-sub" id="historyCount">0수</span>
          </div>
          <div class="history-list" id="historyPanel"></div>
        </div>
      </div>
    </div>
  `,y.solveCube3D=new fc(Ke("#solveCanvas"),{facelets:y.facelets,float:!0,yaw:-.62,pitch:-.02}),y.solveCube3D.setTiltEnabled(y.tiltEnabled),y.solveInitialized=!0,an(),Qn()}function ja(){Ti(".prime-toggle").forEach(i=>i.setAttribute("aria-pressed",String(y.prime))),Ti(".move-btn").forEach(i=>{i.classList.toggle("prime",y.prime);const e=Ke("[data-face-letter]",i);e&&(e.textContent=y.prime?`${i.dataset.face}′`:i.dataset.face)})}function Qn(){if(!y.solveInitialized)return;an(),ja();const i=Ke("#moveCount");i&&(i.textContent=String(y.moveHistory.length));const e=Ke("#cubeStateChip");e&&(e.innerHTML=ur(y.facelets)?'<strong style="color:var(--green)">완성</strong>':'<strong style="color:var(--yellow)">스크램블</strong>');const t=Ke("#historyCount");t&&(t.textContent=`${y.moveHistory.length}수`),dx(),Jt()}function dx(){const i=Ke("#historyPanel");if(i){if(!y.moveHistory.length){i.innerHTML='<span class="history-empty">아직 움직임이 없어요. 스크램블하거나 무브 패드로 직접 돌려보세요.</span>';return}i.innerHTML=y.moveHistory.slice(-40).map(e=>`<span class="history-chip">${tt(e)}</span>`).join("")}}function Jt(){const i=Ke("#solutionPanel");if(!i)return;if(!y.solution){i.innerHTML=`
      <div class="solution-empty">
        ${De("sparkles",29)}
        <b>아직 풀이가 없어요</b>
        <p>스크램블한 뒤 ‘최적 풀이 찾기’를 누르면 가장 짧은 순서를 알려드려요.</p>
      </div>
    `;return}const{moves:e,index:t,title:n,source:r}=y.solution;i.innerHTML=`
    <div class="solution-toolbar">
      <span class="solution-count"><b>${e.length}</b>수${n?` · ${tt(n)}`:""}</span>
      <span class="panel-sub">${r==="mycube"?"내 큐브":r==="algorithm"?"공식 재생":"최적 해"}</span>
    </div>
    <div class="solution-tokens">
      ${e.map((s,a)=>`
        <button class="move-token ${a<t?"done":""} ${a===t?"active":""}" data-action="apply-solution-token" data-index="${a}">${tt(s)}</button>
      `).join("")}
    </div>
    <div class="solution-actions">
      <button class="btn btn-primary btn-sm" data-action="play-solution">${De(y.solutionPlaying?"pause":"play",15)} ${y.solutionPlaying?"일시정지":t>=e.length?"다시 재생":"전체 재생"}</button>
      <button class="btn btn-ghost btn-sm" data-action="step-solution">${De("next",15)} 한 수</button>
      <button class="btn btn-quiet btn-sm" data-action="copy-solution">${De("copy",15)} 복사</button>
    </div>
  `}function Ui(i,e={}){const t=y.generation;return new Promise(n=>{y.queue.push({move:i,options:e,generation:t,resolve:n}),La()})}function Qa(){for(const i of y.queue)i.resolve();y.queue=[],y.queueEpoch+=1}async function La(){if(y.turning)return;y.turning=!0;const i=y.queueEpoch;for(;y.queue.length;){if(i!==y.queueEpoch){y.turning=!1,y.queue.length&&La();return}const e=y.queue.shift();if(e.generation!==y.generation){e.resolve();continue}const t=new Kn(y.cube);t.move(e.move);const n=e.options.duration??240;if(await y.solveCube3D?.animateMove(e.move,t.asString(),n),e.generation!==y.generation){e.resolve();continue}y.cube=t,y.facelets=t.asString(),e.options.record!==!1&&y.moveHistory.push(e.move),e.options.fromSolution||(y.solution=null,y.solutionPlaying=!1),Qn(),e.resolve()}y.turning=!1,y.queue.length&&La()}function mc(i){navigator.vibrate?.(7);const e=`${i}${y.prime?"'":""}`;y.playToken+=1,y.solutionPlaying=!1,Ui(e,{duration:240})}function eo({silent:i=!1,keepSolution:e=!1}={}){y.generation+=1,y.playToken+=1,Qa(),y.turning=!1,y.solveCube3D?.cancelAnimations?.(),y.cube=new Kn,y.facelets=Ai,y.moveHistory=[],e||(y.solution=null),y.solutionPlaying=!1,y.solveCube3D?.setState(Ai),y.solveCube3D?.resetView(),Qn(),i||Qe("큐브를 완성 상태로 되돌렸어요.")}function fx(){const i=["U","R","F","D","L","B"],e=["","'","2"],t=[];let n="";for(;t.length<20;){const s=i[Math.floor(Math.random()*i.length)];if(s===n)continue;const a=e[Math.floor(Math.random()*e.length)];t.push(`${s}${a}`),n=s}y.generation+=1,y.playToken+=1,Qa(),y.turning=!1,y.solveCube3D?.cancelAnimations?.(),y.cube=new Kn,y.facelets=Ai,y.moveHistory=[],y.solution=null,y.solutionPlaying=!1,y.solveCube3D?.setState(Ai),Qn();let r=Promise.resolve();for(const s of t)r=r.then(()=>Ui(s,{duration:105,record:!0}));return Qe("20수 스크램블을 만들었어요."),r}async function px(){if(y.turning||y.queue.length){Qe("회전이 끝난 뒤 다시 시도해 주세요.");return}if(y.solverStatus!=="ready"){Qe("솔버가 아직 준비되지 않았어요. 잠시만 기다려 주세요.","error");return}if(ur(y.facelets)){Qe("이미 완성된 큐브예요. 먼저 스크램블해 보세요.");return}y.solutionPlaying=!1,y.solverStatus="solving",an();try{const i=await Ka.solve(y.facelets),e=cr(i);e.length?(y.solution={moves:e,index:0,source:"solve",title:""},Qe(`${e.length}수의 최적 풀이를 찾았어요.`)):(y.solution=null,Qe("이미 완성된 상태예요."))}catch(i){console.error(i),y.solution=null,Qe("풀이를 찾지 못했어요. 큐브 상태를 확인해 주세요.","error")}finally{y.solverStatus==="solving"&&(y.solverStatus="ready"),an(),Jt()}}async function xc(){if(!y.solution)return;if(y.solutionPlaying){y.playToken+=1,y.solutionPlaying=!1,Jt();return}if(y.solution.index>=y.solution.moves.length){const e=y.solution;eo({silent:!0,keepSolution:!0}),y.solution={...e,index:0},Jt()}const i=++y.playToken;for(y.solutionPlaying=!0,Jt();y.solution&&y.solution.index<y.solution.moves.length&&i===y.playToken;){const e=y.solution.moves[y.solution.index];if(await Ui(e,{duration:215,fromSolution:!0}),i!==y.playToken||!y.solution)break;y.solution.index+=1,Jt()}i===y.playToken&&(y.solutionPlaying=!1,Jt(),ur(y.facelets)&&no())}async function mx(){if(!y.solution)return;if(y.solutionPlaying&&(y.playToken+=1,y.solutionPlaying=!1),y.solution.index>=y.solution.moves.length){Qe("풀이를 모두 적용했어요.");return}const i=y.solution.moves[y.solution.index];await Ui(i,{duration:215,fromSolution:!0}),y.solution&&(y.solution.index+=1,Jt(),ur(y.facelets)&&no())}async function xx(i){if(!y.solution||y.solutionPlaying)return;if(i<y.solution.index){Qe("이미 지나간 수예요. 처음부터 재생해 보세요.");return}const e=++y.playToken;for(y.solutionPlaying=!0;y.solution&&y.solution.index<=i&&e===y.playToken;){const t=y.solution.moves[y.solution.index];if(await Ui(t,{duration:190,fromSolution:!0}),!y.solution||e!==y.playToken)break;y.solution.index+=1,Jt()}e===y.playToken&&(y.solutionPlaying=!1,Jt(),ur(y.facelets)&&no())}function gx(){if(!y.moveHistory.length){Qe("되돌릴 움직임이 없어요.");return}if(y.turning){Qe("회전이 끝난 뒤 다시 시도해 주세요.");return}y.playToken+=1,y.solutionPlaying=!1,y.solution=null;const i=y.moveHistory.pop();Ui(rx(i),{record:!1,duration:220}),Qn()}function vx(){const i=Ke("#view-mycube");i.innerHTML=`
    <div class="page-head">
      <div>
        <span class="eyebrow">MY CUBE</span>
        <h1>내 큐브 입력</h1>
        <p>실제 큐브의 여섯 면을 펼친 모양으로 입력하세요. 각 면의 중심 조각은 고정되어 있고, 색상은 9개씩 필요합니다.</p>
      </div>
      <div class="page-head-side">
        <span class="meta-chip">${De("grid",12)} 펼친 면 입력</span>
      </div>
    </div>

    <div class="mycube-layout">
      <div class="panel net-card">
        <div class="net-toolbar">
          <div class="net-hint">${De("info",15)} 면의 방향에 맞춰 스티커를 탭하세요. 같은 색을 다시 누르면 지워집니다.</div>
          <div class="tool-row">
            <button class="pill-btn" data-action="mycube-random">${De("shuffle",14)} 랜덤 예시</button>
            <button class="pill-btn" data-action="mycube-clear">${De("trash",14)} 전체 지우기</button>
          </div>
        </div>
        <div class="net-stage"><div id="myCubeNet"></div></div>
        <div id="myCubePalette"></div>
        <div id="myCubeCounts"></div>
        <div class="net-actions">
          <button class="btn btn-primary btn-sm" id="solveMyCubeButton" data-action="solve-mycube">${De("sparkles",15)} 내 큐브 풀기</button>
          <button class="btn btn-ghost btn-sm" data-action="mycube-help">${De("help",15)} 입력 가이드</button>
        </div>
      </div>

      <div class="side-stack">
        <div class="panel preview-card">
          <div class="panel-head">
            <h2 class="panel-title">${De("cube",16)} 3D 미리보기</h2>
            <span class="panel-sub" id="myCubeProgress">0 / 54</span>
          </div>
          <div class="preview-wrap"><div class="cube-canvas" id="myCubeCanvas"></div></div>
          <div class="mini-status" id="myCubeStatus"><span class="dot"></span><span>색을 입력하면 3D로 확인할 수 있어요.</span></div>
          <div id="myCubeResult"></div>
        </div>
        <div class="panel">
          <div class="panel-head">
            <h2 class="panel-title">${De("help",16)} 이렇게 입력하세요</h2>
          </div>
          <div class="net-hint" style="align-items:flex-start">
            ${De("info",15)}
            <span>큐브를 흰색 면이 위로 오게 잡고, 앞면이 초록색이 되도록 맞춘 뒤 각 면을 바라본 상태로 입력하세요. 펼친 전개도의 방향과 실제 면의 방향이 같아야 정확한 풀이가 나옵니다.</span>
          </div>
        </div>
      </div>
    </div>
  `,y.myCube3D=new fc(Ke("#myCubeCanvas"),{facelets:es(y.myCube.faces),float:!1,yaw:-.65,pitch:-.08}),y.myCube3D.setTiltEnabled(y.tiltEnabled),y.myCubeInitialized=!0,qr(),ir(),an(),In()}function qr(){const i=Ke("#myCubeNet");if(!i)return;const e=y.myCube.faces,t=(n,r)=>`
    <div class="net-face ${r}" data-label="${n}">
      ${e[n].map((s,a)=>{const o=a===4,c=s?sx(s):"";return`<button class="sticker-cell ${o?"center":""} ${s?"":"empty"}" style="${s?`background:${c}`:""}" data-action="paint-cell" data-face="${n}" data-index="${a}" aria-label="${nx[n]} ${a+1} ${s?Dn[s].name:"비어 있음"}"></button>`}).join("")}
    </div>
  `;i.innerHTML=`
    <div class="cube-net">
      ${t("U","net-u")}
      ${t("L","net-l")}
      ${t("F","net-f")}
      ${t("R","net-r")}
      ${t("B","net-b")}
      ${t("D","net-d")}
    </div>
  `,gc(),_x()}function gc(){const i=Ke("#myCubePalette");i&&(i.innerHTML=`
    <div class="palette-row">
      ${lr.map(e=>`
        <button class="swatch" data-action="select-color" data-color="${e}" aria-pressed="${y.myCube.selected===e}" aria-label="${Dn[e].name} 선택">
          <i style="--swatch:${Dn[e].hex}"></i>
          <span>${Dn[e].name}</span>
          <small>${e}</small>
        </button>
      `).join("")}
    </div>
  `)}function to(){const i=Object.fromEntries(lr.map(t=>[t,0]));let e=0;for(const t of Qr)for(const n of y.myCube.faces[t])n&&i[n]!==void 0&&(i[n]+=1,e+=1);return{counts:i,filled:e}}function _x(){const i=Ke("#myCubeCounts");if(!i)return;const{counts:e}=to();i.innerHTML=`
    <div class="count-row">
      ${lr.map(t=>`
        <div class="count ${e[t]===9?"complete":""}"><b>${e[t]}</b>${Dn[t].name}</div>
      `).join("")}
    </div>
  `}function ir(){if(!y.myCube3D)return;const i=es(y.myCube.faces);y.myCube3D.setState(i)}function In(){if(!y.myCubeInitialized)return;const{counts:i,filled:e}=to(),t=Ke("#myCubeProgress");t&&(t.textContent=`${e} / 54`);const n=Ke("#myCubeStatus"),r=e===54,s=lr.every(a=>i[a]===9);if(n){let a="색을 입력하면 3D로 확인할 수 있어요.",o="mini-status";y.myCube.status==="solving"?(a="솔버가 풀이를 계산하고 있어요…",o+=" ready"):y.myCube.status==="error"?(a=y.myCube.error||"큐브 상태를 확인해 주세요.",o+=" error"):r&&!s?(a="색상별 개수를 확인하세요. 각 색은 정확히 9개여야 해요.",o+=" error"):y.myCube.solution?(a="풀이를 찾았어요. 3D에서 한 수씩 확인해 보세요.",o+=" ready"):r&&s?(a="입력 완료! 이제 풀이를 찾을 수 있어요.",o+=" ready"):a=`${54-e}개의 스티커가 남았어요.`,n.className=o,n.innerHTML=`<span class="dot"></span><span>${tt(a)}</span>`}bx(),an()}function bx(){const i=Ke("#myCubeResult");if(!i)return;if(!y.myCube.solution){i.innerHTML="";return}const{moves:e}=y.myCube.solution;i.innerHTML=`
    <div class="mycube-result">
      <div class="result-head"><b>풀이를 찾았어요</b><span>${e.length}수</span></div>
      <div class="solution-tokens" style="max-height:130px">
        ${e.map(t=>`<span class="move-token">${tt(t)}</span>`).join("")}
      </div>
      <div class="solution-actions" style="grid-template-columns:1fr auto">
        <button class="btn btn-primary btn-sm" data-action="mycube-to-3d">${De("cube",15)} 3D로 확인</button>
        <button class="btn btn-ghost btn-sm" data-action="copy-mycube">${De("copy",15)} 복사</button>
      </div>
    </div>
  `}function Mx(i,e){if(e===4){Qe("중심 조각은 바꿀 수 없어요.");return}navigator.vibrate?.(5);const t=y.myCube.faces[i][e];y.myCube.faces[i][e]=t===y.myCube.selected?null:y.myCube.selected,y.myCube.solution=null,y.myCube.status="idle",y.myCube.error="",qr(),ir(),In()}function Sx(){const{counts:i,filled:e}=to();if(e<54)return{ok:!1,message:`아직 ${54-e}개의 스티커가 비어 있어요.`};const t=lr.find(n=>i[n]!==9);if(t)return{ok:!1,message:`${Dn[t].name} 스티커가 ${i[t]}개예요. 각 색은 9개여야 해요.`};for(const[n,r]of Object.entries(tx))if(y.myCube.faces[n][4]!==n)return{ok:!1,message:"중심 조각이 바뀌었어요. 페이지를 새로고침해 주세요."};return{ok:!0,facelets:es(y.myCube.faces)}}async function yx(){if(y.myCube.solving)return;if(y.solverStatus!=="ready"){Qe("솔버가 아직 준비되지 않았어요. 잠시만 기다려 주세요.","error");return}const i=Sx();if(!i.ok){y.myCube.status="error",y.myCube.error=i.message,In(),Qe(i.message,"error");return}y.myCube.solving=!0,y.myCube.status="solving",y.myCube.error="",In(),y.solverStatus="solving",an();try{const e=await Ka.solve(i.facelets),t=cr(e);y.myCube.solution={moves:t},y.myCube.status="ready",Qe(`${t.length}수의 풀이를 찾았어요.`)}catch(e){console.error(e),y.myCube.status="error",y.myCube.error="이 상태는 풀 수 없어요. 스티커 방향과 색을 다시 확인해 주세요.",Qe(y.myCube.error,"error")}finally{y.myCube.solving=!1,y.solverStatus="ready",an(),In()}}function Ex(){if(!y.myCube.solution)return;const i=es(y.myCube.faces);try{const e=Kn.fromString(i);y.generation+=1,y.playToken+=1,Qa(),y.turning=!1,y.cube=e,y.facelets=i,y.moveHistory=[],y.solution={moves:y.myCube.solution.moves,index:0,source:"mycube",title:"내 큐브 풀이"},y.solutionPlaying=!1,y.solveCube3D?.cancelAnimations?.(),y.solveCube3D?.setState(i),y.solveCube3D?.resetView(),Li("solve"),Qn(),Qe("내 큐브를 3D 솔버로 불러왔어요.")}catch(e){console.error(e),Qe("큐브 상태를 불러오지 못했어요.","error")}}function Tx(){const i=Ke("#view-learn");i.innerHTML=`
    <div class="page-head">
      <div>
        <span class="eyebrow">ALGORITHM LIBRARY</span>
        <h1>공식 사전</h1>
        <p>큐브별 핵심 공식을 난이도와 단계로 정리했습니다. 3×3 공식은 3D 큐브에서 바로 재생해 볼 수 있어요.</p>
      </div>
      <div class="page-head-side">
        <span class="meta-chip">${De("book",12)} <strong>${Ja.length}</strong>개 공식</span>
      </div>
    </div>
    <div class="learn-toolbar">
      <div class="filter-row">
        <button class="filter-chip ${y.learnFilter==="all"?"active":""}" data-action="learn-filter" data-filter="all">전체</button>
        ${Ca.map(e=>`<button class="filter-chip ${y.learnFilter===e.id?"active":""}" data-action="learn-filter" data-filter="${e.id}">${e.label}</button>`).join("")}
      </div>
      <label class="search-box">
        ${De("search",15)}
        <input id="learnSearch" type="search" placeholder="공식, 단계, 큐브 검색" value="${tt(y.learnQuery)}" autocomplete="off" />
      </label>
    </div>
    <div class="alg-grid" id="algGrid"></div>
  `,y.learnInitialized=!0,Ke("#learnSearch")?.addEventListener("input",e=>{y.learnQuery=e.target.value,Yr()}),Yr()}function Yr(){if(!y.learnInitialized)return;const i=Ke("#algGrid");if(!i)return;Ti(".filter-chip",Ke("#view-learn")).forEach(n=>{n.classList.toggle("active",n.dataset.filter===y.learnFilter)});const e=y.learnQuery.trim().toLowerCase(),t=Ja.filter(n=>{const r=Pa(n.cube),s=y.learnFilter==="all"||n.cube===y.learnFilter,a=`${n.title} ${n.subtitle} ${n.description} ${n.tag} ${n.level} ${r.label}`.toLowerCase();return s&&(!e||a.includes(e))});if(!t.length){i.innerHTML='<div class="empty-state"><b>검색 결과가 없어요</b><span>다른 큐브나 단계로 검색해 보세요.</span></div>';return}i.innerHTML=t.map(n=>{const r=Pa(n.cube);return`
      <article class="alg-card" style="--badge-bg:${r.soft};--badge-color:${r.text}">
        <div class="alg-top">
          <span class="alg-badge">${r.label}</span>
          <span class="alg-level">${tt(n.level)}</span>
        </div>
        <h3>${tt(n.title)}</h3>
        <p>${tt(n.description)}</p>
        <div class="alg-moves">
          ${cr(n.moves).map(s=>`<span class="alg-move">${tt(s)}</span>`).join("")}
        </div>
        <div class="alg-foot">
          <span class="alg-video">${De("video",13)} ${tt(n.tag)}</span>
          <button class="alg-open" data-action="open-alg" data-id="${n.id}">자세히 ${De("arrow",13)}</button>
        </div>
      </article>
    `}).join("")}function Ua(){const i=Ke("#view-videos"),e=hc(y.selectedVideo)||xi[0];e&&(i.innerHTML=`
    <div class="page-head">
      <div>
        <span class="eyebrow">YOUTUBE CLASS</span>
        <h1>강의</h1>
        <p>검증된 유튜브 튜토리얼을 앱 안에서 바로 재생하세요. 재생은 YouTube에 연결되며, 원본 채널에서 더 많은 강의를 볼 수 있습니다.</p>
      </div>
      <div class="page-head-side">
        <span class="meta-chip">${De("video",12)} <strong>${xi.length}</strong>개 강의</span>
      </div>
    </div>

    <div class="video-layout">
      <div class="panel player-card">
        <div class="player-frame">
          ${y.videoPlaying?`<iframe src="${dc(e.id,!0)}" title="${tt(e.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`:`<div class="player-placeholder">
                <img class="player-bg" src="${Hr(e.id,"maxresdefault")}" alt="" onerror="this.src='${Hr(e.id)}'" />
                <button class="play-large" data-action="play-video" aria-label="강의 재생">${De("play",22)}</button>
                <b>${tt(e.title)}</b>
                <span>${tt(e.author)} · YouTube에서 재생</span>
              </div>`}
        </div>
        <div class="player-info">
          <div>
            <h2>${tt(e.title)}</h2>
            <p>${tt(e.author)} · ${tt(e.category)} · ${tt(e.tag)}</p>
          </div>
          <a class="btn btn-ghost btn-sm" href="https://www.youtube.com/watch?v=${e.id}" target="_blank" rel="noopener noreferrer">${De("external",15)} YouTube에서 열기</a>
        </div>
        <div class="video-note">
          ${De("info",15)}
          <span>강의 영상은 각 원작자와 YouTube의 정책을 따릅니다. 앱은 영상의 재생만 연결하며, 광고나 자막은 YouTube 설정을 따릅니다.</span>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head">
          <h2 class="panel-title">${De("layers",16)} 플레이리스트</h2>
          <span class="panel-sub">${xi.length}개</span>
        </div>
        <div class="playlist">
          ${xi.map(t=>`
            <button class="playlist-item ${t.id===e.id?"active":""}" data-action="select-video" data-id="${t.id}">
              <span class="playlist-thumb">
                <img src="${Hr(t.id)}" alt="" loading="lazy" />
                <span>${De("play",14)}</span>
              </span>
              <span class="playlist-body">
                <b>${tt(t.title)}</b>
                <span>${tt(t.author)} · ${tt(t.tag)}</span>
              </span>
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `)}function vc(i,{labelledBy:e=""}={}){const t=Ke("#modalRoot");t.innerHTML=`<div class="modal-backdrop" data-modal-backdrop><div class="modal" role="dialog" aria-modal="true" ${e?`aria-labelledby="${e}"`:""}>${i}</div></div>`,document.body.classList.add("modal-open"),Ke(".modal-close",t)?.focus({preventScroll:!0})}function ts(){Ke("#modalRoot").innerHTML="",document.body.classList.remove("modal-open")}function Ax(i){const e=uc(i);if(!e)return;const t=Pa(e.cube),n=e.cube==="3x3";vc(`
    <div class="modal-head">
      <div>
        <span class="alg-badge" style="--badge-bg:${t.soft};--badge-color:${t.text};margin-bottom:9px">${t.label} · ${tt(e.tag)}</span>
        <h2 id="algModalTitle">${tt(e.title)}</h2>
        <p>${tt(e.subtitle)} · ${tt(e.level)}</p>
      </div>
      <button class="modal-close" data-action="close-modal" aria-label="닫기">${De("close",16)}</button>
    </div>
    <div class="modal-body">
      <div class="modal-video">
        <iframe src="${dc(e.videoId)}" title="${tt(e.title)} 강의" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="alg-detail-moves">
        ${cr(e.moves).map(r=>`<span class="alg-move">${tt(r)}</span>`).join("")}
      </div>
      <p class="detail-copy">${tt(e.description)}</p>
      <ol class="detail-steps">
        ${e.steps.map(r=>`<li>${tt(r)}</li>`).join("")}
      </ol>
      <div class="detail-actions">
        ${n?`<button class="btn btn-primary btn-sm" data-action="demo-alg" data-id="${e.id}">${De("cube",15)} 3D에서 재생</button>`:`<span class="btn btn-ghost btn-sm" style="cursor:default;opacity:.55">${De("lock",15)} 3D 재생은 3×3만</span>`}
        <a class="btn btn-ghost btn-sm" href="https://www.youtube.com/watch?v=${e.videoId}" target="_blank" rel="noopener noreferrer">${De("external",15)} YouTube</a>
      </div>
    </div>
  `,{labelledBy:"algModalTitle"})}function wx(){vc(`
    <div class="modal-head">
      <div>
        <h2 id="guideModalTitle">내 큐브 입력 가이드</h2>
        <p>정확한 풀이를 위한 3가지 규칙</p>
      </div>
      <button class="modal-close" data-action="close-modal" aria-label="닫기">${De("close",16)}</button>
    </div>
    <div class="modal-body">
      <p class="detail-copy" style="margin-top:0">큐브의 중심 조각은 절대 움직이지 않습니다. 흰색 중심을 위로, 초록색 중심을 앞으로 두고 큐브를 잡으면 면의 방향이 자연스럽게 정해집니다.</p>
      <ol class="detail-steps">
        <li>흰색 면이 위(U), 초록색 면이 앞(F)이 되도록 큐브를 잡습니다.</li>
        <li>전개도의 위·아래·왼쪽·오른쪽·앞·뒤 방향을 실제 면과 똑같이 맞춥니다.</li>
        <li>각 색상은 정확히 9개씩 입력되어야 합니다. 중심 조각은 자동으로 고정됩니다.</li>
        <li>입력이 끝나면 ‘내 큐브 풀기’를 누르고, 결과를 3D에서 한 수씩 확인하세요.</li>
      </ol>
      <div class="detail-actions">
        <button class="btn btn-primary btn-sm" data-action="close-modal">확인</button>
      </div>
    </div>
  `,{labelledBy:"guideModalTitle"})}let bl=null;function Qe(i,e=""){const t=Ke("#toastWrap");t&&(t.innerHTML=`<div class="toast ${e}">${tt(i)}</div>`,clearTimeout(bl),bl=setTimeout(()=>{const n=Ke(".toast",t);n&&n.classList.add("leaving"),setTimeout(()=>{t.contains(n)&&(t.innerHTML="")},260)},2800))}function no(){const i=["#c9ff45","#6fe7ff","#ff6b73","#ffd84d","#43dc9a","#6c95ff"];for(let e=0;e<28;e+=1){const t=document.createElement("span");t.className="confetti";const n=Math.PI*2*e/28+Math.random()*.35,r=90+Math.random()*170;t.style.background=i[e%i.length],t.style.setProperty("--dx",`${Math.cos(n)*r}px`),t.style.setProperty("--dy",`${Math.sin(n)*r+80}px`),t.style.setProperty("--rot",`${Math.random()*540-270}deg`),t.style.left=`${48+Math.random()*4}%`,t.style.top=`${40+Math.random()*8}%`,document.body.appendChild(t),setTimeout(()=>t.remove(),1200)}Qe("큐브 완성! 수고했어요.")}function Ml(){Ti('[data-action="toggle-tilt"]').forEach(e=>{e.setAttribute("aria-pressed",String(y.tiltEnabled)),e.title=y.tiltEnabled?"기울기 시점 끄기":"기울여서 보기"});const i=Ke("#tiltButton");i&&(i.setAttribute("aria-pressed",String(y.tiltEnabled)),i.title=y.tiltEnabled?"기울기 시점 끄기":"기울여서 보기")}async function Rx(){if(!y.tiltAvailable){Qe("이 기기에서는 기울기 센서를 사용할 수 없어요.","error");return}if(y.tiltEnabled){y.tiltEnabled=!1,y.tiltHandler&&(window.removeEventListener("deviceorientation",y.tiltHandler),y.tiltHandler=null),y.solveCube3D?.setTiltEnabled(!1),y.myCube3D?.setTiltEnabled(!1),Ml(),Qe("기울기 시점을 껐어요.");return}try{if(typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function"&&await DeviceOrientationEvent.requestPermission()!=="granted"){Qe("동작 센서 권한이 필요해요. 설정에서 허용해 주세요.","error");return}y.tiltEnabled=!0,y.tiltHandler=i=>{y.solveCube3D?.applyOrientation(i.gamma||0,i.beta||0),y.myCube3D?.applyOrientation(i.gamma||0,i.beta||0)},window.addEventListener("deviceorientation",y.tiltHandler,{passive:!0}),y.solveCube3D?.setTiltEnabled(!0),y.myCube3D?.setTiltEnabled(!0),Ml(),Qe("기기를 기울여 큐브 시점을 움직여 보세요.")}catch(i){console.error(i),Qe("동작 센서 권한을 요청하지 못했어요.","error")}}async function Cx(i,e){switch(i){case"toggle-tilt":await Rx();break;case"reset-view":y.solveCube3D?.resetView(),y.myCube3D?.resetView(),Qe("시점을 초기화했어요.");break;case"toggle-fullscreen":{const t=Ke(".stage-card");if(!t)break;if(document.fullscreenElement)await document.exitFullscreen?.();else try{await t.requestFullscreen?.(),Qe("전체 화면에서는 ESC로 나올 수 있어요.")}catch{Qe("이 브라우저에서는 전체 화면을 지원하지 않아요.","error")}break}case"scramble":await fx();break;case"undo":gx();break;case"reset-cube":eo();break;case"toggle-prime":y.prime=!y.prime,ja();break;case"turn":mc(e.dataset.face);break;case"solve-current":await px();break;case"play-solution":await xc();break;case"step-solution":await mx();break;case"apply-solution-token":await xx(Number(e.dataset.index));break;case"copy-solution":Px();break;case"select-color":y.myCube.selected=e.dataset.color,gc();break;case"paint-cell":Mx(e.dataset.face,Number(e.dataset.index));break;case"mycube-random":{const t=Kn.random();y.myCube.faces=ix(t.asString()),y.myCube.solution=null,y.myCube.status="idle",y.myCube.error="",qr(),ir(),In(),Qe("랜덤 큐브 예시를 불러왔어요.");break}case"mycube-clear":y.myCube.faces=pc(),y.myCube.solution=null,y.myCube.status="idle",y.myCube.error="",qr(),ir(),In(),Qe("입력을 모두 지웠어요.");break;case"mycube-help":wx();break;case"solve-mycube":await yx();break;case"copy-mycube":Lx();break;case"mycube-to-3d":Ex();break;case"learn-filter":y.learnFilter=e.dataset.filter,Yr();break;case"open-alg":Ax(e.dataset.id);break;case"demo-alg":await Ux(e.dataset.id);break;case"play-video":y.videoPlaying=!0,Ua();break;case"select-video":y.selectedVideo=e.dataset.id,y.videoPlaying=!0,Ua();break;case"open-video":y.selectedVideo=e.dataset.id,y.videoPlaying=!1,Li("videos");break;case"close-modal":ts();break}}function _c(i,e){i&&navigator.clipboard?.writeText(i).then(()=>Qe(e),()=>Qe("복사에 실패했어요. 직접 선택해 주세요.","error"))}function Px(){if(!y.solution){Qe("복사할 풀이가 없어요.");return}_c(y.solution.moves.join(" "),"풀이 순서를 복사했어요.")}function Lx(){y.myCube.solution&&_c(y.myCube.solution.moves.join(" "),"내 큐브 풀이를 복사했어요.")}async function Ux(i){const e=uc(i);if(e){if(e.cube!=="3x3"){Qe("3D 재생은 3×3 공식에서만 지원해요.");return}ts(),Li("solve"),eo({silent:!0}),await ax(280),y.solution={moves:cr(e.moves),index:0,source:"algorithm",title:e.title},y.solutionPlaying=!1,Jt(),Qe(`${e.title} 공식을 재생합니다.`),await xc()}}document.addEventListener("click",i=>{if(i.target instanceof Element&&i.target.hasAttribute("data-modal-backdrop")){ts();return}const e=i.target.closest("[data-nav]");if(e){i.preventDefault(),Li(e.dataset.nav);return}const t=i.target.closest("[data-action]");t&&(i.preventDefault(),Cx(t.dataset.action,t))});document.addEventListener("keydown",i=>{if(i.key==="Escape"){Ke("#modalRoot")?.children.length&&ts();return}if(y.view!=="solve"||Ke("#modalRoot")?.children.length||i.target instanceof HTMLInputElement||i.target instanceof HTMLTextAreaElement)return;const e=i.key.toUpperCase();["U","R","F","D","L","B"].includes(e)&&!i.metaKey&&!i.ctrlKey&&!i.altKey&&(i.preventDefault(),y.prime=i.shiftKey,ja(),mc(e))});document.addEventListener("visibilitychange",()=>{document.hidden&&(y.playToken+=1,y.solutionPlaying=!1)});cx();an();const Dx=location.hash.replace("#","")||"home";Li(Dx,{push:!1,scroll:!1});
