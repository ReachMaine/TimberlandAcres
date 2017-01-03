//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#888---------------
//F:\Internet\Websites\TimberlandAcres\Work\menu.awm
var awmMenuName='menu';
var awmLibraryBuild=888;
var awmLibraryPath='/awmdata';
var awmImagesPath='/awmdata';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?2:(nua.indexOf('Gecko')>-1)?2:((nua.indexOf('Opera')>-1)?4:1));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var mpin=mpi;
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='tree-tl.jpg';
var awmPosID='';
var awmPosClass='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='UZFTDSENTNSUHIAWHKCYJX';
var awmNoMenuPrint=1;
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["logo.png",220,151,"twitter.png",30,21,"facebook-logo.png",30,28];
awmCreateCSS(1,2,1,'#FFFFFF',n,n,'14px sans-serif',n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(0,2,1,'#FFFFFF',n,n,'14px sans-serif',n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(0,1,0,n,'#868777',n,n,n,'solid','3','#464330','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,1,'#FFFFFF','#C30B09',n,'bold 14px Verdana',n,'solid','3','#FFFFFF','5px 5px 5px 5',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#FFFFFF','#C30B09',n,'bold 14px sans-serif','underline','solid','3','#FFFFFF','5px 5px 5px 5',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#FFFFFF','#C30B09',n,'bold 14px sans-serif',n,'solid','3','#FFFFFF','5px 5px 5px 5',1,'0px / 0px',n);
var s0=awmCreateMenu(0,0,0,2,1,0,0,0,0,750,100,0,0,2,6,1,0,n,n,100,2,0,-130,50,0,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1,0,0,1);
it=s0.addItemWithImages(0,1,1,"","","","",0,0,0,3,3,3,n,n,n,"",n,n,n,n,n,0,0,0,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,n,n);
it=s0.addItem(3,4,5," &nbsp;Happenings &nbsp;",n,n,"","activities.htm",n,n,n,"activities.htm",n,0,0,2,0,0,1,n);
it=s0.addItem(3,4,5," &nbsp;About Our Campground &nbsp;",n,n,"","about.htm",n,n,n,"about.htm",n,0,0,2,0,0,2,n);
it=s0.addItem(3,4,5," &nbsp;Memory Book &nbsp;",n,n,"","photos.htm",n,n,n,"photos.htm",n,0,0,2,0,0,3,n);
it=s0.addItem(3,4,5," &nbsp;How to Get Here &nbsp;",n,n,"","directions.htm",n,n,n,"directions.htm",n,0,0,2,0,0,4,n);
it=s0.addItem(3,4,5," &nbsp;Rates &amp; Specials &nbsp;",n,n,"","rates.htm",n,n,n,"rates.htm",n,0,0,2,0,0,5,n);
it=s0.addItem(3,4,5," &nbsp;The Fine Print &nbsp;",n,n,"","policies.htm",n,n,n,"policies.htm",n,0,0,2,0,0,6,n);
it=s0.addItem(3,4,5," &nbsp;Contact Us &nbsp;",n,n,"","contact.htm",n,n,n,"contact.htm",n,0,0,2,0,0,7,n);
it=s0.addItem(3,4,5,"<a target=\"_blank\" href=\"https://twitter.com/#!/timberlandacres\"><img border=\"0\" src=\"awmdata/twitter.png\" width=\"30\" height=\"21\"></a>",n,n,"","",n,n,n,"https://twitter.com/#!/timberlandacres","new",0,0,2,0,1,10,n);
it=s0.addItemWithImages(3,4,5,"","","","",2,2,2,3,3,3,n,n,n,"",n,n,n,"https://www.facebook.com/pages/Timberland-Acres-RV-Park/212927082146379","new",0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,12,n);
it=s0.addItem(3,4,5," &nbsp;Home &nbsp;",n,n,"","index.htm",n,n,n,"index.htm",n,0,0,2,0,0,8,n);
s0.pm.buildMenu();
}}