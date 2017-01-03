//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#934---------------
//F:\Internet\_Websites\TimberlandAcres\site\tarv.awm
var awmMenuName='tarv-menu';
var awmLibraryBuild=934;
var awmLibraryPath='/awmdata';
var awmImagesPath='/awmdata/tarv-menu';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?2:(nua.indexOf('Gecko')>-1)?2:((nua.indexOf('Opera')>-1)?2:1));
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
document.write("<SCRIPT SRC='"+(awmMenuPath+awmLibraryPath).replace(/\/$/,"")+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='tree-tl.jpg';
var awmPosID='';
var awmPosClass='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='SILVZUJHHGNSQCFMIWZGCZ';
var awmNoMenuPrint=1;
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["cross.png",9,9,"new_logo.png",225,158,"acadia_centennial_logo.png",150,150];
awmCreateCSS(0,1,0,n,n,n,n,n,'solid','2','#000000','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,1,'#FFFFFF','#C30B09',n,'bold 15px Verdana, Arial, Helvetica, sans-serif',n,'solid','2','#FFFFFF','6px 5px 6px 5',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#FFFFFF','#C30B09',n,'bold 15px Verdana, Arial, Helvetica, sans-serif','underline','solid','2','#FFFFFF','6px 5px 6px 5',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#FFFFFF','#C30B09',n,'bold 15px Verdana, Arial, Helvetica, sans-serif',n,'solid','2','#FFFFFF','6px 5px 6px 5',1,'0px / 0px',n);
awmCF(1,0,0,-32,-180);
awmCF(2,7,7,-20,160);
awmCF(2,7,7,0,100);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,0,10,10,0,0,0,5,1,0,n,n,100,2,0,-100,230,0,0,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1,0,0,2,n,n,'',n,0,[],0,"");
it=s0.addItemWithImages(1,2,3,"Happenings &nbsp;",n,n,"",n,n,n,3,3,3,n,n,n,"activities.htm",n,n,n,"activities.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,0,0,0,0,0,0,0,n);
it=s0.addItemWithImages(1,2,3,"Our Campground &nbsp;",n,n,"",n,n,n,3,3,3,n,n,n,"about.htm",n,n,n,"about.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,1,n);
it=s0.addItemWithImages(1,2,3,"Memory Book &nbsp;",n,n,"",n,n,n,3,3,3,n,n,n,"photos.htm",n,n,n,"photos.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,2,n);
it=s0.addItemWithImages(1,2,3,"How to Get Here &nbsp;",n,n,"",n,n,n,3,3,3,n,n,n,"directions.htm",n,n,n,"directions.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,8,n);
it=s0.addItemWithImages(1,2,3,"Rates &amp; Specials &nbsp;",n,n,"",n,n,n,3,3,3,n,n,n,"rates.htm",n,n,n,"rates.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,9,n);
it=s0.addItemWithImages(1,2,3,"The Fine Print &nbsp;",n,n,"",n,n,n,3,3,3,n,n,n,"policies.htm",n,n,n,"policies.htm",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,1,1,2,0,0,0,10,n);
s0.pm.buildMenu();
}}